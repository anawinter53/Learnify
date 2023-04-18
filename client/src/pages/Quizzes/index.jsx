import styles from "./index.module.css";
import { Categories } from "../../components";

export default function Quizzes() {
  return (
    <div className={styles["quizzes"]}>
      <div className={styles["container"]}>
        <h1 className={styles["title"]} role='headingone'>Quizzes</h1>
        <div className={styles["content"]}>
          <Categories />
        </div>
      </div>
    </div>
  );
}
