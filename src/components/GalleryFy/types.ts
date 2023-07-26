export interface GalleryFyProps {
  images: string[];
  open?: boolean;
  selectedImage?: number;
  handleClose(): void;
  showThumbs?: boolean;
}
