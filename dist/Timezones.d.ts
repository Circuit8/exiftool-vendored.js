import { Maybe } from "./Maybe";
/**
 * Returns a "zone name" (used by `luxon`) that encodes the given offset.
 */
export declare function offsetMinutesToZoneName(offsetMinutes: Maybe<number>): Maybe<string>;
export declare const MaxTzOffsetHours = 14;
export declare function reasonableTzOffsetMinutes(tzOffsetMinutes: Maybe<number>): boolean;
/**
 * Parse a timezone offset and return the offset minutes
 */
export declare function extractOffset(tz: Maybe<string>): Maybe<string>;
export declare function extractTzOffsetFromTags(t: {
    TimeZone?: string;
    OffsetTime?: string;
    /** time zone for DateTimeOriginal, "-08:00" */
    OffsetTimeOriginal?: string;
    /** time zone for CreateDate, "-08:00" */
    OffsetTimeDigitized?: string;
    /**
     * 1 or 2 values: 1. The time zone offset of DateTimeOriginal from GMT in
     * hours, 2. If present, the time zone offset of ModifyDate
     */
    TimeZoneOffset?: number | number[] | string;
}): Maybe<string>;
