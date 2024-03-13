import styled, { keyframes } from "styled-components";

const loading = keyframes`  
  from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
`;

export const Container = styled.div`
  position: absolute;
  margin: auto;
  width: 48px;
  height: 48px;

  svg {
    animation: ${loading} 1s linear infinite;
  }
`;
