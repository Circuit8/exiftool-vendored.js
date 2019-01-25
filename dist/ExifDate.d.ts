import { DateTime } from "luxon";
import { Maybe } from "./Maybe";
/**
 * Encodes an ExifDate
 */
export declare class ExifDate {
    readonly year: number;
    readonly month: number;
    readonly day: number;
    static fromISO(text: string): Maybe<ExifDate>;
    static fromEXIF(text: string): Maybe<ExifDate>;
    static fromDateTime(dt: DateTime): Maybe<ExifDate>;
    constructor(year: number, // full year (probably 2019-ish, but maybe Japanese 30-ish). See https://ericasadun.com/2018/12/25/iso-8601-yyyy-yyyy-and-why-your-year-may-be-wrong/
    month: number, // 1-12, (no crazy 0-11 nonsense from Date!)
    day: number);
    toDate(): Date;
    toISOString(): string;
    toString(): string;
}
