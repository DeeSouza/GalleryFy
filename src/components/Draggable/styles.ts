import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  position: relative;
  user-select: none;
  cursor: grab;

  div {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      max-height: 100%;
    }
  }
`;
