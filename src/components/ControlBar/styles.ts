import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background-color: #393939;
  width: 100%;
  height: 50px;
  padding: 0 10px;
  box-sizing: border-box;

  display: flex;
  align-items: center;
  justify-content: space-between;

  color: #fff;
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
  }
`;
