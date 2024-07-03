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
  TitleFile,
} from "./styles";
import { GalleryFyProps, KeyHandlers } from "./types";

/**
 * @component
 * @param {array} dataSource - from URL's files or path assets files
 * @param {number} startIn - file index default
 * @param {boolean} open - control open/close gallery
 * @param {function} handleClose - to close gallery
 * @param {boolean} showThumbs - show thumbs in the gallery
 * @param {string} positionPlacement - position of the control buttons
 * @param {boolean} showTitle - shown title from file
 * @param {boolean} fullWidth - full width iframe
 * @returns {JSX.Element} The rendered gallery component.
 * 
 * @example
 * // Render a gallery
 * <GalleryFy
      open={open}
      dataSource={dataSource}
      startIn={openInImage}
      handleClose={() => setOpen(false)}
      positionPlacement="bottom"
    />
 */

const GalleryFy: React.FunctionComponent<GalleryFyProps> = ({
  dataSource = [],
  startIn,
  open = false,
  showThumbs = true,
  handleClose = () => {},
  positionPlacement = "top",
  showTitle = true,
  fullWidth = false,
}: GalleryFyProps) => {
  const [loaded, setLoaded] = useState<boolean>(false);
  const wrapperImage = useRef<HTMLDivElement | null>(null);
  const wrapperContainer = useRef<HTMLDivElement | null>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);

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

    if (!imageRef.current && !iframeRef.current) {
      return;
    }

    const doesntClickElement =
      targetElement !== imageRef.current || targetElement !== iframeRef.current;

    if (doesntClickElement) {
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

  const fileCurrent = dataGallery[current];
  const isFilePdf = fileCurrent.type === "pdf";
  const fileTitle = fileCurrent.title;
  const fileSrc = fileCurrent.src;
  const isPositionTop = positionPlacement === "top";

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

      {!isPositionTop && <ButtonClose handleClose={handleCloseGallery} />}

      <Container ref={wrapperContainer} onClick={handleCloseOverlay}>
        {!loaded && <Loading />}

        {isFilePdf ? (
          <IframeContainer
            src={fileSrc}
            ref={iframeRef}
            title={fileTitle}
            onLoad={() => setLoaded(true)}
            allowTransparency
            allowFullScreen
            $loaded={loaded}
            $fullWidth={fullWidth}
          />
        ) : (
          <Draggable>
            <div ref={wrapperImage}>
              <ImageContainer
                src={fileSrc}
                ref={imageRef}
                draggable="false"
                onLoad={() => setLoaded(true)}
                title={fileTitle}
                $loaded={loaded}
              />
            </div>
          </Draggable>
        )}

        {showTitle && fileTitle && <TitleFile>{fileTitle}</TitleFile>}
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
