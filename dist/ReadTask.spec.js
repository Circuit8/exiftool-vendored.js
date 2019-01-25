"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _chai_spec_1 = require("./_chai.spec");
var ReadTask_1 = require("./ReadTask");
function parse(tags, err) {
    var tt = ReadTask_1.ReadTask.for("/tmp/example.jpg", []);
    tags.SourceFile = "/tmp/example.jpg";
    var json = JSON.stringify([tags]);
    return tt["parse"](json, err);
}
describe("Lat/Lon parsing", function () {
    /* Example:
      $ exiftool -j -coordFormat '%.8f' -fast ../test-images/important/Apple_iPhone7Plus.jpg | grep itude
      "GPSLatitudeRef": "North",
      "GPSLongitudeRef": "East",
      "GPSAltitudeRef": "Above Sea Level",
      "GPSAltitude": "73 m Above Sea Level",
      "GPSLatitude": 22.33543889,
      "GPSLongitude": 114.16401667,
     */
    it("N lat is positive", function () {
        _chai_spec_1.expect(parse({ GPSLatitude: 22.33543889, GPSLatitudeRef: "N" }).GPSLatitude).to.be.closeTo(22.33543889, 0.00001);
    });
    it("S lat is negative", function () {
        _chai_spec_1.expect(parse({ GPSLatitude: 33.84842123, GPSLatitudeRef: "S" }).GPSLatitude).to.be.closeTo(-33.84842123, 0.00001);
    });
    it("E lon is positive", function () {
        _chai_spec_1.expect(parse({ GPSLongitude: 114.16401667, GPSLongitudeRef: "E" }).GPSLongitude).to.be.closeTo(114.16401667, 0.00001);
    });
    it("W lon is negative", function () {
        _chai_spec_1.expect(parse({ GPSLongitude: 122.4406148, GPSLongitudeRef: "W" }).GPSLongitude).to.be.closeTo(-122.4406148, 0.00001);
    });
    it("parses lat lon even if timezone is given", function () {
        _chai_spec_1.expect(parse({ GPSLongitude: 122.4406148, GPSLongitudeRef: "W", OffsetTime: "+02:00" }).GPSLongitude).to.be.closeTo(-122.4406148, 0.00001);
    });
});
describe("Time zone extraction", function () {
    it("finds singular positive TimeZoneOffset and sets accordingly", function () {
        var t = parse({
            TimeZoneOffset: 9,
            DateTimeOriginal: "2016:08:12 13:28:50"
        });
        _chai_spec_1.expect(t.DateTimeOriginal.tzoffsetMinutes).to.eql(9 * 60);
    });
    it("finds positive array TimeZoneOffset and sets accordingly", function () {
        var t = parse({
            TimeZoneOffset: [9, 8],
            DateTimeOriginal: "2016:08:12 13:28:50"
        });
        _chai_spec_1.expect(t.DateTimeOriginal.tzoffsetMinutes).to.eql(9 * 60);
    });
    it("finds zulu TimeZoneOffset and sets accordingly", function () {
        var t = parse({
            TimeZoneOffset: 0,
            DateTimeOriginal: "2016:08:12 13:28:50"
        });
        _chai_spec_1.expect(t.DateTimeOriginal.tzoffsetMinutes).to.eql(0);
    });
    it("finds negative TimeZoneOffset in array and sets accordingly", function () {
        var t = parse({
            TimeZoneOffset: [-4],
            DateTimeOriginal: "2016:08:12 13:28:50"
        });
        _chai_spec_1.expect(t.DateTimeOriginal.tzoffsetMinutes).to.eql(-4 * 60);
    });
    it("respects positive HH:MM OffsetTime", function () {
        var t = parse({
            OffsetTime: "+02:30",
            DateTimeOriginal: "2016:08:12 13:28:50"
        });
        _chai_spec_1.expect(t.DateTimeOriginal.tzoffsetMinutes).to.eql(2 * 60 + 30);
    });
    it("respects positive HH OffsetTime", function () {
        var t = parse({
            OffsetTime: "+07",
            DateTimeOriginal: "2016:08:12 13:28:50"
        });
        _chai_spec_1.expect(t.DateTimeOriginal.tzoffsetMinutes).to.eql(7 * 60);
    });
    it("respects negative HH:MM OffsetTime", function () {
        var t = parse({
            OffsetTime: "-06:30",
            DateTimeOriginal: "2016:08:12 13:28:50"
        });
        _chai_spec_1.expect(t.DateTimeOriginal.tzoffsetMinutes).to.eql(-(6 * 60 + 30));
    });
    it("respects negative HH OffsetTime", function () {
        var t = parse({
            OffsetTime: "-9",
            DateTimeOriginal: "2016:08:12 13:28:50"
        });
        _chai_spec_1.expect(t.DateTimeOriginal.tzoffsetMinutes).to.eql(-9 * 60);
    });
    it("determines timezone offset from GPS (specifically, Landscape Arch!)", function () {
        var t = parse({
            GPSLatitude: 38.791121,
            GPSLatitudeRef: "N",
            GPSLongitude: 109.606407,
            GPSLongitudeRef: "W",
            DateTimeOriginal: "2016:08:12 13:28:50"
        });
        _chai_spec_1.expect(t.DateTimeOriginal.tzoffsetMinutes).to.eql(-6 * 60);
    });
    it("uses GPSDateTime and DateTimeOriginal and sets accordingly for -7", function () {
        var t = parse({
            DateTimeOriginal: "2016:10:19 11:15:14",
            GPSDateTime: "2016:10:19 18:15:12",
            DateTimeCreated: "2016:10:19 11:15:14"
        });
        _chai_spec_1.expect(t.DateTimeOriginal.tzoffsetMinutes).to.eql(-7 * 60);
        _chai_spec_1.expect(t.DateTimeCreated.tzoffsetMinutes).to.eql(-7 * 60);
    });
    it("uses GPSDateTime and DateTimeOriginal and sets accordingly for +8", function () {
        var t = parse({
            DateTimeOriginal: "2016:08:12 13:28:50",
            GPSDateTime: "2016:08:12 05:28:49Z",
            DateTimeCreated: "2016:08:12 13:28:50"
        });
        _chai_spec_1.expect(t.DateTimeOriginal.tzoffsetMinutes).to.eql(8 * 60);
        _chai_spec_1.expect(t.DateTimeCreated.tzoffsetMinutes).to.eql(8 * 60);
    });
    it("renders SubSecDateTimeOriginal for -8", function () {
        var t = parse({
            DateTimeOriginal: "2016:12:13 09:05:27",
            GPSDateTime: "2016:12:13 17:05:25Z",
            SubSecDateTimeOriginal: "2016:12:13 09:05:27.12038200"
        });
        _chai_spec_1.expect(t.SubSecDateTimeOriginal.tzoffsetMinutes).to.eql(-8 * 60);
        _chai_spec_1.expect(t.SubSecDateTimeOriginal.toString()).to.eql("2016-12-13T09:05:27.120-08:00");
    });
    it("skips invalid timestamps", function () {
        var t = parse({
            DateTimeOriginal: "2016:08:12 13:28:50",
            GPSDateTime: "not a timestamp"
        });
        _chai_spec_1.expect(t.DateTimeOriginal.tzoffsetMinutes).to.be.undefined;
    });
});
describe("SubSecDateTimeOriginal", function () {
    it("extracts datetimestamp with millis", function () {
        var t = parse({ SubSecDateTimeOriginal: "2016:10:19 11:15:14.437831" })
            .SubSecDateTimeOriginal;
        _chai_spec_1.expect(t.year).to.eql(2016);
        _chai_spec_1.expect(t.month).to.eql(10);
        _chai_spec_1.expect(t.day).to.eql(19);
        _chai_spec_1.expect(t.hour).to.eql(11);
        _chai_spec_1.expect(t.minute).to.eql(15);
        _chai_spec_1.expect(t.second).to.eql(14);
        _chai_spec_1.expect(t.tzoffsetMinutes).to.be.undefined;
        _chai_spec_1.expect(t.millis).to.eql(437);
        var d = t.toDate();
        _chai_spec_1.expect(d.getFullYear()).to.eql(2016);
        _chai_spec_1.expect(d.getMonth()).to.eql(10 - 1);
        _chai_spec_1.expect(d.getDate()).to.eql(19);
        _chai_spec_1.expect(d.getHours()).to.eql(11);
        _chai_spec_1.expect(d.getMinutes()).to.eql(15);
        _chai_spec_1.expect(d.getSeconds()).to.eql(14);
        _chai_spec_1.expect(d.getMilliseconds()).to.eql(437); // Javascript Date doesn't do fractional millis.
    });
});
//# sourceMappingURL=ReadTask.spec.js.map