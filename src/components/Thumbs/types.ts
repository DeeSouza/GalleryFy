import { Thumb } from "@components/GalleryFy/types";

export interface ThumbsProps {
  dataSource: Thumb[];
  handleChange(index: number): void;
  currentImage: number;
}
