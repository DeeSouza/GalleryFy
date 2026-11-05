import styles from "./styles.module.scss";
import { NavigationProps } from "./types";

export const NavigationRoot: React.FunctionComponent<NavigationProps> = ({
  children,
}: NavigationProps) => {
  return <div className={styles.containerNavigation}>{children}</div>;
};
