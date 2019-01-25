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
var bc = require("batch-cluster");
var String_1 = require("./String");
var ExifToolTask = /** @class */ (function (_super) {
    __extends(ExifToolTask, _super);
    function ExifToolTask(args) {
        var _this = _super.call(this, ExifToolTask.renderCommand(args), function (data, stderr) {
            var err;
            if (String_1.notBlank(stderr)) {
                _this.errors.push(stderr);
                err = new Error(String_1.stripPrefix((stderr || data).trim(), "error: "));
            }
            return _this.parse(data, err);
        }) || this;
        _this.args = args;
        _this.errors = [];
        return _this;
    }
    ExifToolTask.renderCommand = function (args) {
        return __spread(args, ["-ignoreMinorErrors", "-execute", ""]).join("\n");
    };
    ExifToolTask.prototype.addError = function (err) {
        this.errors.push(err);
    };
    return ExifToolTask;
}(bc.Task));
exports.ExifToolTask = ExifToolTask;
//# sourceMappingURL=ExifToolTask.js.map