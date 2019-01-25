"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var luxon_1 = require("luxon");
var Maybe_1 = require("./Maybe");
var String_1 = require("./String");
var DateTime_1 = require("./DateTime");
/**
 * Encodes an ExifDate
 */
var ExifDate = /** @class */ (function () {
    function ExifDate(year, // full year (probably 2019-ish, but maybe Japanese 30-ish). See https://ericasadun.com/2018/12/25/iso-8601-yyyy-yyyy-and-why-your-year-may-be-wrong/
    month, // 1-12, (no crazy 0-11 nonsense from Date!)
    day // 1-31
    ) {
        this.year = year;
        this.month = month;
        this.day = day;
    }
    ExifDate.fromISO = function (text) {
        return this.fromDateTime(luxon_1.DateTime.fromISO(text));
    };
    ExifDate.fromEXIF = function (text) {
        var _this = this;
        if (String_1.blank(text))
            return;
        text = String_1.toS(text).trim();
        return Maybe_1.first(["y:MM:dd", "y-MM-dd", "y:M:d", "MMM d y", "MMMM d y"], function (fmt) { return Maybe_1.map(luxon_1.DateTime.fromFormat(text, fmt), function (dt) { return _this.fromDateTime(dt); }); });
    };
    ExifDate.fromDateTime = function (dt) {
        return DateTime_1.validDateTime(dt)
            ? new ExifDate(dt.year, dt.month, dt.day)
            : undefined;
    };
    ExifDate.prototype.toDate = function () {
        return new Date(this.year, this.month - 1, this.day);
    };
    ExifDate.prototype.toISOString = function () {
        return this.year + "-" + String_1.pad2(this.month) + "-" + String_1.pad2(this.day);
    };
    ExifDate.prototype.toString = function () {
        return this.toISOString();
    };
    return ExifDate;
}());
exports.ExifDate = ExifDate;
//# sourceMappingURL=ExifDate.js.map