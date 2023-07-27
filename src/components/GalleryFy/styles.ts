import styled from "styled-components";

interface WrapperContainerProps {
  $open: boolean;
}

interface ImageContainerProps {
  $loaded: boolean;
}

export const WrapperContainer = styled.div<WrapperContainerProps>`
  height: 100vh;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.7);

  display: ${({ $open }) => ($open ? "flex" : "none")};
  flex: 1;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  position: fixed;
  left: 0;
  top: 0;
  z-index: 9999;
`;

export const Container = styled.div`
  width: 100%;
  height: calc(100% - (50px + 80px));
  position: relative;
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;

  > iframe {
    width: 100%;
    height: 100%;
    border: none;
  }

  > div:first-child {
    max-width: 1280px;

    > img {
      vertical-align: middle;
      transform: scale(1);
      user-select: none;
    }
  }
`;

export const ImageContainer = styled.img<ImageContainerProps>`
  display: ${({ $loaded }) => ($loaded ? "block" : "none")};
`;
