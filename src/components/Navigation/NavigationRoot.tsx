import { ContainerNavigation } from "./styles";
import { NavigationProps } from "./types";

export const NavigationRoot: React.FunctionComponent<NavigationProps> = ({
  children,
}: NavigationProps) => {
  return <ContainerNavigation>{children}</ContainerNavigation>;
};
