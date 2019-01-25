"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var bc = require("batch-cluster");
var _child_process = require("child_process");
var _fs = require("fs");
var _os = require("os");
var _path = require("path");
var _process = require("process");
var AsyncRetry_1 = require("./AsyncRetry");
var BinaryExtractionTask_1 = require("./BinaryExtractionTask");
var ReadTask_1 = require("./ReadTask");
var RewriteAllTagsTask_1 = require("./RewriteAllTagsTask");
var VersionTask_1 = require("./VersionTask");
var WriteTask_1 = require("./WriteTask");
var ExifDate_1 = require("./ExifDate");
exports.ExifDate = ExifDate_1.ExifDate;
var ExifTime_1 = require("./ExifTime");
exports.ExifTime = ExifTime_1.ExifTime;
var ExifDateTime_1 = require("./ExifDateTime");
exports.ExifDateTime = ExifDateTime_1.ExifDateTime;
var Timezones_1 = require("./Timezones");
exports.offsetMinutesToZoneName = Timezones_1.offsetMinutesToZoneName;
function findExiftool() {
    var isWin32 = _process.platform === "win32";
    var path = require("exiftool-vendored." + (isWin32 ? "exe" : "pl"));
    // This s/app.asar/app.asar.unpacked/ path switch adds support for Electron
    // apps that are ASAR-packed.
    // Note that we can't check for electron because child processes that are
    // spawned by the main process will most likely need the ELECTRON_RUN_AS_NODE
    // environment variable set, which will unset the process.versions.electron
    // field.
    var fixedPath = path
        .split(_path.sep)
        .map(function (ea) { return (ea === "app.asar" ? "app.asar.unpacked" : ea); })
        .join(_path.sep);
    // Note also, that we must check for the fixedPath first, because Electron's
    // ASAR shenanigans will make existsSync return true even for asar-packed
    // resources.
    if (_fs.existsSync(fixedPath)) {
        return fixedPath;
    }
    if (_fs.existsSync(path)) {
        return path;
    }
    throw new Error("Vendored ExifTool does not exist at " + path);
}
exports.DefaultExifToolPath = findExiftool();
exports.DefaultExiftoolArgs = ["-stay_open", "True", "-@", "-"];
exports.DefaultMaxProcs = Math.max(1, Math.floor(_os.cpus().length / 4));
/**
 * Default values for `ExifToolOptions`, except for `processFactory` (which is
 * created by the ExifTool constructor)
 */
exports.DefaultExifToolOptions = Object.freeze(__assign({}, new bc.BatchClusterOptions(), { maxProcs: exports.DefaultMaxProcs, maxTasksPerProcess: 500, spawnTimeoutMillis: 30000, taskTimeoutMillis: 20000, onIdleIntervalMillis: 2000, taskRetries: 1, exiftoolPath: exports.DefaultExifToolPath, exiftoolArgs: exports.DefaultExiftoolArgs, pass: "{ready.*}", fail: "{ready.*}", exitCommand: "-stay_open\nFalse\n", versionCommand: new VersionTask_1.VersionTask().command, numericTags: ["*Duration*", "GPS*", "Orientation"] }));
/**
 * Manages delegating calls to a vendored running instance of ExifTool.
 *
 * Instances should be shared: consider using the exported singleton
 * instance of this class, `exiftool`.
 */
