/// <reference types="node" />
import * as _path from "path";
import { Maybe } from "../Maybe";
import { Checksums } from "./checksums";
export declare class Enclosure {
    readonly url: string;
    readonly path: _path.ParsedPath;
    readonly sha1: string;
    readonly version: string;
    private static readonly regex;
    constructor(url: string, path: _path.ParsedPath, sha1: string, version: string);
    static parsedPath(url: string): Maybe<_path.ParsedPath>;
    static versionFromParsedPath(parsedPath: _path.ParsedPath): Maybe<string>;
    static fromNode(enclosureNode: Element, checksums: Checksums): Maybe<Enclosure>;
    static get(): Promise<Enclosure[]>;
    static parseBody(body: string, checksums: Checksums): Enclosure[];
}
