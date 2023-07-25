import { RefObject } from "react";

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

    if (!imageElement) return null;

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

  return {
    handleRotate,
  };
};