var ExifTool = /** @class */ (function () {
    function ExifTool(options) {
        if (options === void 0) { options = {}; }
        var _this = this;
        /**
         * Register lifecycle event listeners. Delegates to BatchProcess.
         */
        // SITS: crazy TS to pull in BatchCluster's .on signature:
        this.on = function (event, listener) {
            return _this.batchCluster.on(event, listener);
        };
        if (options != null && typeof options !== "object") {
            throw new Error("Please update caller to the new ExifTool constructor API");
        }
        var o = __assign({}, exports.DefaultExifToolOptions, options);
        this.options = __assign({}, o, { processFactory: function () {
                return _child_process.spawn(o.exiftoolPath, o.exiftoolArgs, {
                    stdio: "pipe",
                    shell: false,
                    detached: false,
                    env: { LANG: "C" }
                });
            }, exitCommand: o.exitCommand, versionCommand: o.versionCommand }, options);
        this.batchCluster = new bc.BatchCluster(this.options);
    }
    /**
     * @return a promise holding the version number of the vendored ExifTool
     */
    ExifTool.prototype.version = function () {
        return this.enqueueTask(function () { return new VersionTask_1.VersionTask(); });
    };
    /**
     * Read the tags in `file`.
     *
     * @param {string} file the file to extract metadata tags from
     * @param {string[]} [args] any additional ExifTool arguments, like "-fast" or
     * "-fast2". Note that the default is "-fast", so if you want ExifTool to read
     * the entire file for metadata, you should pass an empty array as the second
     * parameter. See https://sno.phy.queensu.ca/~phil/exiftool/#performance for
     * more information about `-fast` and `-fast2`.
     * @returns {Promise<Tags>} A resolved Tags promise. If there are errors
     * during reading, the `.errors` field will be present.
     * @memberof ExifTool
     */
    ExifTool.prototype.read = function (file, args) {
        var _this = this;
        if (args === void 0) { args = ["-fast"]; }
        return this.enqueueTask(function () {
            return ReadTask_1.ReadTask.for(file, _this.options.numericTags, args);
        });
    };
    /**
     * Write the given `tags` to `file`.
     *
     * @param {string} file an existing file to write `tags` to.
     * @param {Tags} tags the tags to write to `file`.
     * @param {string[]} [args] any additional ExifTool arguments, like "-n".
     * Most consumers won't probably need this.
     * @returns {Promise<void>} Either the promise will be resolved if the
     * tags are written to successfully, or the promise will be rejected if
     * there are errors or warnings.
     * @memberof ExifTool
     */
    ExifTool.prototype.write = function (file, tags, args) {
        return this.enqueueTask(function () { return WriteTask_1.WriteTask.for(file, tags, args); });
    };
    /**
     * Extract the low-resolution thumbnail in `path/to/image.jpg`
     * and write it to `path/to/thumbnail.jpg`.
     *
     * Note that these images can be less than .1 megapixels in size.
     *
     * @return a `Promise<void>`. An `Error` is raised if
     * the file could not be read or the output not written.
     */
    ExifTool.prototype.extractThumbnail = function (imageFile, thumbnailFile) {
        return this.extractBinaryTag("ThumbnailImage", imageFile, thumbnailFile);
    };
    /**
     * Extract the "preview" image in `path/to/image.jpg`
     * and write it to `path/to/preview.jpg`.
     *
     * The size of these images varies widely, and is present in dSLR images.
     * Canon, Fuji, Olympus, and Sony use this tag.
     *
     * @return a `Promise<void>`. An `Error` is raised if
     * the file could not be read or the output not written.
     */
    ExifTool.prototype.extractPreview = function (imageFile, previewFile) {
        return this.extractBinaryTag("PreviewImage", imageFile, previewFile);
    };
    /**
     * Extract the "JpgFromRaw" image in `path/to/image.jpg`
     * and write it to `path/to/fromRaw.jpg`.
     *
     * This size of these images varies widely, and is not present in all RAW images.
     * Nikon and Panasonic use this tag.
     *
     * @return a `Promise<void>`. An `Error` is raised if
     * the file could not be read or the output not written.
     */
    ExifTool.prototype.extractJpgFromRaw = function (imageFile, outputFile) {
        return this.extractBinaryTag("JpgFromRaw", imageFile, outputFile);
    };
    /**
     * Extract a given binary value from "tagname" tag associated to `path/to/image.jpg`
     * and write it to `dest` (which cannot exist and whose directory must already exist).
     *
     * @return a `Promise<void>`. An `Error` is raised if
     * the binary output not be written to `dest`.
     */
    ExifTool.prototype.extractBinaryTag = function (tagname, src, dest) {
        return this.enqueueTask(function () { return BinaryExtractionTask_1.BinaryExtractionTask.for(tagname, src, dest); });
    };
    /**
     * Attempt to fix metadata problems in JPEG images by deleting all metadata
     * and rebuilding from scratch. After repairing an image you should be able to
     * write to it without errors, but some metadata from the original image may
     * be lost in the process.
     *
     * This should only be applied as a last resort to images whose metadata is
     * not readable via {@link .read()}.
     *
     * @see http://owl.phy.queensu.ca/~phil/exiftool/faq.html#Q20
     *
     * @param {string} inputFile the path to the problematic image
     * @param {string} outputFile the path to write the repaired image
     * @param {boolean} allowMakerNoteRepair if there are problems with MakerNote
     * tags, allow ExifTool to apply heuristics to recover corrupt tags. See
     * exiftool's `-F` flag.
     * @return {Promise<void>} resolved when outputFile has been written.
     */
    ExifTool.prototype.rewriteAllTags = function (inputFile, outputFile, allowMakerNoteRepair) {
        if (allowMakerNoteRepair === void 0) { allowMakerNoteRepair = false; }
        return this.enqueueTask(function () {
            return RewriteAllTagsTask_1.RewriteAllTagsTask.for(inputFile, outputFile, allowMakerNoteRepair);
        });
    };
    /**
     * Shut down running ExifTool child processes. No subsequent requests will be
     * accepted.
     *
     * This may need to be called in `after` or `finally` clauses in tests or
     * scripts for them to exit cleanly.
     */
    ExifTool.prototype.end = function (gracefully) {
        if (gracefully === void 0) { gracefully = true; }
        return this.batchCluster.end(gracefully);
    };
    Object.defineProperty(ExifTool.prototype, "ended", {
        /**
         * @return true if `.end()` has been invoked
         */
        get: function () {
            return this.batchCluster.ended;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * `enqueueTask` is not for normal consumption. External code
     * can extend `Task` to add functionality.
     */
    ExifTool.prototype.enqueueTask = function (task) {
        var _this = this;
        return AsyncRetry_1.retryOnReject(function () { return _this.batchCluster.enqueueTask(task()); }, this.options.taskRetries);
    };
    Object.defineProperty(ExifTool.prototype, "pids", {
        /**
         * @return the currently running ExifTool processes. Note that on Windows,
         * these are only the process IDs of the directly-spawned ExifTool wrapper,
         * and not the actual perl vm. This should only really be relevant for
         * integration tests that verify processes are cleaned up properly.
         */
        get: function () {
            return this.batchCluster.pids();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ExifTool.prototype, "pendingTasks", {
        /**
         * @return the number of pending (not currently worked on) tasks
         */
        get: function () {
            return this.batchCluster.pendingTasks;
        },
        enumerable: true,
        configurable: true
    });
    return ExifTool;
}());
exports.ExifTool = ExifTool;
/**
 * Use this singleton rather than instantiating new ExifTool instances in order
 * to leverage a single running ExifTool process. As of v3.0, its `maxProcs` is
 * set to the number of CPUs on the current system; no more than `maxProcs`
 * instances of `exiftool` will be spawned. You may want to experiment with
 * smaller or larger values for `maxProcs`, depending on CPU and disk speed of
 * your system and performance tradeoffs.
 *
 * Note that each child process consumes between 10 and 50 MB of RAM. If you
 * have limited system resources you may want to use a smaller `maxProcs` value.
 */
exports.exiftool = new ExifTool();
//# sourceMappingURL=ExifTool.js.map