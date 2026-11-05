export interface DataSource {
  src: string;
  title?: string;
  type?: string;
}

export interface Thumb {
  src: string;
  title?: string;
  type: string;
}

export interface GalleryFyProps {
  dataSource: DataSource[];
  open?: boolean;
  startIn?: number;
  showThumbs?: boolean;
  positionPlacement?: "top" | "bottom";
  showTitle?: boolean;
  fullWidth?: boolean;
  isDownload?: boolean;
  closeOnOverlay?: boolean;
  handleClose(): void;
}

export interface KeyHandlers {
  [key: string]: () => void;
}
