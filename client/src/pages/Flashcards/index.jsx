import { Categories } from "../../components"
import styles from "./index.module.css"

export default function Flashcards() {

  return (
    <div className={styles["flashcards"]}>
      <div className={styles["container"]}>
        <h1 className={styles["title"]}>Flashcards</h1>
        <div className={styles["content"]}>
          <Categories />
        </div>
      </div>
    </div>
  )
}
