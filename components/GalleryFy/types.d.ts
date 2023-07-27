export interface GalleryFyProps {
    dataSource: string[];
    open?: boolean;
    startIn?: number;
    showThumbs?: boolean;
    handleClose(): void;
}
