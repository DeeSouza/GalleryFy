export interface DataSource {
    src: string;
    type: string;
}
export interface GalleryFyProps {
    dataSource: string[];
    open?: boolean;
    startIn?: number;
    showThumbs?: boolean;
    handleClose(): void;
    positionPlacement?: "top" | "bottom";
}
export interface KeyHandlers {
    [key: string]: () => void;
}
