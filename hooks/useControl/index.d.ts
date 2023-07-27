import { RefObject } from "react";
import { Direction, ZoomKind } from "./types";
export declare const useControl: (wrapperImage: RefObject<HTMLDivElement>, wrapperElement: RefObject<HTMLDivElement>) => {
    handleRotate: (direction: Direction) => void;
    handleZoom: (type: ZoomKind) => void;
    handleReset: () => void;
};
