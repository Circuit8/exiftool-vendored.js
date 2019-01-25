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
Object.defineProperty(exports, "__esModule", { value: true });
var enclosure_1 = require("./enclosure");
var io = require("./io");
var _path = require("path");
var globule = require("globule");
var Update = /** @class */ (function () {
    function Update() {
    }
    Object.defineProperty(Update.prototype, "version", {
        get: function () {
            return (this.enclosure.version + this.patchVersion)
                .split(".")
                .slice(0, 3)
                .join(".");
        },
        enumerable: true,
        configurable: true
    });
    Update.prototype.download = function () {
        return io.wgetFile(this.enclosure.url, this.dlDest);
    };
    Update.prototype.verify = function () {
        return io.sha1(this.dlDest, this.enclosure.sha1).then(function () { return undefined; });
    };
    Update.prototype.downloadMaybeAndVerify = function () {
        return __awaiter(this, void 0, void 0, function () {
            var err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 5]);
                        return [4 /*yield*/, this.verify()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                    case 2:
                        err_1 = _a.sent();
                        return [4 /*yield*/, io.rmrf(this.dlDest, true)];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, this.download()];
                    case 4:
                        _a.sent();
                        return [2 /*return*/, this.verify()];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    Update.prototype.cleanDest = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, io.rmrf(this.unpackDest, true)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, io.mkdir(this.unpackDest)];
                    case 2:
                        _a.sent();
                        console.log("[ \u221A ] Cleaned " + this.unpackDest);
                        return [2 /*return*/];
                }
            });
        });
    };
    Update.prototype.update = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.downloadMaybeAndVerify()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.cleanDest()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.unpack()];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, io.updatePackageVersion(this.packageJson, this.version + "-pre")];
                    case 4:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return Update;
}());
var ZipUpdate = /** @class */ (function (_super) {
    __extends(ZipUpdate, _super);
    function ZipUpdate(enclosure, dlDir) {
        var _this = _super.call(this) || this;
        _this.enclosure = enclosure;
        _this.dlDir = dlDir;
        _this.patchVersion = ".0";
        _this.moduleDir = _path.join(__dirname, "..", "..", "..", "exiftool-vendored.exe");
        _this.packageJson = _path.join(_this.moduleDir, "package.json");
        _this.dlDest = _path.join(dlDir, enclosure.path.base);
        _this.unpackDest = _path.join(_this.moduleDir, "bin");
        return _this;
    }
    ZipUpdate.prototype.unpack = function () {
        return __awaiter(this, void 0, void 0, function () {
            var before, after;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        before = _path.join(this.unpackDest, "exiftool(-k).exe");
                        after = _path.join(this.unpackDest, "exiftool.exe");
                        return [4 /*yield*/, io.unzip(this.dlDest, this.unpackDest)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, io.rename(before, after)];
                    case 2:
                        _a.sent();
                        console.log(" " + after);
                        return [2 /*return*/];
                }
            });
        });
    };
    return ZipUpdate;
}(Update));
var TarUpdate = /** @class */ (function (_super) {
    __extends(TarUpdate, _super);
    function TarUpdate(enclosure, dlDir) {
        var _this = _super.call(this) || this;
        _this.enclosure = enclosure;
        _this.dlDir = dlDir;
        _this.patchVersion = ".0";
        _this.moduleDir = _path.join(__dirname, "..", "..", "..", "exiftool-vendored.pl");
        _this.packageJson = _path.join(_this.moduleDir, "package.json");
        _this.dlDest = _path.join(dlDir, enclosure.path.base);
        _this.unpackDest = _path.join(_this.moduleDir, "bin");
        return _this;
    }
    TarUpdate.prototype.unpack = function () {
        return __awaiter(this, void 0, void 0, function () {
            var tmpUnpack, subdir;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        tmpUnpack = _path.join(this.moduleDir, "tmp");
                        return [4 /*yield*/, io.tarxzf(this.dlDest, tmpUnpack)
                            // The tarball is prefixed with "Image-ExifTool-VERSION". Move that subdirectory into bin proper.
                        ];
                    case 1:
                        _a.sent();
                        subdir = globule.find(_path.join(tmpUnpack, "Image-ExifTool*" + _path.sep));
                        if (subdir.length !== 1) {
                            throw new Error("Failed to find subdirector in " + tmpUnpack);
                        }
                        return [4 /*yield*/, io.rmrf(this.unpackDest)];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, io.rename(subdir[0], this.unpackDest)];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, io.rmrf(this.unpackDest + "/t/")];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, io.rmrf(this.unpackDest + "/html/")];
                    case 5:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return TarUpdate;
}(Update));
function updatePlatformDependentModules(perlVersion, exeVersion) {
    return io.editPackageJson(_path.join(__dirname, "..", "..", "package.json"), function (pkg) {
        var mods = pkg.optionalDependencies;
        mods["exiftool-vendored.pl"] = perlVersion;
        mods["exiftool-vendored.exe"] = exeVersion;
    });
}
function update() {
    return __awaiter(this, void 0, void 0, function () {
        var encs, tar, zip, dl, tarUpdate, zipUpdate;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, enclosure_1.Enclosure.get()];
                case 1:
                    encs = _a.sent();
                    tar = encs.find(function (enc) { return enc.path.ext === ".gz"; });
                    zip = encs.find(function (enc) { return enc.path.ext === ".zip"; });
                    if (!(tar && zip)) return [3 /*break*/, 6];
                    dl = _path.join(__dirname, "..", "..", "dl");
                    return [4 /*yield*/, io.mkdir(dl, true)];
                case 2:
                    _a.sent();
                    tarUpdate = new TarUpdate(tar, dl);
                    return [4 /*yield*/, tarUpdate.update()];
                case 3:
                    _a.sent();
                    zipUpdate = new ZipUpdate(zip, dl);
                    return [4 /*yield*/, zipUpdate.update()];
                case 4:
                    _a.sent();
                    return [4 /*yield*/, updatePlatformDependentModules(tarUpdate.version, zipUpdate.version)];
                case 5:
                    _a.sent();
                    console.log("👍 now run `git commit` and `np` in the .pl and .exe subdirectories.");
                    return [3 /*break*/, 7];
                case 6: throw new Error("Did not find both the .zip and .tar.gz enclosures.");
                case 7: return [2 /*return*/];
            }
        });
    });
}
exports.update = update;
update();
//# sourceMappingURL=update.js.map