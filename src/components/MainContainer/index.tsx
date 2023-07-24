import { Navigation } from "../Navigation";

import { Thumbs } from "../Thumbs";
import { useGallery } from "../../hooks/useGallery";

import { WrapperContainer, Container } from "./styles";
import { MainContainerProps } from "./types";
import { ControlBar } from "../ControlBar";

export const MainContainer = ({ images }: MainContainerProps) => {
  const {
    isFirstImage,
    isLastImage,
    handleChange,
    handleChangeNext,
    handleChangePrev,
    state,
  } = useGallery(images);

  const amountImages = images.length;
  const indexCurrent = state.indexImage + 1;

  return (
    <WrapperContainer>
      <ControlBar amount={amountImages} current={indexCurrent} />

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
