"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _chai_spec_1 = require("./_chai.spec");
var ExifTime_1 = require("./ExifTime");
describe("ExifTime", function () {
    it("parses hour/minute/second", function () {
        var et = ExifTime_1.ExifTime.fromEXIF("12:03:45");
        _chai_spec_1.expect([et.hour, et.minute, et.second, et.millis]).to.eql([12, 3, 45, 0]);
    });
    it("parses hour/minute/second/millis", function () {
        var et = ExifTime_1.ExifTime.fromEXIF("18:08:05.813");
        _chai_spec_1.expect([et.hour, et.minute, et.second, et.millis]).to.eql([18, 8, 5, 813]);
    });
    it("parses hour/minute/second/micros", function () {
        var et = ExifTime_1.ExifTime.fromEXIF("08:20:55.207340");
        _chai_spec_1.expect([et.hour, et.minute, et.second]).to.eql([8, 20, 55]);
        _chai_spec_1.expect(et.millis).to.be.eql(207);
        _chai_spec_1.expect(et.toString()).to.eql("08:20:55.207");
    });
    describe("from GPS", function () {
        var et = ExifTime_1.ExifTime.fromEXIF("05:28:09.123");
        it("hour/minute/second/millis", function () {
            _chai_spec_1.expect([et.hour, et.minute, et.second, et.millis]).to.eql([5, 28, 9, 123]);
        });
    });
});
//# sourceMappingURL=ExifTime.spec.js.map