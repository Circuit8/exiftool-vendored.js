import { DateTime, ISOTimeOptions } from "luxon";
import { Maybe } from "./Maybe";
/**
 * Encodes an ExifDateTime with an optional tz offset in minutes.
 */
export declare class ExifDateTime {
    readonly year: number;
    readonly month: number;
    readonly day: number;
    readonly hour: number;
    readonly minute: number;
    readonly second: number;
    readonly millisecond?: number | undefined;
    readonly tzoffsetMinutes?: number | undefined;
    static fromISO(iso: string, defaultZone?: Maybe<string>): Maybe<ExifDateTime>;
    /**
     * Try to parse a date-time string from EXIF. If there is not both a date and
     * a time component, returns `undefined`.
     *
     * @param text from EXIF metadata
     * @param defaultZone a "zone name" which may be IANA, like
     * "America/Los_Angeles", or an offset, like "UTC-3". See
     * `offsetMinutesToZoneName`.
     */
    static fromEXIF(text: string, defaultZone?: Maybe<string>): Maybe<ExifDateTime>;
    static fromDateTime(dt: DateTime): Maybe<ExifDateTime>;
    constructor(year: number, month: number, day: number, hour: number, minute: number, second: number, millisecond?: number | undefined, tzoffsetMinutes?: number | undefined);
    readonly millis: number | undefined;
    readonly zone: string | undefined;
    toDateTime(): DateTime;
    toDate(): Date;
    toISOString(options?: ISOTimeOptions): string;
    toString(): string;
}
