import { ExifToolTask } from "./ExifToolTask";
import { Tags } from "./Tags";
export declare class ReadTask extends ExifToolTask<Tags> {
    readonly sourceFile: string;
    readonly args: string[];
    private readonly degroup;
    /** May have keys that are group-prefixed */
    private _raw;
    /** Always has non-group-prefixed keys */
    private _tags;
    private readonly tags;
    private lat?;
    private lon?;
    private invalidLatLon;
    private tz?;
    private constructor();
    static for(filename: string, numericTags: string[], optionalArgs?: string[]): ReadTask;
    toString(): string;
    protected parse(data: string, err?: Error): Tags;
    private tagName;
    private parseTags;
    private latlon;
    private extractLatLon;
    private extractTzOffset;
    private parseTag;
}
