"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var io_1 = require("./io");
/**
 * If the vendored ExifTool version is different from
 * the current latest version, download and extract
 * into the appropriate sibling directories, and update
 * their package.json.
 *
 * Running tests, committing to git, and publishing the npm are
 * manual subsequent steps.
 */
var Checksums = /** @class */ (function () {
    function Checksums(checksums) {
        var _this = this;
        this.store = {};
        checksums.split("\n").forEach(function (line) {
            var match = Checksums.regex.exec(line);
            if (match !== null) {
                _this.store[match[1]] = match[2];
            }
        });
    }
    Checksums.get = function () {
        return io_1.wgetString("http://owl.phy.queensu.ca/~phil/exiftool/checksums.txt").then(function (body) { return new Checksums(body); });
    };
    Checksums.prototype.sha1 = function (filename) {
        return this.store[filename];
    };
    /**
     * @param checksums is a newline-separated text file with the following format:
     * $HASHTYPE($FILENAME) = $HASH
     *
     * We only care about SHA1, so we're pulling just those out.
     */
    Checksums.regex = /SHA1 ?\((\S+)\) ?= ?([a-f0-9]+)/i;
    return Checksums;
}());
exports.Checksums = Checksums;
//# sourceMappingURL=checksums.js.map