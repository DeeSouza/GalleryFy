import { ArrowLeft } from "phosphor-react";

import styles from "./styles.module.scss";
import { NavigationArrowProps } from "./types";

export const NavigationLeft: React.FunctionComponent<NavigationArrowProps> = ({
  handle,
}: NavigationArrowProps) => {
  return (
    <div className={styles.navLeft} onClick={() => handle("prev")}>
      <ArrowLeft size={20} color="#FFF" />
    </div>
  );
};
