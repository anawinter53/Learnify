import styles from "./index.module.css"
import { PostIt, Shapes } from "../../components"

export default function Landing() {
  return (
    <div className={styles["landing"]}>
      <div className={styles["container"]}>
        <Shapes />
        <PostIt />
        <div className={styles["info"]}>
          <h1 className={styles["slogan"]}>Join our community of learners today and unlock your full potential.</h1>
          <button className={styles["btn"]}>Get Started!</button>
        </div>
      </div>
    </div>
  )
}
