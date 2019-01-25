"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var luxon_1 = require("luxon");
var Maybe_1 = require("./Maybe");
var String_1 = require("./String");
/**
 * Encodes an ExifTime (which may not have a timezone offset)
 */
var ExifTime = /** @class */ (function () {
    function ExifTime(hour, minute, second, millisecond) {
        this.hour = hour;
        this.minute = minute;
        this.second = second;
        this.millisecond = millisecond;
    }
    ExifTime.fromEXIF = function (text) {
        var _this = this;
        if (String_1.blank(text))
            return;
        text = String_1.toS(text).trim();
        return Maybe_1.first(["HH:mm:ss.u", "HH:mm:ss"], function (fmt) {
            return Maybe_1.map(luxon_1.DateTime.fromFormat(text, fmt), function (dt) { return _this.fromDateTime(dt); });
        });
    };
    ExifTime.fromDateTime = function (dt) {
        return dt == null || !dt.isValid
            ? undefined
            : new ExifTime(dt.hour, dt.minute, dt.second, dt.millisecond);
    };
    Object.defineProperty(ExifTime.prototype, "millis", {
        get: function () {
            return this.millisecond;
        },
        enumerable: true,
        configurable: true
    });
    ExifTime.prototype.toISOString = function () {
        var fracpart = this.millisecond == null || this.millisecond == 0
            ? ""
            : (Math.round(this.millisecond) / 1000).toFixed(3).substring(1);
        return String_1.pad2(this.hour, this.minute, this.second).join(":") + fracpart;
    };
    ExifTime.prototype.toString = function () {
        return this.toISOString();
    };
    return ExifTime;
}());
exports.ExifTime = ExifTime;
//# sourceMappingURL=ExifTime.js.map