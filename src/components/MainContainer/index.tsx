import { Navigation } from "../Navigation";

import { Thumbs } from "../Thumbs";
import { useGallery } from "../../hooks/useGallery";

import { WrapperContainer, Container } from "./styles";
import { MainContainerProps } from "./types";

export const MainContainer = ({ images }: MainContainerProps) => {
  const {
    isFirstImage,
    isLastImage,
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
          {!isFirstImage && <Navigation.Left handle={handleChangePrev} />}
          {!isLastImage && <Navigation.Right handle={handleChangeNext} />}
        </Navigation.Root>
      </Container>

      <Thumbs images={images} handleChange={handleChange} />
    </WrapperContainer>
  );
};
