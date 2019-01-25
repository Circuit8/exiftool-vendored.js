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
Object.defineProperty(exports, "__esModule", { value: true });
var _crypto = require("crypto");
var _fs = require("fs");
var _rimraf = require("rimraf");
var _zlib = require("zlib");
var tar = require("tar-fs");
var https = require("https");
var http = require("http");
var DecompressZip = require("decompress-zip");
var StringConsumer = /** @class */ (function () {
    function StringConsumer() {
        this.data = [];
    }
    StringConsumer.prototype.onData = function (data) {
        this.data.push(data.toString());
    };
    StringConsumer.prototype.onEnd = function () {
        return this.data.join("");
    };
    return StringConsumer;
}());
var FileConsumer = /** @class */ (function () {
    function FileConsumer(destination) {
        this.destination = destination;
        this.out = _fs.createWriteStream(destination);
    }
    FileConsumer.prototype.onData = function (data) {
        this.out.write(data);
    };
    FileConsumer.prototype.onEnd = function () {
        this.out.end();
        return this.destination;
    };
    return FileConsumer;
}());
function wget(url, consumer) {
    return new Promise(function (resolve, reject) {
        var lib = url.startsWith("https") ? https : http;
        var request = lib.get(url, function (response) {
            if (response.statusCode == null ||
                response.statusCode < 200 ||
                response.statusCode > 299) {
                reject(new Error("Failed to load page, status code: " + response.statusCode));
            }
            response.on("data", function (chunk) { return consumer.onData(chunk); });
            response.on("end", function () { return resolve(consumer.onEnd()); });
        });
        request.on("error", function (err) { return reject(err); });
    });
}
function wgetString(url) {
    return wget(url, new StringConsumer()).then(function (str) {
        console.log("\u2705 " + url + " downloaded (" + str.length + " bytes)");
        return str;
    });
}
exports.wgetString = wgetString;
function wgetFile(url, destinationFile) {
    return wget(url, new FileConsumer(destinationFile)).then(function () {
        console.log("\u2705 " + url + " downloaded to " + destinationFile);
    });
}
exports.wgetFile = wgetFile;
function readFile(filename) {
    return new Promise(function (resolve, reject) {
        _fs.readFile(filename, "utf8", function (err, data) {
            if (err) {
                reject(err);
            }
            else {
                resolve(data);
            }
        });
    });
}
exports.readFile = readFile;
function writeFile(filename, content) {
    return new Promise(function (resolve, reject) {
        _fs.writeFile(filename, content, { encoding: "utf8" }, function (err) {
            if (err) {
                reject(err);
            }
            else {
                console.log("\u2705 Wrote " + filename);
                resolve();
            }
        });
    });
}
exports.writeFile = writeFile;
function rename(before, after) {
    return new Promise(function (resolve, reject) {
        _fs.rename(before, after, function (err) {
            if (err) {
                reject(err);
            }
            else {
                console.log("\u2705 Renamed " + before + " to " + after);
                resolve();
            }
        });
    });
}
exports.rename = rename;
function sha1(filename, expectedSha) {
    return new Promise(function (resolve, reject) {
        var hash = _crypto.createHash("SHA1");
        var stream = _fs.createReadStream(filename);
        stream.on("error", function (error) {
            reject(error);
            stream.close();
        });
        stream.on("data", function (data) {
            hash.update(data, "utf8"); // < the Hash types are broken
        });
        stream.on("end", function () {
            resolve(hash.digest("hex"));
        });
    }).then(function (actualSha) {
        if (expectedSha !== actualSha) {
            throw new Error("SHA1 MISMATCH: expected " + expectedSha + " for " + filename + ", got " + actualSha);
        }
        else {
            console.log("\u2705 " + filename + " matches expected SHA");
            return actualSha;
        }
    });
}
exports.sha1 = sha1;
function unzip(zipFile, destDir) {
    return new Promise(function (resolve, reject) {
        var unzipper = new DecompressZip(zipFile);
        unzipper.on("error", reject);
        unzipper.on("extract", function () {
            console.log("\u2705 " + zipFile + " unzipped to " + destDir);
            resolve();
        });
        unzipper.extract({
            path: destDir
        });
    });
}
exports.unzip = unzip;
function tarxzf(targzFile, destDir) {
    return new Promise(function (resolve, reject) {
        _fs
            .createReadStream(targzFile)
            .on("error", reject)
            .pipe(_zlib.createGunzip())
            .on("error", reject)
            .pipe(tar.extract(destDir))
            .on("error", reject)
            .on("finish", function () {
            console.log("\u2705 " + targzFile + " untargz'ed to " + destDir);
            resolve();
        });
    });
}
exports.tarxzf = tarxzf;
function editPackageJson(packageJson, f) {
    return __awaiter(this, void 0, void 0, function () {
        var pkg, _a, _b;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    _b = (_a = JSON).parse;
                    return [4 /*yield*/, readFile(packageJson)];
                case 1:
                    pkg = _b.apply(_a, [_c.sent()]);
                    f(pkg);
                    return [4 /*yield*/, writeFile(packageJson, JSON.stringify(pkg, null, 2) + "\n")];
                case 2:
                    _c.sent();
                    return [2 /*return*/];
            }
        });
    });
}
exports.editPackageJson = editPackageJson;
function updatePackageVersion(packageJson, version) {
    return editPackageJson(packageJson, function (pkg) { return (pkg.version = version); });
}
exports.updatePackageVersion = updatePackageVersion;
function rmrf(path, ignoreErrors) {
    if (ignoreErrors === void 0) { ignoreErrors = false; }
    return new Promise(function (resolve, reject) {
        _rimraf(path, function (err) {
            if (err && !ignoreErrors) {
                reject(err);
            }
            else {
                resolve();
            }
        });
    });
}
exports.rmrf = rmrf;
function mkdir(path, ignoreErrors) {
    if (ignoreErrors === void 0) { ignoreErrors = false; }
    return new Promise(function (resolve, reject) {
        _fs.mkdir(path, function (err) {
            if (err && !ignoreErrors) {
                reject(err);
            }
            else {
                resolve();
            }
        });
    });
}
exports.mkdir = mkdir;
//# sourceMappingURL=io.js.map