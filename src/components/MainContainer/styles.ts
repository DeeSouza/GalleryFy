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
  width: 100%;
  height: calc(100% - (50px + 80px));
  position: relative;
  overflow: hidden;
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;

  > div:first-child {
    max-width: 1280px;

    > img {
      vertical-align: middle;
      transform: scale(1);
      transition: all 0.2s ease;
    }
  }
`;
