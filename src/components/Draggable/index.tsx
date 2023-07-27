import { useCallback, useEffect, useRef } from "react";
import { DraggableProps } from "./types";
import { Container } from "./styles";
import { isMouse, isTouch } from "@utils/events";

export const Draggable: React.FunctionComponent<DraggableProps> = ({
  children,
}: DraggableProps) => {
  const dragRef = useRef<HTMLDivElement>(null);
  let isMouseDown: boolean = false;
  let offset: number[] = [0, 0];

  const onMouseDown = useCallback((event: MouseEvent | TouchEvent) => {
    isMouseDown = true;
    const dragDiv = dragRef.current;

    if (!dragDiv) return;

    dragDiv.style.position = "absolute";
    let left = 0;
    let top = 0;

    if (isTouch(event)) {
      left = dragDiv.offsetLeft - event.touches[0].clientX;
      top = dragDiv.offsetTop - event.touches[0].clientY;
    }

    if (isMouse(event)) {
      left = dragDiv.offsetLeft - event.clientX;
      top = dragDiv.offsetTop - event.clientY;
    }

    offset = [left, top];

    dragDiv.addEventListener("mouseup", onMouseUp, true);
    dragDiv.addEventListener("touchend", onMouseUp, true);
    document.addEventListener("mousemove", onMouseMove, true);
    document.addEventListener("touchmove", onMouseMove, true);
  }, []);

  const onMouseUp = useCallback(() => {
    isMouseDown = false;

    document.removeEventListener("touchmove", onMouseMove, true);
    document.removeEventListener("mousemove", onMouseMove, true);
  }, []);

  const onMouseMove = useCallback(
    (event: MouseEvent | TouchEvent) => {
      if (isMouseDown && dragRef.current) {
        let dragX = 0;
        let dragY = 0;

        if (isTouch(event)) {
          dragX = event.touches[0].clientX + offset[0];
          dragY = event.touches[0].clientY + offset[1];
        }

        if (isMouse(event)) {
          event.preventDefault();

          dragX = event.clientX + offset[0];
          dragY = event.clientY + offset[1];
        }

        dragRef.current.style.left = `${dragX}px`;
        dragRef.current.style.top = `${dragY}px`;
      }
    },
    [isMouseDown, offset]
  );

  useEffect(() => {
    const dragDiv = dragRef.current;
    if (!dragDiv) return;

    dragDiv.addEventListener("touchstart", onMouseDown);
    dragDiv.addEventListener("mousedown", onMouseDown);

    return () => {
      dragDiv.removeEventListener("mousedown", onMouseDown, true);
      dragDiv.removeEventListener("mouseup", onMouseUp, true);
      document.removeEventListener("mousemove", onMouseMove, true);
    };
  }, [onMouseDown, onMouseUp, onMouseMove]);

  return <Container ref={dragRef}>{children}</Container>;
};
