import styles from "./index.module.css";
import { Categories, FilterLevels } from "../../components";
import React from "react";

export default function Quizzes() {

  return (
    <div className={styles["quizzes"]}>
      <div className={styles["container"]}>
        <h1 className={styles["title"]}>Quizzes</h1>
        <div className={styles["content"]}>
          <FilterLevels />
          <div className={styles["categories"]}>
            <Categories />
          </div>
        </div>
      </div>
    </div>
  );
}
