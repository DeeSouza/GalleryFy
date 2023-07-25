import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  background-color: rgba(57, 57, 57, 0.6);
  color: #fff;
  width: 100%;
  height: 50px;
  padding: 0 10px;
  box-sizing: border-box;
  z-index: 1;

  display: flex;
  align-items: center;
  justify-content: space-between;
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

    &:hover {
      opacity: 1;
    }
  }
`;
