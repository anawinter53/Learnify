import styles from "./index.module.css";

export default function PostIt() {
  return (
    <div className={styles["card-container"]}>
      <div className={`${styles["card"]} ${styles["card-0"]}`}>
        <div className={styles["card-heading"]}></div>
      </div>
      <div className={`${styles["card"]} ${styles["card-1"]}`}>
        <div className={styles["card-heading"]}></div>
      </div>
      <div className={`${styles["card"]} ${styles["card-2"]}`}>
        <div className={styles["card-heading"]}></div>
      </div>
      <div className={`${styles["card"]} ${styles["card-3"]}`}>
        <div className={styles["card-heading"]}></div>
      </div>
    </div>
  );
}
