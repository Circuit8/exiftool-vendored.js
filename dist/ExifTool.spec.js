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
var _path = require("path");
var _chai_spec_1 = require("./_chai.spec");
var Array_1 = require("./Array");
var ExifTool_1 = require("./ExifTool");
describe("ExifTool", function () {
    var et = new ExifTool_1.ExifTool({ maxProcs: 2 });
    after(function () { return et.end(); });
    var truncated = _path.join(__dirname, "..", "test", "truncated.jpg");
    var noexif = _path.join(__dirname, "..", "test", "noexif.jpg");
    var img = _path.join(__dirname, "..", "test", "img.jpg");
    var img2 = _path.join(__dirname, "..", "test", "ExifTool.jpg");
    var nonEnglishImg = _path.join(__dirname, "..", "test", "中文.jpg");
    var packageJson = require("../package.json");
    function expectedExiftoolVersion(flavor) {
        if (flavor === void 0) { flavor = "pl"; }
        var vendorVersion = packageJson.optionalDependencies["exiftool-vendored." + flavor];
        // Frakkin semver, which is pissy about 0-padded version numbers (srsly,
        // it's ok) and exiftool (which bumps the major version because minor hit 99
        // and you've got to maintain ascibetical sort order so...)
        // </rant>
        return vendorVersion
            .split(".")
            .slice(0, 2)
            .join(".");
    }
    it("perl and win32 versions match", function () {
        var pl = expectedExiftoolVersion("pl");
        var exe = expectedExiftoolVersion("exe");
        _chai_spec_1.expect(pl).to.eql(exe);
    });
    it("returns the correct version", function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.slow(500);
                        _a = _chai_spec_1.expect;
                        return [4 /*yield*/, et.version()];
                    case 1: return [2 /*return*/, _a.apply(void 0, [_b.sent()]).to.eql(expectedExiftoolVersion())];
                }
            });
        });
    });
    it("returns a reasonable value for MaxProcs", function () {
        // 64 cpus on my dream laptop
        _chai_spec_1.expect(ExifTool_1.DefaultMaxProcs).to.be.within(1, 64);
    });
    it("exports a singleton instance", function () {
        // don't call any methods that actually results in spinning up a child
        // proc:
        _chai_spec_1.expect(ExifTool_1.exiftool.options.maxProcs).to.eql(ExifTool_1.DefaultMaxProcs);
    });
    it("returns expected results for a given file", function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.slow(500);
                return [2 /*return*/, _chai_spec_1.expect(et.read(img).then(function (tags) { return tags.Model; })).to.eventually.eql("iPhone 7 Plus")];
            });
        });
    });
    it("returns expected results for a given file with non-english filename", function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.slow(500);
                return [2 /*return*/, _chai_spec_1.expect(et.read(nonEnglishImg).then(function (tags) { return tags.Model; })).to.eventually.eql("iPhone 7 Plus")];
            });
        });
    });
    it("renders Orientation as numbers", function () { return __awaiter(_this, void 0, void 0, function () {
        var tags;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, et.read(img)];
                case 1:
                    tags = _a.sent();
                    _chai_spec_1.expect(tags.Orientation).to.eql(1);
                    return [2 /*return*/];
            }
        });
    }); });
    it("omits OriginalImage{Width,Height} by default", function () { return __awaiter(_this, void 0, void 0, function () {
        var tags;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, et.read(img2)];
                case 1:
                    tags = _a.sent();
                    _chai_spec_1.expect(tags.Keywords).to.eql("jambalaya");
                    _chai_spec_1.expect(tags.ImageHeight).to.eql(8);
                    _chai_spec_1.expect(tags.ImageWidth).to.eql(8);
                    _chai_spec_1.expect(tags.OriginalImageHeight).to.be.undefined;
                    _chai_spec_1.expect(tags.OriginalImageWidth).to.be.undefined;
                    return [2 /*return*/];
            }
        });
    }); });
    it("extracts OriginalImage{Width,Height} if [] is provided to override the -fast option", function () { return __awaiter(_this, void 0, void 0, function () {
        var tags;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, et.read(img2, [])];
                case 1:
                    tags = _a.sent();
                    _chai_spec_1.expect(tags.Keywords).to.eql("jambalaya");
                    _chai_spec_1.expect(tags.ImageHeight).to.eql(8);
                    _chai_spec_1.expect(tags.ImageWidth).to.eql(8);
                    _chai_spec_1.expect(tags.OriginalImageHeight).to.eql(16);
                    _chai_spec_1.expect(tags.OriginalImageWidth).to.eql(16);
                    return [2 /*return*/];
            }
        });
    }); });
    it("returns warning for a truncated file", function () {
        return _chai_spec_1.expect(et.read(truncated).then(function (tags) { return tags.Warning; })).to.eventually.eql("JPEG format error");
    });
    function normalize(tagNames) {
        return tagNames
            .filter(function (i) { return i !== "FileInodeChangeDate" && i !== "FileCreateDate"; })
            .sort();
    }
    it("returns no exif metadata for an image with no headers", function () {
        return _chai_spec_1.expect(et.read(noexif).then(function (tags) { return normalize(Object.keys(tags)); })).to.become(normalize([
            "BitsPerSample",
            "ColorComponents",
            "Directory",
            "EncodingProcess",
            "ExifToolVersion",
            "FileAccessDate",
            "FileModifyDate",
            "FileName",
            "FilePermissions",
            "FileSize",
            "FileType",
            "FileTypeExtension",
            "ImageHeight",
            "ImageSize",
            "ImageWidth",
            "Megapixels",
            "MIMEType",
            "SourceFile",
            "YCbCrSubSampling",
            "errors"
        ]));
    });
    it("returns error for missing file", function () {
        return _chai_spec_1.expect(et.read("bogus")).to.eventually.be.rejectedWith(/ENOENT|file not found/i);
    });
    it("sets Error for unsupported file types", function () { return __awaiter(_this, void 0, void 0, function () {
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _a = _chai_spec_1.expect;
                    return [4 /*yield*/, et.read(__filename)];
                case 1: return [2 /*return*/, _a.apply(void 0, [(_b.sent()).Error]).to.match(/Unknown file type/i)];
            }
        });
    }); });
    function assertReasonableTags(tags) {
        tags.forEach(function (tag) {
            _chai_spec_1.expect(tag.errors).to.be.empty;
            _chai_spec_1.expect(tag.MIMEType).to.eql("image/jpeg");
            _chai_spec_1.expect(tag.GPSLatitude).to.be.within(-90, 90);
            _chai_spec_1.expect(tag.GPSLongitude).to.be.within(-180, 180);
        });
    }
    it("ends procs when they've run > maxTasksPerProcess", function () {
        return __awaiter(this, void 0, void 0, function () {
            var maxProcs, maxTasksPerProcess, et, promises, _a, bc, tags, _b, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        this.slow(5000);
                        maxProcs = 8;
                        maxTasksPerProcess = 15;
                        et = new ExifTool_1.ExifTool({ maxProcs: maxProcs, maxTasksPerProcess: maxTasksPerProcess });
                        promises = Array_1.times(maxProcs * maxTasksPerProcess * 3, function () {
                            return et.read(img);
                        });
                        return [4 /*yield*/, Promise.all(promises)
                            // Not all pids will be alive, so we have to grant some slop:
                        ];
                    case 1:
                        _d.sent();
                        // Not all pids will be alive, so we have to grant some slop:
                        _a = _chai_spec_1.expect;
                        return [4 /*yield*/, et.pids];
                    case 2:
                        // Not all pids will be alive, so we have to grant some slop:
                        _a.apply(void 0, [(_d.sent()).length]).to.be.within(1, maxProcs * 1.5);
                        bc = et["batchCluster"];
                        return [4 /*yield*/, Promise.all(promises)];
                    case 3:
                        tags = _d.sent();
                        _chai_spec_1.expect(bc.meanTasksPerProc).to.be.within(maxTasksPerProcess - 3, maxTasksPerProcess);
                        _b = _chai_spec_1.expect;
                        return [4 /*yield*/, et.pids];
                    case 4:
                        _b.apply(void 0, [(_d.sent()).length]).to.be.within(1, maxProcs);
                        assertReasonableTags(tags);
                        return [4 /*yield*/, et.end()];
                    case 5:
                        _d.sent();
                        _c = _chai_spec_1.expect;
                        return [4 /*yield*/, et.pids];
                    case 6:
                        _c.apply(void 0, [_d.sent()]).to.eql([]);
                        return [2 /*return*/];
                }
            });
        });
    });
    it("ends with multiple procs", function () {
        return __awaiter(this, void 0, void 0, function () {
            var maxProcs, et, warmupTasks, _a, secondTasks, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        this.slow(500);
                        maxProcs = 4;
                        et = new ExifTool_1.ExifTool({ maxProcs: maxProcs });
                        _c.label = 1;
                    case 1:
                        _c.trys.push([1, , 7, 8]);
                        return [4 /*yield*/, Promise.all(Array_1.times(maxProcs, function () { return et.read(img); }))];
                    case 2:
                        warmupTasks = _c.sent();
                        _a = _chai_spec_1.expect;
                        return [4 /*yield*/, et.pids];
                    case 3:
                        _a.apply(void 0, [(_c.sent()).length]).to.be.within(2, maxProcs);
                        return [4 /*yield*/, Promise.all(Array_1.times(maxProcs * 4, function () { return et.read(img); }))];
                    case 4:
                        secondTasks = _c.sent();
                        warmupTasks.forEach(function (t) { return _chai_spec_1.expect(t).to.not.be.undefined; });
                        secondTasks.forEach(function (t) { return _chai_spec_1.expect(t).to.not.be.undefined; });
                        return [4 /*yield*/, et.end()];
                    case 5:
                        _c.sent();
                        _b = _chai_spec_1.expect;
                        return [4 /*yield*/, et.pids];
                    case 6:
                        _b.apply(void 0, [_c.sent()]).to.eql([]);
                        return [3 /*break*/, 8];
                    case 7:
                        et.end();
                        return [7 /*endfinally*/];
                    case 8: return [2 /*return*/];
                }
            });
        });
    });
    it("invalid images throw errors on write", function () {
        return __awaiter(this, void 0, void 0, function () {
            var et, img_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.slow(1000);
                        et = new ExifTool_1.ExifTool();
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, , 3, 4]);
                        return [4 /*yield*/, _chai_spec_1.testImg("bad-exif-ifd.jpg")];
                    case 2:
                        img_1 = _a.sent();
                        _chai_spec_1.expect(et.write(img_1, { AllDates: new Date().toISOString() })).to.be.rejectedWith(/Duplicate MakerNoteUnknown/);
                        return [3 /*break*/, 4];
                    case 3:
                        et.end();
                        return [7 /*endfinally*/];
                    case 4: return [2 /*return*/];
                }
            });
        });
    });
});
//# sourceMappingURL=ExifTool.spec.js.map