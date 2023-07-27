import React, { useCallback, useEffect, useRef } from "react";

import { ThumbsProps } from "./types";
import { Container, ThumbImage } from "./styles";

export const Thumbs: React.FunctionComponent<ThumbsProps> = ({
  dataSource,
  currentImage,
  handleChange,
}: ThumbsProps) => {
  const thumbsRef = useRef<HTMLDivElement>(null);
  const isMouseDown = useRef<boolean>(false);
  const startX = useRef<number>(0);
  const scrollLeft = useRef<number>(0);

  const onMouseDown = useCallback((event: MouseEvent) => {
    isMouseDown.current = true;

    const thumbsContainer = thumbsRef.current;
    if (!thumbsContainer) return;

    startX.current = event.pageX - thumbsContainer.offsetLeft;
    scrollLeft.current = thumbsContainer.scrollLeft;
  }, []);

  const onMouseUp = useCallback(() => {
    isMouseDown.current = false;
  }, []);

  const onMouseMove = useCallback((event: MouseEvent) => {
    const thumbsContainer = thumbsRef.current;
    if (!thumbsContainer) return;

    event.preventDefault();
    if (!isMouseDown.current) {
      return;
    }
    const x = event.pageX - thumbsContainer.offsetLeft;
    const scroll = x - startX.current;
    thumbsContainer.scrollLeft = scrollLeft.current - scroll;
  }, []);

  useEffect(() => {
    const thumbsContainer = thumbsRef.current;
    if (!thumbsContainer) return;

    thumbsContainer.addEventListener("mousemove", onMouseMove, false);
    thumbsContainer.addEventListener("mousedown", onMouseDown, false);
    thumbsContainer.addEventListener("mouseup", onMouseUp, false);
    thumbsContainer.addEventListener("mouseleave", onMouseUp, false);
  }, [onMouseMove, onMouseDown, onMouseUp]);

  return (
    <Container ref={thumbsRef}>
      {React.Children.toArray(
        dataSource.map((file, index: number) => (
          <ThumbImage
            onClick={() => handleChange(index)}
            $cover={file.src}
            $ext={file.ext}
            $actived={index === currentImage}
          />
        ))
      )}
    </Container>
  );
};
