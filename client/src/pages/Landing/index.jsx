import styles from "./index.module.css"
import { PostIt } from "../../components"

export default function Landing() {
  return (
    <div className={styles["landing"]}>
      <div className={styles["container"]}>
        <PostIt />
      </div>
    </div>
  )
}
