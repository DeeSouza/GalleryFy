import { useEffect, useRef } from "react";

import { formatDataSource } from "@utils/gallery";

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
 * @param dataSource array from URL's files or path assets files
 * @param startIn file index default
 * @param open control open/close gallery
 * @param handleClose function to close gallery
 * @param showThumbs show thumbs in the gallery
 * @returns
 */

const GalleryFy: React.FunctionComponent<GalleryFyProps> = ({
  dataSource = [],
  startIn,
  open = false,
  showThumbs = true,
  handleClose = () => {},
}: GalleryFyProps) => {
  const wrapperImage = useRef<HTMLDivElement | null>(null);
  const wrapperContainer = useRef<HTMLDivElement | null>(null);
  const imageRef = useRef<HTMLImageElement | null>(null);
  const formattedDataSource = formatDataSource(dataSource);

  const {
    isFirstIndex,
    isLastIndex,
    handleChange,
    handleChangeNext,
    handleChangePrev,
    current,
    amountData,
  } = useGallery({
    dataSource: formattedDataSource,
    startIn,
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
  }

  return (
    <WrapperContainer $open={open}>
      <ControlBar
        amount={amountData}
        current={current}
        handleClose={handleCloseGallery}
        handleZoom={handleZoom}
        handleRotate={(direction) => handleRotate(direction)}
      />

      <Container ref={wrapperContainer}>
        {formattedDataSource[current].iframe ? (
          <iframe src={formattedDataSource[current].src} />
        ) : (
          <Draggable>
            <div ref={wrapperImage}>
              <img
                src={formattedDataSource[current].src}
                ref={imageRef}
                draggable="false"
              />
            </div>
          </Draggable>
        )}

        <Navigation.Root>
          {!isFirstIndex && <Navigation.Left handle={handleChangePrev} />}
          {!isLastIndex && <Navigation.Right handle={handleChangeNext} />}
        </Navigation.Root>
      </Container>

      {showThumbs && (
        <Thumbs
          dataSource={formattedDataSource}
          handleChange={handleChange}
          currentImage={current}
        />
      )}
    </WrapperContainer>
  );
};

export default GalleryFy;
