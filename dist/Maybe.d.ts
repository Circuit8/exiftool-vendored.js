export declare type Maybe<T> = T | undefined;
export declare type MaybeNull<T> = Maybe<T> | null;
export declare function map<T, U>(maybeT: MaybeNull<T>, f: (t: T) => U): Maybe<U>;
export declare function first<T, U>(iter: Iterable<Maybe<T>>, f: (t: T) => Maybe<U>): Maybe<U>;
