"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var luxon_1 = require("luxon");
var Maybe_1 = require("./Maybe");
var Number_1 = require("./Number");
var String_1 = require("./String");
/**
 * Returns a "zone name" (used by `luxon`) that encodes the given offset.
 */
function offsetMinutesToZoneName(offsetMinutes) {
    if (offsetMinutes == null)
        return undefined;
    if (offsetMinutes == 0)
        return "UTC";
    var sign = offsetMinutes < 0 ? "-" : "+";
    var abs = Math.abs(offsetMinutes);
    var hours = Math.floor(abs / 60);
    var minutes = Math.abs(abs % 60);
    return ("UTC" + sign +
        (minutes == 0 ? "" + hours : String_1.pad2(hours) + ":" + String_1.pad2(minutes)));
}
exports.offsetMinutesToZoneName = offsetMinutesToZoneName;
// Pacific/Kiritimati is +14:00 TIL
// https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
exports.MaxTzOffsetHours = 14;
function reasonableTzOffsetMinutes(tzOffsetMinutes) {
    return (Number_1.isNumber(tzOffsetMinutes) &&
        Math.abs(tzOffsetMinutes) < exports.MaxTzOffsetHours * 60);
}
exports.reasonableTzOffsetMinutes = reasonableTzOffsetMinutes;
var tzRe = /([+-]?)(\d\d?)(?::(\d\d))?/;
/**
 * Parse a timezone offset and return the offset minutes
 */
function extractOffset(tz) {
    return tz == null || String_1.blank(tz)
        ? undefined
        : Maybe_1.map(tzRe.exec(tz), function (m) {
            return offsetMinutesToZoneName((m[1] == "-" ? -1 : 1) * (parseInt(m[2]) * 60 + parseInt(m[3] || "0")));
        }) || (luxon_1.Info.isValidIANAZone(tz) ? tz : undefined);
}
exports.extractOffset = extractOffset;
function extractTzOffsetFromTags(t) {
    var arr = [
        t.TimeZone,
        t.OffsetTime,
        t.OffsetTimeOriginal,
        t.OffsetTimeDigitized,
        t.TimeZoneOffset
    ]
        .map(extractOffset)
        .filter(function (ea) { return ea != null; });
    if (arr.length > 0)
        return arr[0];
    var tzo = t.TimeZoneOffset;
    return (tzHourToOffset(tzo) ||
        (Array.isArray(tzo) ? tzHourToOffset(tzo[0]) : undefined));
}
exports.extractTzOffsetFromTags = extractTzOffsetFromTags;
function tzHourToOffset(n) {
    return Number_1.isNumber(n) && reasonableTzOffsetMinutes(n * 60)
        ? offsetMinutesToZoneName(n * 60)
        : undefined;
}
//# sourceMappingURL=Timezones.js.map