import { XCircle } from "phosphor-react";

import styles from "./styles.module.scss";
import { ButtonCloseProps } from "./types";

export function ButtonClose({ handleClose }: ButtonCloseProps) {
  return (
    <div className={styles.container} onClick={handleClose}>
      <XCircle size={32} color="#FFFFFF" />
    </div>
  );
}
