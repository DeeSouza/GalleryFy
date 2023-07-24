import { Navigation } from "../Navigation";
import { Thumbs } from "../Thumbs";
import { ControlBar } from "../ControlBar";

import { useGallery } from "../../hooks/useGallery";
import { WrapperContainer, Container } from "./styles";
import { MainContainerProps } from "./types";

export const MainContainer = ({
  images,
  selectedImage,
  open = false,
  handleClose = () => {},
}: MainContainerProps) => {
  const {
    isFirstImage,
    isLastImage,
    handleChange,
    handleChangeNext,
    handleChangePrev,
    currentImage,
    amountImages,
  } = useGallery({
    images,
    selectedImage,
  });

  return (
    <WrapperContainer open={open}>
      <ControlBar
        amount={amountImages}
        current={currentImage}
        handleClose={handleClose}
      />

      <Container>
        <img src={images[currentImage]} />

        <Navigation.Root>
          {!isFirstImage && <Navigation.Left handle={handleChangePrev} />}
          {!isLastImage && <Navigation.Right handle={handleChangeNext} />}
        </Navigation.Root>
      </Container>

      <Thumbs images={images} handleChange={handleChange} />
    </WrapperContainer>
  );
};
