"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _chai_spec_1 = require("./_chai.spec");
var ExifDateTime_1 = require("./ExifDateTime");
describe("ExifDateTime", function () {
    describe("example strings with no tz", function () {
        var iso = "2016-08-12T07:28:50.768";
        var dt = ExifDateTime_1.ExifDateTime.fromEXIF("2016:08:12 07:28:50.768120");
        var dtIso = ExifDateTime_1.ExifDateTime.fromEXIF(iso);
        it("parses year/month/day", function () {
            _chai_spec_1.expect([dt.year, dt.month, dt.day]).to.eql([2016, 8, 12]);
        });
        it("parses ISO year/month/day", function () {
            _chai_spec_1.expect([dtIso.year, dtIso.month, dtIso.day]).to.eql([2016, 8, 12]);
        });
        it("parses hour/minute/second/millis", function () {
            _chai_spec_1.expect([dt.hour, dt.minute, dt.second]).to.eql([7, 28, 50]);
            _chai_spec_1.expect(dt.millis).to.eql(768);
        });
        it(".toDate() renders a valid Date", function () {
            var d = dt.toDate();
            _chai_spec_1.expect(d.getFullYear()).to.eql(2016);
            _chai_spec_1.expect(d.getMonth()).to.eql(8 - 1);
            _chai_spec_1.expect(d.getDate()).to.eql(12);
            _chai_spec_1.expect(d.getHours()).to.eql(7);
            _chai_spec_1.expect(d.getMinutes()).to.eql(28);
            _chai_spec_1.expect(d.getSeconds()).to.eql(50);
            _chai_spec_1.expect(d.getMilliseconds()).to.eql(768);
        });
        it("ISO .toString()s", function () {
            _chai_spec_1.expect(dt.toString()).to.eql(iso);
        });
        it(".toISOString() matches .toString()", function () {
            _chai_spec_1.expect(dt.toISOString()).to.eql(iso);
        });
        it("Renders a Date assuming the current timezone offset", function () {
            _chai_spec_1.expect(dt.toDate().toLocaleString("en-US")).to.eql("8/12/2016, 7:28:50 AM");
        });
        it("Round-trips from ISO", function () {
            _chai_spec_1.expect(ExifDateTime_1.ExifDateTime.fromISO(iso)).to.eql(dt);
        });
    });
    describe("example strings with UTC tzoffset", function () {
        var dt = ExifDateTime_1.ExifDateTime.fromEXIF("2011:01:23 18:19:20", "utc");
        it("parses year/month/day", function () {
            _chai_spec_1.expect([dt.year, dt.month, dt.day]).to.eql([2011, 1, 23]);
        });
        it("parses hour/minute/second", function () {
            _chai_spec_1.expect([dt.hour, dt.minute, dt.second]).to.eql([18, 19, 20]);
        });
        it("parses tzoffset", function () {
            _chai_spec_1.expect(dt.tzoffsetMinutes).to.eql(0);
        });
        it(".toISOString", function () {
            _chai_spec_1.expect(dt.toISOString()).to.eql("2011-01-23T18:19:20.000Z");
        });
        it(".toISOString() matches .toString()", function () {
            _chai_spec_1.expect(dt.toISOString()).to.eql(dt.toString());
        });
        it("Renders a Date assuming the current timezone offset", function () {
            var d = dt.toDate();
            var actual = [d.getUTCFullYear(), d.getUTCMonth() + 1, d.getUTCDate()];
            _chai_spec_1.expect(actual).to.eql([2011, 1, 23]);
            _chai_spec_1.expect([
                d.getUTCHours(),
                d.getUTCMinutes(),
                d.getUTCSeconds(),
                d.getUTCMilliseconds()
            ]).to.eql([18, 19, 20, 0]);
        });
        it("Renders a UTC Date assuming the current timezone offset", function () {
            _chai_spec_1.expect(dt.toDate().toISOString()).to.eql("2011-01-23T18:19:20.000Z");
        });
    });
    describe("example strings with tz and no millis", function () {
        var dt = ExifDateTime_1.ExifDateTime.fromEXIF("2013:12:30 11:04:15-05:00");
        it("parses year/month/day", function () {
            _chai_spec_1.expect([dt.year, dt.month, dt.day]).to.eql([2013, 12, 30]);
        });
        it("parses hour/minute/second", function () {
            _chai_spec_1.expect([dt.hour, dt.minute, dt.second]).to.eql([11, 4, 15]);
        });
        it("parses tzoffset", function () {
            _chai_spec_1.expect(dt.tzoffsetMinutes).to.eql(-60 * 5);
        });
        it(".toISOString", function () {
            _chai_spec_1.expect(dt.toISOString()).to.eql("2013-12-30T11:04:15.000-05:00");
        });
        it(".toISOString() matches .toString()", function () {
            _chai_spec_1.expect(dt.toISOString()).to.eql(dt.toString());
        });
        it("Renders a Date assuming the forced timezone offset", function () {
            var d = dt.toDate();
            var actual = [d.getUTCFullYear(), d.getUTCMonth() + 1, d.getUTCDate()];
            _chai_spec_1.expect(actual).to.eql([2013, 12, 30]);
            _chai_spec_1.expect([
                d.getUTCHours(),
                d.getUTCMinutes(),
                d.getUTCSeconds(),
                d.getUTCMilliseconds()
            ]).to.eql([11 + 5, 4, 15, 0]);
        });
        it("Renders a UTC Date assuming the current timezone offset", function () {
            _chai_spec_1.expect(dt.toDate().toISOString()).to.eql("2013-12-30T16:04:15.000Z");
        });
    });
    describe("example strings with tz and millis", function () {
        var edt = ExifDateTime_1.ExifDateTime.fromEXIF("2013:12:30 03:04:15.079321-05:00");
        it("parses year/month/day", function () {
            _chai_spec_1.expect([edt.year, edt.month, edt.day]).to.eql([2013, 12, 30]);
        });
        it("parses hour/minute/second/millis", function () {
            _chai_spec_1.expect([edt.hour, edt.minute, edt.second]).to.eql([3, 4, 15]);
            _chai_spec_1.expect(edt.millis).to.be.eql(79);
        });
        it("parses tzoffset", function () {
            _chai_spec_1.expect(edt.tzoffsetMinutes).to.eql(-60 * 5);
        });
        it(".toISOString", function () {
            _chai_spec_1.expect(edt.toISOString()).to.eql("2013-12-30T03:04:15.079-05:00");
        });
        it(".toISOString() matches .toString()", function () {
            _chai_spec_1.expect(edt.toISOString()).to.eql(edt.toString());
        });
        it("Renders a Date assuming the forced timezone offset", function () {
            var d = edt.toDate();
            _chai_spec_1.expect([d.getUTCFullYear(), d.getUTCMonth() + 1, d.getUTCDate()]).to.eql([
                2013,
                12,
                30
            ]);
            _chai_spec_1.expect([
                d.getUTCHours(),
                d.getUTCMinutes(),
                d.getUTCSeconds(),
                d.getUTCMilliseconds()
            ]).to.eql([3 + 5, 4, 15, 79]);
        });
        it("Renders a UTC Date assuming the current timezone offset", function () {
            // javascript doesn't maintain fractional millis precision:
            _chai_spec_1.expect(edt.toDate().toISOString()).to.eql("2013-12-30T08:04:15.079Z");
        });
    });
    describe("parsing empty/invalid input", function () {
        var examples = [
            "",
            "     ",
            "0000:00:00 00:00:00",
            "0000:00:00",
            "0001:01:01 00:00:00.00",
            "0001:01:01",
            "    :  :     :  :  "
        ];
        examples.forEach(function (bad) {
            it(bad + " for DateTimeOriginal", function () {
                _chai_spec_1.expect(ExifDateTime_1.ExifDateTime.fromEXIF(bad)).to.be.undefined;
            });
            it(bad + " for SubSecCreateDate", function () {
                _chai_spec_1.expect(ExifDateTime_1.ExifDateTime.fromEXIF("SubSecCreateDate")).to.be.undefined;
            });
        });
    });
});
//# sourceMappingURL=ExifDateTime.spec.js.map