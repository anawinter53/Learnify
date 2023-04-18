import styles from "./index.module.css";

export default function Dashboard() {
  return (
    <div className={styles["dashboard"]}>
      <div className={styles["container"]}>
        <h1 className={styles["title"]}>Welcome back User</h1>
        <div className={styles["content"]}>
          <h1 className={styles["content-heading"]}>Most popular quizzes</h1>
          <div className={styles["top7-quizzes"]}>
            <div className={styles["quiz-card"]}></div>
            <div className={styles["quiz-card"]}></div>
            <div className={styles["quiz-card"]}></div>
            <div className={styles["quiz-card"]}></div>
            <div className={styles["quiz-card"]}></div>
            <div className={styles["quiz-card"]}></div>
            <div className={styles["quiz-card"]}></div>
          </div>
          <h1 className={styles["content-heading"]}>Most popular flashcards</h1>
          <div className={styles["top7-flashcards"]}>
            <div className={styles["quiz-card"]}></div>
            <div className={styles["quiz-card"]}></div>
            <div className={styles["quiz-card"]}></div>
            <div className={styles["quiz-card"]}></div>
            <div className={styles["quiz-card"]}></div>
            <div className={styles["quiz-card"]}></div>
            <div className={styles["quiz-card"]}></div>
          </div>
        </div>
      </div>
    </div>
  )
}
