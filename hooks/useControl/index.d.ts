import { RefObject } from "react";
import { ZoomKind } from "./types";
export declare const useControl: (wrapperImage: RefObject<HTMLDivElement>, wrapperElement: RefObject<HTMLDivElement>) => {
    handleRotate: (direction: string) => void;
    handleZoom: (type: ZoomKind) => void;
    handleReset: () => void;
};
