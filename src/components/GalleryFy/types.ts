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
  handleClose(): void;
  positionPlacement?: "top" | "bottom";
  showTitle?: boolean;
  fullWidth?: boolean;
}

export interface KeyHandlers {
  [key: string]: () => void;
}
