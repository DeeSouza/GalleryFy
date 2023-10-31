import { useEffect, useRef, useState } from "react";

import { Navigation } from "@components/Navigation";
import { ControlBar } from "@components/ControlBar";
import { Draggable } from "@components/Draggable";
import { Thumbs } from "@components/Thumbs";
import { Loading } from "@components/Loading";

import { useGallery } from "@hooks/useGallery";
import { useControl } from "@hooks/useControl";

import {
  WrapperContainer,
  Container,
  ImageContainer,
  IframeContainer,
} from "./styles";
import { GalleryFyProps } from "./types";

/**
 *
 * @param dataSource array from URL's files or path assets files
 * @param startIn file index default
 * @param open control open/close gallery
 * @param handleClose function to close gallery
 * @param showThumbs show thumbs in the gallery
 * @param positionPlacement position of the control buttons
 * @returns
 */

const GalleryFy: React.FunctionComponent<GalleryFyProps> = ({
  dataSource = [],
  startIn,
  open = false,
  showThumbs = true,
  handleClose = () => {},
  positionPlacement = "top",
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

  function handleMiddlewareChange(index: number) {
    if (index === current) return;

    setLoaded(false);
    handleChange(index);
  }

  function handleMiddlewareNavigation(side: "prev" | "next") {
    setLoaded(true);
    handleReset();

    if (side === "prev") {
      handleChangePrev();
    } else {
      handleChangeNext();
    }
  }

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  if (!dataSource.length || !open) {
    return;
  }

  return (
    <WrapperContainer>
      <ControlBar
        amount={amountData}
        current={current}
        handleClose={handleCloseGallery}
        handleZoom={handleZoom}
        handleRotate={(direction) => handleRotate(direction)}
        positionPlacement={positionPlacement}
      />

      <Container ref={wrapperContainer}>
        {!loaded && <Loading />}

        {dataSource[current].type === "pdf" ? (
          <IframeContainer
            src={dataSource[current].src}
            $loaded={loaded}
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
          {!isFirstIndex && (
            <Navigation.Left handle={handleMiddlewareNavigation} />
          )}
          {!isLastIndex && (
            <Navigation.Right handle={handleMiddlewareNavigation} />
          )}
        </Navigation.Root>
      </Container>

      {showThumbs && (
        <Thumbs
          dataSource={dataSource}
          handleChange={handleMiddlewareChange}
          currentImage={current}
        />
      )}
    </WrapperContainer>
  );
};

export default GalleryFy;
