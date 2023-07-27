export interface DataSource {
  src: string;
  ext: string;
  iframe: boolean;
}

export interface ThumbsProps {
  dataSource: DataSource[];
  handleChange(index: number): void;
  currentImage: number;
}
