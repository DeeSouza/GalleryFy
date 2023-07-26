import React from "react";

import { ThumbsProps } from "./types";
import { Container, ThumbImage } from "./styles";

export const Thumbs = ({ images, currentImage, handleChange }: ThumbsProps) => {
  return (
    <Container>
      {React.Children.toArray(
        images.map((image, index: number) => (
          <ThumbImage
            image={image}
            onClick={() => handleChange(index)}
            $actived={index === currentImage}
          />
        ))
      )}
    </Container>
  );
};
