import React from "react";
import { Navigation } from "../Navigation";

import { WrapperContainer, Container, Thumbs, ThumbImage } from "./styles";
import { MainContainerProps } from "./types";
import { useGallery } from "../../hooks/useGallery";

const MainContainer = ({ images }: MainContainerProps) => {
  const {
    checkFirstImage,
    checkLastImage,
    handleChange,
    handleChangeNext,
    handleChangePrev,
    state,
  } = useGallery(images);

  return (
    <WrapperContainer>
      <Container>
        <img src={images[state.indexImage]} alt="" />

        <Navigation.Root>
          {!checkFirstImage && <Navigation.Left handle={handleChangePrev} />}
          {!checkLastImage && <Navigation.Right handle={handleChangeNext} />}
        </Navigation.Root>
      </Container>

      <Thumbs>
        {React.Children.toArray(
          images.map((image, index) => (
            <ThumbImage image={image} onClick={() => handleChange(index)} />
          ))
        )}
      </Thumbs>
    </WrapperContainer>
  );
};

export { MainContainer };
