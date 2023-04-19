import { Categories, FilterLevels } from "../../components";
import styles from "./index.module.css";

export default function Flashcards() {
  return (
    <div className={styles["flashcards"]}>
      <div className={styles["container"]}>
        <h1 className={styles["title"]} role='headingone'>Flashcards</h1>
        <div className={styles["content"]}>
          <div className={styles["categories"]}>
            <Categories />
          </div>
        </div>
      </div>
    </div>
  );
}
