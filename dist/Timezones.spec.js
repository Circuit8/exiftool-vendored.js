"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _chai_spec_1 = require("./_chai.spec");
var Timezones_1 = require("./Timezones");
describe("Timezones", function () {
    describe("extractOffsetMinutes", function () {
        ;
        [
            { tz: "", exp: undefined },
            { tz: "garbage", exp: undefined },
            { tz: "-7", exp: "UTC-7" },
            { tz: "+3:30", exp: "UTC+03:30" },
            { tz: "-09:00", exp: "UTC-9" },
            { tz: "America/Los_Angeles", exp: "America/Los_Angeles" }
        ].forEach(function (_a) {
            var tz = _a.tz, exp = _a.exp;
            return it("(\"" + tz + "\") => " + exp, function () {
                _chai_spec_1.expect(Timezones_1.extractOffset(tz)).to.eql(exp);
            });
        });
    });
});
//# sourceMappingURL=Timezones.spec.js.map