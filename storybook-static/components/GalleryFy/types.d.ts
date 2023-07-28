export interface DataSource {
    src: string;
    type: string;
}
export interface GalleryFyProps {
    dataSource: DataSource[];
    open?: boolean;
    startIn?: number;
    showThumbs?: boolean;
    handleClose(): void;
}
