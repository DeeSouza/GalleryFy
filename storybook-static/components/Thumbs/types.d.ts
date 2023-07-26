export interface ThumbsProps {
    images: string[];
    handleChange(index: number): void;
    currentImage: number;
}
