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
var luxon_1 = require("luxon");
var Maybe_1 = require("./Maybe");
var String_1 = require("./String");
var Timezones_1 = require("./Timezones");
var FixedOffsetZone = require("luxon").FixedOffsetZone;
var unsetZoneOffset = -24 * 60;
var unsetZone = new FixedOffsetZone(unsetZoneOffset);
/**
 * Encodes an ExifDateTime with an optional tz offset in minutes.
 */
var ExifDateTime = /** @class */ (function () {
    function ExifDateTime(year, month, day, hour, minute, second, millisecond, tzoffsetMinutes) {
        this.year = year;
        this.month = month;
        this.day = day;
        this.hour = hour;
        this.minute = minute;
        this.second = second;
        this.millisecond = millisecond;
        this.tzoffsetMinutes = tzoffsetMinutes;
    }
    ExifDateTime.fromISO = function (iso, defaultZone) {
        return String_1.blank(iso)
            ? undefined
            : this.fromDateTime(luxon_1.DateTime.fromISO(iso, {
                setZone: true,
                zone: defaultZone || unsetZone
            }));
    };
    /**
     * Try to parse a date-time string from EXIF. If there is not both a date and
     * a time component, returns `undefined`.
     *
     * @param text from EXIF metadata
     * @param defaultZone a "zone name" which may be IANA, like
     * "America/Los_Angeles", or an offset, like "UTC-3". See
     * `offsetMinutesToZoneName`.
     */
    ExifDateTime.fromEXIF = function (text, defaultZone) {
        var _this = this;
        if (String_1.blank(text))
            return;
        text = String_1.toS(text).trim();
        var zone = String_1.notBlank(defaultZone) ? defaultZone : unsetZone;
        return (Maybe_1.first([
            { fmt: "y:M:d H:m:s.uZZ" },
            { fmt: "y:M:d H:m:sZZ" },
            { fmt: "y:M:d H:m:s.u'Z'", zone: "utc" },
            { fmt: "y:M:d H:m:s'Z'", zone: "utc" },
            { fmt: "y:M:d H:m:s.u", zone: zone },
            { fmt: "y:M:d H:m:s", zone: zone },
            // FWIW, the following are from actual datestamps seen in the wild:
            { fmt: "MMM d y H:m:sZZZ" },
            { fmt: "MMM d y H:m:s", zone: zone },
            { fmt: "MMM d y, H:m:sZZZ" },
            { fmt: "MMM d y, H:m:s", zone: zone },
            // Thu Oct 13 00:12:27 2016:
            { fmt: "ccc MMM d H:m:s yZZ" },
            { fmt: "ccc MMM d H:m:s y", zone: zone }
        ], function (_a) {
            var fmt = _a.fmt, zone = _a.zone;
            return Maybe_1.map(luxon_1.DateTime.fromFormat(text, fmt, { setZone: true, zone: zone }), function (dt) {
                return _this.fromDateTime(dt);
            });
        }) || this.fromISO(text, defaultZone));
    };
    ExifDateTime.fromDateTime = function (dt) {
        if (dt == null ||
            !dt.isValid ||
            dt.toMillis() === 0 ||
            dt.year == 0 ||
            dt.year == 1) {
            return undefined;
        }
        return new ExifDateTime(dt.year, dt.month, dt.day, dt.hour, dt.minute, dt.second, dt.millisecond, dt.offset == unsetZoneOffset ? undefined : dt.offset);
    };
    Object.defineProperty(ExifDateTime.prototype, "millis", {
        get: function () {
            return this.millisecond;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ExifDateTime.prototype, "zone", {
        get: function () {
            return Timezones_1.offsetMinutesToZoneName(this.tzoffsetMinutes);
        },
        enumerable: true,
        configurable: true
    });
    ExifDateTime.prototype.toDateTime = function () {
        return luxon_1.DateTime.fromObject(this);
    };
    ExifDateTime.prototype.toDate = function () {
        return this.toDateTime().toJSDate();
    };
    ExifDateTime.prototype.toISOString = function (options) {
        if (options === void 0) { options = {}; }
        return this.toDateTime().toISO(__assign({}, options, { includeOffset: this.tzoffsetMinutes != null }));
    };
    ExifDateTime.prototype.toString = function () {
        return this.toISOString();
    };
    return ExifDateTime;
}());
exports.ExifDateTime = ExifDateTime;
//# sourceMappingURL=ExifDateTime.js.map