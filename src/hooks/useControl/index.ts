import { RefObject, useCallback, useMemo, useState } from "react";
import { Direction, ZoomKind } from "./types";

export const useControl = (
  wrapperImage: RefObject<HTMLDivElement>,
  wrapperElement: RefObject<HTMLDivElement>
) => {
  const [, setZoom] = useState(1);
  const degreeVertical = useMemo(() => [90, 270, -90, -270], []);
  const degree360 = useMemo(() => [360, -360], []);

  const handleRotate = useCallback(
    (direction: Direction) => {
      if (!wrapperImage.current || !wrapperElement.current) return;

      const currentElement = wrapperImage.current;
      const heightWrapperElement = wrapperElement.current.offsetHeight;
      const imageElement = currentElement.firstChild as HTMLImageElement;

      const currentRotate = Number(
        currentElement.style.transform.replace(/[^-\d.]/g, "")
      );

      let rotateCalc =
        direction === Direction.CLOCKWISE
          ? currentRotate + 90
          : currentRotate - 90;

      if (degree360.includes(rotateCalc)) {
        rotateCalc = 0;
      }

      currentElement.style.transform = `rotate(${rotateCalc}deg)`;

      if (degreeVertical.includes(rotateCalc)) {
        currentElement.style.maxWidth = `${heightWrapperElement}px`;
        imageElement.style.width = "100%";
      } else {
        currentElement.style.maxWidth = "1280px";
        imageElement.style.width = "auto";
      }
    },
    [wrapperImage, wrapperElement, degree360, degreeVertical]
  );

  const handleReset = useCallback(() => {
    if (!wrapperImage.current) return;

    const currentElement = wrapperImage.current;
    const parentElement = wrapperImage.current.parentElement;
    const imageElement = currentElement.firstChild as HTMLImageElement;

    currentElement.style.transform = "rotate(0deg)";
    currentElement.style.maxWidth = "1280px";

    imageElement.style.transform = "scale(1)";
    imageElement.style.width = "auto";

    if (!parentElement) return;

    parentElement.style.position = "relative";
    parentElement.style.removeProperty("top");
    parentElement.style.removeProperty("left");
  }, [wrapperImage]);

  const handleZoom = useCallback(
    (type: ZoomKind) => {
      if (!wrapperImage.current) return;

      const currentElement = wrapperImage.current;
      const imageElement = currentElement.firstChild as HTMLImageElement;

      if (!imageElement) return;

      let currentScale =
        Number(imageElement.style.transform.replace(/[^-\d.]/g, "")) || 1;

      if (currentScale === 0.25 && type === ZoomKind.OUT) return;

      if (type === ZoomKind.NORMAL) {
        handleReset();
        return;
      }

      if (type === ZoomKind.IN) {
        currentScale = currentScale + 0.25;
        imageElement.style.transform = `scale(${currentScale})`;
      } else {
        currentScale = currentScale - 0.25;
        imageElement.style.transform = `scale(${currentScale})`;
      }

      setZoom(currentScale);
    },
    [wrapperImage, handleReset]
  );

  return {
    handleRotate,
    handleZoom,
    handleReset,
  };
};
