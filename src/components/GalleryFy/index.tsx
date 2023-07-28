import { useEffect, useRef, useState } from "react";

import { Navigation } from "@components/Navigation";
import { ControlBar } from "@components/ControlBar";
import { Draggable } from "@components/Draggable";
import { Thumbs } from "@components/Thumbs";
import { Loading } from "@components/Loading";

import { useGallery } from "@hooks/useGallery";
import { useControl } from "@hooks/useControl";

import { WrapperContainer, Container, ImageContainer } from "./styles";
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
  const [loaded, setLoaded] = useState<boolean>(false);
  const wrapperImage = useRef<HTMLDivElement | null>(null);
  const wrapperContainer = useRef<HTMLDivElement | null>(null);
  const imageRef = useRef<HTMLImageElement | null>(null);

  const {
    isFirstIndex,
    isLastIndex,
    handleChange,
    handleChangeNext,
    handleChangePrev,
    current,
    amountData,
  } = useGallery({
    dataSource,
    startIn,
  });

  const { handleRotate, handleZoom, handleReset } = useControl(
    wrapperImage,
    wrapperContainer
  );

  function handleCloseGallery() {
    handleClose();
    handleReset();
  }

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  if (!dataSource.length) {
    return;
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
        {!loaded && <Loading />}

        {dataSource[current].type === "pdf" ? (
          <iframe
            src={dataSource[current].src}
            onLoad={() => setLoaded(true)}
          />
        ) : (
          <Draggable>
            <div ref={wrapperImage}>
              <ImageContainer
                src={dataSource[current].src}
                ref={imageRef}
                draggable="false"
                onLoad={() => setLoaded(true)}
                $loaded={loaded}
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
          dataSource={dataSource}
          handleChange={handleChange}
          currentImage={current}
        />
      )}
    </WrapperContainer>
  );
};

export default GalleryFy;
