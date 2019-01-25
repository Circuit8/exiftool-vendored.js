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
var _path = require("path");
var Array_1 = require("./Array");
var ExifToolTask_1 = require("./ExifToolTask");
var RewriteAllTagsTask = /** @class */ (function (_super) {
    __extends(RewriteAllTagsTask, _super);
    function RewriteAllTagsTask(args) {
        return _super.call(this, args) || this;
    }
    RewriteAllTagsTask.for = function (imgSrc, imgDest, allowMakerNoteRepair) {
        // -all= -tagsfromfile @ -all:all -unsafe -icc_profile bad.jpg
        var args = Array_1.compact([
            "-all=",
            "-tagsfromfile",
            "@",
            "-all:all",
            "-unsafe",
            "-icc_profile",
            allowMakerNoteRepair ? "-F" : undefined,
            _path.resolve(imgSrc),
            "-out",
            _path.resolve(imgDest)
        ]);
        return new RewriteAllTagsTask(args);
    };
    RewriteAllTagsTask.prototype.parse = function (data, error) {
        if (error)
            throw error;
        if (data.trim() !== "1 image files created") {
            throw new Error(data.trim().split("\n")[0] || "Missing expected status message");
        }
    };
    return RewriteAllTagsTask;
}(ExifToolTask_1.ExifToolTask));
exports.RewriteAllTagsTask = RewriteAllTagsTask;
//# sourceMappingURL=RewriteAllTagsTask.js.map