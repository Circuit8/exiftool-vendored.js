import { ExifToolTask } from "./ExifToolTask";
export declare class BinaryExtractionTask extends ExifToolTask<void> {
    private constructor();
    static for(tagname: string, imgSrc: string, imgDest: string): BinaryExtractionTask;
    parse(data: string): void;
}
