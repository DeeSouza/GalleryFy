import styled, { css } from "styled-components";

interface ContainerProps {
  readonly $positionPlacement?: "top" | "bottom";
}

export const Container = styled.div<ContainerProps>`
  background-color: rgba(57, 57, 57, 0.6);
  color: #fff;
  width: 100%;
  height: 50px;
  padding: 0 10px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  z-index: 1;
  left: 0;
  top: 0;

  ${({ $positionPlacement }) =>
    $positionPlacement === "bottom" &&
    css`
      position: absolute;
      top: auto;
      bottom: 70px;
      justify-content: center;

      > div:first-of-type {
        display: none;
      }
    `}
`;

export const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  justify-content: space-between;
  align-items: center;

  button {
    background: none;
    border: none;
    width: 30px;
    height: 30px;
    cursor: pointer;
    opacity: 0.5;
    transition: all 0.25s ease-in;
    transform: scale(1);

    &:hover {
      opacity: 1;
      transform: scale(1.15);
    }
  }
`;
