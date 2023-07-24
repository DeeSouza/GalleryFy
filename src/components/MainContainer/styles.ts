import styled from "styled-components";

interface WrapperContainerProps {
  open: boolean;
}

export const WrapperContainer = styled.div<WrapperContainerProps>`
  height: 100vh;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.7);

  display: ${(props) => (props.open ? "flex" : "none")};
  flex: 1;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  position: fixed;
  left: 0;
  top: 0;
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
