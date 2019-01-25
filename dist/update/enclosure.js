"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _path = require("path");
var _url = require("url");
var xmldom = require("xmldom");
var checksums_1 = require("./checksums");
var io = require("./io");
var xpath = require("xpath");
var Enclosure = /** @class */ (function () {
    function Enclosure(url, path, sha1, version) {
        this.url = url;
        this.path = path;
        this.sha1 = sha1;
        this.version = version;
    }
    Enclosure.parsedPath = function (url) {
        var parsedUrlPathname = _url.parse(url).pathname;
        if (parsedUrlPathname) {
            return _path.posix.parse(parsedUrlPathname);
        }
        return undefined;
    };
    Enclosure.versionFromParsedPath = function (parsedPath) {
        var match = Enclosure.regex.exec(parsedPath.base);
        if (match !== null) {
            return match[1];
        }
        else {
            return undefined;
        }
    };
    Enclosure.fromNode = function (enclosureNode, checksums) {
        var urlNode = enclosureNode.getAttributeNode("url");
        if (urlNode == null)
            return;
        var url = urlNode.value;
        var parsedPath = Enclosure.parsedPath(url);
        if (parsedPath) {
            var sha1 = checksums.sha1(parsedPath.base);
            var version = Enclosure.versionFromParsedPath(parsedPath);
            if (version && io.sha1) {
                var e = new Enclosure(url, parsedPath, sha1, version);
                return e;
            }
        }
        return undefined;
    };
    Enclosure.get = function () {
        return checksums_1.Checksums.get().then(function (checksums) {
            return io
                .wgetString("http://owl.phy.queensu.ca/~phil/exiftool/rss.xml")
                .then(function (body) { return Enclosure.parseBody(body, checksums); });
        });
    };
    Enclosure.parseBody = function (body, checksums) {
        var doc = new xmldom.DOMParser().parseFromString(body);
        var nodes = xpath.select("//rss/channel/item[1]/enclosure", doc);
        var enclosures = nodes.map(function (node) { return Enclosure.fromNode(node, checksums); });
        return enclosures.filter(function (item) { return item !== undefined; });
    };
    // The file suffix and the path will already be stripped out at this point
    Enclosure.regex = /.*?([\d\.]+)(\.tar\.gz|\.zip)$/;
    return Enclosure;
}());
exports.Enclosure = Enclosure;
//# sourceMappingURL=enclosure.js.map