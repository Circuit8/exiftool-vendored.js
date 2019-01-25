"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function validDateTime(dt) {
    return dt != null && dt.isValid;
}
exports.validDateTime = validDateTime;
function diffMs(a, b) {
    return a.getTime() - b.getTime();
}
exports.diffMs = diffMs;
exports.MinuteMs = 60 * 1000;
exports.HourMs = 60 * exports.MinuteMs;
exports.DayMs = 24 * exports.HourMs;
//# sourceMappingURL=DateTime.js.map