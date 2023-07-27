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
  svg {
    animation: ${loading} 1s linear infinite;
  }
`;
