import { MaybeNull } from "./Maybe";
export declare function compact<T>(array: MaybeNull<T>[]): T[];
export declare function times<T>(n: number, f: ((idx: number) => T)): T[];
/**
 * Remove all elements from the given array that return false from the given
 * predicate `filter`.
 */
export declare function filterInPlace<T>(arr: T[], filter: (t: T) => boolean): T[];
export declare function uniq<T>(arr: T[]): T[];