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
