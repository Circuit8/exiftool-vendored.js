"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _chai_spec_1 = require("./_chai.spec");
var Number_1 = require("./Number");
describe("Number", function () {
    var examples = [
        {
            n: null,
            isNum: false,
            i: undefined,
            f: undefined
        },
        {
            n: 0,
            isNum: true,
            i: 0,
            f: 0
        },
        {
            n: 1,
            isNum: true,
            i: 1,
            f: 1
        },
        {
            n: 1.5,
            isNum: true,
            i: 2,
            f: 1.5
        },
        {
            n: "123",
            isNum: false,
            i: 123,
            f: 123
        },
        {
            n: "123.5",
            isNum: false,
            i: 124,
            f: 123.5
        },
        {
            n: " 567.890 W 21431",
            isNum: false,
            i: 568,
            f: 567.89
        }
    ];
    describe("isNumber()", function () {
        examples.forEach(function (_a) {
            var n = _a.n, isNum = _a.isNum;
            it(JSON.stringify(n) + " => " + isNum, function () {
                return _chai_spec_1.expect(Number_1.isNumber(n)).to.eql(isNum);
            });
        });
    });
    describe("toI()", function () {
        examples.forEach(function (_a) {
            var n = _a.n, i = _a.i;
            it(JSON.stringify(n) + " => " + i, function () { return _chai_spec_1.expect(Number_1.toI(n)).to.eql(i); });
        });
    });
    describe("toF()", function () {
        examples.forEach(function (_a) {
            var n = _a.n, f = _a.f;
            it(JSON.stringify(n) + " => " + f, function () { return _chai_spec_1.expect(Number_1.toF(n)).to.eql(f); });
        });
    });
});
//# sourceMappingURL=Number.spec.js.map