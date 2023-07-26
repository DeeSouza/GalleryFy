import { ArrowRight } from "phosphor-react";

import { NavRight } from "./styles";
import { NavigationArrowProps } from "./types";

export const NavigationRight: React.FunctionComponent<NavigationArrowProps> = ({
  handle,
}: NavigationArrowProps) => {
  return (
    <NavRight onClick={handle}>
      <ArrowRight size={20} color="#FFF" />
    </NavRight>
  );
};
