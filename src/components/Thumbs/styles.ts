import { styled } from "styled-components";

interface ThumbImageProps {
  $image: string;
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
  background-color: #393939;
  width: 100%;
  height: 80px;
  box-sizing: border-box;
  padding: 0 10px;
  position: relative;
  z-index: 1;

  &::-webkit-scrollbar {
    height: 0px;
  }
`;

export const ThumbImage = styled.div<ThumbImageProps>`
  background-image: url(${({ $image }) => $image});
  width: 60px;
  height: 60px;
  background-size: cover;
  background-position: center;
  border-radius: 8px;
  cursor: pointer;
  border: ${({ $actived }) =>
    $actived ? "3px solid #c7c7c7" : "3px solid #393939"};
  opacity: 0.6;
  transition: opacity 0.25s ease-in-out;

  &:hover {
    opacity: 1;
  }
`;
