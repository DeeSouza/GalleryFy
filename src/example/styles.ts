import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: 5px;
  height: 100vh;
  position: relative;

  > div {
    width: 200px;
    cursor: pointer;

    &:hover {
      opacity: 0.5;
    }

    img {
      width: 100%;
    }
  }
`;
