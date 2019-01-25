import "source-map-support/register";
export { expect } from "chai";
export declare const pfs: any;
export declare const ptmp: any;
export declare const testDir: string;
/**
 * Copy a test image to a tmp directory and return the path
 */
export declare function testImg(name?: string): Promise<string>;
