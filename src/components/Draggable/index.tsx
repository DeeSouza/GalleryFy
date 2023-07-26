import { useCallback, useEffect, useRef } from "react";
import { DraggableProps } from "./types";
import { Container } from "./styles";

export const Draggable: React.FunctionComponent<DraggableProps> = ({
  children,
  positionStart = { x: 0, y: 0 },
}: DraggableProps) => {
  const dragRef = useRef<HTMLDivElement>(null);
  let isMouseDown: boolean = false;
  let offset: number[] = [0, 0];

  const onMouseDown = useCallback((event: MouseEvent) => {
    isMouseDown = true;

    const dragDiv = dragRef.current;
    if (!dragDiv) return;

    dragDiv.style.position = "absolute";

    const x: number = event.clientX;
    const y: number = event.clientY;

    offset = [dragDiv.offsetLeft - x, dragDiv.offsetTop - y];

    dragDiv.addEventListener("mouseup", onMouseUp, true);
    document.addEventListener("mousemove", onMouseMove, true);
  }, []);

  const onMouseUp = useCallback(() => {
    isMouseDown = false;

    document.removeEventListener("mousemove", onMouseMove, true);
  }, []);

  const onMouseMove = useCallback(
    (event: MouseEvent) => {
      if (isMouseDown && dragRef.current) {
        const x: number = event.clientX;
        const y: number = event.clientY;

        dragRef.current.style.left = `${x + offset[0]}px`;
        dragRef.current.style.top = `${y + offset[1]}px`;
      }
    },
    [isMouseDown, offset]
  );

  useEffect(() => {
    const dragDiv = dragRef.current;
    if (!dragDiv) return;

    dragDiv.addEventListener("mousedown", onMouseDown);

    return () => {
      dragDiv.removeEventListener("mousedown", onMouseDown, true);
      dragDiv.removeEventListener("mouseup", onMouseUp, true);
      document.removeEventListener("mousemove", onMouseMove, true);
    };
  }, [onMouseDown, onMouseUp, onMouseMove]);

  return (
    <Container ref={dragRef} $positionStart={positionStart}>
      {children}
    </Container>
  );
};
