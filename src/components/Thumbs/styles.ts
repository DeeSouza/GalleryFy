import { css, styled } from "styled-components";

interface ThumbImageProps {
  image: string;
  $actived: boolean;
}

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 15px;
  background-color: #393939;
  width: 100%;
  height: 80px;
  position: relative;
  z-index: 1;
`;

export const ThumbImage = styled.div<ThumbImageProps>`
  background-image: url(${(props) => props.image});
  width: 60px;
  height: 60px;
  background-size: cover;
  border-radius: 8px;
  cursor: pointer;
  border: 3px solid #393939;
  opacity: 0.6;
  transition: opacity 0.25s ease-in-out;

  ${(props) =>
    props.$actived &&
    css`
      border: 3px solid #c7c7c7;
    `}

  &:hover {
    opacity: 1;
  }
`;
