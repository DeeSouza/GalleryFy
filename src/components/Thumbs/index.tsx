import React from "react";

import { ThumbsProps } from "./types";
import { Container, ThumbImage } from "./styles";

export const Thumbs: React.FunctionComponent<ThumbsProps> = ({
  images,
  currentImage,
  handleChange,
}: ThumbsProps) => {
  return (
    <Container>
      {React.Children.toArray(
        images.map((image, index: number) => (
          <ThumbImage
            onClick={() => handleChange(index)}
            $image={image}
            $actived={index === currentImage}
          />
        ))
      )}
    </Container>
  );
};
