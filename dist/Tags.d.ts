import { ExifDate } from "./ExifDate";
import { ExifDateTime } from "./ExifDateTime";
import { ExifTime } from "./ExifTime";
export interface EXIFTags {
    /** ★★★☆ ✔ Examples: [9016997700,"Inf"] */
    ApertureValue?: number | string;
    /** ☆☆☆☆ ✔ Example: "Ansel Adams" */
    Artist?: string;
    /** ☆☆☆☆ ✔ Examples: ["8 8 8",8] */
    BitsPerSample?: string | number;
    /** ☆☆☆☆ ✔ Example: 128 */
    BlackLevelBlue?: number;
    /** ☆☆☆☆ ✔ Example: 128 */
    BlackLevelGreen?: number;
    /** ☆☆☆☆ ✔ Example: 128 */
    BlackLevelRed?: number;
    /** ★★☆☆ ✔ Examples: [9.9919505,"inf"] */
    BrightnessValue?: number | string;
    /** ☆☆☆☆ ✔ Example: "[Red,Green][Green,Blue]" */
    CFAPattern?: string;
    /** ☆☆☆☆ ✔ Example: "2 1 1 0" */
    CFAPattern2?: string;
    /** ☆☆☆☆ ✔ Example: "2 2" */
    CFARepeatPatternDim?: string;
    /** ☆☆☆☆ ✔ Example: "[Red,Green][Green,Blue]" */
    CR2CFAPattern?: string;
    /** ☆☆☆☆ ✔ Example: "22 -128 0 0 0 128 128 256 384 384 512 6…" */
    ChromaticAberrationCorrParams?: string;
    /** ☆☆☆☆ ✔ Example: "Auto" */
    ChromaticAberrationCorrection?: string;
    /** ★★★★ ✔ Example: "sRGB" */
    ColorSpace?: string;
    /** ★★★★ ✔ Example: "Y, Cr, Cb, -" */
    ComponentsConfiguration?: string;
    /** ★★★☆ ✔ Examples: [90,"inf"] */
    CompressedBitsPerPixel?: number | string;
    /** ★★★★ ✔ Example: "Unknown (0)" */
    Compression?: string;
    /** ★★★☆ ✔ Example: "Unknown (5)" */
    Contrast?: string;
    /** ☆☆☆☆ ✔ Example: "© Chuckles McSnortypants, Inc." */
    Copyright?: string;
    /** ★★★★ ✔ Examples: ["2218-09-22T02:32:14.000","M008:11:14 09:52:32",2] */
    CreateDate?: ExifDateTime | string | number;
    /** ★★★☆ ✔ Example: "Unknown (7)" */
    CustomRendered?: string;
    /** ★★★★ ✔ Examples: ["2218-09-22T02:32:14.000","?\n",2,"2007-11-21"] */
    DateTimeOriginal?: ExifDateTime | string | number | ExifDate;
    /** ☆☆☆☆ ✔ Example: "(Binary data 536 bytes, use -b option t…" */
    DeviceSettingDescription?: string;
    /** ★★★☆ ✔ Examples: [8.1319764,"inf"] */
    DigitalZoomRatio?: number | string;
    /** ☆☆☆☆ ✔ Example: "11 32 4 -36 -83 -142 -208 -286 -363 -44…" */
    DistortionCorrParams?: string;
    /** ☆☆☆☆ ✔ Example: "Auto fixed by lens" */
    DistortionCorrection?: string;
    /** ★★★★ ✔ Examples: [990,"392 0"] */
    ExifImageHeight?: number | string;
    /** ★★★★ ✔ Examples: [999,"388 0"] */
    ExifImageWidth?: number | string;
    /** ★★★★ ✔ Examples: ["Version 2.2",220] */
    ExifVersion?: string | number;
    /** ★★★☆ ✔ Examples: [0,"-5/3"] */
    ExposureCompensation?: number | string;
    /** ☆☆☆☆ ✔ Example: 83 */
    ExposureIndex?: number;
    /** ★★★☆ ✔ Example: "Unknown ()" */
    ExposureMode?: string;
    /** ★★★☆ ✔ Example: "Unknown (8112)" */
    ExposureProgram?: string;
    /** ★★★★ ✔ Examples: ["Inf",8] */
    ExposureTime?: string | number;
    /** ★★★★ ✔ Examples: [90,"inf"] */
    FNumber?: number | string;
    /** ★★★☆ ✔ Example: "Unknown (DSC)" */
    FileSource?: string;
    /** ★★★★ ✔ Example: "Unknown (0xffff)" */
    Flash?: string;
    /** ☆☆☆☆   Example: 54 */
    FlashEnergy?: number;
    /** ★★★★ ✔ Examples: ["?\u0002",32] */
    FlashpixVersion?: string | number;
    /** ★★★★ ✔ Example: "99.7 mm" */
    FocalLength?: string;
    /** ★★☆☆ ✔ Example: "9920 mm" */
    FocalLengthIn35mmFormat?: string;
    /** ★★☆☆ ✔ Example: "um" */
    FocalPlaneResolutionUnit?: string;
    /** ★★☆☆ ✔ Example: 9941.7476 */
    FocalPlaneXResolution?: number;
    /** ★★☆☆ ✔ Example: 9846.1538 */
    FocalPlaneYResolution?: number;
    /** ☆☆☆☆ ✔ Example: 99 */
    GPSAltitude?: number;
    /** ☆☆☆☆ ✔ Example: 2 */
    GPSAltitudeRef?: number;
    /** ☆☆☆☆   Example: "府中市郷土の森博物館" */
    GPSAreaInformation?: string;
    /** ☆☆☆☆ ✔ Example: 9 */
    GPSDOP?: number;
    /** ☆☆☆☆ ✔ Examples: ["2020-07-08","2000:00:00"] */
    GPSDateStamp?: ExifDate | string;
    /** ☆☆☆☆ ✔ Example: 86.180049 */
    GPSDestBearing?: number;
    /** ☆☆☆☆ ✔ Example: "T" */
    GPSDestBearingRef?: string;
    /** ☆☆☆☆   Example: "K" */
    GPSDestDistanceRef?: string;
    /** ☆☆☆☆   Example: 1 */
    GPSDifferential?: number;
    /** ☆☆☆☆ ✔ Example: 65 */
    GPSHPositioningError?: number;
    /** ☆☆☆☆ ✔ Example: 94.800416 */
    GPSImgDirection?: number;
    /** ☆☆☆☆ ✔ Example: "T" */
    GPSImgDirectionRef?: string;
    /** ☆☆☆☆ ✔ Example: 48.857748 */
    GPSLatitude?: number;
    /** ☆☆☆☆ ✔ Example: "S" */
    GPSLatitudeRef?: string;
    /** ☆☆☆☆ ✔ Example: 2.2918888 */
    GPSLongitude?: number;
    /** ☆☆☆☆ ✔ Example: "W" */
    GPSLongitudeRef?: string;
    /** ☆☆☆☆   Example: "WGS84" */
    GPSMapDatum?: string;
    /** ☆☆☆☆   Example: 3 */
    GPSMeasureMode?: number;
    /** ☆☆☆☆ ✔ Examples: ["fused",0] */
    GPSProcessingMethod?: string | number;
    /** ☆☆☆☆   Examples: [7,"??B??"] */
    GPSSatellites?: number | string;
    /** ☆☆☆☆ ✔ Example: 5 */
    GPSSpeed?: number;
    /** ☆☆☆☆ ✔ Example: "N" */
    GPSSpeedRef?: string;
    /** ☆☆☆☆ ✔ Example: "V" */
    GPSStatus?: string;
    /** ☆☆☆☆ ✔ Example: "23:59:41.001" */
    GPSTimeStamp?: ExifTime;
    /** ☆☆☆☆   Example: 71.76 */
    GPSTrack?: number;
    /** ☆☆☆☆   Example: "T" */
    GPSTrackRef?: string;
    /** ☆☆☆☆ ✔ Examples: ["50 51 48 48",2200] */
    GPSVersionID?: string | number;
    /** ★★☆☆ ✔ Example: "Unknown (8176)" */
    GainControl?: string;
    /** ☆☆☆☆ ✔ Example: 2.2 */
    Gamma?: number;
    /** ☆☆☆☆ ✔ Example: 1 */
    HighISOMultiplierBlue?: number;
    /** ☆☆☆☆ ✔ Example: 1 */
    HighISOMultiplierGreen?: number;
    /** ☆☆☆☆ ✔ Example: 1 */
    HighISOMultiplierRed?: number;
    /** ☆☆☆☆ ✔ Example: "iPhone (iPhone OS 8.1.2)" */
    HostComputer?: string;
    /** ★★★☆ ✔ Examples: [99,"80, 0"] */
    ISO?: number | string;
    /** ☆☆☆☆   Example: 339 */
    ISOSpeed?: number;
    /** ★★☆☆ ✔ Examples: ["untitled",39] */
    ImageDescription?: string | number;
    /** ☆☆☆☆ ✔ Example: 960 */
    ImageHeight?: number;
    /** ☆☆☆☆ ✔ Examples: ["fa5fdfee65f3a6e05fe7d4692b9112a7",0] */
    ImageUniqueID?: string | number;
    /** ☆☆☆☆ ✔ Example: 96 */
    ImageWidth?: number;
    /** ★★★★ ✔ Example: "Unknown ([None])" */
    InteropIndex?: string;
    /** ★★★★ ✔ Example: "undef undef undef" */
    InteropVersion?: string;
    /** ☆☆☆☆ ✔ Example: "(Binary data 926720 bytes, use -b optio…" */
    JpgFromRaw?: string;
    /** ☆☆☆☆ ✔ Example: 845574 */
    JpgFromRawLength?: number;
    /** ☆☆☆☆ ✔ Example: 978944 */
    JpgFromRawStart?: number;
    /** ☆☆☆☆ ✔ Examples: ["?mm f/?",201] */
    LensInfo?: string | number;
    /** ☆☆☆☆ ✔ Examples: ["SIGMA",0] */
    LensMake?: string | number;
    /** ☆☆☆☆ ✔ Examples: ["smc PENTAX-D FA 50mm F2.8 Macro",8008] */
    LensModel?: string | number;
    /** ☆☆☆☆ ✔ Examples: ["N/A",9205000000] */
    LensSerialNumber?: string | number;
    /** ★★★☆ ✔ Example: "White Fluorescent" */
    LightSource?: string;
    /** ☆☆☆☆ ✔ Example: 4095 */
    LinearityLimitBlue?: number;
    /** ☆☆☆☆ ✔ Example: 4095 */
    LinearityLimitGreen?: number;
    /** ☆☆☆☆ ✔ Example: 4095 */
    LinearityLimitRed?: number;
    /** ★★★★ ✔ Example: "samsung" */
    Make?: string;
    /** ☆☆☆☆   Example: "(Binary data 688 bytes, use -b option t…" */
    MakerNoteMinolta3?: string;
    /** ☆☆☆☆   Example: "(Binary data 3072 bytes, use -b option …" */
    MakerNoteSamsung1a?: string;
    /** ☆☆☆☆   Example: "(Binary data 66 bytes, use -b option to…" */
    MakerNoteUnknownBinary?: string;
    /** ☆☆☆☆   Examples: ["}:-",0] */
    MakerNoteUnknownText?: string | number;
    /** ★★★☆ ✔ Example: 9.1 */
    MaxApertureValue?: number;
    /** ★★★★ ✔ Example: "Unknown (7968)" */
    MeteringMode?: string;
    /** ★★★★ ✔ Examples: ["x530",8800] */
    Model?: string | number;
    /** ★★★★ ✔ Examples: ["2216-02-28T03:49:50.000","jun 11, 2014 6:33:30",3,"2007-11-21"] */
    ModifyDate?: ExifDateTime | string | number | ExifDate;
    /** ☆☆☆☆   Example: 6 */
    Noise?: number;
    /** ☆☆☆☆ ✔ Example: "5 100 4 4 4 200 8 8 8 400 16 16 16 800 …" */
    NoiseReductionParams?: string;
    /** ☆☆☆☆ ✔ Example: 58 */
    OffsetSchema?: number;
    /** ☆☆☆☆   Example: "-08:00" */
    OffsetTime?: string;
    /** ☆☆☆☆   Example: "-08:00" */
    OffsetTimeDigitized?: string;
    /** ☆☆☆☆   Example: "-08:00" */
    OffsetTimeOriginal?: string;
    /** ★★★★ ✔ Example: 8 */
    Orientation?: number;
    /** ☆☆☆☆ ✔ Example: "(Binary data 941265 bytes, use -b optio…" */
    OtherImage?: string;
    /** ☆☆☆☆ ✔ Example: 941265 */
    OtherImageLength?: number;
    /** ☆☆☆☆ ✔ Example: 755 */
    OtherImageStart?: number;
    /** ☆☆☆☆ ✔ Example: "Itsa Myowna" */
    OwnerName?: string;
    /** ☆☆☆☆ ✔ Example: "(Binary data 2060 bytes, use -b option …" */
    Padding?: string;
    /** ☆☆☆☆   Example: "Reflective" */
    PageName?: string;
    /** ☆☆☆☆ ✔ Example: "0330" */
    PanasonicRawVersion?: string;
    /** ☆☆☆☆ ✔ Example: "YCbCr" */
    PhotometricInterpretation?: string;
    /** ☆☆☆☆ ✔ Example: "Chunky" */
    PlanarConfiguration?: string;
    /** ☆☆☆☆ ✔ Example: "2015-06-02T09:56:01.000+01:00" */
    PreviewDateTime?: ExifDateTime;
    /** ☆☆☆☆ ✔ Example: "(Binary data 895146 bytes, use -b optio…" */
    PreviewImage?: string;
    /** ☆☆☆☆ ✔ Example: 895146 */
    PreviewImageLength?: number;
    /** ☆☆☆☆ ✔ Example: 9996 */
    PreviewImageStart?: number;
    /** ☆☆☆☆   Example: "0.64 0.33 0.3 0.6 0.15 0.06" */
    PrimaryChromaticities?: string;
    /** ☆☆☆☆ ✔ Examples: ["digiKam-4.13.0",48.3165] */
    ProcessingSoftware?: string | number;
    /** ☆☆☆☆ ✔ Example: 3 */
    Rating?: number;
    /** ☆☆☆☆ ✔ Example: 50 */
    RatingPercent?: number;
    /** ☆☆☆☆ ✔ Example: 928768 */
    RawDataOffset?: number;
    /** ☆☆☆☆ ✔ Example: 4 */
    RawFormat?: number;
    /** ☆☆☆☆ ✔ Example: "3 1440 1440" */
    RawImageSegmentation?: string;
    /** ☆☆☆☆ ✔ Example: 800 */
    RecommendedExposureIndex?: number;
    /** ☆☆☆☆ ✔ Example: "0 255 128 255 128 255" */
    ReferenceBlackWhite?: string;
    /** ☆☆☆☆   Example: "JPEG Exif Ver 2.2" */
    RelatedImageFileFormat?: string;
    /** ★☆☆☆ ✔ Examples: [960,"0996:1232"] */
    RelatedImageHeight?: number | string;
    /** ★☆☆☆ ✔ Examples: [800,"1000:1016"] */
    RelatedImageWidth?: number | string;
    /** ☆☆☆☆   Example: "xxx.avi" */
    RelatedSoundFile?: string;
    /** ★★★★ ✔ Example: "inches" */
    ResolutionUnit?: string;
    /** ☆☆☆☆ ✔ Example: 96 */
    RowsPerStrip?: number;
    /** ☆☆☆☆ ✔ Example: 4 */
    SRawType?: number;
    /** ☆☆☆☆ ✔ Example: 3 */
    SamplesPerPixel?: number;
    /** ★★★☆ ✔ Example: "Unknown (8)" */
    Saturation?: string;
    /** ★★★☆ ✔ Example: "Unknown (8160)" */
    SceneCaptureType?: string;
    /** ★★★☆ ✔ Example: "Unknown (9)" */
    SceneType?: string;
    /** ★★★☆ ✔ Example: "Unknown (74)" */
    SensingMethod?: string;
    /** ★☆☆☆ ✔ Example: "Unknown" */
    SensitivityType?: string;
    /** ☆☆☆☆ ✔ Example: 3456 */
    SensorBottomBorder?: number;
    /** ☆☆☆☆ ✔ Example: 3464 */
    SensorHeight?: number;
    /** ☆☆☆☆ ✔ Example: 8 */
    SensorLeftBorder?: number;
    /** ☆☆☆☆ ✔ Example: 4600 */
    SensorRightBorder?: number;
    /** ☆☆☆☆ ✔ Example: 8 */
    SensorTopBorder?: number;
    /** ☆☆☆☆ ✔ Example: 4816 */
    SensorWidth?: number;
    /** ☆☆☆☆ ✔ Examples: ["aaaaaaaaaaaa",991099000000] */
    SerialNumber?: string | number;
    /** ★★★☆ ✔ Example: "Unknown (7824)" */
    Sharpness?: string;
    /** ★★★☆ ✔ Examples: ["1/999963365",8] */
    ShutterSpeedValue?: string | number;
    /** ★★★☆ ✔ Examples: ["www.photocleaner.com",909281] */
    Software?: string | number;
    /** ☆☆☆☆ ✔ Example: "Sony Compressed RAW" */
    SonyRawFileType?: string;
    /** ☆☆☆☆ ✔ Example: "8000 10400 12900 14100" */
    SonyToneCurve?: string;
    /** ☆☆☆☆   Examples: [668058300,"Spatial freq. (cy/sample)=0,0.025000000…"] */
    SpatialFrequencyResponse?: number | string;
    /** ☆☆☆☆   Example: 800 */
    StandardOutputSensitivity?: number;
    /** ☆☆☆☆ ✔ Examples: [9600,"(Binary data 401 bytes, use -b option t…"] */
    StripByteCounts?: number | string;
    /** ☆☆☆☆ ✔ Examples: [986,"(Binary data 518 bytes, use -b option t…"] */
    StripOffsets?: number | string;
    /** ☆☆☆☆ ✔ Examples: [988,"1"] */
    SubSecTime?: number | string;
    /** ☆☆☆☆ ✔ Examples: [98,"2010:06:04 18:17:21"] */
    SubSecTimeDigitized?: number | string;
    /** ☆☆☆☆ ✔ Examples: [999,"2010:06:04 18:17:21"] */
    SubSecTimeOriginal?: number | string;
    /** ☆☆☆☆ ✔ Example: "Reduced-resolution image" */
    SubfileType?: string;
    /** ☆☆☆☆ ✔ Example: "967 967 1425 851" */
    SubjectArea?: string;
    /** ☆☆☆☆ ✔ Example: "99.99 m" */
    SubjectDistance?: string;
    /** ★★☆☆ ✔ Example: "Unknown (4400)" */
    SubjectDistanceRange?: string;
    /** ☆☆☆☆   Example: 1 */
    SubjectLocation?: number;
    /** ★★★★ ✔ Example: "(Binary data 9998 bytes, use -b option …" */
    ThumbnailImage?: string;
    /** ★★★★ ✔ Example: 9998 */
    ThumbnailLength?: number;
    /** ★★★★ ✔ Example: 998 */
    ThumbnailOffset?: number;
    /** ☆☆☆☆ ✔ Example: "(Binary data 57816 bytes, use -b option…" */
    ThumbnailTIFF?: string;
    /** ☆☆☆☆ ✔ Example: 512 */
    TileLength?: number;
    /** ☆☆☆☆ ✔ Example: 512 */
    TileWidth?: number;
    /** ☆☆☆☆   Example: "(Binary data 3636 bytes, use -b option …" */
    TransferFunction?: string;
    /** ☆☆☆☆ ✔ Example: "This is a comment." */
    UserComment?: string | number;
    /** ☆☆☆☆ ✔ Example: "11 0 32 144 352 640 1040 1536 2144 2848…" */
    VignettingCorrParams?: string;
    /** ☆☆☆☆ ✔ Example: "Auto" */
    VignettingCorrection?: string;
    /** ☆☆☆☆ ✔ Example: 538 */
    WBBlueLevel?: number;
    /** ☆☆☆☆ ✔ Example: 265 */
    WBGreenLevel?: number;
    /** ☆☆☆☆ ✔ Example: 737 */
    WBRedLevel?: number;
    /** ★★★☆ ✔ Example: "Unknown (65535)" */
    WhiteBalance?: string;
    /** ☆☆☆☆   Example: "0.4234 0.399" */
    WhitePoint?: string;
    /** ☆☆☆☆ ✔ Example: "Arturo DeImage" */
    XPAuthor?: string;
    /** ☆☆☆☆   Example: "This is a comment." */
    XPComment?: string;
    /** ☆☆☆☆ ✔ Example: "thermal, infrared, thermography, FLIR, …" */
    XPKeywords?: string;
    /** ☆☆☆☆   Example: "image thermique, thermal image" */
    XPSubject?: string;
    /** ☆☆☆☆   Example: "楆慮⁬敤琠牡敤攠⁭汉慨䈠汥Ⅱ" */
    XPTitle?: string;
    /** ★★★★ ✔ Example: 99 */
    XResolution?: number;
    /** ☆☆☆☆   Example: "0.299 0.587 0.114" */
    YCbCrCoefficients?: string;
    /** ★★★★ ✔ Example: "Unknown (0)" */
    YCbCrPositioning?: string;
    /** ☆☆☆☆   Example: "YCbCr4:2:2 (2 1)" */
    YCbCrSubSampling?: string;
    /** ★★★★ ✔ Example: 99 */
    YResolution?: number;
}
export interface ExifToolTags {
    /** ★★★★ ✔ Example: 11.2 */
    ExifToolVersion?: number;
    /** ☆☆☆☆   Example: "Unrecognized IPTC record 0 (ignored)" */
    Warning?: string;
}
export interface FileTags {
    /** ☆☆☆☆ ✔ Example: "Windows V3" */
    BMPVersion?: string;
    /** ☆☆☆☆ ✔ Example: 24 */
    BitDepth?: number;
    /** ★★★★ ✔ Example: 3 */
    ColorComponents?: number;
    /** ☆☆☆☆ ✔ Example: "This is a comment." */
    Comment?: string;
    /** ☆☆☆☆ ✔ Example: "ff5978eb5c164fa308177d41e817e08f" */
    CurrentIPTCDigest?: string;
    /** ★★★★ ✔ Example: "/home/username/pictures" */
    Directory?: string;
    /** ★★★★ ✔ Example: "Progressive DCT, Huffman coding" */
    EncodingProcess?: string;
    /** ★★★★ ✔ Example: "Little-endian (Intel, II)" */
    ExifByteOrder?: string;
    /** ★★★★ ✔ Example: "2018-11-29T15:13:39.000-08:00" */
    FileAccessDate?: ExifDateTime;
    /** ★★★★ ✔ Example: "2018-11-29T15:13:20.000-08:00" */
    FileInodeChangeDate?: ExifDateTime;
    /** ★★★★ ✔ Example: "2018-11-29T15:13:20.000-08:00" */
    FileModifyDate?: ExifDateTime;
    /** ★★★★ ✔ Example: "truncated.jpg" */
    FileName?: string;
    /** ★★★★ ✔ Example: "rwxrwx---" */
    FilePermissions?: string;
    /** ★★★★ ✔ Example: "990 bytes" */
    FileSize?: string;
    /** ★★★★ ✔ Example: "RW2" */
    FileType?: string;
    /** ★★★★ ✔ Example: "rw2" */
    FileTypeExtension?: string;
    /** ☆☆☆☆ ✔ Example: 230400 */
    ImageLength?: number;
    /** ★★★★ ✔ Example: "video/x-msvideo" */
    MIMEType?: string;
    /** ☆☆☆☆ ✔ Example: "Use BitDepth" */
    NumColors?: string;
    /** ☆☆☆☆ ✔ Example: "All" */
    NumImportantColors?: string;
    /** ☆☆☆☆ ✔ Example: 0 */
    PixelsPerMeterX?: number;
    /** ☆☆☆☆ ✔ Example: 0 */
    PixelsPerMeterY?: number;
    /** ☆☆☆☆ ✔ Example: 1 */
    Planes?: number;
    /** ☆☆☆☆ ✔ Example: "0400" */
    RAFVersion?: string;
}
export interface MakerNotesTags {
    /** ☆☆☆☆   Example: 9.9 */
    AEAperture?: number;
    /** ☆☆☆☆   Example: 8 */
    AEApertureSteps?: number;
    /** ☆☆☆☆ ✔ Example: "On" */
    AEBAutoCancel?: string;
    /** ★☆☆☆ ✔ Examples: [0,"+1/3"] */
    AEBBracketValue?: number | string;
    /** ☆☆☆☆ ✔ Example: "0,-,+" */
    AEBSequence?: string;
    /** ☆☆☆☆ ✔ Example: "0,-,+/Enabled" */
    AEBSequenceAutoCancel?: string;
    /** ☆☆☆☆ ✔ Example: "7 shots" */
    AEBShotCount?: string;
    /** ☆☆☆☆   Example: 0.5 */
    AEBXv?: number;
    /** ☆☆☆☆ ✔ Example: "AE Bracketing Disabled" */
    AEBracketingSteps?: string;
    /** ☆☆☆☆   Examples: ["1/965",1.5] */
    AEExposureTime?: string | number;
    /** ☆☆☆☆ ✔ Example: "On" */
    AELock?: string;
    /** ☆☆☆☆ ✔ Example: "AF Lock Only" */
    AELockButton?: string;
    /** ☆☆☆☆ ✔ Example: "None" */
    AELockButtonPlusDials?: string;
    /** ☆☆☆☆   Example: 5.7 */
    AEMaxAperture?: number;
    /** ☆☆☆☆   Example: 5.7 */
    AEMaxAperture2?: number;
    /** ☆☆☆☆   Example: "[1], [2]" */
    AEMeteringMode?: string;
    /** ☆☆☆☆   Example: "Multi-segment" */
    AEMeteringMode2?: string;
    /** ☆☆☆☆   Example: "9.8 9.4 7.9 8.6 9.2 8.5 9.4 8.9 8.1 8.6…" */
    AEMeteringSegments?: string;
    /** ☆☆☆☆ ✔ Example: "Enable; 0; 8; 0" */
    AEMicroadjustment?: string;
    /** ☆☆☆☆   Example: 38 */
    AEMinAperture?: number;
    /** ☆☆☆☆   Example: "1/7723" */
    AEMinExposureTime?: string;
    /** ☆☆☆☆   Example: "Sv or Green Mode" */
    AEProgramMode?: string;
    /** ☆☆☆☆ ✔ Example: "Normal AE" */
    AESetting?: string;
    /** ☆☆☆☆   Example: "Daylight Fluorescent" */
    AEWhiteBalance?: string;
    /** ☆☆☆☆   Example: 0.5 */
    AEXv?: number;
    /** ☆☆☆☆   Example: 800 */
    AE_ISO?: number;
    /** ☆☆☆☆ ✔ Example: 0 */
    AFAccelDecelTracking?: number;
    /** ☆☆☆☆ ✔ Example: "Shutter/AF-On" */
    AFActivation?: string;
    /** ☆☆☆☆   Example: 0 */
    AFAdjustment?: number;
    /** ☆☆☆☆ ✔ Example: 5.8 */
    AFAperture?: number;
    /** ☆☆☆☆ ✔ Example: 840 */
    AFAreaHeight?: number;
    /** ☆☆☆☆ ✔ Example: "994 18 18 18 18 18 18 18 18" */
    AFAreaHeights?: string;
    /** ☆☆☆☆   Example: "Auto" */
    AFAreaIllumination?: string;
    /** ★★☆☆ ✔ Example: "Wide" */
    AFAreaMode?: string;
    /** ☆☆☆☆ ✔ Example: "Wide" */
    AFAreaModeSetting?: string;
    /** ☆☆☆☆   Examples: ["n/a",4] */
    AFAreaPointSize?: string | number;
    /** ☆☆☆☆ ✔ Example: "AF area selection button" */
    AFAreaSelectMethod?: string;
    /** ☆☆☆☆ ✔ Example: "M-Fn Button" */
    AFAreaSelectionMethod?: string;
    /** ☆☆☆☆ ✔ Example: 996 */
    AFAreaWidth?: number;
    /** ☆☆☆☆ ✔ Example: "994 18 18 18 18 18 18 18 18" */
    AFAreaWidths?: string;
    /** ☆☆☆☆   Example: 3008 */
    AFAreaXPosition?: number;
    /** ☆☆☆☆   Example: 632 */
    AFAreaXPosition1?: number;
    /** ☆☆☆☆ ✔ Examples: ["975 -1552 24104 0 45 24234 50 18214 74",0] */
    AFAreaXPositions?: string | number;
    /** ☆☆☆☆   Example: 744 */
    AFAreaYPosition?: number;
    /** ☆☆☆☆   Example: 420 */
    AFAreaYPosition1?: number;
    /** ☆☆☆☆ ✔ Examples: ["9 0 0 0 0 0 0 0 0",0] */
    AFAreaYPositions?: string | number;
    /** ☆☆☆☆   Example: "n/a" */
    AFAreaZoneSize?: string;
    /** ☆☆☆☆ ✔ Example: "none" */
    AFAreas?: string;
    /** ☆☆☆☆ ✔ Example: "Only ext. flash emits/Fires" */
    AFAssist?: string;
    /** ☆☆☆☆ ✔ Example: "IR AF assist beam only" */
    AFAssistBeam?: string;
    /** ☆☆☆☆ ✔ Example: "Unknown (5)" */
    AFAssistLamp?: string;
    /** ☆☆☆☆   Example: "No" */
    AFButtonPressed?: string;
    /** ☆☆☆☆ ✔ Example: "Case 1" */
    AFConfigTool?: string;
    /** ☆☆☆☆   Example: 9 */
    AFDefocus?: number;
    /** ☆☆☆☆   Example: "Quick mode" */
    AFDuringLiveView?: string;
    /** ☆☆☆☆ ✔ Example: "On (2)" */
    AFFineTune?: string;
    /** ☆☆☆☆ ✔ Examples: ["0 0 0",0] */
    AFFineTuneAdj?: string | number;
    /** ☆☆☆☆ ✔ Examples: ["n/a",0] */
    AFFineTuneIndex?: string | number;
    /** ☆☆☆☆   Example: "Off" */
    AFIlluminator?: string;
    /** ☆☆☆☆ ✔ Example: 88 */
    AFImageHeight?: number;
    /** ☆☆☆☆ ✔ Example: 8688 */
    AFImageWidth?: number;
    /** ☆☆☆☆ ✔ Example: "0300" */
    AFInfo2Version?: string;
    /** ☆☆☆☆   Example: "90 ms" */
    AFIntegrationTime?: string;
    /** ☆☆☆☆   Example: 0 */
    AFMicroAdj?: number;
    /** ☆☆☆☆ ✔ Example: "Off" */
    AFMicroAdjMode?: string;
    /** ☆☆☆☆   Example: 0 */
    AFMicroAdjRegisteredLenses?: number;
    /** ☆☆☆☆ ✔ Example: 0 */
    AFMicroAdjValue?: number;
    /** ☆☆☆☆ ✔ Example: "Disable; 0; 0; 0; 84" */
    AFMicroadjustment?: string;
    /** ☆☆☆☆ ✔ Examples: ["Zone",1] */
    AFMode?: string | number;
    /** ☆☆☆☆ ✔ Example: "Off" */
    AFModeRestrictions?: string;
    /** ☆☆☆☆ ✔ Example: "Enable" */
    AFOnAELockButtonSwitch?: string;
    /** ☆☆☆☆ ✔ Example: "AF On" */
    AFOnButton?: string;
    /** ★☆☆☆ ✔ Example: "Upper-right" */
    AFPoint?: string;
    /** ☆☆☆☆ ✔ Example: "Standard" */
    AFPointActivationArea?: string;
    /** ☆☆☆☆ ✔ Example: "Enable" */
    AFPointAreaExpansion?: string;
    /** ☆☆☆☆   Example: "Left (vertical)" */
    AFPointAtShutterRelease?: string;
    /** ☆☆☆☆ ✔ Example: "Control-direct:disable/Main:enable" */
    AFPointAutoSelection?: string;
    /** ☆☆☆☆ ✔ Example: "Normal" */
    AFPointBrightness?: string;
    /** ☆☆☆☆ ✔ Example: "Selected (constant)" */
    AFPointDisplayDuringFocus?: string;
    /** ☆☆☆☆ ✔ Example: "On in Continuous Shooting and Manual Fo…" */
    AFPointIllumination?: string;
    /** ☆☆☆☆   Example: "Left (vertical)" */
    AFPointInFocus?: string;
    /** ☆☆☆☆   Example: "[2]" */
    AFPointMode?: string;
    /** ☆☆☆☆ ✔ Example: "none" */
    AFPointPosition?: string;
    /** ☆☆☆☆ ✔ Example: "n/a" */
    AFPointSelected?: string;
    /** ☆☆☆☆   Example: "[11], [13]" */
    AFPointSelected2?: string;
    /** ☆☆☆☆ ✔ Example: "H=AF+Main/V=AF+Command" */
    AFPointSelection?: string;
    /** ☆☆☆☆   Example: "Normal" */
    AFPointSelectionMethod?: string;
    /** ☆☆☆☆   Example: "Lower-right" */
    AFPointSetting?: string;
    /** ☆☆☆☆ ✔ Example: "9/Active AF point" */
    AFPointSpotMetering?: string;
    /** ☆☆☆☆ ✔ Example: 0 */
    AFPointSwitching?: number;
    /** ☆☆☆☆   Example: "Center" */
    AFPoints?: string;
    /** ★☆☆☆ ✔ Examples: ["Upper-right, Top",9] */
    AFPointsInFocus?: string | number;
    /** ☆☆☆☆ ✔ Example: "C6 (C6)" */
    AFPointsInFocus1D?: string;
    /** ☆☆☆☆ ✔ Examples: [9,"Left"] */
    AFPointsSelected?: number | string;
    /** ☆☆☆☆ ✔ Example: "Top" */
    AFPointsUsed?: string;
    /** ☆☆☆☆   Example: 903 */
    AFPredictor?: number;
    /** ☆☆☆☆   Example: "Standard" */
    AFResponse?: string;
    /** ☆☆☆☆   Example: 1 */
    AFResult?: number;
    /** ☆☆☆☆ ✔ Example: "Ready" */
    AFSearch?: string;
    /** ☆☆☆☆   Example: "In Focus" */
    AFStatus?: string;
    /** ☆☆☆☆   Example: "Out of Focus" */
    AFStatusActiveSensor?: string;
    /** ☆☆☆☆   Example: "Out of Focus" */
    AFStatusBottom?: string;
    /** ☆☆☆☆   Example: "Out of Focus" */
    AFStatusBottomHorizontal?: string;
    /** ☆☆☆☆   Example: "Out of Focus" */
    AFStatusBottomVertical?: string;
    /** ☆☆☆☆   Example: "Out of Focus" */
    AFStatusCenterHorizontal?: string;
    /** ☆☆☆☆   Example: "Out of Focus" */
    AFStatusCenterVertical?: string;
    /** ☆☆☆☆   Example: "Out of Focus" */
    AFStatusFarLeft?: string;
    /** ☆☆☆☆   Example: "Out of Focus" */
    AFStatusFarLeftHorizontal?: string;
    /** ☆☆☆☆   Example: "Out of Focus" */
    AFStatusFarLeftVertical?: string;
    /** ☆☆☆☆   Example: "Out of Focus" */
    AFStatusFarRight?: string;
    /** ☆☆☆☆   Example: "Out of Focus" */
    AFStatusFarRightHorizontal?: string;
    /** ☆☆☆☆   Example: "Out of Focus" */
    AFStatusFarRightVertical?: string;
    /** ☆☆☆☆   Example: "Out of Focus" */
    AFStatusLeft?: string;
    /** ☆☆☆☆   Example: "Out of Focus" */
    AFStatusLeftHorizontal?: string;
    /** ☆☆☆☆   Example: "Out of Focus" */
    AFStatusLeftVertical?: string;
    /** ☆☆☆☆   Example: "Out of Focus" */
    AFStatusLowerFarLeft?: string;
    /** ☆☆☆☆   Example: "Out of Focus" */
    AFStatusLowerFarRight?: string;
    /** ☆☆☆☆   Example: "Front Focus (-48)" */
    AFStatusMiddleHorizontal?: string;
    /** ☆☆☆☆   Example: "Out of Focus" */
    AFStatusNearLeft?: string;
    /** ☆☆☆☆   Example: "Out of Focus" */
    AFStatusNearRight?: string;
    /** ☆☆☆☆   Example: "Out of Focus" */
    AFStatusRight?: string;
    /** ☆☆☆☆   Example: "Out of Focus" */
    AFStatusRightHorizontal?: string;
    /** ☆☆☆☆   Example: "Out of Focus" */
    AFStatusRightVertical?: string;
    /** ☆☆☆☆   Example: "Out of Focus" */
    AFStatusTop?: string;
    /** ☆☆☆☆   Example: "Out of Focus" */
    AFStatusTopHorizontal?: string;
    /** ☆☆☆☆   Example: "Out of Focus" */
    AFStatusTopVertical?: string;
    /** ☆☆☆☆   Example: "Out of Focus" */
    AFStatusUpperFarLeft?: string;
    /** ☆☆☆☆   Example: "Out of Focus" */
    AFStatusUpperFarRight?: string;
    /** ☆☆☆☆   Example: "Show in Field of View" */
    AFStatusViewfinder?: string;
    /** ☆☆☆☆   Example: "Out of Focus" */
    AFStatus_00_B4?: string;
    /** ☆☆☆☆   Example: "Out of Focus" */
    AFStatus_01_C4?: string;
    /** ☆☆☆☆   Example: "Front Focus (-420)" */
    AFStatus_02_D4?: string;
    /** ☆☆☆☆   Example: "Out of Focus" */
    AFStatus_03_E4?: string;
    /** ☆☆☆☆   Example: "Front Focus (-442)" */
    AFStatus_04_F4?: string;
    /** ☆☆☆☆   Example: "Front Focus (-347)" */
    AFStatus_05_G4?: string;
    /** ☆☆☆☆   Example: "Front Focus (-72)" */
    AFStatus_06_H4?: string;
    /** ☆☆☆☆   Example: "Front Focus (-582)" */
    AFStatus_07_B3?: string;
    /** ☆☆☆☆   Example: "Out of Focus" */
    AFStatus_08_C3?: string;
    /** ☆☆☆☆   Example: "Out of Focus" */
    AFStatus_09_D3?: string;
    /** ☆☆☆☆   Example: "Front Focus (-76)" */
    AFStatus_10_E3?: string;
    /** ☆☆☆☆   Example: "Front Focus (-428)" */
    AFStatus_11_F3?: string;
    /** ☆☆☆☆   Example: "Front Focus (-323)" */
    AFStatus_12_G3?: string;
    /** ☆☆☆☆   Example: "Front Focus (-304)" */
    AFStatus_13_H3?: string;
    /** ☆☆☆☆   Example: "Out of Focus" */
    AFStatus_14_B2?: string;
    /** ☆☆☆☆   Example: "Out of Focus" */
    AFStatus_15_C2?: string;
    /** ☆☆☆☆   Example: "Front Focus (-86)" */
    AFStatus_16_D2?: string;
    /** ☆☆☆☆   Example: "Front Focus (-434)" */
    AFStatus_17_E2?: string;
    /** ☆☆☆☆   Example: "Front Focus (-431)" */
    AFStatus_18_F2?: string;
    /** ☆☆☆☆   Example: "Out of Focus" */
    AFStatus_19_G2?: string;
    /** ☆☆☆☆   Example: "Out of Focus" */
    AFStatus_20_H2?: string;
    /** ☆☆☆☆   Example: "Out of Focus" */
    AFStatus_21_C1?: string;
    /** ☆☆☆☆   Example: "Out of Focus" */
    AFStatus_22_D1?: string;
    /** ☆☆☆☆   Example: "Out of Focus" */
    AFStatus_23_E1?: string;
    /** ☆☆☆☆   Example: "Out of Focus" */
    AFStatus_24_F1?: string;
    /** ☆☆☆☆   Example: "Out of Focus" */
    AFStatus_25_G1?: string;
    /** ☆☆☆☆   Example: "Out of Focus" */
    AFStatus_26_A7_Vertical?: string;
    /** ☆☆☆☆   Example: "Front Focus (-371)" */
    AFStatus_27_A6_Vertical?: string;
    /** ☆☆☆☆   Example: "Out of Focus" */
    AFStatus_28_A5_Vertical?: string;
    /** ☆☆☆☆   Example: "Front Focus (-56)" */
    AFStatus_29_C7_Vertical?: string;
    /** ☆☆☆☆   Example: "Front Focus (-49)" */
    AFStatus_30_C6_Vertical?: string;
    /** ☆☆☆☆   Example: "Out of Focus" */
    AFStatus_31_C5_Vertical?: string;
    /** ☆☆☆☆   Example: "Front Focus (-83)" */
    AFStatus_32_E7_Vertical?: string;
    /** ☆☆☆☆   Example: "Front Focus (-63)" */
    AFStatus_33_E6_Center_Vertical?: string;
    /** ☆☆☆☆   Example: "Front Focus (-8288)" */
    AFStatus_34_E5_Vertical?: string;
    /** ☆☆☆☆   Example: "Front Focus (-48)" */
    AFStatus_35_G7_Vertical?: string;
    /** ☆☆☆☆   Example: "Front Focus (-311)" */
    AFStatus_36_G6_Vertical?: string;
    /** ☆☆☆☆   Example: "Front Focus (-352)" */
    AFStatus_37_G5_Vertical?: string;
    /** ☆☆☆☆   Example: "Out of Focus" */
    AFStatus_38_I7_Vertical?: string;
    /** ☆☆☆☆   Example: "Front Focus (-83)" */
    AFStatus_39_I6_Vertical?: string;
    /** ☆☆☆☆   Example: "Out of Focus" */
    AFStatus_40_I5_Vertical?: string;
    /** ☆☆☆☆   Example: "Out of Focus" */
    AFStatus_41_A7?: string;
    /** ☆☆☆☆   Example: "Out of Focus" */
    AFStatus_42_B7?: string;
    /** ☆☆☆☆   Example: "Out of Focus" */
    AFStatus_43_C7?: string;
    /** ☆☆☆☆   Example: "Out of Focus" */
    AFStatus_44_D7?: string;
    /** ☆☆☆☆   Example: "Out of Focus" */
    AFStatus_45_E7?: string;
    /** ☆☆☆☆   Example: "Out of Focus" */
    AFStatus_46_F7?: string;
    /** ☆☆☆☆   Example: "Out of Focus" */
    AFStatus_47_G7?: string;
    /** ☆☆☆☆   Example: "Out of Focus" */
    AFStatus_48_H7?: string;
    /** ☆☆☆☆   Example: "Out of Focus" */
    AFStatus_49_I7?: string;
    /** ☆☆☆☆   Example: "Out of Focus" */
    AFStatus_50_A6?: string;
    /** ☆☆☆☆   Example: "Out of Focus" */
    AFStatus_51_B6?: string;
    /** ☆☆☆☆   Example: "Out of Focus" */
    AFStatus_52_C6?: string;
    /** ☆☆☆☆   Example: "Front Focus (-364)" */
    AFStatus_53_D6?: string;
    /** ☆☆☆☆   Example: "Front Focus (-400)" */
    AFStatus_54_E6_Center?: string;
    /** ☆☆☆☆   Example: "Front Focus (-385)" */
    AFStatus_55_F6?: string;
    /** ☆☆☆☆   Example: "Front Focus (-75)" */
    AFStatus_56_G6?: string;
    /** ☆☆☆☆   Example: "Front Focus (-86)" */
    AFStatus_57_H6?: string;
    /** ☆☆☆☆   Example: "Out of Focus" */
    AFStatus_58_I6?: string;
    /** ☆☆☆☆   Example: "Out of Focus" */
    AFStatus_59_A5?: string;
    /** ☆☆☆☆   Example: "Out of Focus" */
    AFStatus_60_B5?: string;
    /** ☆☆☆☆   Example: "Out of Focus" */
    AFStatus_61_C5?: string;
    /** ☆☆☆☆   Example: "Out of Focus" */
    AFStatus_62_D5?: string;
    /** ☆☆☆☆   Example: "Out of Focus" */
    AFStatus_63_E5?: string;
    /** ☆☆☆☆   Example: "Front Focus (-348)" */
    AFStatus_64_F5?: string;
    /** ☆☆☆☆   Example: "Front Focus (-80)" */
    AFStatus_65_G5?: string;
    /** ☆☆☆☆   Example: "Front Focus (-34)" */
    AFStatus_66_H5?: string;
    /** ☆☆☆☆   Example: "Out of Focus" */
    AFStatus_67_I5?: string;
    /** ☆☆☆☆   Example: "Out of Focus" */
    AFStatus_68_C11?: string;
    /** ☆☆☆☆   Example: "Out of Focus" */
    AFStatus_69_D11?: string;
    /** ☆☆☆☆   Example: "Out of Focus" */
    AFStatus_70_E11?: string;
    /** ☆☆☆☆   Example: "Out of Focus" */
    AFStatus_71_F11?: string;
    /** ☆☆☆☆   Example: "Out of Focus" */
    AFStatus_72_G11?: string;
    /** ☆☆☆☆   Example: "Out of Focus" */
    AFStatus_73_B10?: string;
    /** ☆☆☆☆   Example: "Out of Focus" */
    AFStatus_74_C10?: string;
    /** ☆☆☆☆   Example: "Out of Focus" */
    AFStatus_75_D10?: string;
    /** ☆☆☆☆   Example: "Front Focus (-349)" */
    AFStatus_76_E10?: string;
    /** ☆☆☆☆   Example: "Front Focus (-388)" */
    AFStatus_77_F10?: string;
    /** ☆☆☆☆   Example: "Front Focus (-184)" */
    AFStatus_78_G10?: string;
    /** ☆☆☆☆   Example: "Out of Focus" */
    AFStatus_79_H10?: string;
    /** ☆☆☆☆   Example: "Out of Focus" */
    AFStatus_80_B9?: string;
    /** ☆☆☆☆   Example: "Out of Focus" */
    AFStatus_81_C9?: string;
    /** ☆☆☆☆   Example: "Out of Focus" */
    AFStatus_82_D9?: string;
    /** ☆☆☆☆   Example: "Out of Focus" */
    AFStatus_83_E9?: string;
    /** ☆☆☆☆   Example: "Out of Focus" */
    AFStatus_84_F9?: string;
    /** ☆☆☆☆   Example: "Out of Focus" */
    AFStatus_85_G9?: string;
    /** ☆☆☆☆   Example: "Out of Focus" */
    AFStatus_86_H9?: string;
    /** ☆☆☆☆   Example: "Out of Focus" */
    AFStatus_87_B8?: string;
    /** ☆☆☆☆   Example: "Front Focus (-264)" */
    AFStatus_88_C8?: string;
    /** ☆☆☆☆   Example: "Out of Focus" */
    AFStatus_89_D8?: string;
    /** ☆☆☆☆   Example: "Out of Focus" */
    AFStatus_90_E8?: string;
    /** ☆☆☆☆   Example: "Front Focus (-393)" */
    AFStatus_91_F8?: string;
    /** ☆☆☆☆   Example: "Front Focus (-345)" */
    AFStatus_92_G8?: string;
    /** ☆☆☆☆   Example: "Out of Focus" */
    AFStatus_93_H8?: string;
    /** ☆☆☆☆ ✔ Example: "Off" */
    AFTracking?: string;
    /** ☆☆☆☆ ✔ Example: 0 */
    AFTrackingSensitivity?: number;
    /** ☆☆☆☆   Example: "79-point" */
    AFType?: string;
    /** ☆☆☆☆   Example: "On" */
    AFWithShutter?: string;
    /** ☆☆☆☆ ✔ Example: "Shooting not possible without focus" */
    AIServoContinuousShooting?: string;
    /** ☆☆☆☆ ✔ Example: "Focus Priority" */
    AIServoFirstImage?: string;
    /** ☆☆☆☆ ✔ Example: "Equal priority" */
    AIServoFirstImagePriority?: string;
    /** ☆☆☆☆ ✔ Example: "1: AF, 2: Tracking" */
    AIServoImagePriority?: string;
    /** ☆☆☆☆ ✔ Example: "Focus Priority" */
    AIServoSecondImage?: string;
    /** ☆☆☆☆ ✔ Example: "Equal priority" */
    AIServoSecondImagePriority?: string;
    /** ☆☆☆☆ ✔ Example: "Main focus point priority" */
    AIServoTrackingMethod?: string;
    /** ☆☆☆☆ ✔ Example: "Standard" */
    AIServoTrackingSensitivity?: string;
    /** ☆☆☆☆ ✔ Example: 0 */
    AccelerationTracking?: number;
    /** ☆☆☆☆ ✔ Example: "0.9421226483 0.0351725654 -0.3452420701" */
    AccelerationVector?: string;
    /** ☆☆☆☆   Example: "358.3 11.2" */
    Accelerometer?: string;
    /** ☆☆☆☆ ✔ Example: 9 */
    AccelerometerX?: number;
    /** ☆☆☆☆ ✔ Example: 80 */
    AccelerometerY?: number;
    /** ☆☆☆☆ ✔ Example: 31 */
    AccelerometerZ?: number;
    /** ☆☆☆☆ ✔ Example: "00:00" */
    AccessorySerialNumber?: string;
    /** ☆☆☆☆ ✔ Example: "NO-ACCESSORY" */
    AccessoryType?: string;
    /** ☆☆☆☆   Example: "+0.0" */
    ActualCompensation?: string;
    /** ☆☆☆☆ ✔ Example: "Off" */
    AddAspectRatioInfo?: string;
    /** ☆☆☆☆ ✔ Example: "On" */
    AddOriginalDecisionData?: string;
    /** ☆☆☆☆   Example: "X3F Setting Mode" */
    AdjustmentMode?: string;
    /** ☆☆☆☆   Example: "Toy Camera" */
    AdvancedFilter?: string;
    /** ☆☆☆☆ ✔ Example: 9 */
    AdvancedSceneType?: number;
    /** ☆☆☆☆   Example: "91 m" */
    Altitude?: string;
    /** ☆☆☆☆ ✔ Example: "Standard" */
    AmbienceSelection?: string;
    /** ☆☆☆☆ ✔ Example: "40 C" */
    AmbientTemperature?: string;
    /** ☆☆☆☆   Example: "95 F" */
    AmbientTemperatureFahrenheit?: string;
    /** ☆☆☆☆   Example: 6.7 */
    Aperture?: number;
    /** ☆☆☆☆ ✔ Example: "Off" */
    ApertureLock?: string;
    /** ☆☆☆☆ ✔ Example: "Enable; Closed 11; Open 1" */
    ApertureRange?: string;
    /** ☆☆☆☆   Example: "Prohibited" */
    ApertureRingUse?: string;
    /** ☆☆☆☆   Example: 9.1 */
    ApertureSetting?: number;
    /** ☆☆☆☆ ✔ Example: "Enable; 1; 2; 1; 128; 48; 0; 1" */
    ApplyShootingMeteringMode?: string;
    /** ☆☆☆☆   Example: 8 */
    ApproximateFNumber?: number;
    /** ☆☆☆☆ ✔ Example: "Soft Focus; 1280; 0; 0" */
    ArtFilter?: string;
    /** ☆☆☆☆ ✔ Example: "Off; 0; 0; Partial Color 0; No Effect; …" */
    ArtFilterEffect?: string;
    /** ☆☆☆☆   Example: "Unknown (8305)" */
    ArtMode?: string;
    /** ☆☆☆☆   Example: "0 0 0" */
    ArtModeParameters?: string;
    /** ☆☆☆☆ ✔ Example: "0 192 4607 3263" */
    AspectFrame?: string;
    /** ☆☆☆☆ ✔ Example: "Unknown (256)" */
    AspectRatio?: string;
    /** ☆☆☆☆ ✔ Example: "Auto Bracketing" */
    AssignBktButton?: string;
    /** ☆☆☆☆   Example: "LCD brightness" */
    AssignFuncButton?: string;
    /** ☆☆☆☆   Example: "None" */
    AssignMovieFunc1ButtonPlusDials?: string;
    /** ☆☆☆☆   Example: "None" */
    AssignMovieFunc2Button?: string;
    /** ☆☆☆☆   Example: "None" */
    AssignMoviePreviewButtonPlusDials?: string;
    /** ☆☆☆☆ ✔ Example: "None" */
    AssignMovieRecordButton?: string;
    /** ☆☆☆☆   Example: "None" */
    AssignMovieRecordButtonPlusDials?: string;
    /** ☆☆☆☆   Example: "AE/AF Lock" */
    AssignMovieSubselector?: string;
    /** ☆☆☆☆   Example: "None" */
    AssignMovieSubselectorPlusDials?: string;
    /** ☆☆☆☆ ✔ Example: "None" */
    AssignRemoteFnButton?: string;
    /** ☆☆☆☆ ✔ Example: "No" */
    Audio?: string;
    /** ☆☆☆☆ ✔ Example: "On-Shot AF only" */
    AutoAFPointColorTracking?: string;
    /** ☆☆☆☆   Example: "Enable" */
    AutoAFPointSelEOSiTRAF?: string;
    /** ☆☆☆☆   Example: "On" */
    AutoAperture?: string;
    /** ☆☆☆☆   Examples: ["None",3] */
    AutoBracket?: string | number;
    /** ☆☆☆☆ ✔ Example: "Flash/Speed" */
    AutoBracketModeM?: string;
    /** ☆☆☆☆ ✔ Example: "0,-,+" */
    AutoBracketOrder?: string;
    /** ☆☆☆☆ ✔ Example: "Exposure" */
    AutoBracketSet?: string;
    /** ☆☆☆☆ ✔ Examples: ["On",0] */
    AutoBracketing?: string | number;
    /** ☆☆☆☆   Example: "Flash/Speed" */
    AutoBracketingMode?: string;
    /** ☆☆☆☆   Example: "AE & Flash" */
    AutoBracketingSet?: string;
    /** ☆☆☆☆ ✔ Example: "On" */
    AutoDistortionControl?: string;
    /** ☆☆☆☆ ✔ Example: "400%" */
    AutoDynamicRange?: string;
    /** ★☆☆☆ ✔ Example: "On" */
    AutoExposureBracketing?: string;
    /** ☆☆☆☆   Example: "Off" */
    AutoFP?: string;
    /** ☆☆☆☆   Example: "Subject and Background" */
    AutoFlashISOSensitivity?: string;
    /** ★☆☆☆ ✔ Examples: [96,"On"] */
    AutoISO?: number | string;
    /** ☆☆☆☆   Example: 1600 */
    AutoISOMax?: number;
    /** ☆☆☆☆   Example: "1/30 s" */
    AutoISOMinShutterSpeed?: string;
    /** ☆☆☆☆ ✔ Example: "Standard" */
    AutoLightingOptimizer?: string;
    /** ☆☆☆☆ ✔ Example: "No" */
    AutoPortraitFramed?: string;
    /** ☆☆☆☆ ✔ Example: "Rotate 90 CW" */
    AutoRotate?: string;
    /** ☆☆☆☆   Example: "Off" */
    AuxiliaryLens?: string;
    /** ☆☆☆☆   Example: 6.7 */
    AvApertureSetting?: number;
    /** ☆☆☆☆ ✔ Example: "Disable" */
    AvSettingWithoutLens?: string;
    /** ☆☆☆☆ ✔ Example: "512 512 512 512" */
    AverageBlackLevel?: string;
    /** ☆☆☆☆   Example: 8 */
    BWFilter?: number;
    /** ☆☆☆☆ ✔ Example: "On" */
    BWMode?: string;
    /** ☆☆☆☆ ✔ Example: "99:99:99 00:00:00" */
    BabyAge?: string;
    /** ☆☆☆☆ ✔ Example: "\u0005" */
    BabyName?: string;
    /** ☆☆☆☆   Examples: ["A0E3S7000218RC",-1066078200] */
    Barcode?: string | number;
    /** ☆☆☆☆   Example: "0100" */
    BarometerInfoVersion?: string;
    /** ☆☆☆☆   Example: 0 */
    BaseExposureCompensation?: number;
    /** ☆☆☆☆ ✔ Example: 800 */
    BaseISO?: number;
    /** ☆☆☆☆ ✔ Example: "99%" */
    BatteryLevel?: string;
    /** ☆☆☆☆ ✔ Example: "MB-D12 First" */
    BatteryOrder?: string;
    /** ☆☆☆☆   Example: "Sufficient Power Remaining" */
    BatteryState?: string;
    /** ☆☆☆☆ ✔ Example: "50.6 C" */
    BatteryTemperature?: string;
    /** ☆☆☆☆ ✔ Example: "LP-E6N" */
    BatteryType?: string;
    /** ☆☆☆☆   Example: "8.52 V" */
    BatteryVoltage?: string;
    /** ☆☆☆☆   Example: "7.39 V" */
    BatteryVoltage1?: string;
    /** ☆☆☆☆   Example: "7.34 V" */
    BatteryVoltage2?: string;
    /** ☆☆☆☆   Example: "BGGR" */
    BayerPattern?: string;
    /** ☆☆☆☆ ✔ Example: "On" */
    Beep?: string;
    /** ☆☆☆☆   Examples: ["Sports CS",17] */
    BestShotMode?: string | number;
    /** ☆☆☆☆ ✔ Example: "94 95 93 93" */
    BlackLevel?: string;
    /** ☆☆☆☆ ✔ Example: "94 95 93 93" */
    BlackLevel2?: string;
    /** ☆☆☆☆ ✔ Example: 2209 */
    BlackMaskBottomBorder?: number;
    /** ☆☆☆☆ ✔ Example: 14 */
    BlackMaskLeftBorder?: number;
    /** ☆☆☆☆ ✔ Example: 55 */
    BlackMaskRightBorder?: number;
    /** ☆☆☆☆ ✔ Example: 162 */
    BlackMaskTopBorder?: number;
    /** ☆☆☆☆   Example: "7 104 106 6" */
    BlackPoint?: string;
    /** ☆☆☆☆   Example: "n/a" */
    BleachBypassToning?: string;
    /** ☆☆☆☆   Examples: [3,"3 (Normal)"] */
    BlockShotAFResponse?: number | string;
    /** ☆☆☆☆   Example: 46 */
    BlueBalance?: number;
    /** ☆☆☆☆   Examples: ["5C",36] */
    BlueGain?: string | number;
    /** ☆☆☆☆   Example: "Off; 0; 0; 0" */
    BlurControl?: string;
    /** ☆☆☆☆ ✔ Example: "None" */
    BlurWarning?: string;
    /** ☆☆☆☆   Examples: [165,"167 (7.3V, 44%)"] */
    BodyBatteryADLoad?: number | string;
    /** ☆☆☆☆   Examples: [199,"174 (7.7V, 54%)"] */
    BodyBatteryADNoLoad?: number | string;
    /** ☆☆☆☆   Examples: ["Running Low",11] */
    BodyBatteryState?: string | number;
    /** ☆☆☆☆   Example: "9.84 V" */
    BodyBatteryVoltage1?: string;
    /** ☆☆☆☆   Example: "9.49 V" */
    BodyBatteryVoltage2?: string;
    /** ☆☆☆☆   Example: "8.72 V" */
    BodyBatteryVoltage3?: string;
    /** ☆☆☆☆   Example: "7.30 V" */
    BodyBatteryVoltage4?: string;
    /** ☆☆☆☆   Example: "RS1 :V01500000 " */
    BodyFirmware?: string;
    /** ☆☆☆☆ ✔ Examples: [81,"f.000"] */
    BodyFirmwareVersion?: number | string;
    /** ☆☆☆☆   Example: "SID:14101105   " */
    BodySerialNumber?: string;
    /** ☆☆☆☆ ✔ Example: "Off" */
    BracketMode?: string;
    /** ☆☆☆☆   Example: "0 0" */
    BracketSequence?: string;
    /** ☆☆☆☆ ✔ Example: "No Bracket" */
    BracketSettings?: string;
    /** ☆☆☆☆ ✔ Examples: [0,"n/a"] */
    BracketShotNumber?: number | string;
    /** ☆☆☆☆   Example: 0 */
    BracketShotNumber2?: number;
    /** ☆☆☆☆   Example: "Unknown (429458713)" */
    BracketStep?: string;
    /** ☆☆☆☆ ✔ Example: 12 */
    BracketValue?: number;
    /** ☆☆☆☆   Example: 2156 */
    BracketingInfoOffset?: number;
    /** ☆☆☆☆ ✔ Example: 5959 */
    BracketingOffset?: number;
    /** ☆☆☆☆ ✔ Examples: [9.25,"n/a"] */
    Brightness?: number | string;
    /** ★☆☆☆ ✔ Example: 0 */
    BulbDuration?: number;
    /** ☆☆☆☆ ✔ Example: "Unlimited" */
    BurstMode?: string;
    /** ☆☆☆☆   Examples: [3,"\u0000?J@?^R??"] */
    BurstShot?: number | string;
    /** ☆☆☆☆ ✔ Example: 6 */
    BurstSpeed?: number;
    /** ☆☆☆☆ ✔ Example: "460727F2-20CF-4031-957B-7E04D567DF1F" */
    BurstUUID?: string;
    /** ☆☆☆☆ ✔ Example: "Normal (enable)" */
    ButtonFunctionControlOff?: string;
    /** ☆☆☆☆   Example: 2 */
    CCDBoardVersion?: number;
    /** ☆☆☆☆   Example: 0 */
    CCDSensitivity?: number;
    /** ☆☆☆☆   Example: 0 */
    CCDVersion?: number;
    /** ☆☆☆☆ ✔ Example: "9 fps" */
    CHModeShootingSpeed?: string;
    /** ☆☆☆☆ ✔ Example: "6 fps" */
    CLModeShootingSpeed?: string;
    /** ☆☆☆☆   Example: "1.02.00.06" */
    CPUFirmwareVersion?: string;
    /** ☆☆☆☆   Example: "d, 2009:09:04 03:19:07" */
    CPUVersions?: string;
    /** ☆☆☆☆   Example: "Starting calibration file for SD14F13_R…" */
    Calibration?: string;
    /** ☆☆☆☆   Example: "2216/02/28 03:49:48" */
    CameraDateTime?: string;
    /** ☆☆☆☆ ✔ Example: "h Company Ltd." */
    CameraID?: string;
    /** ☆☆☆☆ ✔ Examples: ["n/a",800] */
    CameraISO?: string | number;
    /** ☆☆☆☆ ✔ Example: "Tilt Upwards" */
    CameraOrientation?: string;
    /** ☆☆☆☆   Example: "(Binary data 8964 bytes, use -b option …" */
    CameraParameters?: string;
    /** ☆☆☆☆ ✔ Example: "User Defined 3" */
    CameraPictureStyle?: string;
    /** ☆☆☆☆   Example: -8.2 */
    CameraPitch?: number;
    /** ☆☆☆☆   Example: "+0.00" */
    CameraRoll?: string;
    /** ☆☆☆☆ ✔ Example: "0100" */
    CameraSettingsVersion?: string;
    /** ★☆☆☆ ✔ Examples: ["9 C",8] */
    CameraTemperature?: string | number;
    /** ☆☆☆☆   Example: "30 C" */
    CameraTemperature4?: string;
    /** ☆☆☆☆   Example: "30 C" */
    CameraTemperature5?: string;
    /** ★☆☆☆ ✔ Example: "uD800,S800" */
    CameraType?: string;
    /** ☆☆☆☆ ✔ Example: "uTough-3000" */
    CameraType2?: string;
    /** ☆☆☆☆   Examples: [-3.2,"+51.70"] */
    CameraYaw?: number | string;
    /** ★☆☆☆ ✔ Example: "Shutter speed priority AE" */
    CanonExposureMode?: string;
    /** ☆☆☆☆   Example: "Full automatic mode" */
    CanonFileDescription?: string;
    /** ☆☆☆☆ ✔ Example: 3794598 */
    CanonFileLength?: number;
    /** ☆☆☆☆ ✔ Example: "Firmware version 1.00" */
    CanonFirmwareVersion?: string;
    /** ★☆☆☆ ✔ Example: "n/a" */
    CanonFlashMode?: string;
    /** ☆☆☆☆ ✔ Example: 768 */
    CanonImageHeight?: number;
    /** ★☆☆☆ ✔ Example: "n/a" */
    CanonImageSize?: string;
    /** ★☆☆☆ ✔ Example: "PIC:DC50 JPEG" */
    CanonImageType?: string;
    /** ☆☆☆☆ ✔ Example: 8688 */
    CanonImageWidth?: number;
    /** ★☆☆☆ ✔ Example: "XH A1S" */
    CanonModelID?: string;
    /** ☆☆☆☆ ✔ Example: "People" */
    Categories?: string;
    /** ☆☆☆☆ ✔ Example: "8 mm" */
    CenterWeightedAreaSize?: string;
    /** ☆☆☆☆ ✔ Example: "On" */
    ChromaticAberrationCorr?: string;
    /** ☆☆☆☆ ✔ Example: "On" */
    ChromaticAberrationSetting?: string;
    /** ☆☆☆☆   Example: "+0.500" */
    ChrominanceNoiseReduction?: string;
    /** ☆☆☆☆ ✔ Example: "TEDDINGTON" */
    City?: string;
    /** ☆☆☆☆ ✔ Example: "San Francisco" */
    City2?: string;
    /** ☆☆☆☆ ✔ Examples: [4,"None"] */
    Clarity?: number | string;
    /** ☆☆☆☆   Example: "Off" */
    ClarityControl?: string;
    /** ☆☆☆☆ ✔ Example: "Off" */
    ClearRetouch?: string;
    /** ☆☆☆☆   Examples: ["0 0 0",0] */
    ColorAdjustment?: string | number;
    /** ☆☆☆☆   Example: "Off" */
    ColorAdjustmentMode?: string;
    /** ☆☆☆☆   Example: 257 */
    ColorBW?: number;
    /** ☆☆☆☆   Example: 256 */
    ColorBalanceBlue?: number;
    /** ☆☆☆☆   Example: 65792 */
    ColorBalanceGreen?: number;
    /** ☆☆☆☆   Example: 2.4960938 */
    ColorBalanceRed?: number;
    /** ☆☆☆☆ ✔ Example: "R01," */
    ColorBalanceVersion?: string;
    /** ☆☆☆☆   Example: 24 */
    ColorBitDepth?: number;
    /** ☆☆☆☆   Example: "Off" */
    ColorChromeEffect?: string;
    /** ☆☆☆☆ ✔ Example: 8 */
    ColorCompensationFilter?: number;
    /** ☆☆☆☆   Examples: [0,"+8"] */
    ColorCompensationFilterCustom?: number | string;
    /** ☆☆☆☆   Examples: [0,"+2"] */
    ColorCompensationFilterSet?: number | string;
    /** ☆☆☆☆   Example: "96 4096 2944 4096 16 128" */
    ColorControl?: string;
    /** ☆☆☆☆ ✔ Example: "Color 0; 0; 29; Strength 0; -4; 3" */
    ColorCreatorEffect?: string;
    /** ☆☆☆☆ ✔ Example: "9 (60D/1100D)" */
    ColorDataVersion?: string;
    /** ☆☆☆☆ ✔ Example: "Warm" */
    ColorEffect?: string;
    /** ☆☆☆☆   Examples: ["Off",7997] */
    ColorFilter?: string | number;
    /** ☆☆☆☆ ✔ Example: "Mode3a" */
    ColorHue?: string;
    /** ☆☆☆☆ ✔ Example: "600 -236 -108 -52 404 -96 -20 -140 416" */
    ColorMatrix?: string;
    /** ☆☆☆☆   Example: "1.66016 -0.66016 0.00000 -0.20703 1.527…" */
    ColorMatrixA?: string;
    /** ☆☆☆☆   Example: "1.12793 -0.03674 -0.09119 -0.20703 1.52…" */
    ColorMatrixB?: string;
    /** ☆☆☆☆   Example: 4 */
    ColorMatrixNumber?: number;
    /** ★☆☆☆ ✔ Examples: ["n/a",1] */
    ColorMode?: string | number;
    /** ☆☆☆☆   Example: "Min -5; Max 5; Yellow 0; Orange 0; Oran…" */
    ColorProfileSettings?: string;
    /** ☆☆☆☆ ✔ Example: 8059 */
    ColorTempAsShot?: number;
    /** ☆☆☆☆ ✔ Example: 6945 */
    ColorTempAuto?: number;
    /** ☆☆☆☆ ✔ Example: 6733 */
    ColorTempCloudy?: number;
    /** ☆☆☆☆ ✔ Example: 5210 */
    ColorTempCustom?: number;
    /** ☆☆☆☆   Example: 5200 */
    ColorTempCustom1?: number;
    /** ☆☆☆☆   Example: 5200 */
    ColorTempCustom2?: number;
    /** ☆☆☆☆ ✔ Example: 5820 */
    ColorTempDaylight?: number;
    /** ☆☆☆☆ ✔ Example: 8856 */
    ColorTempFlash?: number;
    /** ☆☆☆☆ ✔ Example: 4452 */
    ColorTempFluorescent?: number;
    /** ☆☆☆☆ ✔ Example: 8001 */
    ColorTempKelvin?: number;
    /** ☆☆☆☆ ✔ Example: 6945 */
    ColorTempMeasured?: number;
    /** ☆☆☆☆ ✔ Example: 5200 */
    ColorTempPC1?: number;
    /** ☆☆☆☆ ✔ Example: 5200 */
    ColorTempPC2?: number;
    /** ☆☆☆☆ ✔ Example: 5200 */
    ColorTempPC3?: number;
    /** ☆☆☆☆ ✔ Example: 7563 */
    ColorTempShade?: number;
    /** ☆☆☆☆ ✔ Example: 3205 */
    ColorTempTungsten?: number;
    /** ☆☆☆☆ ✔ Examples: [9900,"n/a"] */
    ColorTemperature?: number | string;
    /** ☆☆☆☆   Example: 5120 */
    ColorTemperatureAuto?: number;
    /** ☆☆☆☆   Example: "6300 K" */
    ColorTemperatureCustom?: string;
    /** ☆☆☆☆   Example: "7200 K" */
    ColorTemperatureSet?: string;
    /** ☆☆☆☆   Example: "Temperature" */
    ColorTemperatureSetting?: string;
    /** ☆☆☆☆ ✔ Example: "Normal" */
    ColorTone?: string;
    /** ☆☆☆☆ ✔ Example: 0 */
    ColorToneAuto?: number;
    /** ☆☆☆☆ ✔ Example: 0 */
    ColorToneFaithful?: number;
    /** ☆☆☆☆ ✔ Example: 0 */
    ColorToneLandscape?: number;
    /** ☆☆☆☆ ✔ Example: 0 */
    ColorToneNeutral?: number;
    /** ☆☆☆☆ ✔ Example: 0 */
    ColorTonePortrait?: number;
    /** ☆☆☆☆ ✔ Example: 0 */
    ColorToneStandard?: number;
    /** ☆☆☆☆ ✔ Example: 0 */
    ColorToneUserDef1?: number;
    /** ☆☆☆☆ ✔ Example: 1 */
    ColorToneUserDef2?: number;
    /** ☆☆☆☆ ✔ Example: 0 */
    ColorToneUserDef3?: number;
    /** ☆☆☆☆ ✔ Example: "Sub-command Dial" */
    CommandDialsApertureSetting?: string;
    /** ☆☆☆☆ ✔ Example: "On" */
    CommandDialsChangeMainSub?: string;
    /** ☆☆☆☆ ✔ Example: "On" */
    CommandDialsMenuAndPlayback?: string;
    /** ☆☆☆☆ ✔ Example: "No" */
    CommandDialsReverseRotation?: string;
    /** ☆☆☆☆   Example: 3 */
    CommanderChannel?: number;
    /** ☆☆☆☆   Example: "Full" */
    CommanderGroupAManualOutput?: string;
    /** ☆☆☆☆   Example: "TTL" */
    CommanderGroupAMode?: string;
    /** ☆☆☆☆   Example: "Full" */
    CommanderGroupBManualOutput?: string;
    /** ☆☆☆☆   Example: "TTL" */
    CommanderGroupBMode?: string;
    /** ☆☆☆☆   Example: "TTL" */
    CommanderInternalFlash?: string;
    /** ☆☆☆☆   Example: "Full" */
    CommanderInternalManualOutput?: string;
    /** ☆☆☆☆   Example: 0 */
    CommanderInternalTTLComp?: number;
    /** ☆☆☆☆   Example: 45 */
    Compass?: number;
    /** ☆☆☆☆   Example: 8 */
    ComponentBitDepth?: number;
    /** ☆☆☆☆   Example: "Off" */
    CompositionAdjust?: string;
    /** ☆☆☆☆   Example: 8 */
    CompositionAdjustRotation?: number;
    /** ☆☆☆☆   Example: 4 */
    CompositionAdjustX?: number;
    /** ☆☆☆☆   Example: 1 */
    CompositionAdjustY?: number;
    /** ☆☆☆☆   Example: 98047 */
    CompressedImageSize?: number;
    /** ☆☆☆☆ ✔ Example: 8 */
    CompressionFactor?: number;
    /** ☆☆☆☆   Example: 8 */
    CompressionRatio?: number;
    /** ☆☆☆☆ ✔ Example: "FFCBAC24-E547-4BBC-AF47-38B1A3D845E3" */
    ContentIdentifier?: string;
    /** ★☆☆☆ ✔ Example: "Unknown (11)" */
    ContinuousDrive?: string;
    /** ☆☆☆☆ ✔ Example: "Enable; Hi 12; Lo 3" */
    ContinuousShootingSpeed?: string;
    /** ☆☆☆☆ ✔ Example: "Disable; 99 shots" */
    ContinuousShotLimit?: string;
    /** ☆☆☆☆ ✔ Example: 0 */
    ContrastAuto?: number;
    /** ☆☆☆☆ ✔ Example: "(Binary data 578 bytes, use -b option t…" */
    ContrastCurve?: string;
    /** ☆☆☆☆ ✔ Example: "Unknown (2)" */
    ContrastDetectAF?: string;
    /** ☆☆☆☆   Example: "496 184 48 48" */
    ContrastDetectAFArea?: string;
    /** ☆☆☆☆ ✔ Example: "Yes" */
    ContrastDetectAFInFocus?: string;
    /** ☆☆☆☆ ✔ Example: 0 */
    ContrastFaithful?: number;
    /** ☆☆☆☆   Example: 0 */
    ContrastHighlight?: number;
    /** ☆☆☆☆   Example: "Off" */
    ContrastHighlightShadowAdj?: string;
    /** ☆☆☆☆ ✔ Example: 0 */
    ContrastLandscape?: number;
    /** ☆☆☆☆ ✔ Examples: ["Unknown (19)",2] */
    ContrastMode?: string | number;
    /** ☆☆☆☆ ✔ Example: 0 */
    ContrastMonochrome?: number;
    /** ☆☆☆☆ ✔ Example: 0 */
    ContrastNeutral?: number;
    /** ☆☆☆☆ ✔ Example: 0 */
    ContrastPortrait?: number;
    /** ☆☆☆☆ ✔ Examples: ["1 (min -5, max 5)",0] */
    ContrastSetting?: string | number;
    /** ☆☆☆☆   Example: 0 */
    ContrastShadow?: number;
    /** ☆☆☆☆ ✔ Example: 1 */
    ContrastStandard?: number;
    /** ☆☆☆☆ ✔ Example: 3 */
    ContrastUserDef1?: number;
    /** ☆☆☆☆ ✔ Example: 0 */
    ContrastUserDef2?: number;
    /** ☆☆☆☆ ✔ Example: 0 */
    ContrastUserDef3?: number;
    /** ★☆☆☆ ✔ Example: "n/a" */
    ControlMode?: string;
    /** ☆☆☆☆   Example: 0 */
    ControllerBoardVersion?: number;
    /** ☆☆☆☆ ✔ Example: "Unknown (0)" */
    ConversionLens?: string;
    /** ☆☆☆☆   Example: 0 */
    Converter?: number;
    /** ☆☆☆☆   Example: 72 */
    CoringFilter?: number;
    /** ☆☆☆☆ ✔ Example: "United States" */
    Country?: string;
    /** ☆☆☆☆ ✔ Example: "Vivid" */
    CreativeStyle?: string;
    /** ☆☆☆☆   Example: "Standard" */
    CreativeStyleSetting?: string;
    /** ☆☆☆☆ ✔ Example: 14 */
    CropBottomMargin?: number;
    /** ☆☆☆☆ ✔ Example: 7776 */
    CropHeight?: number;
    /** ☆☆☆☆ ✔ Example: "Off (7424x4924 cropped to 7424x4924 at …" */
    CropHiSpeed?: string;
    /** ☆☆☆☆ ✔ Example: "8 0" */
    CropLeft?: string;
    /** ☆☆☆☆ ✔ Example: 22 */
    CropLeftMargin?: number;
    /** ☆☆☆☆   Example: "n/a" */
    CropMode?: string;
    /** ☆☆☆☆   Example: "On" */
    CropMode35mm?: string;
    /** ☆☆☆☆ ✔ Example: 20 */
    CropRightMargin?: number;
    /** ☆☆☆☆ ✔ Example: "8 0" */
    CropTop?: string;
    /** ☆☆☆☆ ✔ Example: 14 */
    CropTopMargin?: number;
    /** ☆☆☆☆ ✔ Example: 5184 */
    CropWidth?: number;
    /** ☆☆☆☆ ✔ Example: 5792 */
    CroppedImageHeight?: number;
    /** ☆☆☆☆ ✔ Example: 304 */
    CroppedImageLeft?: number;
    /** ☆☆☆☆ ✔ Example: 0 */
    CroppedImageTop?: number;
    /** ☆☆☆☆ ✔ Example: 8688 */
    CroppedImageWidth?: number;
    /** ☆☆☆☆   Example: "Off" */
    CrossProcess?: string;
    /** ☆☆☆☆ ✔ Example: "0 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0…" */
    CustomControls?: string;
    /** ☆☆☆☆ ✔ Example: "P-STUDIO" */
    CustomPictureStyleFileName?: string;
    /** ☆☆☆☆ ✔ Example: "CS3 (min CS0, max CS4)" */
    CustomSaturation?: string;
    /** ☆☆☆☆ ✔ Example: "No" */
    CustomSettingsAllDefault?: string;
    /** ☆☆☆☆ ✔ Example: "B" */
    CustomSettingsBank?: string;
    /** ☆☆☆☆ ✔ Example: 6475 */
    CustomSettingsOffset?: number;
    /** ☆☆☆☆   Example: "669 556" */
    CustomWB_RBLevels?: string;
    /** ☆☆☆☆   Example: "669 256 556" */
    CustomWB_RGBLevels?: string;
    /** ☆☆☆☆ ✔ Example: "Matrix" */
    D810MeteringMode?: string;
    /** ☆☆☆☆   Example: "Unknown (27471)" */
    DECPosition?: string;
    /** ☆☆☆☆   Examples: ["10.01.00.00",4294967000] */
    DSPFirmwareVersion?: string | number;
    /** ☆☆☆☆ ✔ Example: "Yes" */
    DarkFocusEnvironment?: string;
    /** ★☆☆☆ ✔ Example: "(Binary data 8918 bytes, use -b option …" */
    DataDump?: string;
    /** ☆☆☆☆   Example: "(Binary data 6660 bytes, use -b option …" */
    DataDump2?: string;
    /** ☆☆☆☆   Example: 8289 */
    DataScaling?: number;
    /** ☆☆☆☆   Examples: ["2016-03-30","03/09/2003"] */
    Date?: ExifDate | string;
    /** ☆☆☆☆ ✔ Example: "Y/M/D" */
    DateDisplayFormat?: string;
    /** ☆☆☆☆ ✔ Example: "Off" */
    DateStampMode?: string;
    /** ☆☆☆☆ ✔ Example: "2016-10-13T00:12:27.000" */
    DateTime1?: ExifDateTime;
    /** ☆☆☆☆ ✔ Example: "2016-10-13T00:12:27.000" */
    DateTime2?: ExifDateTime;
    /** ☆☆☆☆   Example: "Off" */
    DateTimeStamp?: string;
    /** ☆☆☆☆ ✔ Examples: ["2017-05-07T19:37:49.000-07:00","0000:00:00 00:00:00"] */
    DateTimeUTC?: ExifDateTime | string;
    /** ☆☆☆☆ ✔ Example: "Yes" */
    DaylightSavings?: string;
    /** ☆☆☆☆ ✔ Example: "Erase selected" */
    DefaultEraseOption?: string;
    /** ☆☆☆☆ ✔ Example: 3 */
    DeletedImageCount?: number;
    /** ☆☆☆☆   Example: "Warsaw" */
    DestinationCity?: string;
    /** ☆☆☆☆   Example: "Yes" */
    DestinationDST?: string;
    /** ☆☆☆☆ ✔ Example: 100 */
    DevelopmentDynamicRange?: number;
    /** ☆☆☆☆   Example: "SMX Video Camera" */
    DeviceType?: string;
    /** ☆☆☆☆ ✔ Example: "Normal" */
    DialDirectionTvAv?: string;
    /** ☆☆☆☆ ✔ Example: "On" */
    DiffractionCorrection?: string;
    /** ☆☆☆☆   Example: "Vivid" */
    DigitalFilter?: string;
    /** ☆☆☆☆   Example: ["Toy Camera","Shading=2","Blur=2","ToneBreak=Red"] */
    DigitalFilter01?: string[];
    /** ☆☆☆☆ ✔ Example: 0 */
    DigitalGain?: number;
    /** ★★☆☆ ✔ Examples: [4,"undef.0"] */
    DigitalZoom?: number | string;
    /** ☆☆☆☆   Example: "On" */
    DigitalZoomOn?: string;
    /** ☆☆☆☆ ✔ Example: 897 */
    DirectoryIndex?: number;
    /** ☆☆☆☆ ✔ Example: 103 */
    DirectoryIndex2?: number;
    /** ☆☆☆☆ ✔ Example: 999 */
    DirectoryNumber?: number;
    /** ☆☆☆☆ ✔ Example: "Enable" */
    DisplayAllAFPoints?: string;
    /** ☆☆☆☆ ✔ Example: 9 */
    DisplayAperture?: number;
    /** ☆☆☆☆ ✔ Example: "Unknown (0)" */
    DistortionCorrParamsNumber?: string;
    /** ☆☆☆☆ ✔ Example: "Yes" */
    DistortionCorrParamsPresent?: string;
    /** ☆☆☆☆ ✔ Example: "On" */
    DistortionCorrection2?: string;
    /** ☆☆☆☆ ✔ Example: "n/a" */
    DistortionCorrectionSetting?: string;
    /** ☆☆☆☆ ✔ Example: "Unknown (3152)" */
    DriveMode?: string;
    /** ☆☆☆☆   Example: "Speed Priority Continuous" */
    DriveMode2?: string;
    /** ☆☆☆☆   Example: "Single Frame" */
    DriveModeSetting?: string;
    /** ☆☆☆☆   Example: "n/a" */
    DriveSpeed?: string;
    /** ☆☆☆☆ ✔ Example: "(Binary data 1024 bytes, use -b option …" */
    DustRemovalData?: string;
    /** ☆☆☆☆ ✔ Example: "9 Points" */
    DynamicAFArea?: string;
    /** ☆☆☆☆ ✔ Example: "On" */
    DynamicAreaAFDisplay?: string;
    /** ☆☆☆☆ ✔ Example: "Wide" */
    DynamicRange?: string;
    /** ☆☆☆☆   Example: "On; Enabled; 0; 0" */
    DynamicRangeExpansion?: string;
    /** ☆☆☆☆ ✔ Example: "Standard" */
    DynamicRangeOptimizer?: string;
    /** ☆☆☆☆   Example: "Off" */
    DynamicRangeOptimizerBracket?: string;
    /** ☆☆☆☆   Example: 5 */
    DynamicRangeOptimizerLevel?: number;
    /** ☆☆☆☆   Example: "Standard" */
    DynamicRangeOptimizerMode?: string;
    /** ☆☆☆☆   Example: "Standard" */
    DynamicRangeOptimizerSetting?: string;
    /** ☆☆☆☆ ✔ Example: "Manual" */
    DynamicRangeSetting?: string;
    /** ☆☆☆☆ ✔ Example: "Evaluative" */
    ETTLII?: string;
    /** ☆☆☆☆   Example: "1/3 EV" */
    EVStepSize?: string;
    /** ☆☆☆☆   Example: "1/3 EV Steps" */
    EVSteps?: string;
    /** ☆☆☆☆   Example: "Manual" */
    EXRAuto?: string;
    /** ☆☆☆☆   Example: "HR (High Resolution)" */
    EXRMode?: string;
    /** ☆☆☆☆ ✔ Example: "On" */
    EasyExposureCompensation?: string;
    /** ★☆☆☆ ✔ Example: "Unknown (83)" */
    EasyMode?: string;
    /** ☆☆☆☆   Example: 9.8 */
    EffectiveLV?: number;
    /** ☆☆☆☆ ✔ Example: 5.7 */
    EffectiveMaxAperture?: number;
    /** ☆☆☆☆ ✔ Example: "On" */
    ElectronicFrontCurtainShutter?: string;
    /** ☆☆☆☆   Example: 1 */
    Emissivity?: number;
    /** ☆☆☆☆   Example: "Off" */
    Enhancement?: string;
    /** ☆☆☆☆   Example: 960 */
    Enhancer?: number;
    /** ☆☆☆☆   Example: 480 */
    EpsonImageHeight?: number;
    /** ☆☆☆☆   Example: 640 */
    EpsonImageWidth?: number;
    /** ☆☆☆☆   Example: "SX322" */
    EpsonSoftware?: string;
    /** ☆☆☆☆ ✔ Example: "0100" */
    EquipmentVersion?: string;
    /** ☆☆☆☆   Example: 89 */
    EventNumber?: number;
    /** ☆☆☆☆ ✔ Example: "97.5 mm" */
    ExitPupilPosition?: string;
    /** ☆☆☆☆   Example: 0 */
    ExposureBracketShotNumber?: number;
    /** ☆☆☆☆   Examples: [0.5,"Unknown (28)"] */
    ExposureBracketStepSize?: number | string;
    /** ☆☆☆☆ ✔ Examples: [0,"+162113114"] */
    ExposureBracketValue?: number | string;
    /** ☆☆☆☆ ✔ Example: "1/3 EV" */
    ExposureCompStepSize?: string;
    /** ☆☆☆☆   Examples: [0,"+0.6"] */
    ExposureCompensation2?: number | string;
    /** ☆☆☆☆   Examples: [0,"+0.7"] */
    ExposureCompensationSet?: number | string;
    /** ☆☆☆☆   Example: "1/3 EV" */
    ExposureControlStep?: string;
    /** ☆☆☆☆ ✔ Example: "1/3 EV" */
    ExposureControlStepSize?: string;
    /** ☆☆☆☆ ✔ Example: 1 */
    ExposureCount?: number;
    /** ☆☆☆☆ ✔ Example: "On" */
    ExposureDelayMode?: string;
    /** ☆☆☆☆ ✔ Examples: [0,"+0.6"] */
    ExposureDifference?: number | string;
    /** ☆☆☆☆ ✔ Example: "1/3-stop set, 1/3-stop comp." */
    ExposureLevelIncrements?: string;
    /** ☆☆☆☆ ✔ Example: "Spot metering" */
    ExposureModeInManual?: string;
    /** ☆☆☆☆ ✔ Example: 0 */
    ExposureShift?: number;
    /** ☆☆☆☆   Example: 0 */
    ExposureStandardAdjustment?: number;
    /** ☆☆☆☆   Examples: ["1/80",0.7] */
    ExposureTime2?: string | number;
    /** ☆☆☆☆ ✔ Examples: [0,"-1/2"] */
    ExposureTuning?: number | string;
    /** ☆☆☆☆ ✔ Example: "Good" */
    ExposureWarning?: string;
    /** ☆☆☆☆ ✔ Example: "On" */
    ExtendedWBDetect?: string;
    /** ☆☆☆☆ ✔ Example: "None" */
    Extender?: string;
    /** ☆☆☆☆ ✔ Example: 0 */
    ExtenderFirmwareVersion?: number;
    /** ☆☆☆☆   Example: "Not attached" */
    ExtenderStatus?: string;
    /** ☆☆☆☆ ✔ Example: "On" */
    ExternalFlash?: string;
    /** ☆☆☆☆ ✔ Example: "n/a" */
    ExternalFlashBounce?: string;
    /** ☆☆☆☆   Example: 0 */
    ExternalFlashCompensation?: number;
    /** ☆☆☆☆ ✔ Examples: [0,"n/a"] */
    ExternalFlashExposureComp?: number | string;
    /** ☆☆☆☆ ✔ Example: "n/a" */
    ExternalFlashFirmware?: string;
    /** ☆☆☆☆ ✔ Example: "(none)" */
    ExternalFlashFlags?: string;
    /** ☆☆☆☆   Example: 0 */
    ExternalFlashGValue?: number;
    /** ☆☆☆☆   Example: "n/a" */
    ExternalFlashGuideNumber?: string;
    /** ☆☆☆☆   Examples: [1,"Off"] */
    ExternalFlashMode?: number | string;
    /** ☆☆☆☆ ✔ Example: "n/a" */
    ExternalFlashReadyState?: string;
    /** ☆☆☆☆ ✔ Example: "Flash Not Attached" */
    ExternalFlashStatus?: string;
    /** ☆☆☆☆ ✔ Example: 54 */
    ExternalFlashZoom?: number;
    /** ☆☆☆☆ ✔ Example: "No" */
    ExternalFlashZoomOverride?: string;
    /** ☆☆☆☆   Example: 9.14 */
    ExternalSensorBrightnessValue?: number;
    /** ☆☆☆☆   Example: "0.1.0.1" */
    ExtraInfoVersion?: string;
    /** ☆☆☆☆ ✔ Example: "Enable; 0; 8; 0" */
    FEMicroadjustment?: string;
    /** ☆☆☆☆   Example: "95 114 20 20" */
    Face1Position?: string;
    /** ☆☆☆☆   Example: "564 564" */
    Face1Size?: string;
    /** ☆☆☆☆   Example: "958 1334 274 274" */
    Face2Position?: string;
    /** ☆☆☆☆   Example: "627 80 274 274" */
    Face3Position?: string;
    /** ☆☆☆☆   Example: "864 595" */
    Face4Position?: string;
    /** ☆☆☆☆   Example: "384 608" */
    Face5Position?: string;
    /** ☆☆☆☆   Example: "810 606 216 216" */
    Face6Position?: string;
    /** ☆☆☆☆   Example: "Unknown (II*\u0000\b\u0000\u0000\u0000)" */
    FaceDetect?: string;
    /** ☆☆☆☆ ✔ Example: "(Binary data 405 bytes, use -b option t…" */
    FaceDetectArea?: string;
    /** ☆☆☆☆ ✔ Example: "0 26 640 428 0 26 640 428 0 0 0 0" */
    FaceDetectFrameCrop?: string;
    /** ☆☆☆☆ ✔ Example: "720 480" */
    FaceDetectFrameSize?: string;
    /** ☆☆☆☆   Example: "On" */
    FaceDetection?: string;
    /** ☆☆☆☆   Example: "918 1058 1959 2101" */
    FaceElementPositions?: string;
    /** ☆☆☆☆   Example: "892 917 2131 2135" */
    FaceElementSelected?: string;
    /** ☆☆☆☆   Examples: ["Unknown (4096)",["Face","Left Eye","Right Eye"]] */
    FaceElementTypes?: string | string[];
    /** ☆☆☆☆ ✔ Example: 9 */
    FaceInfoLength?: number;
    /** ☆☆☆☆ ✔ Example: 94 */
    FaceInfoOffset?: number;
    /** ☆☆☆☆   Example: "67 23" */
    FacePosition?: string;
    /** ☆☆☆☆   Example: "918 1058 1959 2101" */
    FacePositions?: string;
    /** ☆☆☆☆   Example: "On" */
    FaceRecognition?: string;
    /** ☆☆☆☆   Example: 35 */
    FaceWidth?: number;
    /** ★★☆☆ ✔ Examples: [65535,"3 3 0"] */
    FacesDetected?: number | string;
    /** ☆☆☆☆ ✔ Example: 12336 */
    FacesRecognized?: number;
    /** ☆☆☆☆ ✔ Examples: ["X3F",0] */
    FileFormat?: string | number;
    /** ☆☆☆☆ ✔ Example: 9984 */
    FileIndex?: number;
    /** ☆☆☆☆ ✔ Example: 9396 */
    FileIndex2?: number;
    /** ☆☆☆☆ ✔ Example: "0100" */
    FileInfoVersion?: string;
    /** ★☆☆☆ ✔ Examples: ["986-8698",9944] */
    FileNumber?: string | number;
    /** ☆☆☆☆   Example: "Unknown (65537)" */
    FileNumberMemory?: string;
    /** ☆☆☆☆ ✔ Example: "On" */
    FileNumberSequence?: string;
    /** ☆☆☆☆ ✔ Example: "Enable" */
    FillFlashAutoReduction?: string;
    /** ☆☆☆☆   Example: "Off" */
    FilmGrainEffect?: string;
    /** ☆☆☆☆ ✔ Example: "n/a" */
    FilmMode?: string;
    /** ☆☆☆☆ ✔ Example: "n/a" */
    FilterEffect?: string;
    /** ☆☆☆☆ ✔ Example: "n/a" */
    FilterEffectAuto?: string;
    /** ☆☆☆☆ ✔ Example: "None" */
    FilterEffectMonochrome?: string;
    /** ☆☆☆☆ ✔ Example: "n/a" */
    FilterEffectUserDef1?: string;
    /** ☆☆☆☆ ✔ Example: "None" */
    FilterEffectUserDef2?: string;
    /** ☆☆☆☆ ✔ Example: "None" */
    FilterEffectUserDef3?: string;
    /** ☆☆☆☆ ✔ Example: "On" */
    FinderDisplayDuringExposure?: string;
    /** ☆☆☆☆   Example: "On; Normal" */
    FineSharpness?: string;
    /** ☆☆☆☆ ✔ Example: 0 */
    FineTuneOptCenterWeighted?: number;
    /** ☆☆☆☆ ✔ Example: 0 */
    FineTuneOptHighlightWeighted?: number;
    /** ☆☆☆☆ ✔ Example: 0 */
    FineTuneOptMatrixMetering?: number;
    /** ☆☆☆☆ ✔ Example: 0 */
    FineTuneOptSpotMetering?: number;
    /** ☆☆☆☆   Examples: ["u77",82] */
    Firmware?: string | number;
    /** ☆☆☆☆   Examples: ["2015:11:09 08:38","2013-02-26"] */
    FirmwareDate?: string | ExifDate;
    /** ☆☆☆☆   Examples: [0,"NX1_000000"] */
    FirmwareName?: number | string;
    /** ☆☆☆☆ ✔ Example: "Rev01500000" */
    FirmwareRevision?: string;
    /** ☆☆☆☆   Example: "Rev01500000" */
    FirmwareRevision2?: string;
    /** ☆☆☆☆ ✔ Examples: ["V1.00 ",80.01] */
    FirmwareVersion?: string | number;
    /** ☆☆☆☆ ✔ Example: "Off" */
    FisheyeFilter?: string;
    /** ☆☆☆☆ ✔ Example: "Fired" */
    FlashAction?: string;
    /** ☆☆☆☆   Example: "Did not fire" */
    FlashAction2?: string;
    /** ☆☆☆☆   Example: "Did not fire" */
    FlashActionExternal?: string;
    /** ☆☆☆☆ ✔ Example: 255 */
    FlashActivity?: number;
    /** ☆☆☆☆ ✔ Example: "n/a" */
    FlashBatteryLevel?: string;
    /** ☆☆☆☆ ✔ Examples: [0,"-2/3"] */
    FlashBias?: number | string;
    /** ★☆☆☆ ✔ Example: "Manual, External" */
    FlashBits?: string;
    /** ☆☆☆☆ ✔ Example: "Raise built-in flash" */
    FlashButtonFunction?: string;
    /** ☆☆☆☆   Example: 0 */
    FlashChargeLevel?: number;
    /** ☆☆☆☆ ✔ Example: "None" */
    FlashColorFilter?: string;
    /** ☆☆☆☆ ✔ Example: "Off" */
    FlashCommanderMode?: string;
    /** ☆☆☆☆ ✔ Examples: [0,"-2/3"] */
    FlashCompensation?: number | string;
    /** ☆☆☆☆   Example: "Pre-flash TTL" */
    FlashControl?: string;
    /** ☆☆☆☆ ✔ Example: "iTTL-BL" */
    FlashControlMode?: string;
    /** ☆☆☆☆ ✔ Example: "n/a" */
    FlashCurtain?: string;
    /** ☆☆☆☆   Example: "Unknown (0 0)" */
    FlashDevice?: string;
    /** ☆☆☆☆   Example: 53 */
    FlashDistance?: number;
    /** ☆☆☆☆ ✔ Example: 0.3 */
    FlashExposureBracketValue?: number;
    /** ★★☆☆ ✔ Examples: [10,"inf"] */
    FlashExposureComp?: number | string;
    /** ☆☆☆☆   Examples: [0,"+1/3"] */
    FlashExposureComp2?: number | string;
    /** ☆☆☆☆   Example: 0 */
    FlashExposureComp3?: number;
    /** ☆☆☆☆   Examples: [0,"-2/3"] */
    FlashExposureComp4?: number | string;
    /** ☆☆☆☆ ✔ Example: "Entire frame" */
    FlashExposureCompArea?: string;
    /** ☆☆☆☆   Example: 0 */
    FlashExposureCompSet?: number;
    /** ☆☆☆☆   Example: 0 */
    FlashExposureCompSet2?: number;
    /** ☆☆☆☆ ✔ Example: "Off" */
    FlashExposureLock?: string;
    /** ☆☆☆☆   Example: "Yes" */
    FlashFired?: string;
    /** ☆☆☆☆ ✔ Example: "Fires" */
    FlashFiring?: string;
    /** ☆☆☆☆ ✔ Example: 1.005 */
    FlashFirmwareVersion?: number;
    /** ☆☆☆☆ ✔ Example: "12 mm" */
    FlashFocalLength?: string;
    /** ☆☆☆☆ ✔ Examples: [0,"n/a"] */
    FlashGNDistance?: number | string;
    /** ☆☆☆☆ ✔ Example: 0 */
    FlashGroupACompensation?: number;
    /** ☆☆☆☆ ✔ Example: "Off" */
    FlashGroupAControlMode?: string;
    /** ☆☆☆☆ ✔ Example: 0 */
    FlashGroupBCompensation?: number;
    /** ☆☆☆☆ ✔ Example: "Off" */
    FlashGroupBControlMode?: string;
    /** ☆☆☆☆ ✔ Example: 0 */
    FlashGroupCCompensation?: number;
    /** ☆☆☆☆ ✔ Example: "Off" */
    FlashGroupCControlMode?: string;
    /** ☆☆☆☆ ✔ Example: 9 */
    FlashGuideNumber?: number;
    /** ☆☆☆☆ ✔ Example: "0200" */
    FlashInfoVersion?: string;
    /** ☆☆☆☆ ✔ Example: "n/a (x4)" */
    FlashIntensity?: string;
    /** ☆☆☆☆ ✔ Example: "n/a" */
    FlashLevel?: string;
    /** ☆☆☆☆   Example: "Unknown (65797)" */
    FlashMetering?: string;
    /** ☆☆☆☆ ✔ Example: "Off" */
    FlashMeteringMode?: string;
    /** ☆☆☆☆   Example: "18.0 18.5 20.0 20.0 20.0 20.0 20.0 20.0…" */
    FlashMeteringSegments?: string;
    /** ★☆☆☆ ✔ Example: "Unknown (c2)" */
    FlashMode?: string;
    /** ☆☆☆☆ ✔ Example: "None" */
    FlashModel?: string;
    /** ☆☆☆☆   Example: "Red-eye reduction" */
    FlashOptions?: string;
    /** ☆☆☆☆   Example: "Red-eye reduction" */
    FlashOptions2?: string;
    /** ☆☆☆☆ ✔ Examples: [94,"0%"] */
    FlashOutput?: number | string;
    /** ☆☆☆☆ ✔ Example: "Off" */
    FlashRemoteControl?: string;
    /** ☆☆☆☆ ✔ Example: "01114671" */
    FlashSerialNumber?: string;
    /** ☆☆☆☆ ✔ Example: "Uw-Normal" */
    FlashSetting?: string;
    /** ☆☆☆☆ ✔ Example: "1/64" */
    FlashShutterSpeed?: string;
    /** ☆☆☆☆ ✔ Example: "None" */
    FlashSource?: string;
    /** ☆☆☆☆ ✔ Example: "Off" */
    FlashStatus?: string;
    /** ☆☆☆☆   Example: "None" */
    FlashStatusExternal?: string;
    /** ☆☆☆☆   Example: "Front curtain" */
    FlashSyncMode?: string;
    /** ☆☆☆☆ ✔ Example: "1/250 s (auto FP)" */
    FlashSyncSpeed?: string;
    /** ☆☆☆☆ ✔ Example: "Auto" */
    FlashSyncSpeedAv?: string;
    /** ☆☆☆☆   Example: 8.5 */
    FlashThreshold?: number;
    /** ☆☆☆☆ ✔ Example: "Optional,TTL" */
    FlashType?: string;
    /** ☆☆☆☆ ✔ Example: "Yes (flash required but disabled)" */
    FlashWarning?: string;
    /** ☆☆☆☆ ✔ Example: "320 262" */
    FlexibleSpotPosition?: string;
    /** ☆☆☆☆   Example: "On" */
    FlickerReduce?: string;
    /** ☆☆☆☆   Example: "Off (0x0001)" */
    FlickerReduction?: string;
    /** ☆☆☆☆   Example: "73.4 mm" */
    FocalLength2?: string;
    /** ☆☆☆☆   Example: "70.0 mm" */
    FocalLengthTeleZoom?: string;
    /** ☆☆☆☆   Example: "640 428" */
    FocalPlaneAFPointArea?: string;
    /** ☆☆☆☆   Example: "458 260" */
    FocalPlaneAFPointLocation1?: string;
    /** ☆☆☆☆   Example: "481 260" */
    FocalPlaneAFPointLocation2?: string;
    /** ☆☆☆☆   Example: "481 284" */
    FocalPlaneAFPointLocation3?: string;
    /** ☆☆☆☆   Example: "458 284" */
    FocalPlaneAFPointLocation4?: string;
    /** ☆☆☆☆   Example: "435 284" */
    FocalPlaneAFPointLocation5?: string;
    /** ☆☆☆☆   Example: "435 260" */
    FocalPlaneAFPointLocation6?: string;
    /** ☆☆☆☆   Example: "435 236" */
    FocalPlaneAFPointLocation7?: string;
    /** ☆☆☆☆   Example: "458 236" */
    FocalPlaneAFPointLocation8?: string;
    /** ☆☆☆☆   Example: "481 236" */
    FocalPlaneAFPointLocation9?: string;
    /** ☆☆☆☆   Examples: [9,"(none)"] */
    FocalPlaneAFPointsUsed?: number | string;
    /** ☆☆☆☆ ✔ Example: "undef mm" */
    FocalPlaneDiagonal?: string;
    /** ☆☆☆☆ ✔ Example: "9.02 mm" */
    FocalPlaneXSize?: string;
    /** ☆☆☆☆ ✔ Example: "8.10 mm" */
    FocalPlaneYSize?: string;
    /** ☆☆☆☆ ✔ Example: "Zoom" */
    FocalType?: string;
    /** ★☆☆☆ ✔ Example: "32/mm" */
    FocalUnits?: string;
    /** ☆☆☆☆   Example: "Wide Focus (normal)" */
    FocusArea?: string;
    /** ☆☆☆☆ ✔ Example: "Single" */
    FocusContinuous?: string;
    /** ☆☆☆☆ ✔ Example: "Enable" */
    FocusDisplayAIServoAndMF?: string;
    /** ☆☆☆☆ ✔ Examples: ["inf",845] */
    FocusDistance?: string | number;
    /** ☆☆☆☆ ✔ Example: "inf" */
    FocusDistanceLower?: string;
    /** ☆☆☆☆ ✔ Example: "inf" */
    FocusDistanceUpper?: string;
    /** ☆☆☆☆ ✔ Example: "0100" */
    FocusInfoVersion?: string;
    /** ☆☆☆☆   Example: "7952 5304 3976 2652" */
    FocusLocation?: string;
    /** ★★☆☆ ✔ Example: "Unknown (860272)" */
    FocusMode?: string;
    /** ☆☆☆☆   Example: "Manual" */
    FocusMode2?: string;
    /** ☆☆☆☆   Example: "Manual" */
    FocusModeSetting?: string;
    /** ☆☆☆☆   Example: "AF" */
    FocusModeSwitch?: string;
    /** ☆☆☆☆ ✔ Example: "972 1296" */
    FocusPixel?: string;
    /** ☆☆☆☆ ✔ Example: "Wrap" */
    FocusPointWrap?: string;
    /** ☆☆☆☆ ✔ Examples: [999,"0xd1"] */
    FocusPosition?: number | string;
    /** ☆☆☆☆ ✔ Example: 255 */
    FocusPosition2?: number;
    /** ☆☆☆☆ ✔ Example: "AF Used; 96" */
    FocusProcess?: string;
    /** ★☆☆☆ ✔ Example: "Unknown (2)" */
    FocusRange?: string;
    /** ☆☆☆☆   Examples: [5,"7 (very far)"] */
    FocusRangeIndex?: number | string;
    /** ☆☆☆☆   Example: "M" */
    FocusSetting?: string;
    /** ☆☆☆☆   Example: "Not confirmed, Tracking" */
    FocusStatus?: string;
    /** ☆☆☆☆ ✔ Example: 98 */
    FocusStepCount?: number;
    /** ☆☆☆☆ ✔ Example: 9692 */
    FocusStepInfinity?: number;
    /** ☆☆☆☆ ✔ Example: 9784 */
    FocusStepNear?: number;
    /** ☆☆☆☆ ✔ Example: "Off" */
    FocusTrackingLockOn?: string;
    /** ☆☆☆☆ ✔ Example: "Out of focus" */
    FocusWarning?: string;
    /** ☆☆☆☆ ✔ Example: "Eh-A" */
    FocusingScreen?: string;
    /** ☆☆☆☆   Example: "Standard Form" */
    FolderName?: string;
    /** ☆☆☆☆   Example: 373 */
    FolderNumber?: number;
    /** ☆☆☆☆   Example: 849 */
    FrameNumber?: number;
    /** ☆☆☆☆   Example: 805 */
    FreeMemoryCardImages?: number;
    /** ☆☆☆☆ ✔ Example: "Red-eye reduction" */
    FujiFlashMode?: string;
    /** ☆☆☆☆ ✔ Example: "7952x5304" */
    FullImageSize?: string;
    /** ☆☆☆☆   Example: "Off" */
    FullPressSnap?: string;
    /** ☆☆☆☆   Example: "None" */
    Func1Button?: string;
    /** ☆☆☆☆   Example: "Choose Image Area (DX/1.3x)" */
    Func1ButtonPlusDials?: string;
    /** ☆☆☆☆   Example: "Rating" */
    Func2Button?: string;
    /** ☆☆☆☆ ✔ Example: "Virtual Horizon" */
    FuncButton?: string;
    /** ☆☆☆☆ ✔ Example: "None" */
    FuncButtonPlusDials?: string;
    /** ☆☆☆☆   Example: "ISO Display" */
    FunctionButton?: string;
    /** ☆☆☆☆   Example: "4320x3240" */
    GEImageSize?: string;
    /** ☆☆☆☆   Example: "GEDSC DIGITAL CAMERA           " */
    GEMake?: string;
    /** ☆☆☆☆   Example: "J1470S" */
    GEModel?: string;
    /** ☆☆☆☆   Example: 16 */
    Gain?: number;
    /** ☆☆☆☆ ✔ Example: 256 */
    GainBase?: number;
    /** ☆☆☆☆ ✔ Example: "n/a; User-Selected" */
    Gradation?: string;
    /** ☆☆☆☆   Example: "Off" */
    GrainEffect?: string;
    /** ☆☆☆☆ ✔ Example: "Off" */
    GrainyBWFilter?: string;
    /** ☆☆☆☆   Examples: ["2E",40] */
    GreenGain?: string | number;
    /** ☆☆☆☆ ✔ Example: "On" */
    GridDisplay?: string;
    /** ☆☆☆☆   Example: 157 */
    GripBatteryADLoad?: number;
    /** ☆☆☆☆   Example: 5 */
    GripBatteryADNoLoad?: number;
    /** ☆☆☆☆   Example: "Empty or Missing" */
    GripBatteryState?: string;
    /** ☆☆☆☆ ✔ Example: "Squares" */
    GroupAreaAFIllumination?: string;
    /** ☆☆☆☆ ✔ Example: "On" */
    HDR?: string;
    /** ☆☆☆☆ ✔ Example: "Natural" */
    HDREffect?: string;
    /** ☆☆☆☆ ✔ Example: "Unknown (2)" */
    HDRImageType?: string;
    /** ☆☆☆☆ ✔ Examples: ["0200",0] */
    HDRInfoVersion?: string | number;
    /** ☆☆☆☆ ✔ Example: "n/a" */
    HDRLevel?: string;
    /** ☆☆☆☆ ✔ Example: "n/a" */
    HDRLevel2?: string;
    /** ☆☆☆☆ ✔ Example: "On (Manual)" */
    HDRSetting?: string;
    /** ☆☆☆☆ ✔ Example: "Unknown (1)" */
    HDRShot?: string;
    /** ☆☆☆☆ ✔ Example: "n/a" */
    HDRSmoothing?: string;
    /** ☆☆☆☆ ✔ Example: "n/a" */
    HighISONoiseReduction?: string;
    /** ☆☆☆☆   Example: "Off" */
    HighISONoiseReduction2?: string;
    /** ☆☆☆☆   Example: 4 */
    HighLowKeyAdj?: number;
    /** ☆☆☆☆   Example: "Off" */
    HighSpeedSync?: string;
    /** ☆☆☆☆   Examples: [0.1,"+0.0"] */
    Highlight?: number | string;
    /** ☆☆☆☆ ✔ Example: "0 0" */
    HighlightShadow?: string;
    /** ☆☆☆☆ ✔ Example: "0 (normal)" */
    HighlightTone?: string;
    /** ☆☆☆☆ ✔ Example: "Off" */
    HighlightTonePriority?: string;
    /** ☆☆☆☆ ✔ Example: "Yes" */
    HighlightWarning?: string;
    /** ☆☆☆☆   Example: "ndon" */
    HometownCity?: string;
    /** ☆☆☆☆   Example: "NYC " */
    HometownCityCode?: string;
    /** ☆☆☆☆   Example: "Yes" */
    HometownDST?: string;
    /** ☆☆☆☆   Example: 2 */
    HostSoftwareExportVersion?: number;
    /** ☆☆☆☆   Example: "Unknown (4 4)" */
    HostSoftwareRendering?: string;
    /** ☆☆☆☆ ✔ Examples: ["n/a",-4] */
    Hue?: string | number;
    /** ☆☆☆☆   Example: "Off" */
    HueAdjust?: string;
    /** ☆☆☆☆ ✔ Examples: ["n/a",3] */
    HueAdjustment?: string | number;
    /** ☆☆☆☆ ✔ Example: 800 */
    ISO2?: number;
    /** ☆☆☆☆   Example: "On" */
    ISOAuto?: string;
    /** ☆☆☆☆ ✔ Example: "Unknown (0x6)" */
    ISOAutoHiLimit?: string;
    /** ☆☆☆☆   Example: "Standard" */
    ISOAutoParameters?: string;
    /** ☆☆☆☆ ✔ Example: "Auto" */
    ISOAutoShutterTime?: string;
    /** ☆☆☆☆ ✔ Example: "Show Frame Count" */
    ISODisplay?: string;
    /** ☆☆☆☆ ✔ Example: "On" */
    ISOExpansion?: string;
    /** ☆☆☆☆ ✔ Example: "Off" */
    ISOExpansion2?: string;
    /** ☆☆☆☆   Example: 800 */
    ISOFloor?: number;
    /** ☆☆☆☆   Example: "Manual" */
    ISOSelection?: string;
    /** ☆☆☆☆   Example: "1/3 EV" */
    ISOSensitivityStep?: string;
    /** ☆☆☆☆ ✔ Examples: [90,"Unknown (44695552)"] */
    ISOSetting?: number | string;
    /** ☆☆☆☆ ✔ Example: "Yes" */
    ISOSpeedExpansion?: string;
    /** ☆☆☆☆ ✔ Example: "1/3 Stop" */
    ISOSpeedIncrements?: string;
    /** ☆☆☆☆ ✔ Example: "Enable; Max 3200; Min 1" */
    ISOSpeedRange?: string;
    /** ☆☆☆☆ ✔ Example: "1/3 EV" */
    ISOStepSize?: string;
    /** ☆☆☆☆   Example: 79.44 */
    ISOValue?: number;
    /** ☆☆☆☆   Examples: ["Normal",0] */
    ImageAdjustment?: string | number;
    /** ☆☆☆☆ ✔ Example: "Off" */
    ImageAuthentication?: string;
    /** ☆☆☆☆ ✔ Example: "0 0 8256 5504" */
    ImageBoundary?: string;
    /** ☆☆☆☆ ✔ Example: 994 */
    ImageCount?: number;
    /** ☆☆☆☆   Examples: [966,"   561"] */
    ImageCount2?: number | string;
    /** ☆☆☆☆ ✔ Example: 966 */
    ImageCount3?: number;
    /** ☆☆☆☆ ✔ Example: 9927271 */
    ImageDataSize?: number;
    /** ☆☆☆☆   Example: 1 */
    ImageEditCount?: number;
    /** ☆☆☆☆   Example: "Red-eye Correction" */
    ImageEditing?: string;
    /** ☆☆☆☆   Example: "Standard" */
    ImageEffects?: string;
    /** ☆☆☆☆ ✔ Example: "Re-developed from RAW" */
    ImageGeneration?: string;
    /** ☆☆☆☆   Example: 912 */
    ImageIDNumber?: number;
    /** ☆☆☆☆   Examples: [9956,"0723"] */
    ImageNumber?: number | string;
    /** ☆☆☆☆   Example: 804 */
    ImageNumber2?: number;
    /** ☆☆☆☆ ✔ Example: "Normal" */
    ImageOptimization?: string;
    /** ☆☆☆☆   Example: "Red Eye Ruduction ;" */
    ImageProcessing?: string;
    /** ☆☆☆☆ ✔ Example: "0112" */
    ImageProcessingVersion?: string;
    /** ☆☆☆☆ ✔ Example: "Very High" */
    ImageQuality?: string;
    /** ☆☆☆☆   Example: "Unknown (6)" */
    ImageQuality2?: string;
    /** ☆☆☆☆   Example: "On" */
    ImageReview?: string;
    /** ☆☆☆☆ ✔ Example: "4 s" */
    ImageReviewMonitorOffTime?: string;
    /** ☆☆☆☆   Example: "4 s" */
    ImageReviewTime?: string;
    /** ☆☆☆☆   Example: "No" */
    ImageRotated?: string;
    /** ★★☆☆ ✔ Example: "n/a" */
    ImageStabilization?: string;
    /** ☆☆☆☆   Example: "On" */
    ImageStabilizationSetting?: string;
    /** ☆☆☆☆   Example: "StyleBox1" */
    ImageStyle?: string;
    /** ☆☆☆☆   Example: 94 */
    ImageTemperatureMax?: number;
    /** ☆☆☆☆   Example: 86 */
    ImageTemperatureMin?: number;
    /** ☆☆☆☆   Example: "Vibrant" */
    ImageTone?: string;
    /** ☆☆☆☆ ✔ Example: "Displays shooting functions" */
    InfoButtonWhenShooting?: string;
    /** ☆☆☆☆   Example: "On" */
    InfraredIlluminator?: string;
    /** ☆☆☆☆ ✔ Example: "Medium Magnification" */
    InitialZoomSetting?: string;
    /** ☆☆☆☆ ✔ Example: "On" */
    IntelligentAuto?: string;
    /** ☆☆☆☆ ✔ Example: "n/a" */
    IntelligentContrast?: string;
    /** ☆☆☆☆ ✔ Example: "Standard" */
    IntelligentExposure?: string;
    /** ☆☆☆☆ ✔ Example: "Standard" */
    IntelligentResolution?: string;
    /** ☆☆☆☆ ✔ Example: "TTL" */
    InternalFlash?: string;
    /** ☆☆☆☆   Example: "Did not fire, Red-eye reduction" */
    InternalFlashMode?: string;
    /** ☆☆☆☆   Example: 63 */
    InternalFlashStrength?: number;
    /** ☆☆☆☆   Example: 95 */
    InternalFlashTable?: number;
    /** ☆☆☆☆ ✔ Example: 0 */
    InternalNDFilter?: number;
    /** ★☆☆☆ ✔ Examples: ["fdfec409",947] */
    InternalSerialNumber?: string | number;
    /** ☆☆☆☆   Example: 65542 */
    IntervalLength?: number;
    /** ☆☆☆☆   Example: "Still Image" */
    IntervalMode?: string;
    /** ☆☆☆☆   Example: 65797 */
    IntervalNumber?: number;
    /** ☆☆☆☆   Example: "Off" */
    IntervalShooting?: string;
    /** ☆☆☆☆ ✔ Examples: ["n/a (Movie)",8] */
    JPEGQuality?: string | number;
    /** ☆☆☆☆   Example: 1968 */
    JPGInfoOffset?: number;
    /** ☆☆☆☆   Example: "10 MP" */
    JpgRecordedPixels?: string;
    /** ☆☆☆☆   Example: "2500 0 1.210693359375 2.5404052734375" */
    KelvinWB_01?: string;
    /** ☆☆☆☆   Example: "2630 0 1.2742919921875 2.6370849609375" */
    KelvinWB_02?: string;
    /** ☆☆☆☆   Example: "2780 0 1.35107421875 2.5938720703125" */
    KelvinWB_03?: string;
    /** ☆☆☆☆   Example: "2940 0 1.4400634765625 2.45751953125" */
    KelvinWB_04?: string;
    /** ☆☆☆☆   Example: "3130 0 1.53466796875 2.3111572265625" */
    KelvinWB_05?: string;
    /** ☆☆☆☆   Example: "3330 0 1.624755859375 2.177490234375" */
    KelvinWB_06?: string;
    /** ☆☆☆☆   Example: "3570 0 1.7254638671875 2.0418701171875" */
    KelvinWB_07?: string;
    /** ☆☆☆☆   Example: "3850 0 1.8372802734375 1.9119873046875" */
    KelvinWB_08?: string;
    /** ☆☆☆☆   Example: "4170 0 1.958984375 1.79248046875" */
    KelvinWB_09?: string;
    /** ☆☆☆☆   Example: "4550 0 2.0924072265625 1.679443359375" */
    KelvinWB_10?: string;
    /** ☆☆☆☆   Example: "5000 0 2.23193359375 1.5740966796875" */
    KelvinWB_11?: string;
    /** ☆☆☆☆   Example: "5560 0 2.3948974609375 1.4693603515625" */
    KelvinWB_12?: string;
    /** ☆☆☆☆   Example: "6250 0 2.56396484375 1.365234375" */
    KelvinWB_13?: string;
    /** ☆☆☆☆   Example: "7140 0 2.7325439453125 1.273681640625" */
    KelvinWB_14?: string;
    /** ☆☆☆☆   Example: "8330 0 2.895263671875 1.1944580078125" */
    KelvinWB_15?: string;
    /** ☆☆☆☆   Example: "10000 0 3.050048828125 1.1239013671875" */
    KelvinWB_16?: string;
    /** ☆☆☆☆   Example: "5205 0 2.291015625 1.5394287109375" */
    KelvinWB_Daylight?: string;
    /** ☆☆☆☆ ✔ Example: "Off" */
    KeystoneCompensation?: string;
    /** ☆☆☆☆ ✔ Example: "Vertical" */
    KeystoneDirection?: string;
    /** ☆☆☆☆ ✔ Example: "0 0 0" */
    KeystoneValue?: string;
    /** ☆☆☆☆   Example: 864 */
    KodakImageHeight?: number;
    /** ☆☆☆☆   Example: 800 */
    KodakImageWidth?: number;
    /** ☆☆☆☆   Example: "SKodakCommonInfo Jaguar7" */
    KodakInfoType?: string;
    /** ☆☆☆☆   Example: "Kodak                           " */
    KodakMake?: string;
    /** ☆☆☆☆   Example: "PENTAX" */
    KodakMaker?: string;
    /** ☆☆☆☆   Example: "Z760    " */
    KodakModel?: string;
    /** ☆☆☆☆   Example: "1.0.0.0" */
    KodakVersion?: string;
    /** ☆☆☆☆ ✔ Example: "Retain power off status" */
    LCDDisplayAtPowerOn?: string;
    /** ☆☆☆☆ ✔ Example: "On" */
    LCDIllumination?: string;
    /** ☆☆☆☆ ✔ Example: "Off" */
    LCDIlluminationDuringBulb?: string;
    /** ☆☆☆☆ ✔ Example: "Remain. shots/File no." */
    LCDPanels?: string;
    /** ☆☆☆☆ ✔ Example: "Masked" */
    LVShootingAreaDisplay?: string;
    /** ☆☆☆☆ ✔ Example: "UNICORN THEATRE FOR CHILDREN" */
    Landmark?: string;
    /** ☆☆☆☆   Example: 92 */
    LastFileNumber?: number;
    /** ☆☆☆☆ ✔ Example: "n/a" */
    LateralChromaticAberration?: string;
    /** ☆☆☆☆ ✔ Example: "85mm f/1.8" */
    Lens?: string;
    /** ☆☆☆☆ ✔ Example: "One Shot <-> AI servo" */
    LensAFStopButton?: string;
    /** ☆☆☆☆   Examples: ["4.0 to 22",4] */
    LensApertureRange?: string | number;
    /** ☆☆☆☆ ✔ Example: "0800" */
    LensDataVersion?: string;
    /** ☆☆☆☆ ✔ Examples: ["97 154 172 70 104 114",0] */
    LensDistortionParams?: string | number;
    /** ☆☆☆☆ ✔ Example: "Focus search on" */
    LensDriveNoAF?: string;
    /** ☆☆☆☆ ✔ Example: "Continue Focus Search" */
    LensDriveWhenAFImpossible?: string;
    /** ☆☆☆☆ ✔ Example: 8.67 */
    LensFStops?: number;
    /** ☆☆☆☆   Example: "RL8 :V01390000 " */
    LensFirmware?: string;
    /** ☆☆☆☆ ✔ Examples: ["Ver.02.006",1.305] */
    LensFirmwareVersion?: string | number;
    /** ☆☆☆☆   Example: "70.0 mm" */
    LensFocalLength?: string;
    /** ☆☆☆☆   Examples: ["50 to 50",70] */
    LensFocalRange?: string | number;
    /** ☆☆☆☆ ✔ Example: "AF Lock Only" */
    LensFocusFunctionButtons?: string;
    /** ☆☆☆☆ ✔ Example: "Unknown" */
    LensFormat?: string;
    /** ☆☆☆☆ ✔ Example: 93 */
    LensIDNumber?: number;
    /** ☆☆☆☆   Example: "4 to 4" */
    LensMaxApertureRange?: string;
    /** ☆☆☆☆ ✔ Example: "On" */
    LensModulationOptimizer?: string;
    /** ☆☆☆☆ ✔ Example: "Unknown" */
    LensMount?: string;
    /** ☆☆☆☆ ✔ Example: "Unknown" */
    LensMount2?: string;
    /** ☆☆☆☆ ✔ Example: "0xe253" */
    LensProperties?: string;
    /** ☆☆☆☆   Example: "Xcenter=1456 Ycenter=1068  GainMax=16" */
    LensShading?: string;
    /** ☆☆☆☆ ✔ Example: "Unknown (00 0 0 0 0 00)" */
    LensSpec?: string;
    /** ☆☆☆☆ ✔ Example: "ZA SSM II" */
    LensSpecFeatures?: string;
    /** ☆☆☆☆   Example: 35 */
    LensTemperature?: number;
    /** ★☆☆☆ ✔ Example: "smc PENTAX-FA 28-105mm F3.2-4.5 AL[IF]" */
    LensType?: string;
    /** ☆☆☆☆ ✔ Example: "Sony LA-EA1 or Sigma MC-11 Adapter" */
    LensType2?: string;
    /** ☆☆☆☆ ✔ Example: "Sony LA-EA4 Adapter" */
    LensType3?: string;
    /** ☆☆☆☆ ✔ Example: "96%" */
    LensZoomPosition?: string;
    /** ☆☆☆☆   Examples: [250,"n/a"] */
    LevelIndicator?: number | string;
    /** ☆☆☆☆   Example: "Unknown (0)" */
    LevelOrientation?: string;
    /** ☆☆☆☆   Example: 1 */
    LightCondition?: number;
    /** ☆☆☆☆   Example: 8 */
    LightReading?: number;
    /** ☆☆☆☆   Example: "Unknown (512)" */
    LightSourceSpecial?: string;
    /** ☆☆☆☆ ✔ Example: "LCD Backlight" */
    LightSwitch?: string;
    /** ☆☆☆☆   Example: 8.546875 */
    LightValueCenter?: number;
    /** ☆☆☆☆   Example: 7.796875 */
    LightValuePeriphery?: number;
    /** ☆☆☆☆   Example: "Shadow Enhance Low" */
    LightingMode?: string;
    /** ☆☆☆☆ ✔ Example: "No Restrictions" */
    LimitAFAreaModeSelection?: string;
    /** ☆☆☆☆ ✔ Example: 11400 */
    LinearityUpperMargin?: number;
    /** ☆☆☆☆   Example: "Off" */
    LinkAEToAFPoint?: string;
    /** ☆☆☆☆   Example: "Wide Area" */
    LiveViewAF?: string;
    /** ☆☆☆☆   Example: "Phase-detect AF" */
    LiveViewAFMethod?: string;
    /** ☆☆☆☆   Example: "Phase-detect AF" */
    LiveViewAFSetting?: string;
    /** ☆☆☆☆ ✔ Example: "Enable" */
    LiveViewButtonOptions?: string;
    /** ☆☆☆☆ ✔ Example: "Enable (simulates exposure)" */
    LiveViewExposureSimulation?: string;
    /** ☆☆☆☆   Example: "Manual" */
    LiveViewFocusMode?: string;
    /** ☆☆☆☆   Example: "40 Segment" */
    LiveViewMetering?: string;
    /** ☆☆☆☆ ✔ Example: "3 min" */
    LiveViewMonitorOffTime?: string;
    /** ☆☆☆☆ ✔ Example: "On" */
    LiveViewShooting?: string;
    /** ☆☆☆☆ ✔ Example: ":99:99 00:00:00" */
    Location?: string;
    /** ☆☆☆☆   Examples: ["0100",1100] */
    LocationInfoVersion?: string | number;
    /** ☆☆☆☆   Example: 0 */
    LocationName?: number;
    /** ☆☆☆☆ ✔ Example: "Protect (hold:record memo); 31" */
    LockMicrophoneButton?: string;
    /** ☆☆☆☆ ✔ Example: "n/a" */
    LongExposureNoiseReduction?: string;
    /** ☆☆☆☆ ✔ Example: "On" */
    LongExposureNoiseReduction2?: string;
    /** ☆☆☆☆   Example: "+0.500" */
    LuminanceNoiseReduction?: string;
    /** ☆☆☆☆   Example: 0 */
    M16CVersion?: number;
    /** ☆☆☆☆ ✔ Example: 99 */
    MCUVersion?: number;
    /** ★☆☆☆ ✔ Example: "Unknown (3)" */
    Macro?: string;
    /** ☆☆☆☆ ✔ Example: "Off" */
    MacroLED?: string;
    /** ★☆☆☆ ✔ Example: "Unknown (852023)" */
    MacroMode?: string;
    /** ☆☆☆☆ ✔ Example: "Soft Focus 2; 1280; 0; 0" */
    MagicFilter?: string;
    /** ☆☆☆☆ ✔ Example: "Image playback only" */
    MagnifiedView?: string;
    /** ☆☆☆☆   Example: 916 */
    MakerNoteOffset?: number;
    /** ☆☆☆☆   Example: "Rdc" */
    MakerNoteType?: string;
    /** ★☆☆☆ ✔ Examples: ["mlt0",36787] */
    MakerNoteVersion?: string | number;
    /** ☆☆☆☆ ✔ Example: "98 kPa" */
    ManometerPressure?: string;
    /** ☆☆☆☆ ✔ Example: "400 m, 1320 ft" */
    ManometerReading?: string;
    /** ☆☆☆☆ ✔ Example: "Stops at AF Area Edges" */
    ManualAFPointSelPattern?: string;
    /** ☆☆☆☆ ✔ Example: "Stops at AF area edges" */
    ManualAFPointSelectPattern?: string;
    /** ☆☆☆☆ ✔ Example: "On (1/64 strength)" */
    ManualFlash?: string;
    /** ★☆☆☆ ✔ Example: "n/a" */
    ManualFlashOutput?: string;
    /** ☆☆☆☆ ✔ Example: "n/a (x4)" */
    ManualFlashStrength?: string;
    /** ☆☆☆☆   Examples: ["inf",1] */
    ManualFocusDistance?: string | number;
    /** ☆☆☆☆ ✔ Example: "Tv=Main/Av=Control" */
    ManualTv?: string;
    /** ☆☆☆☆   Examples: ["2016-02-04","Unknown (0)"] */
    ManufactureDate?: ExifDate | string;
    /** ☆☆☆☆   Examples: ["2011-11-05","RICOH      ","2001-10-23T00:00:00.000"] */
    ManufactureDate1?: ExifDate | string | ExifDateTime;
    /** ☆☆☆☆   Examples: ["2011-11-14","0000:00:00 00:00:00"] */
    ManufactureDate2?: ExifDate | string;
    /** ☆☆☆☆ ✔ Example: "Face Detection On" */
    MatrixMetering?: string;
    /** ★☆☆☆ ✔ Examples: [7.2,"Inf"] */
    MaxAperture?: number | string;
    /** ☆☆☆☆ ✔ Example: 6.7 */
    MaxApertureAtMaxFocal?: number;
    /** ☆☆☆☆ ✔ Example: 4.8 */
    MaxApertureAtMinFocal?: number;
    /** ☆☆☆☆ ✔ Example: 200 */
    MaxContinuousRelease?: number;
    /** ☆☆☆☆ ✔ Example: "8 8 8" */
    MaxFaces?: string;
    /** ★☆☆☆ ✔ Examples: ["96.2 mm",70] */
    MaxFocalLength?: string | number;
    /** ★☆☆☆ ✔ Example: 9.97 */
    MeasuredEV?: number;
    /** ☆☆☆☆ ✔ Example: 9.875 */
    MeasuredEV2?: number;
    /** ☆☆☆☆ ✔ Example: 3.625 */
    MeasuredEV3?: number;
    /** ☆☆☆☆   Example: 9.375 */
    MeasuredLV?: number;
    /** ☆☆☆☆ ✔ Example: "988 1024 1024 636" */
    MeasuredRGGB?: string;
    /** ☆☆☆☆ ✔ Example: "6653 9252 9606 4468" */
    MeasuredRGGBData?: string;
    /** ☆☆☆☆   Example: 443 */
    MechanicalShutterCount?: number;
    /** ☆☆☆☆   Example: "High (48 kHz)" */
    MemoAudioQuality?: string;
    /** ☆☆☆☆   Example: "SD card in use, MemoryStick slot empty" */
    MemoryCardConfiguration?: string;
    /** ☆☆☆☆ ✔ Example: 1 */
    MemoryCardNumber?: number;
    /** ☆☆☆☆   Example: "Previous (top if power off)" */
    MenuButtonDisplayPosition?: string;
    /** ☆☆☆☆ ✔ Example: "Top" */
    MenuButtonReturn?: string;
    /** ☆☆☆☆ ✔ Example: "20 s" */
    MenuMonitorOffTime?: string;
    /** ☆☆☆☆ ✔ Example: "THm211000000000" */
    MetaVersion?: string;
    /** ☆☆☆☆   Example: "Matrix metering" */
    MeterMode?: string;
    /** ☆☆☆☆   Example: "Matrix" */
    Metering?: string;
    /** ☆☆☆☆   Example: "Multi-segment" */
    MeteringMode2?: string;
    /** ☆☆☆☆   Example: "Multi-segment" */
    MeteringMode3?: string;
    /** ☆☆☆☆ ✔ Example: "8 s" */
    MeteringTime?: string;
    /** ☆☆☆☆ ✔ Example: 9.8 */
    MinAperture?: number;
    /** ★☆☆☆ ✔ Examples: ["90.0 mm",75] */
    MinFocalLength?: string | number;
    /** ☆☆☆☆   Example: "2.0 m" */
    MinFocusDistance?: string;
    /** ☆☆☆☆ ✔ Example: "Off" */
    MiniatureFilter?: string;
    /** ☆☆☆☆ ✔ Example: "Unknown (-1)" */
    MiniatureFilterOrientation?: string;
    /** ☆☆☆☆ ✔ Example: 0 */
    MiniatureFilterParameter?: number;
    /** ☆☆☆☆ ✔ Example: 0 */
    MiniatureFilterPosition?: number;
    /** ☆☆☆☆   Example: "(Binary data 734 bytes, use -b option t…" */
    MinoltaCameraSettings2?: string;
    /** ☆☆☆☆   Examples: ["2004-07-05"," 768:00:06"] */
    MinoltaDate?: ExifDate | string;
    /** ☆☆☆☆   Example: "Unknown (768)" */
    MinoltaImageSize?: string;
    /** ☆☆☆☆   Example: "DiMAGE S404" */
    MinoltaModelID?: string;
    /** ☆☆☆☆   Example: "Standard" */
    MinoltaQuality?: string;
    /** ☆☆☆☆   Examples: ["20:16:39","00:07:172"] */
    MinoltaTime?: ExifTime | string;
    /** ☆☆☆☆ ✔ Example: "Enable" */
    MirrorLockup?: string;
    /** ☆☆☆☆   Example: "Manual" */
    ModeDialPosition?: string;
    /** ☆☆☆☆ ✔ Example: 2017 */
    ModelReleaseYear?: number;
    /** ☆☆☆☆ ✔ Example: "On" */
    ModelingFlash?: string;
    /** ☆☆☆☆   Example: 0 */
    ModifiedColorTemp?: number;
    /** ☆☆☆☆   Example: 0 */
    ModifiedDigitalGain?: number;
    /** ☆☆☆☆   Example: 0 */
    ModifiedParamFlag?: number;
    /** ☆☆☆☆   Example: "None" */
    ModifiedPictureStyle?: string;
    /** ☆☆☆☆ ✔ Example: "Off" */
    ModifiedSaturation?: string;
    /** ☆☆☆☆   Example: 0 */
    ModifiedSensorBlueLevel?: number;
    /** ☆☆☆☆   Example: 0 */
    ModifiedSensorRedLevel?: number;
    /** ☆☆☆☆   Example: 0 */
    ModifiedSharpness?: number;
    /** ☆☆☆☆   Example: "n/a" */
    ModifiedSharpnessFreq?: string;
    /** ☆☆☆☆   Example: "Standard" */
    ModifiedToneCurve?: string;
    /** ☆☆☆☆   Example: "Auto" */
    ModifiedWhiteBalance?: string;
    /** ☆☆☆☆   Example: 0 */
    ModifiedWhiteBalanceBlue?: number;
    /** ☆☆☆☆   Example: 0 */
    ModifiedWhiteBalanceRed?: number;
    /** ☆☆☆☆ ✔ Example: "8 s" */
    MonitorOffTime?: string;
    /** ☆☆☆☆   Example: "(none)" */
    MonochromeColor?: string;
    /** ☆☆☆☆   Example: "None" */
    MonochromeFilterEffect?: string;
    /** ☆☆☆☆   Example: "No Filter; 0; 8; Strength 2; 0; 3" */
    MonochromeProfileSettings?: string;
    /** ☆☆☆☆   Example: "None" */
    MonochromeToning?: string;
    /** ☆☆☆☆   Example: 0 */
    MonochromeVignetting?: number;
    /** ☆☆☆☆   Example: "12:19" */
    MonthDayCreated?: string;
    /** ☆☆☆☆   Example: "Old Crescent" */
    MoonPhase?: string;
    /** ☆☆☆☆   Example: 100 */
    MotionSensitivity?: number;
    /** ☆☆☆☆ ✔ Example: "AE/AF Lock" */
    MovieAELockButtonAssignment?: string;
    /** ☆☆☆☆   Example: "None" */
    MovieFunc1Button?: string;
    /** ☆☆☆☆ ✔ Example: "None" */
    MovieFunctionButton?: string;
    /** ☆☆☆☆   Example: "None" */
    MovieFunctionButtonPlusDials?: string;
    /** ☆☆☆☆ ✔ Example: "Index Marking" */
    MoviePreviewButton?: string;
    /** ☆☆☆☆   Example: "None" */
    MoviePreviewButtonPlusDials?: string;
    /** ☆☆☆☆ ✔ Example: "Take Photo" */
    MovieShutterButton?: string;
    /** ☆☆☆☆   Example: "AE/AF Lock" */
    MovieSubSelectorAssignment?: string;
    /** ☆☆☆☆   Example: "None" */
    MovieSubSelectorAssignmentPlusDials?: string;
    /** ☆☆☆☆ ✔ Example: "Off" */
    MultiControllerWhileMetering?: string;
    /** ☆☆☆☆ ✔ Example: "n/a" */
    MultiExposure?: string;
    /** ☆☆☆☆ ✔ Example: "Off" */
    MultiExposureAutoGain?: string;
    /** ☆☆☆☆ ✔ Example: "Bright (comparative)" */
    MultiExposureControl?: string;
    /** ☆☆☆☆ ✔ Example: "Off" */
    MultiExposureMode?: string;
    /** ☆☆☆☆ ✔ Example: 1 */
    MultiExposureShots?: number;
    /** ☆☆☆☆ ✔ Example: "0101" */
    MultiExposureVersion?: string;
    /** ☆☆☆☆   Example: "Normal" */
    MultiFrameNREffect?: string;
    /** ☆☆☆☆ ✔ Example: "n/a" */
    MultiFrameNoiseReduction?: string;
    /** ☆☆☆☆ ✔ Example: "On (quick control dial)" */
    MultiFunctionLock?: string;
    /** ☆☆☆☆ ✔ Example: "Reset Meter-off Delay" */
    MultiSelector?: string;
    /** ☆☆☆☆ ✔ Example: "Start Movie Recording" */
    MultiSelectorLiveView?: string;
    /** ☆☆☆☆ ✔ Example: "Zoom On/Off" */
    MultiSelectorPlaybackMode?: string;
    /** ☆☆☆☆ ✔ Example: "Select Center Focus Point (Reset)" */
    MultiSelectorShootMode?: string;
    /** ☆☆☆☆ ✔ Example: "On (2 frames); 1" */
    MultipleExposureMode?: string;
    /** ☆☆☆☆   Example: "Unknown (15)" */
    MultipleExposureSet?: string;
    /** ☆☆☆☆ ✔ Example: "Vivid" */
    MyColorMode?: string;
    /** ☆☆☆☆ ✔ Example: "n/a" */
    NDFilter?: string;
    /** ☆☆☆☆   Examples: ["n/a (JPEG)",14] */
    NEFBitDepth?: string | number;
    /** ☆☆☆☆ ✔ Example: "Uncompressed (reduced to 12 bit)" */
    NEFCompression?: string;
    /** ☆☆☆☆ ✔ Example: "(Binary data 624 bytes, use -b option t…" */
    NEFLinearizationTable?: string;
    /** ☆☆☆☆   Example: "Off" */
    NeutralDensityFilter?: string;
    /** ☆☆☆☆   Example: "ViewNX 2.8 M" */
    NikonCaptureVersion?: string;
    /** ☆☆☆☆ ✔ Example: "Large (10.0 M)" */
    NikonImageSize?: string;
    /** ☆☆☆☆ ✔ Example: "Release Locked" */
    NoMemoryCard?: string;
    /** ☆☆☆☆ ✔ Example: "n/a" */
    NoiseFilter?: string;
    /** ★☆☆☆ ✔ Example: "[4]" */
    NoiseReduction?: string;
    /** ☆☆☆☆ ✔ Example: "Noise Reduction" */
    NoiseReduction2?: string;
    /** ☆☆☆☆   Example: 5.7 */
    NominalMaxAperture?: number;
    /** ☆☆☆☆   Example: 7 */
    NominalMinAperture?: number;
    /** ☆☆☆☆ ✔ Example: 16383 */
    NormalWhiteLevel?: number;
    /** ☆☆☆☆ ✔ Example: 9 */
    NumAFPoints?: number;
    /** ☆☆☆☆ ✔ Example: 3 */
    NumFaceElements?: number;
    /** ☆☆☆☆ ✔ Example: 65535 */
    NumFacePositions?: number;
    /** ☆☆☆☆   Example: "55 Points" */
    NumberOfFocusPoints?: string;
    /** ☆☆☆☆   Example: "Select Center Focus Point" */
    OKButton?: string;
    /** ☆☆☆☆   Example: "inf" */
    ObjectDistance?: string;
    /** ☆☆☆☆   Example: 960 */
    OlympusImageHeight?: number;
    /** ☆☆☆☆   Example: 3648 */
    OlympusImageWidth?: number;
    /** ☆☆☆☆ ✔ Example: "Focus Priority" */
    OneShotAFRelease?: string;
    /** ☆☆☆☆ ✔ Example: "Unknown ()" */
    OneTouchWB?: string;
    /** ☆☆☆☆   Example: 3 */
    OpticalZoom?: number;
    /** ★☆☆☆ ✔ Examples: [94,"n/a"] */
    OpticalZoomCode?: number | string;
    /** ☆☆☆☆ ✔ Example: "Unknown (0)" */
    OpticalZoomMode?: string;
    /** ☆☆☆☆   Example: "On" */
    OpticalZoomOn?: string;
    /** ☆☆☆☆   Example: 668058300 */
    OrderNumber?: number;
    /** ☆☆☆☆   Example: "Rotate 270 CW" */
    Orientation2?: string;
    /** ☆☆☆☆ ✔ Example: "Separate Vert/Horiz Points" */
    OrientationLinkedAF?: string;
    /** ☆☆☆☆ ✔ Example: "Same for vertical and horizontal" */
    OrientationLinkedAFPoint?: string;
    /** ☆☆☆☆ ✔ Example: 14228 */
    OrientationOffset?: number;
    /** ☆☆☆☆ ✔ Example: 3318 */
    OriginalDecisionDataOffset?: number;
    /** ☆☆☆☆   Example: "/home/username/pictures" */
    OriginalDirectory?: string;
    /** ☆☆☆☆   Example: "L9997698.JPG" */
    OriginalFileName?: string;
    /** ☆☆☆☆ ✔ Example: 3840 */
    OriginalImageHeight?: number;
    /** ☆☆☆☆ ✔ Example: 5760 */
    OriginalImageWidth?: number;
    /** ☆☆☆☆   Example: ["Sensor Upgraded","PREPRODUCTION CAMERA"] */
    OtherInfo?: string[];
    /** ☆☆☆☆ ✔ Example: "(Binary data 864 bytes, use -b option t…" */
    OutputLUT?: string;
    /** ☆☆☆☆ ✔ Example: "Off" */
    PF0CustomFuncRegistration?: string;
    /** ☆☆☆☆ ✔ Example: "Off" */
    PF10RetainProgramShift?: string;
    /** ☆☆☆☆ ✔ Example: "Off" */
    PF13DrivePriority?: string;
    /** ☆☆☆☆ ✔ Example: "Off" */
    PF14DisableFocusSearch?: string;
    /** ☆☆☆☆ ✔ Example: "Off" */
    PF15DisableAFAssistBeam?: string;
    /** ☆☆☆☆ ✔ Example: "Off" */
    PF16AutoFocusPointShoot?: string;
    /** ☆☆☆☆ ✔ Example: "Off" */
    PF17DisableAFPointSel?: string;
    /** ☆☆☆☆ ✔ Example: "Off" */
    PF18EnableAutoAFPointSel?: string;
    /** ☆☆☆☆ ✔ Example: "Off" */
    PF19ContinuousShootSpeed?: string;
    /** ☆☆☆☆ ✔ Example: 3 */
    PF19ShootingSpeedHigh?: number;
    /** ☆☆☆☆ ✔ Example: 8 */
    PF19ShootingSpeedLow?: number;
    /** ☆☆☆☆ ✔ Example: "Off" */
    PF1DisableShootingModes?: string;
    /** ☆☆☆☆ ✔ Example: 63 */
    PF1Value?: number;
    /** ☆☆☆☆ ✔ Example: "Off" */
    PF20LimitContinousShots?: string;
    /** ☆☆☆☆ ✔ Example: 99 */
    PF20MaxContinousShots?: number;
    /** ☆☆☆☆ ✔ Example: "Off" */
    PF21EnableQuietOperation?: string;
    /** ☆☆☆☆ ✔ Example: 256 */
    PF23FELockTime?: number;
    /** ☆☆☆☆ ✔ Example: 32 */
    PF23PostReleaseTime?: number;
    /** ☆☆☆☆ ✔ Example: "Off" */
    PF23SetTimerLengths?: string;
    /** ☆☆☆☆ ✔ Example: 96 */
    PF23ShutterButtonTime?: number;
    /** ☆☆☆☆ ✔ Example: "Off" */
    PF24LightLCDDuringBulb?: string;
    /** ☆☆☆☆ ✔ Example: 16 */
    PF25AEMode?: number;
    /** ☆☆☆☆ ✔ Example: 2 */
    PF25AFMode?: number;
    /** ☆☆☆☆ ✔ Example: 255 */
    PF25AFPointSel?: number;
    /** ☆☆☆☆ ✔ Example: 1 */
    PF25ColorMatrix?: number;
    /** ☆☆☆☆ ✔ Example: "Off" */
    PF25DefaultClearSettings?: string;
    /** ☆☆☆☆ ✔ Example: 4 */
    PF25DriveMode?: number;
    /** ☆☆☆☆ ✔ Example: 2 */
    PF25ImageSize?: number;
    /** ☆☆☆☆ ✔ Example: 32 */
    PF25MeteringMode?: number;
    /** ☆☆☆☆ ✔ Example: 129 */
    PF25Parameters?: number;
    /** ☆☆☆☆ ✔ Example: 1 */
    PF25WBMode?: number;
    /** ☆☆☆☆ ✔ Example: "Off" */
    PF26ShortenReleaseLag?: string;
    /** ☆☆☆☆ ✔ Example: "Off" */
    PF27ReverseDialRotation?: string;
    /** ☆☆☆☆ ✔ Example: 2 */
    PF27Value?: number;
    /** ☆☆☆☆ ✔ Example: "On (257)" */
    PF28NoQuickDialExpComp?: string;
    /** ☆☆☆☆ ✔ Example: "Off" */
    PF29QuickDialSwitchOff?: string;
    /** ☆☆☆☆ ✔ Example: "Off" */
    PF2DisableMeteringModes?: string;
    /** ☆☆☆☆ ✔ Example: 240 */
    PF2Value?: number;
    /** ☆☆☆☆ ✔ Example: "Off" */
    PF30EnlargementMode?: string;
    /** ☆☆☆☆ ✔ Example: "Off" */
    PF31OriginalDecisionData?: string;
    /** ☆☆☆☆ ✔ Example: "On (257)" */
    PF3ManualExposureMetering?: string;
    /** ☆☆☆☆ ✔ Example: 16 */
    PF3Value?: number;
    /** ☆☆☆☆ ✔ Example: "Off" */
    PF4ExposureTimeLimits?: string;
    /** ☆☆☆☆ ✔ Example: 31.2 */
    PF4ExposureTimeMax?: number;
    /** ☆☆☆☆ ✔ Example: "1/8389" */
    PF4ExposureTimeMin?: string;
    /** ☆☆☆☆ ✔ Example: "Off" */
    PF5ApertureLimits?: string;
    /** ☆☆☆☆ ✔ Example: 1 */
    PF5ApertureMax?: number;
    /** ☆☆☆☆ ✔ Example: 91 */
    PF5ApertureMin?: number;
    /** ☆☆☆☆ ✔ Example: "Off" */
    PF6PresetShootingModes?: string;
    /** ☆☆☆☆ ✔ Example: "Off" */
    PF7BracketContinuousShoot?: string;
    /** ☆☆☆☆ ✔ Example: 3 */
    PF8BracketShots?: number;
    /** ☆☆☆☆ ✔ Example: "Off" */
    PF8SetBracketShots?: string;
    /** ☆☆☆☆ ✔ Example: "Off" */
    PF9ChangeBracketSequence?: string;
    /** ☆☆☆☆   Example: 3 */
    POILevel?: number;
    /** ☆☆☆☆ ✔ Example: "Off" */
    PaintingFilter?: string;
    /** ☆☆☆☆ ✔ Example: "2014-06-07T19:51:53.000" */
    PanasonicDateTime?: ExifDateTime;
    /** ☆☆☆☆ ✔ Example: "0414" */
    PanasonicExifVersion?: string;
    /** ☆☆☆☆ ✔ Example: 3888 */
    PanasonicImageHeight?: number;
    /** ☆☆☆☆ ✔ Example: 5472 */
    PanasonicImageWidth?: number;
    /** ☆☆☆☆   Example: "Right or Down" */
    PanoramaDirection?: string;
    /** ☆☆☆☆ ✔ Example: "Off" */
    PanoramaMode?: string;
    /** ☆☆☆☆   Example: "n/a" */
    PanoramaSize3D?: string;
    /** ☆☆☆☆   Example: "Full" */
    PentaxImageSize?: string;
    /** ☆☆☆☆   Example: "X90" */
    PentaxModelID?: string;
    /** ☆☆☆☆   Example: 6 */
    PentaxModelType?: number;
    /** ☆☆☆☆   Example: "9.1.2.0" */
    PentaxVersion?: string;
    /** ☆☆☆☆ ✔ Example: "512 512 512 512" */
    PerChannelBlackLevel?: string;
    /** ☆☆☆☆ ✔ Example: "On" */
    PeripheralIlluminationCorr?: string;
    /** ☆☆☆☆ ✔ Example: "On" */
    PeripheralLighting?: string;
    /** ☆☆☆☆ ✔ Example: "On" */
    PeripheralLightingSetting?: string;
    /** ☆☆☆☆ ✔ Example: 70 */
    PeripheralLightingValue?: number;
    /** ☆☆☆☆ ✔ Example: "On (73-point)" */
    PhaseDetectAF?: string;
    /** ☆☆☆☆ ✔ Example: "Vivid" */
    PhotoEffect?: string;
    /** ☆☆☆☆ ✔ Example: "Info Up-down, Playback Left-right" */
    PhotoInfoPlayback?: string;
    /** ☆☆☆☆   Example: "A" */
    PhotoShootingMenuBank?: string;
    /** ☆☆☆☆   Example: "FX (36x24)" */
    PhotoShootingMenuBankImageArea?: string;
    /** ☆☆☆☆ ✔ Example: "Vivid" */
    PhotoStyle?: string;
    /** ☆☆☆☆ ✔ Example: "Unknown (207)" */
    PictureControlAdjust?: string;
    /** ☆☆☆☆ ✔ Example: "Vivid" */
    PictureControlBase?: string;
    /** ☆☆☆☆ ✔ Example: "Vivid" */
    PictureControlName?: string;
    /** ☆☆☆☆ ✔ Examples: ["n/a",-126] */
    PictureControlQuickAdjust?: string | number;
    /** ☆☆☆☆ ✔ Example: "0300" */
    PictureControlVersion?: string;
    /** ☆☆☆☆ ✔ Example: "Off" */
    PictureEffect?: string;
    /** ☆☆☆☆ ✔ Example: "Off" */
    PictureEffect2?: string;
    /** ☆☆☆☆   Example: "Natural" */
    PictureFinish?: string;
    /** ★☆☆☆ ✔ Example: "i-Enhance; 2" */
    PictureMode?: string;
    /** ☆☆☆☆   Example: "Shutter & Aperture Priority AE" */
    PictureMode2?: string;
    /** ☆☆☆☆ ✔ Example: "n/a" */
    PictureModeBWFilter?: string;
    /** ☆☆☆☆ ✔ Example: "1 (min -2, max 2)" */
    PictureModeContrast?: string;
    /** ☆☆☆☆ ✔ Example: "n/a" */
    PictureModeEffect?: string;
    /** ☆☆☆☆ ✔ Example: "0 (min -2, max 2)" */
    PictureModeSaturation?: string;
    /** ☆☆☆☆ ✔ Example: "2 (min -2, max 2)" */
    PictureModeSharpness?: string;
    /** ☆☆☆☆ ✔ Example: "n/a" */
    PictureModeTone?: string;
    /** ☆☆☆☆ ✔ Example: "Unknown (2)" */
    PictureProfile?: string;
    /** ☆☆☆☆ ✔ Example: "User Def. 3" */
    PictureStyle?: string;
    /** ☆☆☆☆ ✔ Example: "n/a; n/a; n/a" */
    PictureStylePC?: string;
    /** ☆☆☆☆ ✔ Example: "Standard; Standard; Standard" */
    PictureStyleUserDef?: string;
    /** ☆☆☆☆   Example: 65535 */
    PictureWizardColor?: number;
    /** ☆☆☆☆   Example: 0 */
    PictureWizardContrast?: number;
    /** ☆☆☆☆   Example: "n/a" */
    PictureWizardMode?: string;
    /** ☆☆☆☆   Example: 1024 */
    PictureWizardSaturation?: number;
    /** ☆☆☆☆   Example: 1024 */
    PictureWizardSharpness?: number;
    /** ☆☆☆☆ ✔ Examples: ["Low",-4.4] */
    Pitch?: string | number;
    /** ☆☆☆☆ ✔ Example: 7.3 */
    PitchAngle?: number;
    /** ☆☆☆☆   Example: 1 */
    PixelAspectRatio?: number;
    /** ☆☆☆☆   Example: "n/a" */
    PixelShiftInfo?: string;
    /** ☆☆☆☆   Example: "On" */
    PixelShiftResolution?: string;
    /** ☆☆☆☆   Example: "5 min" */
    PlaybackMenusTime?: string;
    /** ☆☆☆☆ ✔ Example: "20 s" */
    PlaybackMonitorOffTime?: string;
    /** ☆☆☆☆   Example: "Use Separate Zoom Buttons" */
    PlaybackZoom?: string;
    /** ☆☆☆☆   Example: "Off" */
    PopupFlash?: string;
    /** ☆☆☆☆   Example: "Off" */
    PortraitRefiner?: string;
    /** ☆☆☆☆   Example: "External Power Supply" */
    PowerSource?: string;
    /** ☆☆☆☆ ✔ Example: "2018:08:03 14:00:20" */
    PowerUpTime?: string;
    /** ☆☆☆☆ ✔ Example: 3.2996109 */
    PreCaptureFrames?: number;
    /** ☆☆☆☆ ✔ Example: "Preview" */
    PreviewButton?: string;
    /** ☆☆☆☆ ✔ Example: "None" */
    PreviewButtonPlusDials?: string;
    /** ☆☆☆☆   Example: "28 28 0 0" */
    PreviewImageBorders?: string;
    /** ☆☆☆☆   Example: 768 */
    PreviewImageHeight?: number;
    /** ☆☆☆☆ ✔ Example: "720x480" */
    PreviewImageSize?: string;
    /** ☆☆☆☆ ✔ Example: "Yes" */
    PreviewImageValid?: string;
    /** ☆☆☆☆   Example: 640 */
    PreviewImageWidth?: number;
    /** ☆☆☆☆   Example: "Normal" */
    PreviewQuality?: string;
    /** ☆☆☆☆ ✔ Examples: [8,"Top"] */
    PrimaryAFPoint?: number | string;
    /** ☆☆☆☆   Example: "XQD Card" */
    PrimarySlot?: string;
    /** ☆☆☆☆   Example: "Standard" */
    PrioritySetInAWB?: string;
    /** ☆☆☆☆   Example: "AF" */
    PrioritySetupShutterRelease?: string;
    /** ☆☆☆☆   Examples: [9.987,"8.1 (camera has been serviced)"] */
    ProductionCode?: number | string;
    /** ☆☆☆☆ ✔ Examples: ["n/a",80] */
    ProgramISO?: string | number;
    /** ☆☆☆☆   Example: "Normal" */
    ProgramLine?: string;
    /** ☆☆☆☆ ✔ Example: 0 */
    ProgramShift?: number;
    /** ★★☆☆ ✔ Examples: ["Unknown (5)",4] */
    Quality?: string | number;
    /** ☆☆☆☆ ✔ Example: "RAW + JPEG" */
    Quality2?: string;
    /** ☆☆☆☆ ✔ Example: "Exposure comp/Aperture" */
    QuickControlDialInMeter?: string;
    /** ☆☆☆☆   Example: "Off" */
    QuickShot?: string;
    /** ☆☆☆☆   Example: "Uncompressed RAW" */
    RAWFileType?: string;
    /** ☆☆☆☆   Example: "USA" */
    ROMOperationMode?: string;
    /** ☆☆☆☆   Example: "Off" */
    RangeFinder?: string;
    /** ☆☆☆☆   Example: "RAW+Small/Normal" */
    RawAndJpgRecording?: string;
    /** ☆☆☆☆   Example: "Little-endian (Intel, II)" */
    RawDataByteOrder?: string;
    /** ☆☆☆☆   Example: "Unchanged" */
    RawDataCFAPattern?: string;
    /** ☆☆☆☆ ✔ Example: "Off; 0; 0; 0" */
    RawDevArtFilter?: string;
    /** ☆☆☆☆ ✔ Example: "Off" */
    RawDevAutoGradation?: string;
    /** ☆☆☆☆ ✔ Example: "sRGB" */
    RawDevColorSpace?: string;
    /** ☆☆☆☆ ✔ Example: "0 0 0" */
    RawDevContrastValue?: string;
    /** ☆☆☆☆ ✔ Example: "Original" */
    RawDevEditStatus?: string;
    /** ☆☆☆☆ ✔ Example: "Unknown (2)" */
    RawDevEngine?: string;
    /** ☆☆☆☆ ✔ Example: 0 */
    RawDevExposureBiasValue?: number;
    /** ☆☆☆☆ ✔ Example: 0 */
    RawDevGradation?: number;
    /** ☆☆☆☆ ✔ Example: "0 0 0" */
    RawDevGrayPoint?: string;
    /** ☆☆☆☆ ✔ Example: 0 */
    RawDevMemoryColorEmphasis?: number;
    /** ☆☆☆☆ ✔ Example: "Noise Filter" */
    RawDevNoiseReduction?: string;
    /** ☆☆☆☆ ✔ Example: "0 -2 2" */
    RawDevPMContrast?: string;
    /** ☆☆☆☆ ✔ Example: "2 0 -2 1" */
    RawDevPMNoiseFilter?: string;
    /** ☆☆☆☆ ✔ Example: "Unknown (0)" */
    RawDevPMPictureTone?: string;
    /** ☆☆☆☆ ✔ Example: "0 -2 2" */
    RawDevPMSaturation?: string;
    /** ☆☆☆☆ ✔ Example: "0 -2 2" */
    RawDevPMSharpness?: string;
    /** ☆☆☆☆ ✔ Example: "Unknown (0)" */
    RawDevPM_BWFilter?: string;
    /** ☆☆☆☆ ✔ Example: "Natural" */
    RawDevPictureMode?: string;
    /** ☆☆☆☆ ✔ Example: 0 */
    RawDevSaturation3?: number;
    /** ☆☆☆☆ ✔ Example: "0 0 0" */
    RawDevSaturationEmphasis?: string;
    /** ☆☆☆☆ ✔ Example: "(none)" */
    RawDevSettings?: string;
    /** ☆☆☆☆ ✔ Example: "0 0 0" */
    RawDevSharpnessValue?: string;
    /** ☆☆☆☆ ✔ Example: "0100" */
    RawDevVersion?: string;
    /** ☆☆☆☆ ✔ Examples: [0,"0 0"] */
    RawDevWBFineAdjustment?: number | string;
    /** ☆☆☆☆ ✔ Example: "Unknown (3)" */
    RawDevWhiteBalance?: string;
    /** ☆☆☆☆ ✔ Example: 0 */
    RawDevWhiteBalanceValue?: number;
    /** ☆☆☆☆   Example: "9 (Q)" */
    RawDevelopmentProcess?: string;
    /** ☆☆☆☆ ✔ Example: "3692 2464" */
    RawImageCenter?: string;
    /** ☆☆☆☆ ✔ Example: 3296 */
    RawImageHeight?: number;
    /** ☆☆☆☆ ✔ Example: 4952 */
    RawImageWidth?: number;
    /** ☆☆☆☆ ✔ Example: "RAW" */
    RawJpgQuality?: string;
    /** ☆☆☆☆ ✔ Example: "Large" */
    RawJpgSize?: string;
    /** ☆☆☆☆ ✔ Example: "95215 190283 189698 116484" */
    RawMeasuredRGGB?: string;
    /** ☆☆☆☆ ✔ Example: "ISO" */
    RearDisplay?: string;
    /** ☆☆☆☆   Example: "77 12848 12341 0" */
    RecognizedFace1Position?: string;
    /** ☆☆☆☆   Example: "\u0016" */
    RecognizedFace2Name?: string;
    /** ☆☆☆☆   Example: "0 8 0 0" */
    RecognizedFace2Position?: string;
    /** ☆☆☆☆   Example: "0 257 1 0" */
    RecognizedFace3Position?: string;
    /** ☆☆☆☆   Example: 58 */
    RecordID?: number;
    /** ★☆☆☆ ✔ Example: "TIF+JPEG" */
    RecordMode?: string;
    /** ☆☆☆☆   Example: "Record while down" */
    RecordShutterRelease?: string;
    /** ☆☆☆☆   Example: "JPEG" */
    RecordingFormat?: string;
    /** ☆☆☆☆   Example: "Auto" */
    RecordingMode?: string;
    /** ☆☆☆☆   Example: 38.625 */
    RedBalance?: number;
    /** ☆☆☆☆   Example: "On" */
    RedEyeReduction?: string;
    /** ☆☆☆☆ ✔ Example: "On" */
    RedEyeRemoval?: string;
    /** ☆☆☆☆   Examples: ["8D",59] */
    RedGain?: string | number;
    /** ☆☆☆☆ ✔ Example: "Yes" */
    ReleaseButtonToUseDial?: string;
    /** ☆☆☆☆ ✔ Example: "Unknown (7)" */
    ReleaseMode?: string;
    /** ☆☆☆☆ ✔ Example: "Single Frame - Capture During Movie" */
    ReleaseMode2?: string;
    /** ☆☆☆☆ ✔ Example: "Normal - Self-timer" */
    ReleaseMode3?: string;
    /** ☆☆☆☆   Example: 0 */
    RemoteOnDuration?: number;
    /** ☆☆☆☆   Example: 10 */
    RepeatingFlashCount?: number;
    /** ☆☆☆☆   Example: "1/32" */
    RepeatingFlashOutput?: string;
    /** ☆☆☆☆   Example: 1 */
    RepeatingFlashOutputExternal?: number;
    /** ☆☆☆☆   Example: "10 Hz" */
    RepeatingFlashRate?: string;
    /** ☆☆☆☆   Example: "No" */
    Resaved?: string;
    /** ☆☆☆☆ ✔ Example: 31 */
    Resolution?: number;
    /** ☆☆☆☆   Example: "MED" */
    ResolutionMode?: string;
    /** ☆☆☆☆   Example: "Enable; Flags 0xf" */
    RestrictDriveModes?: string;
    /** ☆☆☆☆ ✔ Example: "Unknown (\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000)" */
    RetouchHistory?: string;
    /** ☆☆☆☆ ✔ Example: "0200" */
    RetouchInfoVersion?: string;
    /** ☆☆☆☆ ✔ Example: "On" */
    RetouchNEFProcessing?: string;
    /** ☆☆☆☆ ✔ Example: "Enable" */
    RetractLensOnPowerOff?: string;
    /** ☆☆☆☆ ✔ Example: "- 0 +" */
    ReverseIndicators?: string;
    /** ☆☆☆☆   Examples: ["2012-03-29T18:17:52.000","3300:00:00 00:00:00"] */
    RicohDate?: ExifDateTime | string;
    /** ☆☆☆☆   Example: 960 */
    RicohImageHeight?: number;
    /** ☆☆☆☆   Example: 640 */
    RicohImageWidth?: number;
    /** ☆☆☆☆   Example: "XG-1Pentax" */
    RicohMake?: string;
    /** ☆☆☆☆   Examples: [-6.1,"+1.90"] */
    Roll?: number | string;
    /** ☆☆☆☆ ✔ Example: 6.4 */
    RollAngle?: number;
    /** ☆☆☆☆ ✔ Examples: ["Unknown (0)",90] */
    Rotation?: string | number;
    /** ☆☆☆☆   Example: 176 */
    RotationInfoOffset?: number;
    /** ☆☆☆☆ ✔ Example: 0 */
    RunTimeEpoch?: number;
    /** ☆☆☆☆ ✔ Example: "Valid" */
    RunTimeFlags?: string;
    /** ☆☆☆☆ ✔ Example: 1000000000 */
    RunTimeScale?: number;
    /** ☆☆☆☆ ✔ Example: 987823130000000 */
    RunTimeValue?: number;
    /** ☆☆☆☆ ✔ Example: "0x44332211" */
    SR2SubIFDKey?: string;
    /** ☆☆☆☆ ✔ Example: 29252 */
    SR2SubIFDLength?: number;
    /** ☆☆☆☆ ✔ Example: 49086 */
    SR2SubIFDOffset?: number;
    /** ☆☆☆☆ ✔ Example: "sRAW2 (sRAW)" */
    SRAWQuality?: string;
    /** ☆☆☆☆   Example: "Yes" */
    SRActive?: string;
    /** ☆☆☆☆   Example: "97 mm" */
    SRFocalLength?: string;
    /** ☆☆☆☆   Example: "4.25 s or longer" */
    SRHalfPressTime?: string;
    /** ☆☆☆☆   Example: "Stabilized, Not ready" */
    SRResult?: string;
    /** ☆☆☆☆ ✔ Example: "Enable (Tv/Av)" */
    SafetyShift?: string;
    /** ☆☆☆☆ ✔ Example: "Enable" */
    SafetyShiftInAvOrTv?: string;
    /** ☆☆☆☆   Example: "Disable" */
    SameExposureForNewAperture?: string;
    /** ☆☆☆☆   Example: "WP10 / VLUU WP10 / AQ100" */
    SamsungModelID?: string;
    /** ☆☆☆☆   Example: "Unknown (0x211)" */
    SanyoQuality?: string;
    /** ☆☆☆☆   Example: "(Binary data 9801 bytes, use -b option …" */
    SanyoThumbnail?: string;
    /** ☆☆☆☆ ✔ Example: 0 */
    SaturationAuto?: number;
    /** ☆☆☆☆ ✔ Example: 0 */
    SaturationFaithful?: number;
    /** ☆☆☆☆ ✔ Example: 4 */
    SaturationLandscape?: number;
    /** ☆☆☆☆ ✔ Example: 0 */
    SaturationNeutral?: number;
    /** ☆☆☆☆ ✔ Example: 2 */
    SaturationPortrait?: number;
    /** ☆☆☆☆   Examples: [0,"+1"] */
    SaturationSetting?: number | string;
    /** ☆☆☆☆ ✔ Example: 3 */
    SaturationStandard?: number;
    /** ☆☆☆☆ ✔ Example: 3 */
    SaturationUserDef1?: number;
    /** ☆☆☆☆ ✔ Example: 4 */
    SaturationUserDef2?: number;
    /** ☆☆☆☆ ✔ Example: 3 */
    SaturationUserDef3?: number;
    /** ☆☆☆☆   Example: "Two-Shot" */
    SceneAssist?: string;
    /** ☆☆☆☆ ✔ Example: 9 */
    SceneDetect?: number;
    /** ★☆☆☆ ✔ Example: "n/a" */
    SceneMode?: string;
    /** ☆☆☆☆   Example: "Unknown (9)" */
    SceneModeUsed?: string;
    /** ☆☆☆☆   Example: "Unrecognized" */
    SceneRecognition?: string;
    /** ☆☆☆☆   Example: "User 1" */
    SceneSelect?: string;
    /** ☆☆☆☆ ✔ Example: "On" */
    ScreenTips?: string;
    /** ☆☆☆☆ ✔ Example: "Unknown (1)" */
    SecondarySlotFunction?: string;
    /** ☆☆☆☆ ✔ Example: "Enable; Flags 0x1f" */
    SelectAFAreaSelectMode?: string;
    /** ☆☆☆☆ ✔ Example: "Single-point AF, Auto, Zone AF, AF Poin…" */
    SelectAFAreaSelectionMode?: string;
    /** ☆☆☆☆ ✔ Example: "45 points" */
    SelectableAFPoint?: string;
    /** ★☆☆☆ ✔ Example: "Unknown (258)" */
    SelfTimer?: string;
    /** ☆☆☆☆ ✔ Example: 0.1 */
    SelfTimer2?: number;
    /** ☆☆☆☆ ✔ Example: 3 */
    SelfTimerShotCount?: number;
    /** ☆☆☆☆ ✔ Example: "1 s" */
    SelfTimerShotInterval?: string;
    /** ☆☆☆☆ ✔ Example: "2 s" */
    SelfTimerTime?: string;
    /** ☆☆☆☆   Example: 0 */
    SensitivityAdjust?: number;
    /** ☆☆☆☆   Example: "As EV Steps" */
    SensitivitySteps?: string;
    /** ☆☆☆☆   Example: "BACK,ov16860" */
    Sensor?: string;
    /** ☆☆☆☆   Example: 14 */
    SensorBitDepth?: number;
    /** ☆☆☆☆ ✔ Example: 4214 */
    SensorBlueLevel?: number;
    /** ☆☆☆☆ ✔ Example: "4095 610" */
    SensorCalibration?: string;
    /** ☆☆☆☆ ✔ Example: "Disable" */
    SensorCleaning?: string;
    /** ☆☆☆☆   Example: 2472 */
    SensorFullHeight?: number;
    /** ☆☆☆☆   Example: 3288 */
    SensorFullWidth?: number;
    /** ☆☆☆☆ ✔ Example: "9.4 x 9.4 um" */
    SensorPixelSize?: string;
    /** ☆☆☆☆ ✔ Example: 4370 */
    SensorRedLevel?: number;
    /** ☆☆☆☆   Example: "7.576 x 5.682 mm" */
    SensorSize?: string;
    /** ☆☆☆☆ ✔ Examples: ["??U\u0001",39] */
    SensorTemperature?: string | number;
    /** ☆☆☆☆   Example: "49.4 C" */
    SensorTemperature2?: string;
    /** ☆☆☆☆   Example: "5 of 5" */
    Sequence?: string;
    /** ☆☆☆☆ ✔ Example: 3 */
    SequenceFileNumber?: number;
    /** ☆☆☆☆ ✔ Example: 3 */
    SequenceImageNumber?: number;
    /** ☆☆☆☆ ✔ Example: "Continuous" */
    SequenceLength?: string;
    /** ★★☆☆ ✔ Examples: [5,"Single"] */
    SequenceNumber?: number | string;
    /** ☆☆☆☆   Example: "5 frames/s" */
    SequenceShotInterval?: string;
    /** ☆☆☆☆   Example: "Unknown (28928)" */
    SequentialShot?: string;
    /** ☆☆☆☆ ✔ Example: "Format 2" */
    SerialNumberFormat?: string;
    /** ☆☆☆☆ ✔ Example: "Set: Picture Style" */
    SetButtonCrossKeysFunc?: string;
    /** ☆☆☆☆ ✔ Example: "Quick control screen" */
    SetButtonWhenShooting?: string;
    /** ☆☆☆☆   Example: "Default (no function)" */
    SetFunctionWhenShooting?: string;
    /** ☆☆☆☆ ✔ Example: "On" */
    ShadingCompensation?: string;
    /** ☆☆☆☆ ✔ Example: "On" */
    ShadingCompensation2?: string;
    /** ☆☆☆☆   Examples: [0,"+0.0"] */
    Shadow?: number | string;
    /** ☆☆☆☆   Example: "On" */
    ShadowCorrection?: string;
    /** ☆☆☆☆ ✔ Example: "0 (normal)" */
    ShadowTone?: string;
    /** ☆☆☆☆   Example: "On but Disabled" */
    ShakeReduction?: string;
    /** ☆☆☆☆   Example: "Normal" */
    Sharpening?: string;
    /** ☆☆☆☆ ✔ Example: 3 */
    SharpnessAuto?: number;
    /** ☆☆☆☆   Example: 768 */
    SharpnessFactor?: number;
    /** ☆☆☆☆ ✔ Example: 0 */
    SharpnessFaithful?: number;
    /** ☆☆☆☆   Example: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0…" */
    SharpnessFreqTable?: string;
    /** ☆☆☆☆ ✔ Example: "n/a" */
    SharpnessFrequency?: string;
    /** ☆☆☆☆ ✔ Example: 4 */
    SharpnessLandscape?: number;
    /** ☆☆☆☆ ✔ Example: 3 */
    SharpnessMonochrome?: number;
    /** ☆☆☆☆ ✔ Example: 0 */
    SharpnessNeutral?: number;
    /** ☆☆☆☆ ✔ Example: 2 */
    SharpnessPortrait?: number;
    /** ☆☆☆☆ ✔ Examples: ["3 (min -3, max 5)",0] */
    SharpnessSetting?: string | number;
    /** ☆☆☆☆ ✔ Example: 4 */
    SharpnessStandard?: number;
    /** ☆☆☆☆   Example: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0" */
    SharpnessTable?: string;
    /** ☆☆☆☆ ✔ Example: 7 */
    SharpnessUserDef1?: number;
    /** ☆☆☆☆ ✔ Example: 3 */
    SharpnessUserDef2?: number;
    /** ☆☆☆☆ ✔ Example: 3 */
    SharpnessUserDef3?: number;
    /** ☆☆☆☆ ✔ Example: "Unknown (0)" */
    ShootingInfoDisplay?: string;
    /** ☆☆☆☆ ✔ Example: "10 s" */
    ShootingInfoMonitorOffTime?: string;
    /** ☆☆☆☆   Example: 3709 */
    ShootingMenuOffset?: number;
    /** ☆☆☆☆ ✔ Example: "Unknown (49)" */
    ShootingMode?: string;
    /** ☆☆☆☆   Example: "Continuous" */
    ShootingModeSetting?: string;
    /** ☆☆☆☆ ✔ Example: "Enable" */
    ShortReleaseTimeLag?: string;
    /** ☆☆☆☆ ✔ Example: "0800" */
    ShotInfoVersion?: string;
    /** ☆☆☆☆ ✔ Example: 9 */
    ShotNumberSincePowerUp?: number;
    /** ☆☆☆☆   Example: 5 */
    ShotNumberSincePowerUp2?: number;
    /** ☆☆☆☆ ✔ Example: "AF/AE lock stop" */
    ShutterAELButton?: string;
    /** ☆☆☆☆ ✔ Example: "Metering start/Meter + AF start" */
    ShutterButtonAFOnButton?: string;
    /** ☆☆☆☆ ✔ Example: 98 */
    ShutterCount?: number;
    /** ☆☆☆☆ ✔ Example: "2nd-curtain sync" */
    ShutterCurtainSync?: string;
    /** ☆☆☆☆ ✔ Example: "Unknown (4)" */
    ShutterMode?: string;
    /** ☆☆☆☆   Example: "Single Shot" */
    ShutterReleaseMethod?: string;
    /** ☆☆☆☆ ✔ Example: "Yes" */
    ShutterReleaseNoCFCard?: string;
    /** ☆☆☆☆   Example: "Priority on focus" */
    ShutterReleaseTiming?: string;
    /** ☆☆☆☆ ✔ Example: "Disable" */
    ShutterReleaseWithoutLens?: string;
    /** ☆☆☆☆   Examples: ["1/500",250] */
    ShutterSpeed?: string | number;
    /** ☆☆☆☆ ✔ Example: "Off" */
    ShutterSpeedLock?: string;
    /** ☆☆☆☆ ✔ Example: "Disable; Hi 1/8192; Lo 32" */
    ShutterSpeedRange?: string;
    /** ☆☆☆☆   Examples: ["1/91",1] */
    ShutterSpeedSetting?: string | number;
    /** ☆☆☆☆ ✔ Example: "Mechanical" */
    ShutterType?: string;
    /** ☆☆☆☆   Example: "Off" */
    SkinToneCorrection?: string;
    /** ☆☆☆☆   Example: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0…" */
    SlaveFlashMeteringSegments?: string;
    /** ★☆☆☆ ✔ Example: "n/a" */
    SlowShutter?: string;
    /** ☆☆☆☆ ✔ Example: "On" */
    SlowSync?: string;
    /** ☆☆☆☆   Example: "n/a" */
    SmartAlbumColor?: string;
    /** ☆☆☆☆   Example: "Off" */
    SmileShutter?: string;
    /** ☆☆☆☆   Example: "Slight Smile" */
    SmileShutterMode?: string;
    /** ☆☆☆☆ ✔ Example: "Off" */
    SoftFocusFilter?: string;
    /** ☆☆☆☆ ✔ Example: "n/a" */
    SoftSkinEffect?: string;
    /** ☆☆☆☆ ✔ Examples: ["2018-06-14T11:35:45.000+09:00","????????????????????"] */
    SonyDateTime?: ExifDateTime | string;
    /** ☆☆☆☆   Example: "2015-11-26T14:41:25.000" */
    SonyDateTime2?: ExifDateTime;
    /** ☆☆☆☆ ✔ Examples: ["1/82",0.8] */
    SonyExposureTime?: string | number;
    /** ☆☆☆☆   Examples: ["1/989",0.8] */
    SonyExposureTime2?: string | number;
    /** ☆☆☆☆ ✔ Example: 8.8 */
    SonyFNumber?: number;
    /** ☆☆☆☆ ✔ Example: 926 */
    SonyISO?: number;
    /** ☆☆☆☆ ✔ Example: 65535 */
    SonyImageHeight?: number;
    /** ☆☆☆☆   Example: 5320 */
    SonyImageHeightMax?: number;
    /** ☆☆☆☆   Example: "Small (3:2)" */
    SonyImageSize?: string;
    /** ☆☆☆☆ ✔ Example: 7952 */
    SonyImageWidth?: number;
    /** ☆☆☆☆   Example: 7968 */
    SonyImageWidthMax?: number;
    /** ☆☆☆☆   Example: 5.5 */
    SonyMaxAperture?: number;
    /** ☆☆☆☆   Example: 6.4 */
    SonyMaxApertureValue?: number;
    /** ☆☆☆☆   Example: 34 */
    SonyMinAperture?: number;
    /** ☆☆☆☆ ✔ Example: "Unknown (0)" */
    SonyModelID?: string;
    /** ☆☆☆☆   Example: "48:36" */
    SonyTimeMinSec?: string;
    /** ☆☆☆☆   Example: 100 */
    SourceDirectoryIndex?: number;
    /** ☆☆☆☆   Example: 60 */
    SourceFileIndex?: number;
    /** ☆☆☆☆   Example: 24576 */
    SpecialEffectLevel?: number;
    /** ☆☆☆☆   Example: "Off" */
    SpecialEffectMode?: string;
    /** ☆☆☆☆   Example: "Unknown (15)" */
    SpecialEffectSetting?: string;
    /** ☆☆☆☆ ✔ Example: "Unknown (962), Sequence: 0, Panorama: (…" */
    SpecialMode?: string;
    /** ☆☆☆☆ ✔ Example: 16383 */
    SpecularWhiteLevel?: number;
    /** ☆☆☆☆   Example: "+0.10" */
    SpeedX?: string;
    /** ☆☆☆☆   Example: "+0.00" */
    SpeedY?: string;
    /** ☆☆☆☆   Examples: ["+0.00",-0.3] */
    SpeedZ?: string | number;
    /** ☆☆☆☆   Example: 1632 */
    SpotFocusPointX?: number;
    /** ☆☆☆☆   Example: 960 */
    SpotFocusPointY?: number;
    /** ☆☆☆☆ ✔ Example: "Enable (use active AF point)" */
    SpotMeterLinkToAFPoint?: string;
    /** ☆☆☆☆ ✔ Example: "Center" */
    SpotMeteringMode?: string;
    /** ☆☆☆☆ ✔ Example: "Unknown (8 8)" */
    StackedImage?: string;
    /** ☆☆☆☆ ✔ Example: "6 s" */
    StandbyTimer?: string;
    /** ☆☆☆☆ ✔ Example: "Default (from LV)" */
    StartMovieShooting?: string;
    /** ☆☆☆☆ ✔ Example: "MIDDLESEX" */
    State?: string;
    /** ☆☆☆☆ ✔ Example: 8 */
    StopsAboveBaseISO?: number;
    /** ☆☆☆☆ ✔ Example: "Off" */
    StoreByOrientation?: string;
    /** ☆☆☆☆   Example: "Focus Point Selection" */
    SubSelector?: string;
    /** ☆☆☆☆   Example: "Focus Point Selection" */
    SubSelectorAssignment?: string;
    /** ☆☆☆☆   Example: "Virtual Horizon" */
    SubSelectorCenter?: string;
    /** ☆☆☆☆   Example: "None" */
    SubSelectorPlusDials?: string;
    /** ☆☆☆☆   Example: "Middle" */
    SubjectMotion?: string;
    /** ☆☆☆☆   Example: "None" */
    SubjectProgram?: string;
    /** ☆☆☆☆   Example: "Off" */
    SuperMacro?: string;
    /** ☆☆☆☆ ✔ Example: "On" */
    SuperimposedDisplay?: string;
    /** ☆☆☆☆   Example: 100 */
    SvISOSetting?: number;
    /** ☆☆☆☆ ✔ Example: "Right" */
    SweepPanoramaDirection?: string;
    /** ☆☆☆☆ ✔ Example: 0 */
    SweepPanoramaFieldOfView?: number;
    /** ☆☆☆☆   Example: "Wide" */
    SweepPanoramaSize?: string;
    /** ☆☆☆☆ ✔ Example: "Disable" */
    SwitchToRegisteredAFPoint?: string;
    /** ☆☆☆☆   Example: "Sync" */
    SyncReleaseMode?: string;
    /** ☆☆☆☆   Example: 0 */
    TTL_DA_ADown?: number;
    /** ☆☆☆☆   Example: 0 */
    TTL_DA_AUp?: number;
    /** ☆☆☆☆   Example: 0 */
    TTL_DA_BDown?: number;
    /** ☆☆☆☆   Example: 0 */
    TTL_DA_BUp?: number;
    /** ☆☆☆☆ ✔ Example: 9 */
    TargetAperture?: number;
    /** ☆☆☆☆   Example: 4 */
    TargetCompressionRatio?: number;
    /** ☆☆☆☆   Example: "476 mm" */
    TargetDistanceSetting?: string;
    /** ☆☆☆☆ ✔ Examples: ["1/813",5] */
    TargetExposureTime?: string | number;
    /** ☆☆☆☆   Example: "Real-world Subject" */
    TargetImageType?: string;
    /** ☆☆☆☆ ✔ Example: "None" */
    Teleconverter?: string;
    /** ☆☆☆☆   Example: "n/a" */
    TextEncoding?: string;
    /** ☆☆☆☆   Example: "(Binary data 901 bytes, use -b option t…" */
    TextInfo1?: string;
    /** ☆☆☆☆   Example: "(Binary data 961 bytes, use -b option t…" */
    TextInfo2?: string;
    /** ☆☆☆☆ ✔ Example: "Off" */
    TextStamp?: string;
    /** ☆☆☆☆   Example: "THM_0043.JPG" */
    ThumbnailFileName?: string;
    /** ☆☆☆☆ ✔ Example: 120 */
    ThumbnailHeight?: number;
    /** ☆☆☆☆ ✔ Example: "0 159 7 112" */
    ThumbnailImageValidArea?: string;
    /** ☆☆☆☆ ✔ Example: 160 */
    ThumbnailWidth?: number;
    /** ☆☆☆☆   Example: "(Binary data 7404 bytes, use -b option …" */
    TiffMeteringImage?: string;
    /** ☆☆☆☆   Example: 30 */
    TiffMeteringImageHeight?: number;
    /** ☆☆☆☆   Example: 44 */
    TiffMeteringImageWidth?: number;
    /** ☆☆☆☆   Example: "23:50:41" */
    Time?: ExifTime;
    /** ☆☆☆☆   Example: "23:59:46.920" */
    TimeCreated?: ExifTime;
    /** ☆☆☆☆ ✔ Example: 50336257 */
    TimeLapseShotNumber?: number;
    /** ☆☆☆☆ ✔ Example: "01:48:53.630" */
    TimeSincePowerOn?: ExifTime;
    /** ☆☆☆☆ ✔ Example: "2018:08:21 11:34:51" */
    TimeStamp?: string;
    /** ☆☆☆☆ ✔ Example: "2007:07:14 18:02:56" */
    TimeStamp1?: string;
    /** ☆☆☆☆ ✔ Example: "-08:00" */
    TimeZone?: string;
    /** ☆☆☆☆ ✔ Example: "n/a" */
    TimeZoneCity?: string;
    /** ☆☆☆☆   Example: 0 */
    TimeZoneCode?: number;
    /** ☆☆☆☆   Example: 0 */
    TimeZoneInfo?: number;
    /** ☆☆☆☆   Example: "Self-timer" */
    TimerFunctionButton?: string;
    /** ☆☆☆☆ ✔ Example: "Disable; 6 s: 6; 16 s: 16; After releas…" */
    TimerLength?: string;
    /** ☆☆☆☆ ✔ Example: "Off" */
    TimerRecording?: string;
    /** ☆☆☆☆ ✔ Example: "Normal" */
    ToneComp?: string;
    /** ☆☆☆☆ ✔ Example: "Standard" */
    ToneCurve?: string;
    /** ☆☆☆☆   Example: "(Binary data 95 bytes, use -b option to…" */
    ToneCurveMatching?: string;
    /** ☆☆☆☆   Example: "(Binary data 1679 bytes, use -b option …" */
    ToneCurveTable?: string;
    /** ☆☆☆☆ ✔ Example: "Highlights; 0; -7; 7; Shadows; 0; -7; 7…" */
    ToneLevel?: string;
    /** ☆☆☆☆ ✔ Example: "n/a" */
    ToningEffect?: string;
    /** ☆☆☆☆ ✔ Example: "n/a" */
    ToningEffectAuto?: string;
    /** ☆☆☆☆ ✔ Example: "None" */
    ToningEffectMonochrome?: string;
    /** ☆☆☆☆ ✔ Example: "n/a" */
    ToningEffectUserDef1?: string;
    /** ☆☆☆☆ ✔ Example: "None" */
    ToningEffectUserDef2?: string;
    /** ☆☆☆☆ ✔ Example: "None" */
    ToningEffectUserDef3?: string;
    /** ☆☆☆☆ ✔ Example: "n/a" */
    ToningSaturation?: string;
    /** ☆☆☆☆   Example: 5 */
    TotalZoom?: number;
    /** ☆☆☆☆ ✔ Example: "Off" */
    TouchAE?: string;
    /** ☆☆☆☆ ✔ Example: "Off" */
    ToyCameraFilter?: string;
    /** ☆☆☆☆   Example: "Off" */
    Transform?: string;
    /** ☆☆☆☆   Example: "Normal (set center AF point)" */
    TrashButtonFunction?: string;
    /** ☆☆☆☆ ✔ Examples: ["n/a",6] */
    TravelDay?: string | number;
    /** ☆☆☆☆   Example: "Motion Detection" */
    TriggerMode?: string;
    /** ☆☆☆☆   Example: "Subtle Correction" */
    TungstenAWB?: string;
    /** ☆☆☆☆   Example: "1/64" */
    TvExposureTimeSetting?: string;
    /** ☆☆☆☆ ✔ Example: "Turns on after one-shot AF" */
    USMLensElectronicMF?: string;
    /** ☆☆☆☆   Example: "ZME151000007" */
    UnknownNumber?: string;
    /** ☆☆☆☆ ✔ Example: "Enable; Flags 0xf0" */
    UsableMeteringModes?: string;
    /** ☆☆☆☆ ✔ Example: "Enable; Flags 0xf0" */
    UsableShootingModes?: string;
    /** ☆☆☆☆ ✔ Example: "Unknown (0)" */
    UserDef1PictureStyle?: string;
    /** ☆☆☆☆ ✔ Example: "Unknown (0)" */
    UserDef2PictureStyle?: string;
    /** ☆☆☆☆ ✔ Example: "Standard" */
    UserDef3PictureStyle?: string;
    /** ☆☆☆☆   Example: "PC900 COVERT PRO" */
    UserLabel?: string;
    /** ☆☆☆☆   Example: "dpreview  " */
    UserProfile?: string;
    /** ☆☆☆☆ ✔ Example: "Enable" */
    VFDisplayIllumination?: string;
    /** ☆☆☆☆ ✔ Example: 0 */
    VRDOffset?: number;
    /** ☆☆☆☆ ✔ Example: "0200" */
    VRInfoVersion?: string;
    /** ☆☆☆☆ ✔ Example: "Unknown (1)" */
    VRMode?: string;
    /** ☆☆☆☆ ✔ Example: 9 */
    ValidAFPoints?: number;
    /** ☆☆☆☆ ✔ Example: "12 0" */
    ValidBits?: string;
    /** ☆☆☆☆ ✔ Example: "Scene Auto" */
    VariProgram?: string;
    /** ☆☆☆☆   Example: "n/a" */
    VariableLowPassFilter?: string;
    /** ☆☆☆☆ ✔ Example: "0130" */
    Version?: string;
    /** ☆☆☆☆ ✔ Example: "Same as AF On" */
    VerticalAFOnButton?: string;
    /** ☆☆☆☆   Example: "AE/AF Lock" */
    VerticalFuncButton?: string;
    /** ☆☆☆☆   Example: "None" */
    VerticalFuncButtonPlusDials?: string;
    /** ☆☆☆☆   Example: "Same as Multi-Selector with Info(U/D) &…" */
    VerticalMultiSelector?: string;
    /** ☆☆☆☆ ✔ Example: "n/a" */
    VibrationReduction?: string;
    /** ☆☆☆☆ ✔ Example: "Off" */
    VideoBurstMode?: string;
    /** ☆☆☆☆ ✔ Example: "Disable" */
    ViewInfoDuringExposure?: string;
    /** ☆☆☆☆ ✔ Example: "Frame Count" */
    ViewfinderDisplay?: string;
    /** ☆☆☆☆   Example: "On" */
    ViewfinderWarning?: string;
    /** ☆☆☆☆ ✔ Example: "Monochrome, WB corrected, [6], [7]" */
    ViewfinderWarnings?: string;
    /** ☆☆☆☆   Example: "ViewFinder" */
    ViewingMode?: string;
    /** ☆☆☆☆   Example: "Viewfinder" */
    ViewingMode2?: string;
    /** ☆☆☆☆ ✔ Example: "Off" */
    VignetteControl?: string;
    /** ☆☆☆☆   Example: "Off" */
    Vignetting?: string;
    /** ☆☆☆☆ ✔ Example: 4 */
    VignettingCorrVersion?: number;
    /** ☆☆☆☆   Example: "Off" */
    VoiceMemo?: string;
    /** ☆☆☆☆ ✔ Example: "Off" */
    WBBracketMode?: string;
    /** ☆☆☆☆   Example: 0 */
    WBBracketShotNumber?: number;
    /** ☆☆☆☆ ✔ Example: 0 */
    WBBracketValueAB?: number;
    /** ☆☆☆☆ ✔ Example: 0 */
    WBBracketValueGM?: number;
    /** ☆☆☆☆ ✔ Example: "WB Bracketing Disabled" */
    WBBracketingSteps?: string;
    /** ☆☆☆☆ ✔ Example: "Rear LCD panel" */
    WBMediaImageSizeSetting?: string;
    /** ☆☆☆☆   Example: "Unknown (1 1)" */
    WBMode?: string;
    /** ☆☆☆☆ ✔ Example: 7 */
    WBShiftAB?: number;
    /** ☆☆☆☆ ✔ Example: "3 0" */
    WBShiftAB_GM?: string;
    /** ☆☆☆☆   Example: "0.00 0.00" */
    WBShiftAB_GM_Precise?: string;
    /** ☆☆☆☆ ✔ Example: 0 */
    WBShiftCreativeControl?: number;
    /** ☆☆☆☆ ✔ Example: 0 */
    WBShiftGM?: number;
    /** ☆☆☆☆ ✔ Example: 0 */
    WBShiftIntelligentAuto?: number;
    /** ☆☆☆☆   Example: 256 */
    WB_GLevel?: number;
    /** ☆☆☆☆ ✔ Example: "256 572 360 256" */
    WB_GRBGLevels?: string;
    /** ☆☆☆☆   Example: "550 458 256 256" */
    WB_RBGGLevels?: string;
    /** ☆☆☆☆ ✔ Example: "7.00390625 5.0078125 0.0078125 0.007812…" */
    WB_RBLevels?: string;
    /** ☆☆☆☆ ✔ Example: "296 776 256 256" */
    WB_RBLevels3000K?: string;
    /** ☆☆☆☆ ✔ Example: "354 556 256 256" */
    WB_RBLevels3300K?: string;
    /** ☆☆☆☆ ✔ Example: "382 514 256 256" */
    WB_RBLevels3600K?: string;
    /** ☆☆☆☆ ✔ Example: "406 482 256 256" */
    WB_RBLevels3900K?: string;
    /** ☆☆☆☆ ✔ Example: "486 550 256 256" */
    WB_RBLevels4000K?: string;
    /** ☆☆☆☆ ✔ Example: "434 460 256 256" */
    WB_RBLevels4300K?: string;
    /** ☆☆☆☆ ✔ Example: "480 468 256 256" */
    WB_RBLevels4500K?: string;
    /** ☆☆☆☆ ✔ Example: "470 426 256 256" */
    WB_RBLevels4800K?: string;
    /** ☆☆☆☆ ✔ Example: "500 398 256 256" */
    WB_RBLevels5300K?: string;
    /** ☆☆☆☆ ✔ Example: "540 364 256 256" */
    WB_RBLevels6000K?: string;
    /** ☆☆☆☆ ✔ Example: "572 390 256 256" */
    WB_RBLevels6600K?: string;
    /** ☆☆☆☆ ✔ Example: "586 316 256 256" */
    WB_RBLevels7500K?: string;
    /** ☆☆☆☆ ✔ Example: "468 414 256 256" */
    WB_RBLevelsCWB1?: string;
    /** ☆☆☆☆ ✔ Example: "384 388 256 256" */
    WB_RBLevelsCWB2?: string;
    /** ☆☆☆☆ ✔ Example: "384 388 256 256" */
    WB_RBLevelsCWB3?: string;
    /** ☆☆☆☆ ✔ Example: "384 388 256 256" */
    WB_RBLevelsCWB4?: string;
    /** ☆☆☆☆ ✔ Example: "540 256 400 256" */
    WB_RGBGLevels?: string;
    /** ☆☆☆☆ ✔ Example: "734 256 360" */
    WB_RGBLevels?: string;
    /** ☆☆☆☆ ✔ Example: "1324 1024 3520" */
    WB_RGBLevels2500K?: string;
    /** ☆☆☆☆ ✔ Example: "1720 1024 2496" */
    WB_RGBLevels3200K?: string;
    /** ☆☆☆☆ ✔ Example: "2288 1024 1784" */
    WB_RGBLevels4500K?: string;
    /** ☆☆☆☆ ✔ Example: "2748 1024 1460" */
    WB_RGBLevels6000K?: string;
    /** ☆☆☆☆ ✔ Example: "3256 1024 1228" */
    WB_RGBLevels8500K?: string;
    /** ☆☆☆☆ ✔ Example: "2772 1024 1444" */
    WB_RGBLevelsCloudy?: string;
    /** ☆☆☆☆ ✔ Example: "2552 1024 1580" */
    WB_RGBLevelsDaylight?: string;
    /** ☆☆☆☆ ✔ Example: "2944 1024 1452" */
    WB_RGBLevelsFlash?: string;
    /** ☆☆☆☆ ✔ Example: "2356 1024 2272" */
    WB_RGBLevelsFluorescent?: string;
    /** ☆☆☆☆ ✔ Example: "1852 1024 2856" */
    WB_RGBLevelsFluorescentM1?: string;
    /** ☆☆☆☆ ✔ Example: "2532 1024 1640" */
    WB_RGBLevelsFluorescentP1?: string;
    /** ☆☆☆☆ ✔ Example: "2916 1024 1528" */
    WB_RGBLevelsFluorescentP2?: string;
    /** ☆☆☆☆ ✔ Example: "3080 1024 1296" */
    WB_RGBLevelsShade?: string;
    /** ☆☆☆☆ ✔ Example: "1532 1024 2892" */
    WB_RGBLevelsTungsten?: string;
    /** ☆☆☆☆   Example: "130 128 130 128" */
    WB_RGGBBlackLevels?: string;
    /** ☆☆☆☆ ✔ Example: "665 256 256 352" */
    WB_RGGBLevels?: string;
    /** ☆☆☆☆ ✔ Example: "2467 1024 1024 1529" */
    WB_RGGBLevelsAsShot?: string;
    /** ☆☆☆☆ ✔ Example: "2545 1024 1024 1402" */
    WB_RGGBLevelsAuto?: string;
    /** ☆☆☆☆ ✔ Example: "2639 1023 1023 1353" */
    WB_RGGBLevelsCloudy?: string;
    /** ☆☆☆☆ ✔ Example: "2289 1024 1024 1579" */
    WB_RGGBLevelsCustom?: string;
    /** ☆☆☆☆   Example: "2425 1023 1023 1492" */
    WB_RGGBLevelsCustom1?: string;
    /** ☆☆☆☆   Example: "2425 1023 1023 1492" */
    WB_RGGBLevelsCustom2?: string;
    /** ☆☆☆☆ ✔ Example: "2425 1023 1023 1492" */
    WB_RGGBLevelsDaylight?: string;
    /** ☆☆☆☆ ✔ Example: "2735 1023 1023 1306" */
    WB_RGGBLevelsFlash?: string;
    /** ☆☆☆☆ ✔ Example: "2081 1024 1024 2123" */
    WB_RGGBLevelsFluorescent?: string;
    /** ☆☆☆☆   Example: "22819 8192 8192 12670" */
    WB_RGGBLevelsFluorescentD?: string;
    /** ☆☆☆☆   Example: "8858 8192 8192 19000" */
    WB_RGGBLevelsFluorescentL?: string;
    /** ☆☆☆☆   Example: "19565 8192 8192 14099" */
    WB_RGGBLevelsFluorescentN?: string;
    /** ☆☆☆☆   Example: "17786 8192 8192 17434" */
    WB_RGGBLevelsFluorescentW?: string;
    /** ☆☆☆☆ ✔ Example: "2819 1024 1024 1134" */
    WB_RGGBLevelsKelvin?: string;
    /** ☆☆☆☆ ✔ Example: "729 1021 1025 6420" */
    WB_RGGBLevelsMeasured?: string;
    /** ☆☆☆☆ ✔ Example: "8191 1067 1067 8191" */
    WB_RGGBLevelsPC1?: string;
    /** ☆☆☆☆ ✔ Example: "8191 1067 1067 8191" */
    WB_RGGBLevelsPC2?: string;
    /** ☆☆☆☆ ✔ Example: "8191 1067 1067 8191" */
    WB_RGGBLevelsPC3?: string;
    /** ☆☆☆☆ ✔ Example: "2847 1023 1023 1249" */
    WB_RGGBLevelsShade?: string;
    /** ☆☆☆☆ ✔ Example: "9948 8192 8192 17713" */
    WB_RGGBLevelsTungsten?: string;
    /** ☆☆☆☆   Example: "9568 8192 8192 28704" */
    WB_RGGBLevelsUserSelected?: string;
    /** ☆☆☆☆ ✔ Example: "Off" */
    WatercolorFilter?: string;
    /** ☆☆☆☆ ✔ Example: "Underwater" */
    WhiteBalance2?: string;
    /** ☆☆☆☆   Example: "On" */
    WhiteBalanceAutoAdjustment?: string;
    /** ☆☆☆☆ ✔ Examples: [0,"96 106"] */
    WhiteBalanceBias?: number | string;
    /** ☆☆☆☆ ✔ Example: 796 */
    WhiteBalanceBlue?: number;
    /** ☆☆☆☆ ✔ Examples: ["0 0",0] */
    WhiteBalanceBracket?: string | number;
    /** ☆☆☆☆   Example: "Off" */
    WhiteBalanceBracketing?: string;
    /** ☆☆☆☆ ✔ Examples: [3,"Red +0, Blue +0"] */
    WhiteBalanceFineTune?: number | string;
    /** ☆☆☆☆   Example: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0…" */
    WhiteBalanceMatching?: string;
    /** ☆☆☆☆   Example: "User-Selected" */
    WhiteBalanceMode?: string;
    /** ☆☆☆☆ ✔ Example: 642 */
    WhiteBalanceRed?: number;
    /** ☆☆☆☆   Example: "Tungsten" */
    WhiteBalanceSet?: string;
    /** ☆☆☆☆   Example: "Custom 1" */
    WhiteBalanceSetting?: string;
    /** ☆☆☆☆   Example: "Auto" */
    WhiteBalanceSetup?: string;
    /** ☆☆☆☆   Example: "(Binary data 2217 bytes, use -b option …" */
    WhiteBalanceTable?: string;
    /** ☆☆☆☆ ✔ Examples: ["Auto",7500] */
    WhiteBalanceTemperature?: string | number;
    /** ☆☆☆☆ ✔ Examples: [0,"9296 18309"] */
    WhiteBoard?: number | string;
    /** ☆☆☆☆ ✔ Example: "15360 15360 15360" */
    WhiteLevel?: string;
    /** ☆☆☆☆   Example: "Not Attached" */
    WideAdapter?: string;
    /** ☆☆☆☆   Example: "Unknown (9)" */
    WideFocusZone?: string;
    /** ☆☆☆☆   Example: "Off" */
    WideRange?: string;
    /** ☆☆☆☆ ✔ Example: "Hometown" */
    WorldTimeLocation?: string;
    /** ☆☆☆☆   Examples: [0.2,"+0.0"] */
    X3FillLight?: number | string;
    /** ☆☆☆☆   Examples: [-3.2,"+52.70"] */
    Yaw?: number | string;
    /** ☆☆☆☆ ✔ Example: 91.6 */
    YawAngle?: number;
    /** ☆☆☆☆   Example: 2006 */
    YearCreated?: number;
    /** ☆☆☆☆ ✔ Example: "ISO Setting Used" */
    ZoneMatching?: string;
    /** ☆☆☆☆   Example: "Unknown (7040)" */
    ZoneMatchingOn?: string;
    /** ☆☆☆☆   Example: 0 */
    ZoneMatchingValue?: number;
    /** ★☆☆☆ ✔ Example: 768 */
    ZoomSourceWidth?: number;
    /** ☆☆☆☆ ✔ Example: 8 */
    ZoomStepCount?: number;
    /** ★☆☆☆ ✔ Example: 6000 */
    ZoomTargetWidth?: number;
    /** ☆☆☆☆   Example: "(Binary data 92592 bytes, use -b option…" */
    ZoomedPreviewImage?: string;
    /** ☆☆☆☆   Example: 92592 */
    ZoomedPreviewLength?: number;
    /** ☆☆☆☆   Example: "736 544" */
    ZoomedPreviewSize?: string;
    /** ☆☆☆☆   Example: 4184638 */
    ZoomedPreviewStart?: number;
}
export interface CompositeTags {
    /** ☆☆☆☆ ✔ Example: "Unknown (49 5)" */
    AdvancedSceneMode?: string;
    /** ☆☆☆☆ ✔ Example: "On" */
    AutoFocus?: string;
    /** ☆☆☆☆ ✔ Example: "8.7 Mbps" */
    AvgBitrate?: string;
    /** ★★★☆ ✔ Example: "1.030 mm" */
    CircleOfConfusion?: string;
    /** ☆☆☆☆ ✔ Example: 0 */
    ConditionalFEC?: number;
    /** ★☆☆☆ ✔ Example: "inf (9.66 m - inf)" */
    DOF?: string;
    /** ☆☆☆☆   Example: "2006-12-19" */
    DateCreated?: ExifDate;
    /** ☆☆☆☆ ✔ Example: "2018-10-28T16:08:13.000Z" */
    DateTimeCreated?: ExifDateTime;
    /** ☆☆☆☆ ✔ Example: "2016-08-12T13:28:50.000+08:00" */
    DigitalCreationDateTime?: ExifDateTime;
    /** ☆☆☆☆ ✔ Example: 25.866408 */
    Duration?: number;
    /** ★★★☆ ✔ Example: "97.7 deg" */
    FOV?: string;
    /** ★★★★ ✔ Example: "99.7 mm (35 mm equivalent: 554.0 mm)" */
    FocalLength35efl?: string;
    /** ☆☆☆☆ ✔ Example: "inf" */
    FocusDistance2?: string;
    /** ☆☆☆☆ ✔ Examples: ["2020-07-08T11:08:23.000Z","2008:02:12  17:04:00Z"] */
    GPSDateTime?: ExifDateTime | string;
    /** ☆☆☆☆ ✔ Example: "7.196465 134.376806666667" */
    GPSPosition?: string;
    /** ★★★☆ ✔ Example: "Inf m" */
    HyperfocalDistance?: string;
    /** ★★★★ ✔ Example: "8x8" */
    ImageSize?: string;
    /** ★☆☆☆ ✔ Example: "9.2 - 92.0 mm (35 mm equivalent: 24.9 -…" */
    Lens35efl?: string;
    /** ★☆☆☆ ✔ Example: "smc PENTAX-FA 28-105mm F3.2-4.5 AL[IF]" */
    LensID?: string;
    /** ★★★☆ ✔ Example: 9.9 */
    LightValue?: number;
    /** ★★★★ ✔ Example: 9.5 */
    Megapixels?: number;
    /** ☆☆☆☆   Example: "9.9 um" */
    PeakSpectralSensitivity?: string;
    /** ☆☆☆☆   Example: 11.2 */
    RicohPitch?: number;
    /** ☆☆☆☆   Example: 0 */
    RicohRoll?: number;
    /** ☆☆☆☆ ✔ Examples: ["9:30:01","18:03:15"] */
    RunTimeSincePowerUp?: string | ExifTime;
    /** ★★★☆ ✔ Example: 9.9 */
    ScaleFactor35efl?: number;
    /** ☆☆☆☆ ✔ Example: "1st-curtain sync" */
    ShutterCurtainHack?: string;
    /** ☆☆☆☆ ✔ Examples: ["2018-10-28T16:08:13.973Z","2010.05.14 13:11:42.000"] */
    SubSecCreateDate?: ExifDateTime | string;
    /** ☆☆☆☆ ✔ Examples: ["2018-10-28T16:08:13.973Z","2010.05.14 13:11:42.000"] */
    SubSecDateTimeOriginal?: ExifDateTime | string;
    /** ☆☆☆☆ ✔ Examples: ["2018-09-18T20:46:11.000-05:00","2010.05.14 13:11:42.000"] */
    SubSecModifyDate?: ExifDateTime | string;
}
export interface PrintIMTags {
    /** ★★☆☆ ✔ Example: "0300" */
    PrintIMVersion?: string;
}
export interface JFIFTags {
    /** ★★☆☆ ✔ Example: 1.02 */
    JFIFVersion?: number;
}
export interface APP12Tags {
    /** ☆☆☆☆   Example: 388 */
    Again?: number;
    /** ☆☆☆☆   Example: 3383 */
    B5100?: number;
    /** ☆☆☆☆   Example: 216 */
    BHL?: number;
    /** ☆☆☆☆   Example: 255 */
    BHighLight?: number;
    /** ☆☆☆☆   Example: 86 */
    BMean?: number;
    /** ☆☆☆☆   Example: 3 */
    BSD?: number;
    /** ☆☆☆☆   Example: 1 */
    BSd?: number;
    /** ☆☆☆☆   Example: 1908 */
    BStrobe?: number;
    /** ☆☆☆☆   Example: 0 */
    Balance?: number;
    /** ☆☆☆☆   Example: 2438 */
    Bgain?: number;
    /** ☆☆☆☆   Example: 33 */
    Blk0?: number;
    /** ☆☆☆☆   Example: 32 */
    Blk1?: number;
    /** ☆☆☆☆   Example: 6 */
    Boff?: number;
    /** ☆☆☆☆   Example: 59 */
    CAM1?: number;
    /** ☆☆☆☆   Example: 56 */
    CAM2?: number;
    /** ☆☆☆☆   Example: 160 */
    CAM3?: number;
    /** ☆☆☆☆   Example: 32 */
    CAM4?: number;
    /** ☆☆☆☆   Example: 224 */
    CAM5?: number;
    /** ☆☆☆☆   Example: 80 */
    CAM6?: number;
    /** ☆☆☆☆   Example: 86 */
    CAM7?: number;
    /** ☆☆☆☆   Example: 143 */
    CAM8?: number;
    /** ☆☆☆☆   Example: 2 */
    CBal?: number;
    /** ☆☆☆☆   Example: 42926626 */
    COLOR1?: number;
    /** ☆☆☆☆   Example: 32321478 */
    COLOR2?: number;
    /** ☆☆☆☆   Example: 22701368 */
    COLOR3?: number;
    /** ☆☆☆☆   Example: 5 */
    COLOR4?: number;
    /** ☆☆☆☆   Example: 2 */
    Case?: number;
    /** ☆☆☆☆   Example: 1 */
    Color?: number;
    /** ☆☆☆☆   Example: 0 */
    ContTake?: number;
    /** ☆☆☆☆   Example: 8501 */
    EXP1?: number;
    /** ☆☆☆☆   Example: 59 */
    EXP2?: number;
    /** ☆☆☆☆   Example: 237 */
    EXP3?: number;
    /** ☆☆☆☆   Example: 0.97 */
    ExposRatio?: number;
    /** ☆☆☆☆   Example: 3687 */
    Exposure?: number;
    /** ☆☆☆☆   Example: 2853 */
    FCS1?: number;
    /** ☆☆☆☆   Example: 2699 */
    FCS2?: number;
    /** ☆☆☆☆   Example: 2849 */
    FCS3?: number;
    /** ☆☆☆☆   Example: 221 */
    FCS4?: number;
    /** ☆☆☆☆   Example: 215 */
    FCS5?: number;
    /** ☆☆☆☆   Example: 3 */
    FCS6?: number;
    /** ☆☆☆☆   Example: 3 */
    FCS7?: number;
    /** ☆☆☆☆   Example: 192 */
    FMean?: number;
    /** ☆☆☆☆   Example: 1 */
    FinalRatio?: number;
    /** ☆☆☆☆   Example: 640 */
    FlashTime?: number;
    /** ☆☆☆☆   Example: "F2.8" */
    Fnumber?: string;
    /** ☆☆☆☆   Example: 136 */
    FocusPos?: number;
    /** ☆☆☆☆   Example: 2152 */
    GBgain?: number;
    /** ☆☆☆☆   Example: 8 */
    GBoff?: number;
    /** ☆☆☆☆   Example: 255 */
    GHL?: number;
    /** ☆☆☆☆   Example: 255 */
    GHighLight?: number;
    /** ☆☆☆☆   Example: 52 */
    GMean?: number;
    /** ☆☆☆☆   Example: 2152 */
    GRgain?: number;
    /** ☆☆☆☆   Example: 8 */
    GRoff?: number;
    /** ☆☆☆☆   Example: 4 */
    GSD?: number;
    /** ☆☆☆☆   Example: 1 */
    GSd?: number;
    /** ☆☆☆☆   Example: "PDR-M60" */
    ID?: string;
    /** ☆☆☆☆   Example: 35761 */
    IMbb?: number;
    /** ☆☆☆☆   Example: 33709 */
    IMbg?: number;
    /** ☆☆☆☆   Example: 32929 */
    IMbr?: number;
    /** ☆☆☆☆   Example: 33346 */
    IMgb?: number;
    /** ☆☆☆☆   Example: 35931 */
    IMgg?: number;
    /** ☆☆☆☆   Example: 33122 */
    IMgr?: number;
    /** ☆☆☆☆   Example: 32721 */
    IMrb?: number;
    /** ☆☆☆☆   Example: 33975 */
    IMrg?: number;
    /** ☆☆☆☆   Example: 35704 */
    IMrr?: number;
    /** ☆☆☆☆   Example: 696880 */
    JPEG1?: number;
    /** ☆☆☆☆   Example: 504 */
    MTR1?: number;
    /** ☆☆☆☆   Example: 220 */
    MTR2?: number;
    /** ☆☆☆☆   Example: 4 */
    MTRX1?: number;
    /** ☆☆☆☆   Example: " 10.6" */
    Mean?: string;
    /** ☆☆☆☆   Example: 26 */
    MotorPos?: number;
    /** ☆☆☆☆   Example: 4 */
    Offset?: number;
    /** ☆☆☆☆   Example: 87648 */
    PicLen?: number;
    /** ☆☆☆☆   Example: 0 */
    Protect?: number;
    /** ☆☆☆☆   Example: 6929 */
    R5100?: number;
    /** ☆☆☆☆   Example: 247 */
    RHL?: number;
    /** ☆☆☆☆   Example: 255 */
    RHighLight?: number;
    /** ☆☆☆☆   Example: 32 */
    RMean?: number;
    /** ☆☆☆☆   Example: 4 */
    RSD?: number;
    /** ☆☆☆☆   Example: 1 */
    RSd?: number;
    /** ☆☆☆☆   Example: 5896 */
    RStrobe?: number;
    /** ☆☆☆☆   Example: 1887 */
    Rgain?: number;
    /** ☆☆☆☆   Example: 9 */
    Roff?: number;
    /** ☆☆☆☆   Example: "8259,0,14bfe,a184,11987,1e4f1,0,7c0000,…" */
    S0?: string;
    /** ☆☆☆☆   Example: 139 */
    STB1?: number;
    /** ☆☆☆☆   Example: 0 */
    STB2?: number;
    /** ☆☆☆☆   Example: 262 */
    STB3?: number;
    /** ☆☆☆☆   Example: 14 */
    STB4?: number;
    /** ☆☆☆☆   Example: 0 */
    STB5?: number;
    /** ☆☆☆☆   Example: 0 */
    StrobeTime?: number;
    /** ☆☆☆☆   Example: "bd1,1,5,2beec,b5,ec15" */
    T0?: string;
    /** ☆☆☆☆   Example: 357 */
    TagB?: number;
    /** ☆☆☆☆   Example: 92 */
    TagQ?: number;
    /** ☆☆☆☆   Example: 243 */
    TagR?: number;
    /** ☆☆☆☆   Example: 4016 */
    ThmLen?: number;
    /** ☆☆☆☆   Example: 4 */
    WB1?: number;
    /** ☆☆☆☆   Example: 5528 */
    WB2?: number;
    /** ☆☆☆☆   Example: "285,7" */
    WB3?: string;
    /** ☆☆☆☆   Example: "380,5" */
    WB4?: string;
    /** ☆☆☆☆   Example: 0 */
    WB5?: number;
    /** ☆☆☆☆   Example: 0 */
    WB6?: number;
    /** ☆☆☆☆   Example: 4054 */
    YLevel?: number;
    /** ☆☆☆☆   Example: 2209 */
    YTarget?: number;
    /** ☆☆☆☆   Examples: ["x1.0",0] */
    Zoom?: string | number;
    /** ☆☆☆☆   Example: 9 */
    ZoomPos?: number;
}
export interface XMPTags {
    /** ☆☆☆☆ ✔ Example: "uuid:faf5bdd5-ba3d-11da-ad31-d33d75182f…" */
    About?: string;
    /** ☆☆☆☆   Example: "+42.90" */
    AbsoluteAltitude?: string;
    /** ☆☆☆☆   Example: "true" */
    AlreadyApplied?: boolean;
    /** ☆☆☆☆ ✔ Example: 5.01 */
    ApproximateFocusDistance?: number;
    /** ☆☆☆☆ ✔ Example: "1412873e-999a-4264-a07f-420e208d6656" */
    BurstID?: string;
    /** ☆☆☆☆ ✔ Example: 1 */
    BurstPrimary?: number;
    /** ☆☆☆☆ ✔ Example: "1412873e-999a-4264-a07f-420e208d6656" */
    CameraBurstID?: string;
    /** ☆☆☆☆   Example: "Rear" */
    CameraUnit?: string;
    /** ☆☆☆☆ ✔ Example: "Photo" */
    CaptureMode?: string;
    /** ☆☆☆☆ ✔ Example: ["Subjekt|Natur|Pflanzen","Ort|Deutschland|Rangsdorf"] */
    CatalogSets?: string[];
    /** ☆☆☆☆   Example: "240-8-330-901211" */
    CellGlobalID?: string;
    /** ☆☆☆☆   Example: 5 */
    CellR?: number;
    /** ☆☆☆☆   Example: 901211 */
    CellTowerID?: number;
    /** ☆☆☆☆   Example: "tag,2011-07-26T05:44:01Z,0,c" */
    Changes?: string;
    /** ☆☆☆☆ ✔ Example: "2 (Winner alt)" */
    ColorClass?: string;
    /** ☆☆☆☆ ✔ Example: 0 */
    ColorLabel?: number;
    /** ☆☆☆☆   Example: "Satoshi Kitamura" */
    Creator?: string;
    /** ☆☆☆☆   Example: "{2d7e7fd6-2942-4d77-9842-389c3f62b14d}" */
    CreatorAppID?: string;
    /** ☆☆☆☆   Example: 1 */
    CreatorOpenWithUIOptions?: number;
    /** ☆☆☆☆ ✔ Examples: ["picnik.com",8.1] */
    CreatorTool?: string | number;
    /** ☆☆☆☆   Example: "Version Ver 1.04 " */
    Creatortool?: string;
    /** ☆☆☆☆   Example: 2688 */
    CroppedAreaImageHeightPixels?: number;
    /** ☆☆☆☆   Example: 5376 */
    CroppedAreaImageWidthPixels?: number;
    /** ☆☆☆☆   Example: 0 */
    CroppedAreaLeftPixels?: number;
    /** ☆☆☆☆   Example: 0 */
    CroppedAreaTopPixels?: number;
    /** ☆☆☆☆ ✔ Example: "2014-05-11T13:08:25.659-04:00" */
    DateAcquired?: ExifDateTime;
    /** ☆☆☆☆ ✔ Example: "2016-07-19T12:01:53.000+02:00" */
    DateTime?: ExifDateTime;
    /** ☆☆☆☆   Example: "2015-12-09T15:03:34.310+09:00" */
    DateTimeDigitized?: ExifDateTime;
    /** ☆☆☆☆ ✔ Example: "2015-06-02T09:56:01.000+01:00" */
    DateUTC?: ExifDateTime;
    /** ☆☆☆☆ ✔ Example: "mde" */
    Description?: string;
    /** ☆☆☆☆ ✔ Example: "adobe:docid:photoshop:cace72cd-6bd6-11d…" */
    DocumentID?: string;
    /** ☆☆☆☆   Example: "true" */
    FlashFunction?: boolean;
    /** ☆☆☆☆ ✔ Example: "FlashPix Version 1.0" */
    FlashPixVersion?: string;
    /** ☆☆☆☆   Example: "false" */
    FlashRedEyeMode?: boolean;
    /** ☆☆☆☆   Example: "No return detection" */
    FlashReturn?: string;
    /** ☆☆☆☆   Examples: ["+1.00",-4.1] */
    FlightPitchDegree?: string | number;
    /** ☆☆☆☆   Example: -5.4 */
    FlightRollDegree?: number;
    /** ☆☆☆☆   Examples: [-3.2,"+32.00"] */
    FlightYawDegree?: number | string;
    /** ☆☆☆☆ ✔ Example: "image/jpeg" */
    Format?: string;
    /** ☆☆☆☆   Example: 2688 */
    FullPanoHeightPixels?: number;
    /** ☆☆☆☆   Example: 5376 */
    FullPanoWidthPixels?: number;
    /** ☆☆☆☆   Example: -25.1 */
    GimbalPitchDegree?: number;
    /** ☆☆☆☆   Example: "+0.00" */
    GimbalRollDegree?: string;
    /** ☆☆☆☆   Examples: [-3.2,"+31.90"] */
    GimbalYawDegree?: number | string;
    /** ☆☆☆☆   Example: "false" */
    HasCrop?: boolean;
    /** ☆☆☆☆   Example: "true" */
    HasSettings?: boolean;
    /** ☆☆☆☆ ✔ Examples: ["点像F11",["Subjekt|Natur|Pflanzen","Ort|Deutschland|Rangsdorf"]] */
    HierarchicalSubject?: string | string[];
    /** ☆☆☆☆ ✔ Examples: [["saved","saved"],"saved"] */
    HistoryAction?: string[] | string;
    /** ☆☆☆☆ ✔ Examples: [["/metadata","/metadata"],"/metadata"] */
    HistoryChanged?: string[] | string;
    /** ☆☆☆☆ ✔ Examples: [["xmp.iid:ff4236ca-0638-45f9-89d7-0c6da6c…","xmp.iid:88b9e75f-c163-4229-b94f-5f7cc24…"],"xmp.iid:A785B1E65E8EE5118EE7E041538FE19…"] */
    HistoryInstanceID?: string[] | string;
    /** ☆☆☆☆ ✔ Examples: [["Adobe Photoshop Lightroom 5.7.1 (Macint…","Adobe Photoshop Camera Raw 8.7.1 (Macin…"],"Adobe Photoshop Camera Raw 6.7 (Windows…"] */
    HistorySoftwareAgent?: string[] | string;
    /** ☆☆☆☆ ✔ Examples: [["2018:11:02 13:13:22Z","2018:11:02 13:13:22Z"],"2015:12:09 11:15:46+09:00"] */
    HistoryWhen?: string[] | string;
    /** ☆☆☆☆   Example: "sRGB IEC61966-2.1" */
    ICCProfileName?: string;
    /** ☆☆☆☆ ✔ Example: "xmp.iid:f78babc9-f404-44cc-8983-b5ebc63…" */
    InstanceID?: string;
    /** ☆☆☆☆ ✔ Example: "N" */
    InteroperabilityIndex?: string;
    /** ☆☆☆☆ ✔ Example: "47,  3, 18.79" */
    InteroperabilityVersion?: string;
    /** ☆☆☆☆ ✔ Example: "false" */
    IsHDRActive?: boolean;
    /** ☆☆☆☆   Example: "選択" */
    Label?: string;
    /** ☆☆☆☆ ✔ Examples: ["photos",["Subjekt/Natur/Pflanzen","Ort/Deutschland/Rangsdorf"]] */
    LastKeywordXMP?: string | string[];
    /** ☆☆☆☆ ✔ Example: "Back" */
    LensFacing?: string;
    /** ☆☆☆☆   Example: 37087 */
    LocationAreaCode?: number;
    /** ☆☆☆☆ ✔ Example: "2018-11-02T13:13:22.000Z" */
    MetadataDate?: ExifDateTime;
    /** ☆☆☆☆   Example: 240 */
    MobileCountryCode?: number;
    /** ☆☆☆☆   Example: 8 */
    MobileNetworkCode?: number;
    /** ☆☆☆☆ ✔ Example: "2015-06-02T09:56:01.000+01:00" */
    ModificationDate?: ExifDateTime;
    /** ☆☆☆☆   Example: "36864,40960,40961,37121,37122,40962,409…" */
    NativeDigest?: string;
    /** ☆☆☆☆ ✔ Example: "FBC0A472B61E4BC63E86483D2E2FA107" */
    OriginalDocumentID?: string;
    /** ☆☆☆☆ ✔ Example: "PM5" */
    PMVersion?: string;
    /** ☆☆☆☆ ✔ Example: 80 */
    PhotographicSensitivity?: number;
    /** ☆☆☆☆ ✔ Example: 0 */
    PickLabel?: number;
    /** ☆☆☆☆   Example: "01.00" */
    PipelineVersion?: string;
    /** ☆☆☆☆   Example: 22.5 */
    PoseHeadingDegrees?: number;
    /** ☆☆☆☆   Example: 11.2 */
    PosePitchDegrees?: number;
    /** ☆☆☆☆   Example: 0 */
    PoseRollDegrees?: number;
    /** ☆☆☆☆ ✔ Example: "Tagged:1, ColorClass:2, Rating:0, Frame…" */
    Prefs?: string;
    /** ☆☆☆☆   Example: "equirectangular" */
    ProjectionType?: string;
    /** ☆☆☆☆ ✔ Example: "P2030414.jpg" */
    RawFileName?: string;
    /** ☆☆☆☆ ✔ Example: 960 */
    RegionAppliedToDimensionsH?: number;
    /** ☆☆☆☆ ✔ Example: "pixel" */
    RegionAppliedToDimensionsUnit?: string;
    /** ☆☆☆☆ ✔ Example: 7136 */
    RegionAppliedToDimensionsW?: number;
    /** ☆☆☆☆ ✔ Examples: [1,"0.40000000000000002",["0.30100000000000005","0.29799999999999993"],[0.99999982,1]] */
    RegionAreaH?: number | string | string[] | number[];
    /** ☆☆☆☆ ✔ Examples: ["normalized",["normalized","normalized"]] */
    RegionAreaUnit?: string | string[];
    /** ☆☆☆☆ ✔ Examples: [1,"0.29899999999999999",["0.22628571428571426","0.21400000000000002"],[1,1]] */
    RegionAreaW?: number | string | string[] | number[];
    /** ☆☆☆☆ ✔ Examples: [0.6719,"0.46150000000000002",["0.38895238095238094","0.39100000000000001"],[0.577,0.221]] */
    RegionAreaX?: number | string | string[] | number[];
    /** ☆☆☆☆ ✔ Examples: [0.670833,"0.46700000000000003",["0.42350000000000004","0.42199999999999999"],[0.50732,0.730293]] */
    RegionAreaY?: number | string | string[] | number[];
    /** ☆☆☆☆ ✔ Example: 300 */
    RegionExtensionsAngleInfoRoll?: number;
    /** ☆☆☆☆ ✔ Example: 45 */
    RegionExtensionsAngleInfoYaw?: number;
    /** ☆☆☆☆ ✔ Example: 982 */
    RegionExtensionsConfidenceLevel?: number;
    /** ☆☆☆☆ ✔ Example: 6 */
    RegionExtensionsFaceID?: number;
    /** ☆☆☆☆ ✔ Example: 932008410000 */
    RegionExtensionsTimeStamp?: number;
    /** ☆☆☆☆   Examples: ["c",["Angry Bird","Green Pig"]] */
    RegionName?: string | string[];
    /** ☆☆☆☆ ✔ Examples: ["Focus",["Face","Focus"]] */
    RegionType?: string | string[];
    /** ☆☆☆☆   Example: "+7.10" */
    RegistryID?: {
        RegItemId?: string;
        RegEntryRole?: string;
        RegOrgId?: string;
    }[];
    /** ☆☆☆☆   Example: [{ RegItemId: "item 1", RegOrgId: "org 1"}, { RegEntryRole: "role 2", RegOrgId: "org 2"}] */
    RelativeAltitude?: string;
    /** ☆☆☆☆   Example: "james robinson taylor" */
    Rights?: string;
    /** ☆☆☆☆ ✔ Example: "AutoHDR" */
    Scene?: string;
    /** ☆☆☆☆ ✔ Example: "PORTRAIT" */
    SpecialTypeID?: string;
    /** ☆☆☆☆   Example: 3 */
    StreamType?: number;
    /** ☆☆☆☆ ✔ Examples: ["点像F11",["T-Mobile","myTouch 3G","HTC","Magic","AndroidAuthority.com","MobileBurn MobileBurn.com"]] */
    Subject?: string | string[];
    /** ☆☆☆☆   Example: "#MB%:{9C0B071B-5553-4D89-B252-934C9EC1E…" */
    Tag?: string;
    /** ☆☆☆☆ ✔ Example: "Yes" */
    Tagged?: string;
    /** ☆☆☆☆ ✔ Example: ["Subjekt/Natur/Pflanzen","Ort/Deutschland/Rangsdorf"] */
    TagsList?: string[];
    /** ☆☆☆☆ ✔ Examples: ["1 (most urgent)",2] */
    Urgency?: string | number;
    /** ☆☆☆☆   Example: "true" */
    UsePanoramaViewer?: boolean;
    /** ☆☆☆☆   Example: 2.851895 */
    WhiteBalance0?: number;
    /** ☆☆☆☆   Example: 1.100371 */
    WhiteBalance1?: number;
    /** ☆☆☆☆ ✔ Example: "XMP toolkit 3.0-28, framework 1.6" */
    XMPToolkit?: string;
}
export interface PhotoshopTags {
    /** ☆☆☆☆ ✔ Example: "true" */
    CopyrightFlag?: boolean;
    /** ☆☆☆☆ ✔ Example: "inches" */
    DisplayedUnitsX?: string;
    /** ☆☆☆☆ ✔ Example: "inches" */
    DisplayedUnitsY?: string;
    /** ☆☆☆☆   Example: 30 */
    GlobalAltitude?: number;
    /** ☆☆☆☆   Example: 30 */
    GlobalAngle?: number;
    /** ☆☆☆☆   Example: "Yes" */
    HasRealMergedData?: string;
    /** ☆☆☆☆ ✔ Example: "fd826cdf97ac15335b426a20d23c1041" */
    IPTCDigest?: string;
    /** ☆☆☆☆   Example: 1 */
    NumSlices?: number;
    /** ☆☆☆☆   Example: "Standard" */
    PhotoshopFormat?: string;
    /** ☆☆☆☆   Example: 9 */
    PhotoshopQuality?: number;
    /** ☆☆☆☆   Example: "(Binary data 7082 bytes, use -b option …" */
    PhotoshopThumbnail?: string;
    /** ☆☆☆☆   Example: "0 0" */
    PrintPosition?: string;
    /** ☆☆☆☆   Example: 1 */
    PrintScale?: number;
    /** ☆☆☆☆   Example: "Centered" */
    PrintStyle?: string;
    /** ☆☆☆☆   Example: "3 Scans" */
    ProgressiveScans?: string;
    /** ☆☆☆☆   Example: "Adobe Photoshop CS" */
    ReaderName?: string;
    /** ☆☆☆☆   Example: "panasonic_lumix_dmc_lx15_02" */
    SlicesGroupName?: string;
    /** ☆☆☆☆   Example: "Adobe Photoshop" */
    WriterName?: string;
}
export interface FlashPixTags {
    /** ☆☆☆☆   Example: "(Binary data 20796 bytes, use -b option…" */
    AudioStream?: string;
    /** ☆☆☆☆   Example: "Unicode UTF-16, little endian" */
    CodePage?: string;
    /** ☆☆☆☆   Example: "Picoss" */
    CreatingApplication?: string;
    /** ☆☆☆☆   Example: "30020010-C06F-D011-BD01-00609719A180" */
    ExtensionClassID?: string;
    /** ☆☆☆☆   Examples: ["2003-03-29T17:47:50.000",10307.922] */
    ExtensionCreateDate?: ExifDateTime | number;
    /** ☆☆☆☆   Example: "Presized image for LCD display" */
    ExtensionDescription?: string;
    /** ☆☆☆☆   Examples: ["2003-03-29T17:47:50.000",15461.882] */
    ExtensionModifyDate?: ExifDateTime | number;
    /** ☆☆☆☆   Example: "Screen nail" */
    ExtensionName?: string;
    /** ☆☆☆☆   Example: "Invalidated By Modification" */
    ExtensionPersistence?: string;
    /** ☆☆☆☆   Example: "(Binary data 97265 bytes, use -b option…" */
    ScreenNail?: string;
    /** ☆☆☆☆   Examples: [1,[1,2]] */
    UsedExtensionNumbers?: number | number[];
}
export interface ICC_ProfileTags {
    /** ☆☆☆☆ ✔ Example: "0.1571 0.06657 0.78407" */
    BlueMatrixColumn?: string;
    /** ☆☆☆☆ ✔ Example: "(Binary data 8204 bytes, use -b option …" */
    BlueTRC?: string;
    /** ☆☆☆☆ ✔ Example: "Not Embedded, Independent" */
    CMMFlags?: string;
    /** ☆☆☆☆ ✔ Example: "1.04861 0.02332 -0.05034 0.03018 0.9900…" */
    ChromaticAdaptation?: string;
    /** ☆☆☆☆ ✔ Example: "RGB " */
    ColorSpaceData?: string;
    /** ☆☆☆☆ ✔ Example: "0.9642 1 0.82491" */
    ConnectionSpaceIlluminant?: string;
    /** ☆☆☆☆ ✔ Example: "Reflective, Glossy, Positive, Color" */
    DeviceAttributes?: string;
    /** ☆☆☆☆ ✔ Example: "none" */
    DeviceManufacturer?: string;
    /** ☆☆☆☆ ✔ Example: "IEC http://www.iec.ch" */
    DeviceMfgDesc?: string;
    /** ☆☆☆☆ ✔ Example: "sRGB" */
    DeviceModel?: string;
    /** ☆☆☆☆ ✔ Example: "sRGB v1.31 (Canon)" */
    DeviceModelDesc?: string;
    /** ☆☆☆☆ ✔ Example: "0.38515 0.71687 0.09708" */
    GreenMatrixColumn?: string;
    /** ☆☆☆☆ ✔ Example: "(Binary data 8204 bytes, use -b option …" */
    GreenTRC?: string;
    /** ☆☆☆☆ ✔ Example: "76.03647 80 87.12462" */
    Luminance?: string;
    /** ☆☆☆☆ ✔ Example: "0 0.00999 3e-05" */
    MeasurementBacking?: string;
    /** ☆☆☆☆ ✔ Example: "0.999%" */
    MeasurementFlare?: string;
    /** ☆☆☆☆ ✔ Example: "Unknown" */
    MeasurementGeometry?: string;
    /** ☆☆☆☆ ✔ Example: "Unknown (0)" */
    MeasurementIlluminant?: string;
    /** ☆☆☆☆ ✔ Example: "CIE 1931" */
    MeasurementObserver?: string;
    /** ☆☆☆☆ ✔ Example: "0.01205 0.0125 0.01031" */
    MediaBlackPoint?: string;
    /** ☆☆☆☆ ✔ Example: "0.9642 1 0.82491" */
    MediaWhitePoint?: string;
    /** ☆☆☆☆   Example: "(Binary data 56 bytes, use -b option to…" */
    NativeDisplayInfo?: string;
    /** ☆☆☆☆ ✔ Example: "Unknown ()" */
    PrimaryPlatform?: string;
    /** ☆☆☆☆ ✔ Example: "none" */
    ProfileCMMType?: string;
    /** ☆☆☆☆ ✔ Example: "Input Device Profile" */
    ProfileClass?: string;
    /** ☆☆☆☆ ✔ Example: "XYZ " */
    ProfileConnectionSpace?: string;
    /** ☆☆☆☆ ✔ Example: "© Chuckles McSnortypants, Inc." */
    ProfileCopyright?: string;
    /** ☆☆☆☆ ✔ Example: "Minolta" */
    ProfileCreator?: string;
    /** ☆☆☆☆ ✔ Example: "2017-07-07T13:22:32.000-07:00" */
    ProfileDateTime?: ExifDateTime;
    /** ☆☆☆☆ ✔ Example: "sRGB v1.31 (Canon)" */
    ProfileDescription?: string;
    /** ☆☆☆☆ ✔ Example: "Profil générique RVB" */
    ProfileDescriptionML?: string;
    /** ☆☆☆☆ ✔ Example: "acsp" */
    ProfileFileSignature?: string;
    /** ☆☆☆☆ ✔ Examples: [0,"e5bb0e9867bd46cd4bbe446ebd1b7598"] */
    ProfileID?: number | string;
    /** ☆☆☆☆ ✔ Example: "4.0.0" */
    ProfileVersion?: string;
    /** ☆☆☆☆ ✔ Example: "0.60976 0.31113 0.01947" */
    RedMatrixColumn?: string;
    /** ☆☆☆☆ ✔ Example: "(Binary data 8204 bytes, use -b option …" */
    RedTRC?: string;
    /** ☆☆☆☆ ✔ Example: "Perceptual" */
    RenderingIntent?: string;
    /** ☆☆☆☆ ✔ Example: "Cathode Ray Tube Display" */
    Technology?: string;
    /** ☆☆☆☆   Example: "(Binary data 48 bytes, use -b option to…" */
    VideoCardGamma?: string;
    /** ☆☆☆☆ ✔ Example: "Reference Viewing Condition in IEC61966…" */
    ViewingCondDesc?: string;
    /** ☆☆☆☆ ✔ Example: "19.6445 20.3718 16.8089" */
    ViewingCondIlluminant?: string;
    /** ☆☆☆☆ ✔ Example: "D50" */
    ViewingCondIlluminantType?: string;
    /** ☆☆☆☆ ✔ Example: "3.92889 4.07439 3.36179" */
    ViewingCondSurround?: string;
}
export interface IPTCTags {
    /** ☆☆☆☆ ✔ Example: 4 */
    ApplicationRecordVersion?: number;
    /** ☆☆☆☆ ✔ Example: "UTF8" */
    CodedCharacterSet?: string;
    /** ☆☆☆☆   Example: "Dohncha Calmeplz" */
    Contact?: string;
    /** ☆☆☆☆   Example: "Creative Commons Attribution 4.0 Intern…" */
    CopyrightNotice?: string;
    /** ☆☆☆☆   Example: "photo by Jenny McSnapsalot" */
    Credit?: string;
    /** ☆☆☆☆ ✔ Example: "2016-08-12" */
    DigitalCreationDate?: ExifDate;
    /** ☆☆☆☆ ✔ Example: "13:28:50" */
    DigitalCreationTime?: ExifTime;
    /** ☆☆☆☆ ✔ Example: 4 */
    EnvelopeRecordVersion?: number;
    /** ☆☆☆☆ ✔ Examples: [["T-Mobile","myTouch 3G","HTC","Magic","AndroidAuthority.com","MobileBurn MobileBurn.com"],"点像F11"] */
    Keywords?: string[] | string;
    /** ☆☆☆☆ ✔ Example: "digiKam" */
    OriginatingProgram?: string;
    /** ☆☆☆☆ ✔ Example: "4.13.0" */
    ProgramVersion?: string;
}
export interface MPFTags {
    /** ★☆☆☆ ✔ Example: 9697 */
    DependentImage1EntryNumber?: number;
    /** ★☆☆☆ ✔ Example: 960 */
    DependentImage2EntryNumber?: number;
    /** ☆☆☆☆   Example: "(Binary data 99 bytes, use -b option to…" */
    ImageUIDList?: string;
    /** ★☆☆☆ ✔ Example: "0100" */
    MPFVersion?: string;
    /** ☆☆☆☆   Example: "(Binary data 1669333760 bytes, use -b o…" */
    MPImage1?: string;
    /** ☆☆☆☆ ✔ Example: "(Binary data 826278144 bytes, use -b op…" */
    MPImage2?: string;
    /** ☆☆☆☆ ✔ Example: "(Binary data 963518 bytes, use -b optio…" */
    MPImage3?: string;
    /** ★☆☆☆ ✔ Example: "Representative image, Dependent parent …" */
    MPImageFlags?: string;
    /** ★☆☆☆ ✔ Example: "Unknown (4)" */
    MPImageFormat?: string;
    /** ★☆☆☆ ✔ Example: 999325 */
    MPImageLength?: number;
    /** ★☆☆☆ ✔ Example: 9999872 */
    MPImageStart?: number;
    /** ★☆☆☆ ✔ Example: "Undefined" */
    MPImageType?: string;
    /** ★☆☆☆ ✔ Example: 3 */
    NumberOfImages?: number;
    /** ☆☆☆☆   Example: 1 */
    TotalFrames?: number;
}
export interface APP1Tags {
    /** ☆☆☆☆   Example: "59 128 128" */
    AboveColor?: string;
    /** ☆☆☆☆   Example: "29.4 C" */
    AtmosphericTemperature?: string;
    /** ☆☆☆☆   Example: 0.006569 */
    AtmosphericTransAlpha1?: number;
    /** ☆☆☆☆   Example: 0.01262 */
    AtmosphericTransAlpha2?: number;
    /** ☆☆☆☆   Example: 0 */
    AtmosphericTransBeta1?: number;
    /** ☆☆☆☆   Example: 0 */
    AtmosphericTransBeta2?: number;
    /** ☆☆☆☆   Example: 1.9 */
    AtmosphericTransX?: number;
    /** ☆☆☆☆   Example: "60 128 128" */
    BelowColor?: string;
    /** ☆☆☆☆   Example: "Z-CAMERA" */
    CameraModel?: string;
    /** ☆☆☆☆   Examples: ["_______________",1196968] */
    CameraPartNumber?: string | number;
    /** ☆☆☆☆   Examples: [63988888,"*"] */
    CameraSerialNumber?: number | string;
    /** ☆☆☆☆   Example: "9.1.0" */
    CameraSoftware?: string;
    /** ☆☆☆☆   Example: "99726.9 C" */
    CameraTemperatureMaxClip?: string;
    /** ☆☆☆☆   Example: "99726.9 C" */
    CameraTemperatureMaxSaturated?: string;
    /** ☆☆☆☆   Example: "99726.9 C" */
    CameraTemperatureMaxWarn?: string;
    /** ☆☆☆☆   Example: "-60.0 C" */
    CameraTemperatureMinClip?: string;
    /** ☆☆☆☆   Example: "-70.0 C" */
    CameraTemperatureMinSaturated?: string;
    /** ☆☆☆☆   Example: "100.0 C" */
    CameraTemperatureMinWarn?: string;
    /** ☆☆☆☆   Example: "650.0 C" */
    CameraTemperatureRangeMax?: string;
    /** ☆☆☆☆   Example: "100.0 C" */
    CameraTemperatureRangeMin?: string;
    /** ☆☆☆☆   Example: "MTX IR" */
    CreatorSoftware?: string;
    /** ☆☆☆☆   Example: "2013-03-12T16:31:26.000" */
    DateTimeGenerated?: ExifDateTime;
    /** ☆☆☆☆   Example: "(Binary data 74741 bytes, use -b option…" */
    EmbeddedImage?: string;
    /** ☆☆☆☆   Example: 768 */
    EmbeddedImageHeight?: number;
    /** ☆☆☆☆   Example: "PNG" */
    EmbeddedImageType?: string;
    /** ☆☆☆☆   Example: 640 */
    EmbeddedImageWidth?: number;
    /** ☆☆☆☆   Example: "46.1 deg" */
    FieldOfView?: string;
    /** ☆☆☆☆   Example: "NOF" */
    FilterModel?: string;
    /** ☆☆☆☆   Example: "00000000" */
    FilterSerialNumber?: string;
    /** ☆☆☆☆   Example: 9 */
    FrameRate?: number;
    /** ☆☆☆☆   Example: 1 */
    GPSValid?: number;
    /** ☆☆☆☆   Example: "7.4 C" */
    IRWindowTemperature?: string;
    /** ☆☆☆☆   Example: 1 */
    IRWindowTransmission?: number;
    /** ☆☆☆☆   Example: "99 128 128" */
    Isotherm1Color?: string;
    /** ☆☆☆☆   Example: "92 115 209" */
    Isotherm2Color?: string;
    /** ☆☆☆☆   Example: "Location" */
    Label0?: string;
    /** ☆☆☆☆   Example: "Frames" */
    Label1?: string;
    /** ☆☆☆☆   Example: "Type" */
    Label2?: string;
    /** ☆☆☆☆   Example: "Nom load" */
    Label3?: string;
    /** ☆☆☆☆   Example: "Shutter" */
    Label4?: string;
    /** ☆☆☆☆   Example: "Fault" */
    Label5?: string;
    /** ☆☆☆☆   Example: "Recommendation" */
    Label6?: string;
    /** ☆☆☆☆   Examples: ["T197909",1196456] */
    LensPartNumber?: string | number;
    /** ☆☆☆☆   Examples: [1,"Sp2"] */
    Meas1Label?: number | string;
    /** ☆☆☆☆   Example: "80 60" */
    Meas1Params?: string;
    /** ☆☆☆☆   Example: "Spot" */
    Meas1Type?: string;
    /** ☆☆☆☆   Examples: ["Sp1",1] */
    Meas2Label?: string | number;
    /** ☆☆☆☆   Example: "213 160 213 160" */
    Meas2Params?: string;
    /** ☆☆☆☆   Example: "Spot" */
    Meas2Type?: string;
    /** ☆☆☆☆   Examples: [-9,"+9"] */
    OffsetX?: number | string;
    /** ☆☆☆☆   Examples: ["+24",-15] */
    OffsetY?: string | number;
    /** ☆☆☆☆   Example: "67 216 98" */
    OverflowColor?: string;
    /** ☆☆☆☆   Example: "(Binary data 672 bytes, use -b option t…" */
    Palette?: string;
    /** ☆☆☆☆   Example: 224 */
    PaletteColors?: number;
    /** ☆☆☆☆   Example: "iron.pal" */
    PaletteFileName?: string;
    /** ☆☆☆☆   Example: 0 */
    PaletteMethod?: number;
    /** ☆☆☆☆   Example: "Rainbow HC" */
    PaletteName?: string;
    /** ☆☆☆☆   Example: 3 */
    PaletteStretch?: number;
    /** ☆☆☆☆   Example: ".basicImgData.objectParams.emissivity" */
    Param0?: string;
    /** ☆☆☆☆   Example: 64 */
    PiPX1?: number;
    /** ☆☆☆☆   Example: 320 */
    PiPX2?: number;
    /** ☆☆☆☆   Example: 48 */
    PiPY1?: number;
    /** ☆☆☆☆   Example: 90 */
    PiPY2?: number;
    /** ☆☆☆☆   Example: 1546.9 */
    PlanckB?: number;
    /** ☆☆☆☆   Example: 2.5 */
    PlanckF?: number;
    /** ☆☆☆☆   Example: -8056 */
    PlanckO?: number;
    /** ☆☆☆☆   Example: 24583.551 */
    PlanckR1?: number;
    /** ☆☆☆☆   Example: 0.12109976 */
    PlanckR2?: number;
    /** ☆☆☆☆   Example: "(Binary data 87431 bytes, use -b option…" */
    RawThermalImage?: string;
    /** ☆☆☆☆   Example: 90 */
    RawThermalImageHeight?: number;
    /** ☆☆☆☆   Example: "TIFF" */
    RawThermalImageType?: string;
    /** ☆☆☆☆   Example: 80 */
    RawThermalImageWidth?: number;
    /** ☆☆☆☆   Example: 9392 */
    RawValueMedian?: number;
    /** ☆☆☆☆   Example: 993 */
    RawValueRange?: number;
    /** ☆☆☆☆   Example: 2.2125397 */
    Real2IR?: number;
    /** ☆☆☆☆   Example: "26.7 C" */
    ReflectedApparentTemperature?: string;
    /** ☆☆☆☆   Example: "80.0 %" */
    RelativeHumidity?: string;
    /** ☆☆☆☆   Example: "41 110 240" */
    UnderflowColor?: string;
    /** ☆☆☆☆   Example: "asdl;kflkj" */
    Value0?: string;
    /** ☆☆☆☆   Examples: ["Lighting Panel",1] */
    Value1?: string | number;
    /** ☆☆☆☆   Example: "-" */
    Value2?: string;
    /** ☆☆☆☆   Example: 50 */
    Value3?: number;
    /** ☆☆☆☆   Example: 40 */
    Value4?: number;
    /** ☆☆☆☆   Examples: ["(  )",303.439] */
    Value5?: string | number;
    /** ☆☆☆☆   Examples: ["Check load",301.978] */
    Value6?: string | number;
}
export interface MetaTags {
    /** ☆☆☆☆   Example: 1 */
    BorderID?: number;
    /** ☆☆☆☆   Example: 0 */
    BorderLocation?: number;
    /** ☆☆☆☆   Example: "None" */
    BorderName?: string;
    /** ☆☆☆☆   Example: 0 */
    BorderType?: number;
    /** ☆☆☆☆   Example: "1 0 0 0" */
    BordersVersion?: string;
    /** ☆☆☆☆   Example: "KODAK DC5000 ZOOM DIGITAL CAMERA" */
    CameraOwner?: string;
    /** ☆☆☆☆   Example: 1 */
    CaptureConditionsPAR?: number;
    /** ☆☆☆☆   Example: "None" */
    DigitalEffectsName?: string;
    /** ☆☆☆☆   Example: 0 */
    DigitalEffectsType?: number;
    /** ☆☆☆☆   Example: "1 0 0 0" */
    DigitalEffectsVersion?: string;
    /** ☆☆☆☆   Example: 1 */
    EditTagArray?: number;
    /** ☆☆☆☆   Example: 2 */
    FilmGencode?: number;
    /** ☆☆☆☆   Example: 43 */
    FilmProductCode?: number;
    /** ☆☆☆☆   Example: 1 */
    FilmSize?: number;
    /** ☆☆☆☆   Example: 6 */
    ImageSourceEK?: number;
    /** ☆☆☆☆   Example: "0110" */
    MetadataNumber?: string;
    /** ☆☆☆☆   Example: "Version 9" */
    ModelAndVersion?: string;
    /** ☆☆☆☆   Example: 3 */
    WatermarkType?: number;
}
export interface QuickTimeTags {
    /** ☆☆☆☆ ✔ Example: 16 */
    AudioBitsPerSample?: number;
    /** ☆☆☆☆ ✔ Example: 2 */
    AudioChannels?: number;
    /** ☆☆☆☆ ✔ Example: "sowt" */
    AudioFormat?: string;
    /** ☆☆☆☆ ✔ Example: 48000 */
    AudioSampleRate?: number;
    /** ☆☆☆☆ ✔ Example: "Arturo DeImage" */
    Author?: string;
    /** ☆☆☆☆ ✔ Example: "65535 65535 65535" */
    BackgroundColor?: string;
    /** ☆☆☆☆ ✔ Example: 0 */
    ChapterListTrackID?: number;
    /** ☆☆☆☆ ✔ Example: "nclx 9 1 9" */
    ColorRepresentation?: string;
    /** ☆☆☆☆ ✔ Example: 30 */
    ComAndroidCaptureFps?: number;
    /** ☆☆☆☆ ✔ Example: 7.1 */
    ComAndroidVersion?: number;
    /** ☆☆☆☆ ✔ Example: "(Binary data 4 bytes, use -b option to …" */
    ComAndroidVideoTemporal_layers_count?: string;
    /** ☆☆☆☆ ✔ Example: ["qt  "] */
    CompatibleBrands?: string[];
    /** ☆☆☆☆ ✔ Example: "avc1" */
    CompressorID?: string;
    /** ☆☆☆☆ ✔ Example: "\u0015GoPro AVC encoder" */
    CompressorName?: string;
    /** ☆☆☆☆ ✔ Example: "0 s" */
    CurrentTime?: string;
    /** ☆☆☆☆ ✔ Example: "Helvetica" */
    FontName?: string;
    /** ☆☆☆☆ ✔ Example: "45.5753 -122.1279" */
    GPSCoordinates?: string;
    /** ☆☆☆☆ ✔ Example: 0 */
    GenBalance?: number;
    /** ☆☆☆☆ ✔ Example: "0 0 0" */
    GenFlags?: string;
    /** ☆☆☆☆ ✔ Example: "ditherCopy" */
    GenGraphicsMode?: string;
    /** ☆☆☆☆ ✔ Example: 0 */
    GenMediaVersion?: number;
    /** ☆☆☆☆ ✔ Example: "32768 32768 32768" */
    GenOpColor?: string;
    /** ☆☆☆☆ ✔ Example: "srcCopy" */
    GraphicsMode?: string;
    /** ☆☆☆☆ ✔ Example: "Data Handler" */
    HandlerClass?: string;
    /** ☆☆☆☆ ✔ Example: "SoundHandle" */
    HandlerDescription?: string;
    /** ☆☆☆☆ ✔ Example: "Audio Track" */
    HandlerType?: string;
    /** ☆☆☆☆ ✔ Example: "MP4 v2 [ISO 14496-14]" */
    MajorBrand?: string;
    /** ☆☆☆☆ ✔ Example: "1 0 0 0 1 0 0 0 1" */
    MatrixStructure?: string;
    /** ☆☆☆☆ ✔ Example: "2017-02-12T10:28:20.000" */
    MediaCreateDate?: ExifDateTime;
    /** ☆☆☆☆ ✔ Example: 9.52 */
    MediaDuration?: number;
    /** ☆☆☆☆ ✔ Example: 0 */
    MediaHeaderVersion?: number;
    /** ☆☆☆☆ ✔ Example: "jpn" */
    MediaLanguageCode?: string;
    /** ☆☆☆☆ ✔ Example: "2017-02-12T10:28:20.000" */
    MediaModifyDate?: ExifDateTime;
    /** ☆☆☆☆ ✔ Example: 60000 */
    MediaTimeScale?: number;
    /** ☆☆☆☆ ✔ Example: "2011.7.0" */
    MinorVersion?: string;
    /** ☆☆☆☆ ✔ Example: 98304 */
    MovieDataOffset?: number;
    /** ☆☆☆☆ ✔ Example: 9790496 */
    MovieDataSize?: number;
    /** ☆☆☆☆ ✔ Example: 0 */
    MovieHeaderVersion?: number;
    /** ☆☆☆☆ ✔ Example: 4 */
    NextTrackID?: number;
    /** ☆☆☆☆ ✔ Example: "0 0 0" */
    OpColor?: string;
    /** ☆☆☆☆ ✔ Example: "tmcd" */
    OtherFormat?: string;
    /** ☆☆☆☆ ✔ Example: "0 s" */
    PosterTime?: string;
    /** ☆☆☆☆ ✔ Example: 1 */
    PreferredRate?: number;
    /** ☆☆☆☆ ✔ Example: "100.00%" */
    PreferredVolume?: string;
    /** ☆☆☆☆ ✔ Example: 0 */
    PreviewDuration?: number;
    /** ☆☆☆☆ ✔ Example: "0 s" */
    PreviewTime?: string;
    /** ☆☆☆☆ ✔ Example: 0 */
    SelectionDuration?: number;
    /** ☆☆☆☆ ✔ Example: "0 s" */
    SelectionTime?: string;
    /** ☆☆☆☆ ✔ Example: "43333139313032343731363032300000" */
    SerialNumberHash?: string;
    /** ☆☆☆☆ ✔ Example: 720 */
    SourceImageHeight?: number;
    /** ☆☆☆☆ ✔ Example: 3840 */
    SourceImageWidth?: number;
    /** ☆☆☆☆ ✔ Example: "0 0 0" */
    TextColor?: string;
    /** ☆☆☆☆ ✔ Example: "Plain" */
    TextFace?: string;
    /** ☆☆☆☆ ✔ Example: "Unknown (21)" */
    TextFont?: string;
    /** ☆☆☆☆ ✔ Example: 10 */
    TextSize?: number;
    /** ☆☆☆☆ ✔ Example: 3 */
    TimeCode?: number;
    /** ☆☆☆☆ ✔ Example: 90000 */
    TimeScale?: number;
    /** ☆☆☆☆ ✔ Example: "2017-02-12T10:28:20.000" */
    TrackCreateDate?: ExifDateTime;
    /** ☆☆☆☆ ✔ Example: 9.5095 */
    TrackDuration?: number;
    /** ☆☆☆☆ ✔ Example: 0 */
    TrackHeaderVersion?: number;
    /** ☆☆☆☆ ✔ Example: 1 */
    TrackID?: number;
    /** ☆☆☆☆ ✔ Example: 0 */
    TrackLayer?: number;
    /** ☆☆☆☆ ✔ Example: "2017-02-12T10:28:20.000" */
    TrackModifyDate?: ExifDateTime;
    /** ☆☆☆☆ ✔ Example: "0.00%" */
    TrackVolume?: string;
    /** ☆☆☆☆ ✔ Example: 59.94 */
    VideoFrameRate?: number;
}
export interface RIFFTags {
    /** ☆☆☆☆ ✔ Example: 285154 */
    AudioSampleCount?: number;
    /** ☆☆☆☆ ✔ Example: 11024 */
    AvgBytesPerSec?: number;
    /** ☆☆☆☆ ✔ Example: "Microsoft PCM" */
    Encoding?: string;
    /** ☆☆☆☆ ✔ Example: 388 */
    FrameCount?: number;
    /** ☆☆☆☆ ✔ Example: "467.4 kB/s" */
    MaxDataRate?: string;
    /** ☆☆☆☆ ✔ Example: 1 */
    NumChannels?: number;
    /** ☆☆☆☆ ✔ Example: 11024 */
    SampleRate?: number;
    /** ☆☆☆☆ ✔ Example: "Variable" */
    SampleSize?: string;
    /** ☆☆☆☆ ✔ Example: 2 */
    StreamCount?: number;
    /** ☆☆☆☆ ✔ Example: "mjpg" */
    VideoCodec?: string;
    /** ☆☆☆☆ ✔ Example: 388 */
    VideoFrameCount?: number;
}
export interface RAFTags {
    /** ☆☆☆☆ ✔ Example: "294.2 0.1 0.2 0.3 0.4 0.5 0.6 0.7 0.8 0…" */
    ChromaticAberrationParams?: string;
    /** ☆☆☆☆ ✔ Example: "12 12 12 12" */
    FujiLayout?: string;
    /** ☆☆☆☆ ✔ Example: "267.4545455 0 0.1 0.2 0.3 0.4 0.5 0.6 0…" */
    GeometricDistortionParams?: string;
    /** ☆☆☆☆ ✔ Example: -1.7 */
    RawExposureBias?: number;
    /** ☆☆☆☆ ✔ Example: 3296 */
    RawImageFullHeight?: number;
    /** ☆☆☆☆ ✔ Example: "5120x3288" */
    RawImageFullSize?: string;
    /** ☆☆☆☆ ✔ Example: 5120 */
    RawImageFullWidth?: number;
    /** ☆☆☆☆ ✔ Example: "267.4545455 0 0.1 0.2 0.3 0.4 0.5 0.6 0…" */
    VignettingParams?: string;
    /** ☆☆☆☆ ✔ Example: "302 551 531" */
    WB_GRBLevels?: string;
    /** ☆☆☆☆ ✔ Example: "302 549 531" */
    WB_GRBLevelsAuto?: string;
    /** ☆☆☆☆ ✔ Example: "302 365 690 17 302 631 412 21" */
    WB_GRBLevelsStandard?: string;
    /** ☆☆☆☆ ✔ Example: "GRBGBR BGGRGG RGGBGG GBRGRB RGGBGG BGGR…" */
    XTransLayout?: string;
}
export interface PanasonicRawTags {
    /** ☆☆☆☆ ✔ Example: 0.015594482 */
    DistortionParam02?: number;
    /** ☆☆☆☆ ✔ Example: 0.0054016113 */
    DistortionParam04?: number;
    /** ☆☆☆☆ ✔ Example: 0.09475708 */
    DistortionParam08?: number;
    /** ☆☆☆☆ ✔ Example: 0.019195557 */
    DistortionParam09?: number;
    /** ☆☆☆☆ ✔ Example: 0 */
    DistortionParam11?: number;
    /** ☆☆☆☆ ✔ Example: 1 */
    DistortionScale?: number;
    /** ☆☆☆☆ ✔ Example: 7 */
    NumWBEntries?: number;
    /** ☆☆☆☆ ✔ Example: "Fine Weather" */
    WBType1?: string;
    /** ☆☆☆☆ ✔ Example: "Cloudy" */
    WBType2?: string;
    /** ☆☆☆☆ ✔ Example: "Shade" */
    WBType3?: string;
    /** ☆☆☆☆ ✔ Example: "Tungsten (Incandescent)" */
    WBType4?: string;
    /** ☆☆☆☆ ✔ Example: "Flash" */
    WBType5?: string;
    /** ☆☆☆☆ ✔ Example: "D55" */
    WBType6?: string;
    /** ☆☆☆☆ ✔ Example: "ISO Studio Tungsten" */
    WBType7?: string;
    /** ☆☆☆☆ ✔ Example: "662 256 413" */
    WB_RGBLevels1?: string;
    /** ☆☆☆☆ ✔ Example: "705 256 387" */
    WB_RGBLevels2?: string;
    /** ☆☆☆☆ ✔ Example: "767 256 366" */
    WB_RGBLevels3?: string;
    /** ☆☆☆☆ ✔ Example: "441 256 620" */
    WB_RGBLevels4?: string;
    /** ☆☆☆☆ ✔ Example: "783 256 360" */
    WB_RGBLevels5?: string;
    /** ☆☆☆☆ ✔ Example: "621 256 421" */
    WB_RGBLevels6?: string;
    /** ☆☆☆☆ ✔ Example: "441 256 620" */
    WB_RGBLevels7?: string;
}
export interface APP0Tags {
    /** ☆☆☆☆   Example: 14797 */
    OcadRevision?: number;
}
export interface APP14Tags {
    /** ☆☆☆☆   Example: "[14], Encoded with Blend=1 downsampling" */
    APP14Flags0?: string;
    /** ☆☆☆☆   Example: "(none)" */
    APP14Flags1?: string;
    /** ☆☆☆☆   Example: "YCbCr" */
    ColorTransform?: string;
    /** ☆☆☆☆   Example: 100 */
    DCTEncodeVersion?: number;
}
export interface Tags extends EXIFTags, ExifToolTags, FileTags, MakerNotesTags, CompositeTags, PrintIMTags, JFIFTags, APP12Tags, XMPTags, PhotoshopTags, FlashPixTags, ICC_ProfileTags, IPTCTags, MPFTags, APP1Tags, MetaTags, QuickTimeTags, RIFFTags, RAFTags, PanasonicRawTags, APP0Tags, APP14Tags {
    errors?: string[];
    Error?: string;
    Warning?: string;
    SourceFile?: string;
}