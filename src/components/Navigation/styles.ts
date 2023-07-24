import styled, { css } from "styled-components";

export const ContainerNavigation = styled.div`
  position: absolute;
  width: 100%;

  svg {
    vertical-align: middle;
  }
`;

const NavStyles = css`
  position: absolute;
  background-color: #c7c7c7;
  padding: 5px;
  cursor: pointer;
  transition: all 0.25s ease-in;
`;

export const NavLeft = styled.div`
  ${NavStyles}
  left: 5px;
`;

export const NavRight = styled.div`
  ${NavStyles}
  right: 5px;
`;
