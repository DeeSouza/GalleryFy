import { ArrowRight } from "phosphor-react";

import styles from "./styles.module.scss";
import { NavigationArrowProps } from "./types";

export const NavigationRight: React.FunctionComponent<NavigationArrowProps> = ({
  handle,
}: NavigationArrowProps) => {
  return (
    <div className={styles.navRight} onClick={() => handle("next")}>
      <ArrowRight size={20} color="#FFF" />
    </div>
  );
};
