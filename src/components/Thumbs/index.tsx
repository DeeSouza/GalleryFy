import React, { useCallback, useEffect, useRef } from "react";

import coverPdf from "@assets/pdf.png";

import { ThumbsProps } from "./types";
import styles from "./styles.module.scss";

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
    <div className={styles.container} ref={thumbsRef}>
      {React.Children.toArray(
        dataSource.map((file, index: number) => {
          const isPdf = file.type === "pdf";

          const className = [
            styles.thumbImage,
            isPdf ? styles.pdf : "",
            index === currentImage ? styles.actived : "",
          ]
            .filter(Boolean)
            .join(" ");

          return (
            <div
              className={className}
              onClick={() => handleChange(index)}
              style={{
                backgroundImage: `url(${isPdf ? coverPdf : file.src})`,
              }}
            />
          );
        }),
      )}
    </div>
  );
};
