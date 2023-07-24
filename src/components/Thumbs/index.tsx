import React from "react";

import { Container, ThumbImage } from "./styles";
import { ThumbsProps } from "./types";

export const Thumbs = ({ images, handleChange }: ThumbsProps) => {
  return (
    <Container>
      {React.Children.toArray(
        images.map((image, index: number) => (
          <ThumbImage image={image} onClick={() => handleChange(index)} />
        ))
      )}
    </Container>
  );
};
