import { DateTime } from "luxon";
import { Maybe } from "./Maybe";
/**
 * Encodes an ExifTime (which may not have a timezone offset)
 */
export declare class ExifTime {
    readonly hour: number;
    readonly minute: number;
    readonly second: number;
    readonly millisecond?: number | undefined;
    static fromEXIF(text: string): Maybe<ExifTime>;
    static fromDateTime(dt: DateTime): Maybe<ExifTime>;
    constructor(hour: number, minute: number, second: number, millisecond?: number | undefined);
    readonly millis: number | undefined;
    toISOString(): string;
    toString(): string;
}