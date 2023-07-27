import { useCallback, useEffect, useRef } from "react";

import { isMouse, isTouch } from "@utils/events";

import { DraggableProps } from "./types";
import { Container } from "./styles";

export const Draggable: React.FunctionComponent<DraggableProps> = ({
  children,
}: DraggableProps) => {
  const dragRef = useRef<HTMLDivElement>(null);
  const isMouseDown = useRef<boolean>(false);
  const offset = useRef<number[]>([0, 0]);

  const onMouseMove = useCallback(
    (event: MouseEvent | TouchEvent) => {
      if (isMouseDown && dragRef.current) {
        let dragX = 0;
        let dragY = 0;

        if (isTouch(event)) {
          dragX = event.touches[0].clientX + offset.current[0];
          dragY = event.touches[0].clientY + offset.current[1];
        }

        if (isMouse(event)) {
          event.preventDefault();

          dragX = event.clientX + offset.current[0];
          dragY = event.clientY + offset.current[1];
        }

        dragRef.current.style.left = `${dragX}px`;
        dragRef.current.style.top = `${dragY}px`;
      }
    },
    [isMouseDown, offset]
  );

  const onMouseUp = useCallback(() => {
    isMouseDown.current = false;

    document.removeEventListener("touchmove", onMouseMove, true);
    document.removeEventListener("mousemove", onMouseMove, true);
  }, [onMouseMove]);

  const onMouseDown = useCallback(
    (event: MouseEvent | TouchEvent) => {
      isMouseDown.current = true;
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

      offset.current = [left, top];

      dragDiv.addEventListener("mouseup", onMouseUp, true);
      dragDiv.addEventListener("touchend", onMouseUp, true);
      document.addEventListener("mousemove", onMouseMove, true);
      document.addEventListener("touchmove", onMouseMove, true);
    },
    [onMouseUp, onMouseMove]
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
