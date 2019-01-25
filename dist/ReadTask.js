"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
var batch_cluster_1 = require("batch-cluster");
var _path = require("path");
var ExifDate_1 = require("./ExifDate");
var ExifDateTime_1 = require("./ExifDateTime");
var ExifTime_1 = require("./ExifTime");
var ExifToolTask_1 = require("./ExifToolTask");
var Maybe_1 = require("./Maybe");
var Number_1 = require("./Number");
var String_1 = require("./String");
var Timezones_1 = require("./Timezones");
var DateTime_1 = require("./DateTime");
var tzlookup = require("tz-lookup");
/**
 * tag names we don't need to muck with:
 */
var PassthroughTags = [
    "ExifToolVersion",
    "DateStampMode",
    "Sharpness",
    "Firmware",
    "DateDisplayFormat"
];
var ReadTask = /** @class */ (function (_super) {
    __extends(ReadTask, _super);
    function ReadTask(sourceFile, args) {
        var _this = _super.call(this, args) || this;
        _this.sourceFile = sourceFile;
        _this.args = args;
        /** May have keys that are group-prefixed */
        _this._raw = {};
        /** Always has non-group-prefixed keys */
        _this._tags = {};
        _this.invalidLatLon = false;
        _this.degroup = _this.args.indexOf("-G") != -1;
        _this.tags = { SourceFile: sourceFile };
        _this.tags.errors = _this.errors;
        return _this;
    }
    ReadTask.for = function (filename, numericTags, optionalArgs) {
        if (optionalArgs === void 0) { optionalArgs = []; }
        var sourceFile = _path.resolve(filename);
        var args = __spread([
            "-json",
            "-struct"
        ], optionalArgs, [
            "-coordFormat",
            "%.8f" // Just a float, please, not the default of "22 deg 20' 7.58\" N"
        ]);
        // IMPORTANT: "-all" must be after numeric tag references (first reference
        // in wins)
        args.push.apply(args, __spread(numericTags.map(function (ea) { return "-" + ea + "#"; })));
        args.push("-all", "-charset", "filename=utf8", sourceFile);
        return new ReadTask(sourceFile, args);
    };
    ReadTask.prototype.toString = function () {
        return "ReadTask" + this.sourceFile + ")";
    };
    ReadTask.prototype.parse = function (data, err) {
        var _this = this;
        try {
            this._raw = JSON.parse(data)[0];
        }
        catch (jsonError) {
            batch_cluster_1.logger().error("ExifTool.ReadTask(): Invalid JSON", { data: data });
            throw err || jsonError;
        }
        // ExifTool does humorous things to paths, like flip slashes. resolve() undoes that.
        var SourceFile = _path.resolve(this._raw.SourceFile);
        // Sanity check that the result is for the file we want:
        if (SourceFile !== this.sourceFile) {
            // Throw an error rather than add an errors string because this is *really* bad:
            throw new Error("Internal error: unexpected SourceFile of " + this._raw.SourceFile + " for file " + this.sourceFile);
        }
        if (this.degroup) {
            Object.keys(this._raw).forEach(function (keyWithGroup) {
                _this._tags[_this.tagName(keyWithGroup)] = _this._raw[keyWithGroup];
            });
        }
        else {
            this._tags = this._raw;
        }
        return this.parseTags();
    };
    ReadTask.prototype.tagName = function (k) {
        return this.degroup ? k.split(":")[1] || k : k;
    };
    ReadTask.prototype.parseTags = function () {
        var _this = this;
        this.extractLatLon();
        this.extractTzOffset();
        Object.keys(this._raw).forEach(function (key) {
            ;
            _this.tags[key] = _this.parseTag(key, _this._raw[key]);
        });
        if (this.errors.length > 0)
            this.tags.errors = this.errors;
        return this.tags;
    };
    ReadTask.prototype.latlon = function (tagName, negateRef, maxValid) {
        var tagValue = this._tags[tagName];
        var r = Number_1.toF(tagValue);
        if (r == null)
            return;
        if (Math.abs(r) > maxValid) {
            this.errors.push("Invalid " + tagName + ", " + JSON.stringify(tagValue));
            this.invalidLatLon = true;
            return;
        }
        var ref = String_1.toS(this._tags[tagName + "Ref"]).toUpperCase();
        if (ref.startsWith(negateRef)) {
            return Math.abs(r) * -1;
        }
        else {
            return r;
        }
    };
    ReadTask.prototype.extractLatLon = function () {
        if (!this.invalidLatLon && this.lat == null) {
            this.lat = this.latlon("GPSLatitude", "S", 90);
        }
        if (!this.invalidLatLon && this.lon == null) {
            this.lon = this.latlon("GPSLongitude", "W", 180);
        }
    };
    ReadTask.prototype.extractTzOffset = function () {
        {
            this.tz = Timezones_1.extractTzOffsetFromTags(this._tags);
            if (this.tz != null) {
                return;
            }
        }
        {
            if (!this.invalidLatLon && this.lat != null && this.lon != null) {
                try {
                    this.tz = tzlookup(this.lat, this.lon);
                    if (this.tz != null) {
                        return;
                    }
                }
                catch (err) { }
            }
        }
        if (this._tags.GPSDateTime != null && this._tags.DateTimeOriginal != null) {
            var gps = ExifDateTime_1.ExifDateTime.fromEXIF(this._tags.GPSDateTime, "utc");
            var local = Maybe_1.first([
                this._tags.DateTimeOriginal,
                this._tags.CreateDate,
                this._tags.MediaCreateDate
            ], function (text) { return ExifDateTime_1.ExifDateTime.fromEXIF(text, "utc"); });
            if (gps &&
                gps.toDate &&
                local &&
                local.toDate &&
                Math.abs(DateTime_1.diffMs(local.toDate(), gps.toDate())) <=
                    Timezones_1.MaxTzOffsetHours * DateTime_1.HourMs) {
                // timezone offsets always on the hour or half hour:
                var gpsToHalfHour = gps.toDate().getTime() / (30 * DateTime_1.MinuteMs);
                var localToHalfHour = local.toDate().getTime() / (30 * DateTime_1.MinuteMs);
                var tzoffsetMinutes = 30 * Math.round(localToHalfHour - gpsToHalfHour);
                if (Timezones_1.reasonableTzOffsetMinutes(tzoffsetMinutes)) {
                    this.tz = Timezones_1.offsetMinutesToZoneName(tzoffsetMinutes);
                }
            }
        }
    };
    ReadTask.prototype.parseTag = function (tagNameWithGroup, value) {
        if (value == null || value == "undef" || value == "null")
            return undefined;
        var tagName = this.tagName(tagNameWithGroup);
        try {
            if (PassthroughTags.indexOf(tagName) >= 0) {
                return value;
            }
            if (tagName == "GPSLatitude") {
                return this.lat;
            }
            if (tagName == "GPSLongitude") {
                return this.lon;
            }
            if (typeof value === "string" && tagName.includes("Date")) {
                var dt = ExifDateTime_1.ExifDateTime.fromEXIF(value, this.tz) || ExifDate_1.ExifDate.fromEXIF(value);
                if (dt != null) {
                    return dt;
                }
            }
            if (typeof value === "string" && tagName.includes("Time")) {
                var t = ExifTime_1.ExifTime.fromEXIF(value);
                if (t != null)
                    return t;
            }
            // Trust that ExifTool rendered the value with the correct type in JSON:
            return value;
        }
        catch (e) {
            this.addError("Failed to parse " + tagName + " with value " + JSON.stringify(value) + ": " + e);
            return value;
        }
    };
    return ReadTask;
}(ExifToolTask_1.ExifToolTask));
exports.ReadTask = ReadTask;
//# sourceMappingURL=ReadTask.js.map