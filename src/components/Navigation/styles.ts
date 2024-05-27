import styled, { css } from "styled-components";

export const ContainerNavigation = styled.div`
  position: absolute;
  width: 100%;
  top: 50%;
  svg {
    vertical-align: middle;
  }
`;

const NavStyles = css`
  position: absolute;
  background-color: #666;
  padding: 5px;
  cursor: pointer;
  border-radius: 5px;
  opacity: 0.6;
  transition: all 0.25s ease-in;
  transform: translateY(-50%) scale(1);

  &:hover {
    opacity: 1;
    transform: translateY(-50%) scale(1.15);
  }
`;

export const NavLeft = styled.div`
  ${NavStyles}
  left: 10px;
`;

export const NavRight = styled.div`
  ${NavStyles}
  right: 10px;
`;
