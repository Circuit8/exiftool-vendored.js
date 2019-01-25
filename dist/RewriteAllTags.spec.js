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
var ExifTool_1 = require("./ExifTool");
describe("RewriteAllTagsTask", function () {
    var exiftool = new ExifTool_1.ExifTool({ maxProcs: 1 });
    var d = new Date();
    d.setMilliseconds(0);
    after(function () { return exiftool.end(); });
    it("throws on missing input", function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.slow(500);
                return [2 /*return*/, _chai_spec_1.expect(exiftool.rewriteAllTags("missing.jpg", "ignored.jpg")).to.be.rejectedWith(/Error opening file.+missing\.jpg/)];
            });
        });
    });
    function expectSameYmdHms(a, b) {
        _chai_spec_1.expect([a.year, a.month, a.day, a.hour, a.minute, a.second]).to.eql([
            b.getUTCFullYear(),
            b.getUTCMonth() + 1,
            b.getUTCDate(),
            b.getUTCHours(),
            b.getUTCMinutes(),
            b.getUTCSeconds()
        ]);
    }
    it("test file is not problematic", function () { return __awaiter(_this, void 0, void 0, function () {
        var img, tags;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, _chai_spec_1.testImg()];
                case 1:
                    img = _a.sent();
                    return [4 /*yield*/, exiftool.write(img, { CreateDate: d.toISOString() })];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, exiftool.read(img)];
                case 3:
                    tags = _a.sent();
                    expectSameYmdHms(tags.CreateDate, d);
                    return [2 /*return*/];
            }
        });
    }); });
    it("problematic file is problematic", function () { return __awaiter(_this, void 0, void 0, function () {
        var img;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, _chai_spec_1.testImg("problematic.jpg")];
                case 1:
                    img = _a.sent();
                    return [2 /*return*/, _chai_spec_1.expect(exiftool.write(img, { CreateDate: d.toISOString() })).to.be.rejectedWith(/Error reading ThumbnailImage data/)];
            }
        });
    }); });
    it("problematic file is not problematic after rewriting", function () { return __awaiter(_this, void 0, void 0, function () {
        var img, rewritten, tags;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, _chai_spec_1.testImg("problematic.jpg")];
                case 1:
                    img = _a.sent();
                    rewritten = img + "-rewritten.jpg";
                    return [4 /*yield*/, exiftool.rewriteAllTags(img, rewritten)];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, exiftool.write(rewritten, { CreateDate: d.toISOString() })];
                case 3:
                    _a.sent();
                    return [4 /*yield*/, exiftool.read(rewritten)];
                case 4:
                    tags = _a.sent();
                    expectSameYmdHms(tags.CreateDate, d);
                    return [2 /*return*/];
            }
        });
    }); });
});
//# sourceMappingURL=RewriteAllTags.spec.js.map