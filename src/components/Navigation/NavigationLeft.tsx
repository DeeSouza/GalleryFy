import { ArrowLeft } from "phosphor-react";

import { NavLeft } from "./styles";
import { NavigationArrowProps } from "./types";

export const NavigationLeft = ({ handle }: NavigationArrowProps) => {
  return (
    <NavLeft onClick={handle}>
      <ArrowLeft size={28} color="#FFF" />
    </NavLeft>
  );
};
