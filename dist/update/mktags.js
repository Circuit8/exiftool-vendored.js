"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var batch_cluster_1 = require("batch-cluster");
var _fs = require("fs");
var globule = require("globule");
var _path = require("path");
var _process = require("process");
var ProgressBar = require("progress");
require("source-map-support/register");
var Array_1 = require("../Array");
var ExifTool_1 = require("../ExifTool");
var Maybe_1 = require("../Maybe");
var String_1 = require("../String");
// ☠☠ THIS IS GRISLY, NASTY CODE. SCROLL DOWN AT YOUR OWN PERIL ☠☠
var exiftool = new ExifTool_1.ExifTool({ maxProcs: 4, taskRetries: 3 });
function ellipsize(str, max) {
    str = "" + str;
    return str.length < max ? str : str.substring(0, max - 1) + "…";
}
// NO SRSLY STOP SCROLLING IT REALLY IS BAD
batch_cluster_1.setLogger(batch_cluster_1.Logger.withLevels(batch_cluster_1.Logger.withTimestamps(batch_cluster_1.Logger.filterLevels({
    trace: console.log,
    debug: console.log,
    info: console.log,
    warn: console.warn,
    error: console.error
}, _process.env.LOG || "info"))));
_process.on("uncaughtException", function (error) {
    console.error("Ack, caught uncaughtException: " + error.stack);
});
_process.on("unhandledRejection", function (reason, _promise) {
    console.error("Ack, caught unhandledRejection: " + reason.stack || reason.toString);
});
function usage() {
    console.log("Usage: `yarn run mktags IMG_DIR`");
    console.log("\nRebuilds src/Tags.ts from tags found in IMG_DIR.");
    _process.exit(1);
}
var roots = _process.argv.slice(2);
var patternSuffix = "/**/*.+(avi|jpg|mov|mp4|cr2|nef|orf|raf|arw|rw2)";
var files = roots
    .map(function (root) {
    var pattern = _path.resolve(root) + patternSuffix;
    batch_cluster_1.logger().info("Scanning " + pattern + "...");
    return globule.find(pattern, { nocase: true, nodir: true });
})
    .reduce(function (prev, curr) { return prev.concat(curr); });
