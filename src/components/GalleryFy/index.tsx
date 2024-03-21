import React, {
  MouseEvent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

import { Navigation } from "@components/Navigation";
import { ControlBar } from "@components/ControlBar";
import { Draggable } from "@components/Draggable";
import { Thumbs } from "@components/Thumbs";
import { Loading } from "@components/Loading";
import { ButtonClose } from "@components/ButtonClose";

import { useGallery } from "@hooks/useGallery";
import { useControl } from "@hooks/useControl";

import {
  WrapperContainer,
  Container,
  ImageContainer,
  IframeContainer,
} from "./styles";
import { GalleryFyProps, KeyHandlers } from "./types";

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
    dataGallery,
  } = useGallery({
    dataSource,
    startIn,
  });

  const { handleRotate, handleZoom, handleReset } = useControl(
    wrapperImage,
    wrapperContainer
  );

  const handleCloseGallery = useCallback(() => {
    handleClose();
    handleReset();
  }, [handleClose, handleReset]);

  function handleCloseOverlay(event: MouseEvent<HTMLDivElement>) {
    const targetElement = event.target as HTMLElement;
    if (!imageRef.current) {
      return;
    }

    if (targetElement !== imageRef.current) {
      handleClose();
      handleReset();
    }
  }

  function handleMiddlewareChange(index: number) {
    if (index === current) return;

    setLoaded(false);
    handleChange(index);
  }

  const handleMiddlewareNavigation = useCallback(
    (side: "prev" | "next") => {
      setLoaded(true);
      handleReset();

      if (side === "prev") {
        handleChangePrev();
      } else {
        handleChangeNext();
      }
    },
    [handleReset, handleChangePrev, handleChangeNext]
  );

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  useEffect(() => {
    const keyHandlers: KeyHandlers = {
      ArrowLeft: () => handleMiddlewareNavigation("prev"),
      ArrowRight: () => handleMiddlewareNavigation("next"),
      Escape: handleCloseGallery,
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      const keyHandler = keyHandlers[event.key];

      if (keyHandler) {
        keyHandler();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleMiddlewareNavigation, handleCloseGallery]);

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

      <ButtonClose handleClose={handleCloseGallery} />

      <Container ref={wrapperContainer} onClick={handleCloseOverlay}>
        {!loaded && <Loading />}

        {dataGallery[current].type === "pdf" ? (
          <IframeContainer
            src={dataGallery[current].src}
            $loaded={loaded}
            onLoad={() => setLoaded(true)}
          />
        ) : (
          <Draggable>
            <div ref={wrapperImage}>
              <ImageContainer
                src={dataGallery[current].src}
                ref={imageRef}
                draggable="false"
                onLoad={() => setLoaded(true)}
                $loaded={loaded}
              />
            </div>
          </Draggable>
        )}
      </Container>

      <Navigation.Root>
        {!isFirstIndex && (
          <Navigation.Left handle={handleMiddlewareNavigation} />
        )}

        {!isLastIndex && (
          <Navigation.Right handle={handleMiddlewareNavigation} />
        )}
      </Navigation.Root>

      {showThumbs && (
        <Thumbs
          dataSource={dataGallery}
          handleChange={handleMiddlewareChange}
          currentImage={current}
        />
      )}
    </WrapperContainer>
  );
};

export default GalleryFy;
