import { ContainerNavigation } from "./styles";
import { NavigationProps } from "./types";

export const NavigationRoot = ({ children }: NavigationProps) => {
  return <ContainerNavigation>{children}</ContainerNavigation>;
};
