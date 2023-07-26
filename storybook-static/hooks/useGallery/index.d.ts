import { Props } from "./types";
export declare const useGallery: ({ images, selectedImage }: Props) => {
    isFirstImage: boolean;
    isLastImage: boolean;
    handleChange: (selectedImage: number) => void;
    handleChangeNext: () => void;
    handleChangePrev: () => void;
    currentImage: number;
    amountImages: number;
};
