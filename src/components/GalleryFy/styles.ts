import styled from "styled-components";

interface Props {
  $loaded: boolean;
  $fullWidth?: boolean;
}

export const WrapperContainer = styled.div`
  height: 100vh;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.7);

  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  position: fixed;
  left: 0;
  top: 0;
  z-index: 9999;
`;

export const Container = styled.div`
  width: 100%;
  height: calc(100% - (50px + 80px));
  position: relative;
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const IframeContainer = styled.iframe<Props>`
  display: ${({ $loaded }) => ($loaded ? "block" : "none")};
  width: ${({ $fullWidth }) => ($fullWidth ? "100%" : "70%")};
  height: 100%;
  border: none;
`;

export const TitleFile = styled.span`
  position: absolute;
  margin: auto;
  left: 0;
  right: 0;
  bottom: 62px;
  background-color: #0b1215;
  color: #f5f5f5;
  border-radius: 10px;
  padding: 6px 15px;
  display: inline-table;
  font-weight: bold;
`;

export const ImageContainer = styled.img<Props>`
  display: ${({ $loaded }) => ($loaded ? "block" : "none")};
  vertical-align: middle;
  transform: scale(1);
  user-select: none;
`;
