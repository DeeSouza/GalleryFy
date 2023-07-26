import { ArrowLeft } from "phosphor-react";

import { NavLeft } from "./styles";
import { NavigationArrowProps } from "./types";

export const NavigationLeft: React.FunctionComponent<NavigationArrowProps> = ({
  handle,
}: NavigationArrowProps) => {
  return (
    <NavLeft onClick={handle}>
      <ArrowLeft size={20} color="#FFF" />
    </NavLeft>
  );
};
