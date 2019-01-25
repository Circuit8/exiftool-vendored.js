/**
 * If the vendored ExifTool version is different from
 * the current latest version, download and extract
 * into the appropriate sibling directories, and update
 * their package.json.
 *
 * Running tests, committing to git, and publishing the npm are
 * manual subsequent steps.
 */
export declare class Checksums {
    /**
     * @param checksums is a newline-separated text file with the following format:
     * $HASHTYPE($FILENAME) = $HASH
     *
     * We only care about SHA1, so we're pulling just those out.
     */
    private static readonly regex;
    private readonly store;
    constructor(checksums: string);
    static get(): Promise<Checksums>;
    sha1(filename: string): string;
}
