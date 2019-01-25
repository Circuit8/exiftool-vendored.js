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
Object.defineProperty(exports, "__esModule", { value: true });
var ExifToolTask_1 = require("./ExifToolTask");
var _path = require("path");
var BinaryExtractionTask = /** @class */ (function (_super) {
    __extends(BinaryExtractionTask, _super);
    function BinaryExtractionTask(args) {
        return _super.call(this, args) || this;
    }
    BinaryExtractionTask.for = function (tagname, imgSrc, imgDest) {
        var args = [
            "-b",
            "-" + tagname,
            _path.resolve(imgSrc),
            "-w",
            // The %0f prevents shell escaping. See
            // https://sno.phy.queensu.ca/~phil/exiftool/exiftool_pod.html#w-EXT-or-FMT--textOut
            "%0f" + _path.resolve(imgDest)
        ];
        return new BinaryExtractionTask(args);
    };
    BinaryExtractionTask.prototype.parse = function (data) {
        if (data.trim() !== "1 output files created") {
            throw new Error(data.trim().split("\n")[0] || "Missing expected status message");
        }
    };
    return BinaryExtractionTask;
}(ExifToolTask_1.ExifToolTask));
exports.BinaryExtractionTask = BinaryExtractionTask;
//# sourceMappingURL=BinaryExtractionTask.js.map