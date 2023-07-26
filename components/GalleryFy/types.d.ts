export interface GalleryFyProps {
    images: string[];
    open?: boolean;
    selectedImage?: number;
    showThumbs?: boolean;
    handleClose(): void;
}
