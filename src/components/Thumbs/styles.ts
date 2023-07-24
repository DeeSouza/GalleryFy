import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
  background-color: #393939;
  width: 100%;
  height: 100px;
`;

export const ThumbImage = styled.div<{ image: string }>`
  background-image: url(${(props) => props.image});
  width: 80px;
  height: 80px;
  object-fit: cpver;
  background-size: cover;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.25s ease-in-out;

  &:hover {
    opacity: 0.5;
  }
`;