if (files.length === 0) {
    console.error("No files found in " + roots);
    usage();
}
batch_cluster_1.logger().info("Found " + files.length + " files...");
function valueType(value) {
    if (value == null)
        return;
    if (Array.isArray(value)) {
        var types = Array_1.uniq(Array_1.compact(value.map(function (ea) { return valueType(ea); })));
        return (types.length == 1 ? types[0] : "any") + "[]";
    }
    if (typeof value === "object") {
        return value.constructor.name;
    }
    else {
        return typeof value;
    }
}
// except CountingMap. Isn't it cute? Not ashamed of you, little guy!
var CountingMap = /** @class */ (function () {
    function CountingMap() {
        this.size = 0;
        this.m = new Map();
    }
    CountingMap.prototype.add = function (t) {
        this.size++;
        this.m.set(t, 1 + (this.m.get(t) || 0));
    };
    CountingMap.prototype.byCountDesc = function () {
        var _this = this;
        return Array.from(this.m.keys()).sort(function (a, b) {
            return cmp(_this.m.get(b), _this.m.get(a));
        });
    };
    /**
     * @param p [0,1]
     * @return the values found in the top p of values
     */
    CountingMap.prototype.byP = function (p) {
        var _this = this;
        var min = p * this.size;
        return this.byCountDesc().filter(function (ea) { return _this.m.get(ea) || 0 > min; });
    };
    return CountingMap;
}());
function nullish(o) {
    var s = String_1.toS(o);
    return (o == null || String_1.blank(s) || s == "null" || s == "undefined" || s == "undef");
}
var Tag = /** @class */ (function () {
    function Tag(tag) {
        this.tag = tag;
        this.values = [];
    }
    Object.defineProperty(Tag.prototype, "group", {
        get: function () {
            return this.tag.split(":")[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Tag.prototype, "withoutGroup", {
        get: function () {
            return this.tag.split(":")[1];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Tag.prototype, "valueTypes", {
        get: function () {
            var cm = new CountingMap();
            Array_1.compact(this.values)
                .map(function (i) { return valueType(i); })
                .forEach(function (i) { return i != null && i != "undefined" && cm.add(i); });
            return cm.byP(0.5);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Tag.prototype, "valueType", {
        get: function () {
            return this.valueTypes.join(" | ");
        },
        enumerable: true,
        configurable: true
    });
    Tag.prototype.vacuumValues = function () {
        return Array_1.filterInPlace(this.values, function (ea) { return !nullish(ea); });
    };
    Tag.prototype.keep = function (minValues) {
        this.vacuumValues();
        // If it's a tag from an "important" camera, always include the tag.
        // Otherwise, if we never get a valid value for the tag, skip it.
        return (!String_1.blank(this.valueType) &&
            (this.important || this.values.length >= minValues));
    };
    Tag.prototype.popIcon = function (totalValues) {
        var f = this.values.length / totalValues;
        // kid: dad srsly stop with the emojicode no one likes it
        // dad: ur not the boss of me
        // As of 20180814, 4300 unique tags, 2713 of which were found in at least 2
        // cameras, and only 700 were found in at least 1% of cameras, so this looks
        // like a power law, long-tail distribution, so lets make the cutoffs more
        // exponentialish rather than linearish.
        // 22 at 99%, 64 at 50%, 87 at 25%, 120 at 10%, 230 at 5%, so if we make the
        // four star cutoff too high, nothing will have four stars.
        // Read 4311 unique tags from 6526 files.
        // missing files:
        // Parsing took 20075ms (3.1ms / file)
        // Distribution of tags:
        //  0%: 2714:#################################
        //  1%:  700:########
        //  2%:  389:####
        //  3%:  323:###
        //  4%:  265:###
        //  5%:  236:##
        //  6%:  207:##
        //  7%:  188:##
        //  8%:  173:##
        //  9%:  142:#
        // 10%:  130:#
        // 11%:  125:#
        // 12%:  118:#
        // 13%:  108:#
        // 14%:  103:#
        // 15%:  102:#
        // 16%:  101:#
        // 17%:   96:#
        // 18%:   93:#
        // 19%:   92:#
        // 20%:   91:#
        // 21%:   90:#
        // 22%:   89:#
        // 23%:   88:#
        // 24%:   86:#
        // 25%:   85:#
        // 26%:   81:
        // 27%:   80:
        // 28%:   80:
        // 29%:   79:
        // 30%:   77:
        // 31%:   76:
        // 32%:   75:
        // 33%:   75:
        // 34%:   74:
        // 35%:   74:
        // 36%:   72:
        // 37%:   71:
        // 38%:   70:
        // 39%:   70:
        // 40%:   70:
        // 41%:   70:
        var stars = f > 0.75
            ? "★★★★"
            : f > 0.325
                ? "★★★☆"
                : f > 0.1625
                    ? "★★☆☆"
                    : f > 0.08125
                        ? "★☆☆☆"
                        : "☆☆☆☆";
        var important = this.important ? "✔" : " ";
        return stars + " " + important;
    };
    Tag.prototype.example = function () {
        // There are a bunch of tag values that have people's actual names or
        // contact information. Replace those values with stub values:
        if (this.tag.endsWith("GPSLatitude"))
            return exampleToS([48.8577484]);
        if (this.tag.endsWith("GPSLongitude"))
            return exampleToS([2.2918888]);
        if (this.tag.endsWith("Comment"))
            return exampleToS(["This is a comment."]);
        if (this.tag.endsWith("Directory"))
            return exampleToS(["/home/username/pictures"]);
        if (this.tag.endsWith("Copyright"))
            return exampleToS(["© Chuckles McSnortypants, Inc."]);
        if (this.tag.endsWith("CopyrightNotice"))
            return exampleToS(["Creative Commons Attribution 4.0 International"]);
        if (this.tag.endsWith("OwnerName"))
            return exampleToS(["Itsa Myowna"]);
        if (this.tag.endsWith("Artist"))
            return exampleToS(["Ansel Adams"]);
        if (this.tag.endsWith("Author"))
            return exampleToS(["Arturo DeImage"]);
        if (this.tag.endsWith("Contact"))
            return exampleToS(["Dohncha Calmeplz"]);
        if (this.tag.endsWith("Credit"))
            return exampleToS(["photo by Jenny McSnapsalot"]);
        var byValueType = new Map();
        // Shove boring values to the end:
        this.vacuumValues();
        Array_1.uniq(this.values)
            .sort()
            .reverse()
            .forEach(function (ea) {
            getOrSet(byValueType, valueType(ea), function () { return []; }).push(ea);
        });
        // If there are multiple types, try to show one of each type:
        return exampleToS(this.valueTypes
            .map(function (key) { return Maybe_1.map(byValueType.get(key), function (ea) { return ea[0]; }); })
            .filter(function (ea) { return !nullish(ea); }));
    };
    return Tag;
}());
function exampleToS(examples) {
    return examples.length > 1
        ? "Examples: " + JSON.stringify(toStr(examples))
        : "Example: " + JSON.stringify(toStr(examples[0]));
}
function sigFigs(i, digits) {
    if (i == 0 || digits == 0)
        return 0;
    var pow = Math.pow(10, digits - Math.round(Math.ceil(Math.log10(Math.abs(i)))));
    return Math.round(i * pow) / pow;
}
function toStr(o) {
    if (typeof o == "string")
        return ellipsize(o, 40);
    if (typeof o == "number")
        return sigFigs(o, 8);
    if (Array.isArray(o))
        return o.map(toStr);
    return ellipsize(String(o), 40);
}
function getOrSet(m, k, valueThunk) {
    if (m.has(k)) {
        return m.get(k);
    }
    else {
        var v = valueThunk();
        m.set(k, v);
        return v;
    }
}
var minOccurences = 2;
var TagMap = /** @class */ (function () {
    function TagMap() {
        this.map = new Map();
        this.maxValueCount = 0;
        this._finished = false;
        this.groupedTags = new Map();
        this.tags = [];
    }
    TagMap.prototype.tag = function (tag) {
        var prevTag = this.map.get(tag);
        if (prevTag) {
            return prevTag;
        }
        else {
            var t = new Tag(tag);
            this.map.set(tag, t);
            return t;
        }
    };
    TagMap.prototype.add = function (tagName, value, important) {
        var tag = this.tag(tagName);
        if (important) {
            tag.important = true;
        }
        var values = tag.values;
        values.push(value);
        this.maxValueCount = Math.max(values.length, this.maxValueCount);
    };
    TagMap.prototype.finish = function () {
        var _this = this;
        if (this._finished)
            return;
        this._finished = true;
        var allTags = Array.from(this.map.values());
        console.log("Skipping the following tags due to < " + minOccurences + " occurances:");
        console.log(allTags
            .filter(function (a) { return !a.keep(minOccurences); })
            .map(function (t) { return t.tag; })
            .join(", "));
        this.tags = allTags.filter(function (a) { return a.keep(minOccurences); });
        this.groupedTags.clear();
        this.tags.forEach(function (tag) {
            getOrSet(_this.groupedTags, tag.group, function () { return []; }).push(tag);
        });
    };
    return TagMap;
}());
function cmp(a, b) {
    return a > b ? 1 : a < b ? -1 : 0;
}
var tagMap = new TagMap();
var saneTagRe = /^[a-z0-9_]+:[a-z0-9_]+$/i;
var bar = new ProgressBar("reading tags [:bar] :current/:total files, :tasks pending @ :rate files/sec :etas", {
    complete: "=",
    incomplete: " ",
    width: 40,
    total: files.length
});
var nextTick = Date.now();
var ticks = 0;
var failedFiles = [];
var seenFiles = [];
function readAndAddToTagMap(file) {
    return __awaiter(this, void 0, void 0, function () {
        var tags_1, importantFile_1, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, exiftool.read(file, ["-G", "-fast"])];
                case 1:
                    tags_1 = _a.sent();
                    seenFiles.push(file);
                    importantFile_1 = file
                        .toString()
                        .toLowerCase()
                        .includes("important");
                    Object.keys(tags_1).forEach(function (key) {
                        if (saneTagRe.exec(key)) {
                            tagMap.add(key, tags_1[key], importantFile_1);
                        }
                    });
                    if (tags_1.errors && tags_1.errors.length > 0) {
                        bar.interrupt("Error from " + file + ": " + tags_1.errors);
                    }
                    return [3 /*break*/, 3];
                case 2:
                    err_1 = _a.sent();
                    bar.interrupt("Error from " + file + ": " + err_1);
                    failedFiles.push(file);
                    return [3 /*break*/, 3];
                case 3:
                    ticks++;
                    if (nextTick <= Date.now()) {
                        nextTick = Date.now() + 50;
                        bar.tick(ticks, {
                            tasks: exiftool.pendingTasks
                        });
                        ticks = 0;
                    }
                    return [2 /*return*/];
            }
        });
    });
}
var start = Date.now();
_process.on("unhandledRejection", function (reason, _promise) {
    console.error("Ack, caught unhandled rejection: " + reason.stack || reason.toString);
});
Promise.all(files.map(function (file) { return readAndAddToTagMap(file); }))
    .then(function () { return __awaiter(_this, void 0, void 0, function () {
    var missingFiles, elapsedMs, version, destFile, tagWriter, groupedTags, tagGroups, seenTagNames, tags, tagsByPctPop, scale;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                bar.terminate();
                tagMap.finish();
                console.log("\nRead " + tagMap.map.size + " unique tags from " + seenFiles.length + " files.");
                missingFiles = files.filter(function (ea) { return seenFiles.indexOf(ea) === -1; });
                console.log("missing files: " + missingFiles.join("\n"));
                elapsedMs = Date.now() - start;
                console.log("Parsing took " + elapsedMs + "ms (" + (elapsedMs / files.length).toFixed(1) + "ms / file)");
                return [4 /*yield*/, exiftool.version()];
            case 1:
                version = _a.sent();
                destFile = _path.resolve(__dirname, "../../src/Tags.ts");
                tagWriter = _fs.createWriteStream(destFile);
                tagWriter.write([
                    'import { ExifDate } from "./ExifDate"',
                    'import { ExifDateTime } from "./ExifDateTime"',
                    'import { ExifTime } from "./ExifTime"',
                    "",
                    "// Autogenerated by \"npm run mktags\" by ExifTool " + version + " on " + new Date().toDateString() + ".",
                    "// " + tagMap.map.size + " unique tags were found in " + files.length + " different digital imagery files.",
                    "",
                    "// Comments by each tag include popularity (★★★★ is found in > 75% of cameras, ☆☆☆☆ is rare),",
                    "// followed by a checkmark if the tag is used by popular devices (like iPhones)",
                    "// An example value, JSON stringified, follows the popularity ratings.",
                    ""
                ].join("\n"));
                groupedTags = tagMap.groupedTags;
                tagGroups = [];
                seenTagNames = new Set();
                Array.from(groupedTags.entries()).forEach(function (_a) {
                    var _b = __read(_a, 2), group = _b[0], tags = _b[1];
                    var filteredTags = tags
                        .sort(function (a, b) { return cmp(a.tag, b.tag); })
                        // First group with a tag name wins. Other group's colliding tag names
                        // are omitted:
                        .filter(function (tag) { return !seenTagNames.has(tag.withoutGroup); });
                    if (filteredTags.length > 0) {
                        tagGroups.push(group);
                        tagWriter.write("\nexport interface " + group + "Tags {\n");
                        filteredTags.forEach(function (tag) {
                            tagWriter.write("  /** " + tag.popIcon(files.length) + " " + tag.example() + " */\n");
                            tagWriter.write("  " + tag.withoutGroup + "?: " + tag.valueType + "\n");
                            seenTagNames.add(tag.withoutGroup);
                        });
                        tagWriter.write("}\n");
                    }
                });
                tagWriter.write("\n");
                tagWriter.write("export interface Tags extends\n");
                tagWriter.write("  " + tagGroups.map(function (s) { return s + "Tags"; }).join(",\n  ") + " {\n");
                tagWriter.write("  errors?: string[]\n");
                tagWriter.write("  Error?: string\n");
                tagWriter.write("  Warning?: string\n");
                tagWriter.write("  SourceFile?: string\n");
                tagWriter.write("}\n");
                tagWriter.end();
                tags = tagMap.tags;
                tagsByPctPop = Array_1.times(100, function (pct) {
                    return tags.filter(function (tag) { return tag.values.length / files.length > pct / 100.0; })
                        .length;
                });
                scale = 80 / files.length;
                console.log("Distribution of tags: \n");
                tagsByPctPop.forEach(function (cnt, pct) {
                    return console.log(String_1.leftPad(pct, 2, " ") +
                        "%: " +
                        String_1.leftPad(cnt, 4, " ") +
                        ":" +
                        Array_1.times(Math.floor(cnt * scale), function () { return "#"; }).join(""));
                });
                console.log("\nInternal error count: " + exiftool["batchCluster"].internalErrorCount);
                exiftool.end();
                return [2 /*return*/];
        }
    });
}); })
    .catch(function (err) {
    console.error(err);
});
//# sourceMappingURL=mktags.js.map