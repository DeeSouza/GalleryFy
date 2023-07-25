import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  background-color: #393939;
  color: #fff;
  width: 100%;
  height: 50px;
  padding: 0 10px;
  box-sizing: border-box;

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
  }
`;
