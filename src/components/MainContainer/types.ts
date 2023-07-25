export interface MainContainerProps {
  images: string[];
  open?: boolean;
  selectedImage?: number;
  handleClose(): void;
  showThumbs?: boolean;
}
