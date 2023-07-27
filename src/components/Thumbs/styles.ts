import { css, styled } from "styled-components";

import coverPdf from "@assets/pdf.png";

interface ThumbImageProps {
  $cover: string;
  $ext: string;
  $actived: boolean;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
  align-items: center;
  gap: 5px;
  overflow-x: auto;
  background-color: snow;
  width: 100%;
  height: 70px;
  box-sizing: border-box;
  padding: 0 10px;
  position: relative;
  z-index: 1;
  box-shadow: 0px 0px 60px 15px rgba(0, 0, 0, 0.17);

  &::-webkit-scrollbar {
    height: 0px;
  }
`;

export const ThumbImage = styled.div<ThumbImageProps>`
  width: 60px;
  height: 60px;
  background-size: cover;
  background-position: center;
  opacity: 1;
  border: 2px solid #000;
  cursor: pointer;
  opacity: ${({ $actived }) => ($actived ? 0.5 : 1)};
  transition: all 0.25s ease-in-out;

  ${({ $ext, $cover }) =>
    $ext === "pdf"
      ? css`
          background-image: url(${coverPdf});
          background-color: #fff;
        `
      : css`
          background-image: url(${$cover});
        `};

  &:hover {
    opacity: 0.5;
  }
`;
