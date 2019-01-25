"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Array_1 = require("./Array");
var spaces = Array_1.times(10, function (i) { return Array_1.times(i, function () { return " "; }).join(""); });
var zeroes = Array_1.times(10, function (i) { return Array_1.times(i, function () { return "0"; }).join(""); });
function blank(s) {
    return s == null || String(s).trim().length == 0;
}
exports.blank = blank;
function notBlank(s) {
    return !blank(s);
}
exports.notBlank = notBlank;
function padding(padChar, count) {
    if (count <= 0)
        return "";
    return (padChar === "0" ? zeroes : spaces)[Math.floor(count)];
}
function toS(s) {
    return s == null ? "" : String(s);
}
exports.toS = toS;
function leftPad(i, minLen, padChar) {
    if (i == null || isNaN(i))
        i = 0;
    if (i < 0) {
        return "-" + leftPad(-i, minLen - 1, padChar);
    }
    else {
        var s = String(i);
        return padding(padChar, minLen - s.length) + s;
    }
}
exports.leftPad = leftPad;
function pad2() {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    return numbers.map(function (i) { return leftPad(i, 2, "0"); });
}
exports.pad2 = pad2;
function pad3() {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    return numbers.map(function (i) { return leftPad(i, 3, "0"); });
}
exports.pad3 = pad3;
function stripPrefix(s, prefix) {
    return toS(s)
        .toLowerCase()
        .startsWith(prefix.toLowerCase())
        ? s.slice(prefix.length)
        : s;
}
exports.stripPrefix = stripPrefix;
var safeChars = /[a-z0-9 :\/+\.-]/i;
/**
 * This is a basic HTML entities encoder (so we don't have to pull in another
 * npm dependency). No named entries are used, only decimal char values.
 */
function htmlEncode(s) {
    return s
        .split("")
        .map(function (ea) { return (safeChars.exec(ea) == null ? "&#" + ea.charCodeAt(0) + ";" : ea); })
        .join("");
}
exports.htmlEncode = htmlEncode;
//# sourceMappingURL=String.js.map