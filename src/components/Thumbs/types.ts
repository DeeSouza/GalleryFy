import { DataSource } from "@components/GalleryFy/types";

export interface ThumbsProps {
  dataSource: DataSource[];
  handleChange(index: number): void;
  currentImage: number;
}
