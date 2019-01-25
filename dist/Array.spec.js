"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _chai_spec_1 = require("./_chai.spec");
var Array_1 = require("./Array");
describe("Array", function () {
    describe("compact()", function () {
        it("removes undefined and nulls but no falsy values", function () {
            _chai_spec_1.expect(Array_1.compact([undefined, 1, null, 0, false, ""])).to.eql([
                1,
                0,
                false,
                ""
            ]);
        });
    });
    describe("times()", function () {
        it("returns the mapped result", function () {
            _chai_spec_1.expect(Array_1.times(5, String)).to.eql(["0", "1", "2", "3", "4"]);
        });
    });
    describe("filterInPlace()", function () {
        it("no-ops for always-true predicates", function () {
            var arr = Array_1.times(5, function (i) { return i; });
            var exp = Array_1.times(5, function (i) { return i; });
            _chai_spec_1.expect(Array_1.filterInPlace(arr, function () { return true; })).to.eql(exp);
            _chai_spec_1.expect(arr).to.eql(exp);
        });
        it("removes all items for always-false predicates", function () {
            var arr = Array_1.times(5, function (i) { return i; });
            var exp = [];
            _chai_spec_1.expect(Array_1.filterInPlace(arr, function () { return false; })).to.eql(exp);
            _chai_spec_1.expect(arr).to.eql(exp);
        });
        it("removes filtered items in the source array", function () {
            var arr = Array_1.times(5, function (i) { return i; });
            var exp = [0, 2, 4];
            _chai_spec_1.expect(Array_1.filterInPlace(arr, function (i) { return i % 2 === 0; })).to.eql(exp);
            _chai_spec_1.expect(arr).to.eql(exp);
        });
    });
    describe("uniq()", function () {
        it("removes dupes and orders first-one-in", function () {
            _chai_spec_1.expect(Array_1.uniq([1, 1, 2, 3, 4, 5, 3, 2, 1, 2, 3, 4, 3])).to.eql([
                1,
                2,
                3,
                4,
                5
            ]);
        });
    });
});
//# sourceMappingURL=Array.spec.js.map