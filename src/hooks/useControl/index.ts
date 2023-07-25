import { RefObject } from "react";
import { ZoomKind } from "./types";

export const useControl = (
  element: RefObject<HTMLDivElement>,
  wrapperElement: RefObject<HTMLDivElement>
) => {
  const degreeVertical = [90, 270, -90, -270];
  const degree360 = [360, -360];

  function handleRotate(direction: string) {
    if (!element.current || !wrapperElement.current) return null;

    const currentElement = element.current;
    const heightWrapperElement = wrapperElement.current.offsetHeight;
    const imageElement = currentElement.firstChild as HTMLImageElement;

    const currentRotate = Number(
      currentElement.style.transform.replace(/[^-\d.]/g, "")
    );

    let rotateCalc =
      direction === "clockwise" ? currentRotate + 90 : currentRotate - 90;

    if (degree360.includes(rotateCalc)) {
      rotateCalc = 0;
    }

    currentElement.style.transform = `rotate(${rotateCalc}deg)`;

    if (degreeVertical.includes(rotateCalc)) {
      currentElement.style.maxWidth = `${heightWrapperElement}px`;
      imageElement.style.width = "100%";
    } else {
      currentElement.style.maxWidth = `1280px`;
      imageElement.style.width = "auto";
    }
  }

  function handleZoom(type: ZoomKind) {
    if (!element.current) return null;

    const currentElement = element.current;
    const imageElement = currentElement.firstChild as HTMLImageElement;
    let currentScale = Number(
      imageElement.style.transform.replace(/[^-\d.]/g, "")
    );

    if (type === ZoomKind.NORMAL) {
      imageElement.style.transform = "scale(1)";
      return;
    }

    if (type === ZoomKind.IN) {
      currentScale = currentScale + 0.25;
      imageElement.style.transform = `scale(${currentScale})`;
    } else {
      currentScale = currentScale - 0.25;
      imageElement.style.transform = `scale(${currentScale})`;
    }
  }

  return {
    handleRotate,
    handleZoom,
  };
};
