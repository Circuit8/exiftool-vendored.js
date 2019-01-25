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
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var _chai_spec_1 = require("./_chai.spec");
var ExifDateTime_1 = require("./ExifDateTime");
var ExifTool_1 = require("./ExifTool");
var Timezones_1 = require("./Timezones");
describe("WriteTask", function () {
    var exiftool = new ExifTool_1.ExifTool({ maxProcs: 1 });
    after(function () { return exiftool.end(); });
    function assertRoundTrip(args) {
        return __awaiter(this, void 0, void 0, function () {
            var src, wt, result, expected, tag, actual;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, _chai_spec_1.testImg(args.imgName)];
                    case 1:
                        src = _a.sent();
                        wt = {};
                        wt[args.tag] = args.inputValue;
                        return [4 /*yield*/, exiftool.write(src, wt, args.args)];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, exiftool.read(src)];
                    case 3:
                        result = (_a.sent());
                        expected = args.expectedValue == null ? args.inputValue : args.expectedValue;
                        tag = args.tag.endsWith("#")
                            ? args.tag.substring(0, args.tag.length - 1)
                            : args.tag;
                        actual = result[tag];
                        _chai_spec_1.expect(actual).to.eql(expected, JSON.stringify({ src: src, tag: tag, expected: expected, actual: actual }));
                        return [2 /*return*/];
                }
            });
        });
    }
    it("round-trips a comment", function () { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, assertRoundTrip({
                    tag: "XPComment",
                    inputValue: "new comment from " + new Date()
                })];
        });
    }); });
    it("round-trips a comment with a newline and carriage return", function () { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, assertRoundTrip({
                    tag: "XPComment",
                    inputValue: "new comment\nfrom\r" + new Date()
                })];
        });
    }); });
    it("round-trips a non-latin comment", function () { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, assertRoundTrip({
                    tag: "XPComment",
                    inputValue: "早安晨之美" + new Date()
                })];
        });
    }); });
    it("round-trips a comment with non-latin filename", function () { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, assertRoundTrip({
                    tag: "XPComment",
                    inputValue: "new comment from " + new Date(),
                    imgName: "中文.jpg"
                })];
        });
    }); });
    it("round-trips a non-latin comment with non-latin filename", function () { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, assertRoundTrip({
                    tag: "XPComment",
                    inputValue: "早安晨之美" + new Date(),
                    imgName: "中文.jpg"
                })];
        });
    }); });
    it("round-trips a numeric Orientation", function () { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, assertRoundTrip({
                    tag: "Orientation#",
                    inputValue: 1
                })];
        });
    }); });
    it("round-trips a string Orientation 90 CW", function () { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, assertRoundTrip({
                    tag: "Orientation#",
                    inputValue: 6
                })];
        });
    }); });
    it("round-trips a string Orientation 180 CW", function () { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, assertRoundTrip({
                    tag: "Orientation#",
                    inputValue: 3
                })];
        });
    }); });
    it("updates DateTimeOriginal to a specific time", function () { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, assertRoundTrip({
                    tag: "DateTimeOriginal",
                    inputValue: "2017-11-15T12:34:56+8:00",
                    expectedValue: ExifDateTime_1.ExifDateTime.fromISO("2017-11-15T12:34:56", Timezones_1.offsetMinutesToZoneName(480))
                })];
        });
    }); });
    it("round-trips list tag array input", function () { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, assertRoundTrip({
                    tag: "Keywords",
                    inputValue: ["one", "two", "three"]
                })];
        });
    }); });
    it("rejects setting to a non-time value", function () { return __awaiter(_this, void 0, void 0, function () {
        var src;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, _chai_spec_1.testImg()];
                case 1:
                    src = _a.sent();
                    return [2 /*return*/, _chai_spec_1.expect(exiftool.write(src, { DateTimeOriginal: "this is not a time" })).to.be.rejectedWith(/Invalid date\/time/)];
            }
        });
    }); });
    it("rejects an invalid numeric Orientation", function () { return __awaiter(_this, void 0, void 0, function () {
        var src;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, _chai_spec_1.testImg()];
                case 1:
                    src = _a.sent();
                    return [2 /*return*/, _chai_spec_1.expect(exiftool.write(src, { "Orientation#": -1 })).to.be.rejectedWith(/Value below int16u minimum/i)];
            }
        });
    }); });
    it("rejects an invalid string Orientation", function () { return __awaiter(_this, void 0, void 0, function () {
        var src;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, _chai_spec_1.testImg()];
                case 1:
                    src = _a.sent();
                    return [2 /*return*/, _chai_spec_1.expect(exiftool.write(src, {
                            Orientation: "this isn't a valid orientation"
                        })).to.be.rejectedWith(/Can't convert IFD0:Orientation/i)];
            }
        });
    }); });
    it("Accepts a shortcut tag", function () { return __awaiter(_this, void 0, void 0, function () {
        var date, src, tags;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    date = "2018-04-17T12:34:56.000+08:00";
                    return [4 /*yield*/, _chai_spec_1.testImg()];
                case 1:
                    src = _a.sent();
                    return [4 /*yield*/, exiftool.write(src, { AllDates: date })];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, exiftool.read(src)];
                case 3:
                    tags = _a.sent();
                    _chai_spec_1.expect(String(tags.DateTimeOriginal)).to.eql(date);
                    _chai_spec_1.expect(String(tags.CreateDate)).to.eql(date);
                    _chai_spec_1.expect(String(tags.ModifyDate)).to.eql(date);
                    return [2 /*return*/];
            }
        });
    }); });
    it("rejects unknown files", function () {
        return _chai_spec_1.expect(exiftool.write("/tmp/.nonexistant-" + Date.now(), { XPComment: "boom" })).to.be.rejectedWith(/ENOENT|File not found/i);
    });
    it("rejects unknown tags", function () { return __awaiter(_this, void 0, void 0, function () {
        var src;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, _chai_spec_1.testImg()];
                case 1:
                    src = _a.sent();
                    return [2 /*return*/, _chai_spec_1.expect(exiftool.write(src, { RandomTag: 123 })).to.be.rejectedWith(/Tag \'RandomTag\' is not defined/)];
            }
        });
    }); });
    it("Accepts a struct tag", function () { return __awaiter(_this, void 0, void 0, function () {
        var struct, src, tags;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    struct = [
                        { RegItemId: "item 1", RegOrgId: "org 1" },
                        { RegEntryRole: "role 2", RegOrgId: "org 2" }
                    ];
                    return [4 /*yield*/, _chai_spec_1.testImg()];
                case 1:
                    src = _a.sent();
                    return [4 /*yield*/, exiftool.write(src, { RegistryID: struct })];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, exiftool.read(src)];
                case 3:
                    tags = _a.sent();
                    _chai_spec_1.expect(tags.RegistryID).to.eql(struct);
                    return [2 /*return*/];
            }
        });
    }); });
});
//# sourceMappingURL=WriteTask.spec.js.map