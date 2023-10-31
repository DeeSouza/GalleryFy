import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  background-color: rgba(255, 255, 255, 0.2);
  cursor: pointer;
  width: 70px;
  height: 70px;
  border-bottom-left-radius: 100%;
  transform: rotateZ(-0deg);
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  padding: 13px;
  z-index: 1;
  opacity: 0.5;
  transition: all 0.5s ease-in-out;
  box-sizing: border-box;

  &:hover {
    opacity: 1;
  }
`;
