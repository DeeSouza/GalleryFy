import styled from "styled-components";

export const WrapperContainer = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.5);

  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  position: relative;
`;

export const Container = styled.div`
  height: auto;
  width: 90%;
  max-width: 1280px;
  flex: 1;
  justify-content: center;
  align-items: center;
  display: flex;

  > img {
    width: auto;
    max-width: 100%;
  }
`;

export const Thumbs = styled.div`
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
