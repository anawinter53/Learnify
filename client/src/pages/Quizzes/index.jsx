import styles from "./index.module.css";
import { Categories, FilterLevels } from "../../components";
import React, {useState} from "react";
import { Link } from "react-router-dom";

export default function Quizzes() {
  const [level, setLevel] = useState("gcse");

  return (
    <div className={styles["quizzes"]}>
      <div className={styles["container"]}>
        <h1 className={styles["title"]} role='headingone'>Quizzes</h1>
        <div className={styles["content"]}>
          <FilterLevels level={level} setLevel={setLevel} />
          <div className={styles["categories"]}>
            <Categories level={level} setLevel={setLevel}/>
          </div>
        </div>
      </div>
    </div>
  );
}
