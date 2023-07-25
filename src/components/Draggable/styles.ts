import { styled } from "styled-components";

interface ContainerProps {
  $positionStart: {
    x: number;
    y: number;
  };
}

export const Container = styled.div<ContainerProps>`
  position: relative;
  user-select: none;
  cursor: grab;
  display: flex;
  align-items: center;
  justify-content: center;
`;
