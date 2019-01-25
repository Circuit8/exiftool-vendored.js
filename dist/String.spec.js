"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _chai_spec_1 = require("./_chai.spec");
var String_1 = require("./String");
describe("String", function () {
    var examples = [
        { i: -100, pad2: "-100", pad3: "-100" },
        { i: -10, pad2: "-10", pad3: "-10" },
        { i: -1, pad2: "-1", pad3: "-01" },
        { i: 0, pad2: "00", pad3: "000" },
        { i: 1, pad2: "01", pad3: "001" },
        { i: 9, pad2: "09", pad3: "009" },
        { i: 10, pad2: "10", pad3: "010" },
        { i: 11, pad2: "11", pad3: "011" },
        { i: 99, pad2: "99", pad3: "099" },
        { i: 100, pad2: "100", pad3: "100" },
        { i: 1999, pad2: "1999", pad3: "1999" }
    ];
    describe("pad2()", function () {
        examples.forEach(function (e) {
            it(e.i + " => " + e.pad2, function () {
                _chai_spec_1.expect(String_1.pad2(e.i)).to.eql([e.pad2]);
            });
        });
    });
    describe("pad3()", function () {
        examples.forEach(function (e) {
            it(e.i + " => " + e.pad3, function () {
                _chai_spec_1.expect(String_1.pad3(e.i)).to.eql([e.pad3]);
            });
        });
    });
});
//# sourceMappingURL=String.spec.js.map