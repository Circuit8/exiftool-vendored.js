import { BatchCluster } from "batch-cluster"
import * as _path from "path"

import { expect, testImg } from "./_chai.spec"
import { times } from "./Array"
import { DefaultMaxProcs, ExifTool, exiftool } from "./ExifTool"
import { Tags } from "./Tags"

describe("ExifTool", () => {
  const et = new ExifTool({ maxProcs: 2 })
  after(() => et.end())

  const truncated = _path.join(__dirname, "..", "test", "truncated.jpg")
  const noexif = _path.join(__dirname, "..", "test", "noexif.jpg")
  const img = _path.join(__dirname, "..", "test", "img.jpg")
  const img2 = _path.join(__dirname, "..", "test", "ExifTool.jpg")
  const nonEnglishImg = _path.join(__dirname, "..", "test", "中文.jpg")

  const packageJson = require("../package.json")

  function expectedExiftoolVersion(flavor: "exe" | "pl" = "pl"): string {
    const vendorVersion =
      packageJson.optionalDependencies["exiftool-vendored." + flavor]
    // Frakkin semver, which is pissy about 0-padded version numbers (srsly,
    // it's ok) and exiftool (which bumps the major version because minor hit 99
    // and you've got to maintain ascibetical sort order so...)
    // </rant>
    return vendorVersion
      .split(".")
      .slice(0, 2)
      .join(".")
  }

  it("perl and win32 versions match", () => {
    const pl = expectedExiftoolVersion("pl")
    const exe = expectedExiftoolVersion("exe")
    expect(pl).to.eql(exe)
  })

  it("returns the correct version", async function() {
    this.slow(500)
    return expect(await et.version()).to.eql(expectedExiftoolVersion())
  })

  it("returns a reasonable value for MaxProcs", () => {
    // 64 cpus on my dream laptop
    expect(DefaultMaxProcs).to.be.within(1, 64)
  })

  it("exports a singleton instance", () => {
    // don't call any methods that actually results in spinning up a child
    // proc:
    expect(exiftool.options.maxProcs).to.eql(DefaultMaxProcs)
  })

  it("returns expected results for a given file", async function() {
    this.slow(500)
    return expect(et.read(img).then(tags => tags.Model)).to.eventually.eql(
      "iPhone 7 Plus"
    )
  })

  it("returns expected results for a given file with non-english filename", async function() {
    this.slow(500)
    return expect(
      et.read(nonEnglishImg).then(tags => tags.Model)
    ).to.eventually.eql("iPhone 7 Plus")
  })

  it("renders Orientation as numbers", async () => {
    const tags = await et.read(img)
    expect(tags.Orientation).to.eql(1)
    return
  })

  it("omits OriginalImage{Width,Height} by default", async () => {
    const tags = await et.read(img2)
    expect(tags.Keywords).to.eql("jambalaya")
    expect(tags.ImageHeight).to.eql(8)
    expect(tags.ImageWidth).to.eql(8)
    expect(tags.OriginalImageHeight).to.be.undefined
    expect(tags.OriginalImageWidth).to.be.undefined
    return
  })

  it("extracts OriginalImage{Width,Height} if [] is provided to override the -fast option", async () => {
    const tags = await et.read(img2, [])
    expect(tags.Keywords).to.eql("jambalaya")
    expect(tags.ImageHeight).to.eql(8)
    expect(tags.ImageWidth).to.eql(8)
    expect(tags.OriginalImageHeight).to.eql(16)
    expect(tags.OriginalImageWidth).to.eql(16)
    return
  })

  it("returns warning for a truncated file", () => {
    return expect(
      et.read(truncated).then(tags => tags.Warning)
    ).to.eventually.eql("JPEG format error")
  })

  function normalize(tagNames: string[]): string[] {
    return tagNames
      .filter(i => i !== "FileInodeChangeDate" && i !== "FileCreateDate")
      .sort()
  }

  it("returns no exif metadata for an image with no headers", () => {
    return expect(
      et.read(noexif).then(tags => normalize(Object.keys(tags)))
    ).to.become(
      normalize([
        "BitsPerSample",
        "ColorComponents",
        "Directory",
        "EncodingProcess",
        "ExifToolVersion",
        "FileAccessDate",
        "FileModifyDate",
        "FileName",
        "FilePermissions",
        "FileSize",
        "FileType",
        "FileTypeExtension",
        "ImageHeight",
        "ImageSize",
        "ImageWidth",
        "Megapixels",
        "MIMEType",
        "SourceFile",
        "YCbCrSubSampling",
        "errors"
      ])
    )
  })

  it("returns error for missing file", () => {
    return expect(et.read("bogus")).to.eventually.be.rejectedWith(
      /ENOENT|file not found/i
    )
  })

  it("sets Error for unsupported file types", async () => {
    return expect((await et.read(__filename)).Error).to.match(
      /Unknown file type/i
    )
  })

  function assertReasonableTags(tags: Tags[]): void {
    tags.forEach(tag => {
      expect(tag.errors).to.be.empty
      expect(tag.MIMEType).to.eql("image/jpeg")
      expect(tag.GPSLatitude).to.be.within(-90, 90)
      expect(tag.GPSLongitude).to.be.within(-180, 180)
    })
  }

  it("ends procs when they've run > maxTasksPerProcess", async function() {
    this.slow(5000)
    const maxProcs = 8
    const maxTasksPerProcess = 15
    const et = new ExifTool({ maxProcs, maxTasksPerProcess })
    const promises = times(maxProcs * maxTasksPerProcess * 3, () =>
      et.read(img)
    )
    await Promise.all(promises)

    // Not all pids will be alive, so we have to grant some slop:
    expect((await et.pids).length).to.be.within(1, maxProcs * 1.5)

    const bc = et["batchCluster"] as BatchCluster
    const tags = await Promise.all(promises)
    expect(bc.meanTasksPerProc).to.be.within(
      maxTasksPerProcess - 3,
      maxTasksPerProcess
    )
    expect((await et.pids).length).to.be.within(1, maxProcs)
    assertReasonableTags(tags)
    await et.end()
    expect(await et.pids).to.eql([])
    return
  })

  it("ends with multiple procs", async function() {
    this.slow(500)
    const maxProcs = 4
    const et = new ExifTool({ maxProcs })
    try {
      const warmupTasks = await Promise.all(times(maxProcs, () => et.read(img)))
      expect((await et.pids).length).to.be.within(2, maxProcs)
      const secondTasks = await Promise.all(
        times(maxProcs * 4, () => et.read(img))
      )
      warmupTasks.forEach(t => expect(t).to.not.be.undefined)
      secondTasks.forEach(t => expect(t).to.not.be.undefined)
      await et.end()
      expect(await et.pids).to.eql([])
    } finally {
      et.end()
    }
    return
  })

  it("invalid images throw errors on write", async function() {
    this.slow(1000)
    const et = new ExifTool()
    try {
      const img = await testImg("bad-exif-ifd.jpg")
      expect(
        et.write(img, { AllDates: new Date().toISOString() })
      ).to.be.rejectedWith(/Duplicate MakerNoteUnknown/)
    } finally {
      et.end()
    }
    return
  })
})
