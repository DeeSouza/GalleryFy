import { useEffect, useRef } from "react";

import { Navigation } from "../Navigation";
import { ControlBar } from "../ControlBar";
import { Thumbs } from "../Thumbs";

import { useGallery } from "../../hooks/useGallery";
import { useControl } from "../../hooks/useControl";

import { WrapperContainer, Container } from "./styles";
import { MainContainerProps } from "./types";

/**
 *
 * @param images array from URL's images
 * @param selectedImage image index default
 * @param open control open/close gallery
 * @param handleClose function to close gallery
 * @returns
 */

export const MainContainer = ({
  images,
  selectedImage,
  open = false,
  showThumbs = true,
  handleClose = () => {},
}: MainContainerProps) => {
  const mainImageRef = useRef<HTMLDivElement | null>(null);
  const wrapperRef = useRef<HTMLDivElement | null>(null);

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

  const { handleRotate } = useControl(mainImageRef, wrapperRef);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  return (
    <WrapperContainer open={open}>
      <ControlBar
        amount={amountImages}
        current={currentImage}
        handleClose={handleClose}
        handleRotate={(direction) => handleRotate(direction)}
      />

      <Container ref={wrapperRef}>
        <div ref={mainImageRef}>
          <img src={images[currentImage]} />
        </div>

        <Navigation.Root>
          {!isFirstImage && <Navigation.Left handle={handleChangePrev} />}
          {!isLastImage && <Navigation.Right handle={handleChangeNext} />}
        </Navigation.Root>
      </Container>

      {showThumbs && (
        <Thumbs
          images={images}
          handleChange={handleChange}
          currentImage={currentImage}
        />
      )}
    </WrapperContainer>
  );
};
