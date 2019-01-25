"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _chai_spec_1 = require("./_chai.spec");
var ExifDate_1 = require("./ExifDate");
describe("ExifDateTime", function () {
    ;
    [
        { text: "2018:9:3", iso: "2018-09-03" },
        { text: "2018:02:09", iso: "2018-02-09" },
        { text: "2018:10:30", iso: "2018-10-30" },
        { text: "Mar 4 2018", iso: "2018-03-04" },
        { text: "April 09 2018", iso: "2018-04-09" }
    ].forEach(function (_a) {
        var text = _a.text, iso = _a.iso;
        it("parses " + iso, function () {
            _chai_spec_1.expect(ExifDate_1.ExifDate.fromEXIF(text).toISOString()).to.eql(iso);
        });
    });
});
//# sourceMappingURL=ExifDate.spec.js.map