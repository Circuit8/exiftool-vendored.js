import { Maybe } from "./Maybe";
export declare function blank(s: Maybe<string>): boolean;
export declare function notBlank(s: Maybe<string>): s is string;
export declare function toS(s: Maybe<any>): string;
export declare function leftPad(i: any, minLen: number, padChar: "0" | " "): string;
export declare function pad2(...numbers: number[]): string[];
export declare function pad3(...numbers: number[]): string[];
export declare function stripPrefix(s: string, prefix: string): string;
/**
 * This is a basic HTML entities encoder (so we don't have to pull in another
 * npm dependency). No named entries are used, only decimal char values.
 */
export declare function htmlEncode(s: string): string;
