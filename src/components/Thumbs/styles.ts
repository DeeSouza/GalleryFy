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
  background-color: #141414;
  width: 100%;
  height: 70px;
  box-sizing: border-box;
  padding: 0 10px;
  position: relative;
  z-index: 1;

  &::-webkit-scrollbar {
    height: 0px;
  }
`;

export const ThumbImage = styled.div<ThumbImageProps>`
  width: 60px;
  height: 60px;
  background-size: cover;
  background-position: center;
  border-radius: 4px;
  cursor: pointer;
  border: ${({ $actived }) =>
    $actived ? "2px solid #ffec4f" : "2px solid #FFFFFF"};
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
    border: 2px solid #ffec4f;
  }
`;
