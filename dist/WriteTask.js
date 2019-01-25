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
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _path = require("path");
var ExifToolTask_1 = require("./ExifToolTask");
var String_1 = require("./String");
var successRE = /1 image files? updated/;
// See https://sno.phy.queensu.ca/%7Ephil/exiftool/faq.html#Q10
// (`-charset utf8` is set by default)
var utfCharsetArgs = [
    "-charset",
    "filename=utf8",
    "-codedcharacterset=utf8",
    "-E"
];
function enc(value) {
    return typeof value == "number" ? value.toString() : String_1.htmlEncode(String(value));
}
var WriteTask = /** @class */ (function (_super) {
    __extends(WriteTask, _super);
    function WriteTask(sourceFile, args) {
        var _this = _super.call(this, args) || this;
        _this.sourceFile = sourceFile;
        _this.args = args;
        return _this;
    }
    WriteTask.for = function (filename, tags, optionalArgs) {
        if (optionalArgs === void 0) { optionalArgs = []; }
        var sourceFile = _path.resolve(filename);
        var args = __spread(utfCharsetArgs);
        Object.keys(tags)
            .filter(function (k) { return typeof k === "string" && tags.propertyIsEnumerable(k); })
            .forEach(function (key) {
            var value = tags[key];
            if (Array.isArray(value)) {
                if (value.every(function (entry) { return typeof entry === "string"; })) {
                    // Its a simple array type
                    ;
                    value.forEach(function (ea) { return args.push("-" + key + "=" + enc(ea)); });
                }
                if (value.every(function (entry) { return typeof entry === "object"; })) {
                    // Its a struct type
                    // Ultimately this would have to be a recursive function as in theory structs can be
                    // nested in one another, and even inlucde arrays etc. However in this basic implementation
                    // just support simple strings as values
                    var structs = value
                        .map(function (struct) {
                        var structKeyValuePairs = Object.keys(struct).map(function (structKey) {
                            var structValue = struct[structKey];
                            return structKey + "=" + enc(structValue);
                        });
                        return "{" + structKeyValuePairs + "}";
                    })
                        .join(", ");
                    // EG. ArtworkOrObject: [{ AOCreator=badger, AOTitle=a title }, { AOTitle=another one }]
                    args.push("-" + key + "=[" + structs + "]");
                }
            }
            else {
                // Its a string type
                args.push("-" + key + "=" + enc(value));
            }
        });
        optionalArgs.forEach(function (ea) { return args.push(ea); });
        args.push(sourceFile);
        return new WriteTask(sourceFile, args);
    };
    WriteTask.prototype.toString = function () {
        return "WriteTask(" + this.sourceFile + ")";
    };
    WriteTask.prototype.parse = function (data, err) {
        if (err)
            throw err;
        if (this.errors.length > 0)
            throw new Error(this.errors.join(";"));
        data = data.trim();
        if (successRE.exec(data) != null) {
            return;
        }
        else {
            throw new Error("No success message: " + data);
        }
    };
    return WriteTask;
}(ExifToolTask_1.ExifToolTask));
exports.WriteTask = WriteTask;
//# sourceMappingURL=WriteTask.js.map