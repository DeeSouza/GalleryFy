import { CircleNotch } from "phosphor-react";
import styles from "./styles.module.scss";

export function Loading() {
  return (
    <div className={styles.container}>
      <CircleNotch size={48} color="#FFFFFF" />
    </div>
  );
}
