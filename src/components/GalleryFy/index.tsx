import { useEffect, useRef, useState } from "react";

import { Navigation } from "@components/Navigation";
import { ControlBar } from "@components/ControlBar";
import { Draggable } from "@components/Draggable";
import { Thumbs } from "@components/Thumbs";

import { useGallery } from "@hooks/useGallery";
import { useControl } from "@hooks/useControl";

import { WrapperContainer, Container } from "./styles";
import { GalleryFyProps } from "./types";

/**
 *
 * @param images array from URL's images or path assets image
 * @param selectedImage image index default
 * @param open control open/close gallery
 * @param handleClose function to close gallery
 * @param showThumbs show thumbs in the gallery
 * @returns
 */

const GalleryFy: React.FunctionComponent<GalleryFyProps> = ({
  images = [],
  selectedImage,
  open = false,
  showThumbs = true,
  handleClose = () => {},
}: GalleryFyProps) => {
  const [positionStart, setPositionStart] = useState({ x: 0, y: 0 });
  const wrapperImage = useRef<HTMLDivElement | null>(null);
  const wrapperContainer = useRef<HTMLDivElement | null>(null);
  const imageRef = useRef<HTMLImageElement | null>(null);

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

  const { handleRotate, handleZoom, handleReset } = useControl(
    wrapperImage,
    wrapperContainer
  );

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  function handleCloseGallery() {
    handleClose();
    handleReset();
    setPositionStart({ x: 0, y: 0 });
  }

  return (
    <WrapperContainer open={open}>
      <ControlBar
        amount={amountImages}
        current={currentImage}
        handleClose={handleCloseGallery}
        handleZoom={handleZoom}
        handleRotate={(direction) => handleRotate(direction)}
      />

      <Container ref={wrapperContainer}>
        <Draggable positionStart={positionStart}>
          <div ref={wrapperImage}>
            <img src={images[currentImage]} ref={imageRef} draggable="false" />
          </div>
        </Draggable>

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

export default GalleryFy;
