import styles from "./index.module.css";

export default function Friends() {
  return (
    <div className={styles["friends"]}>
      <div className={styles["container"]}>
        <h1 className={styles["title"]}>Friends</h1>
        <div className={styles["inner-container"]}>
          <div className={styles["content"]}>
            <div className={styles["quiz-card"]}></div>
            <div className={styles["quiz-card"]}></div>
            <div className={styles["quiz-card"]}></div>
            <div className={styles["quiz-card"]}></div>
            <div className={styles["quiz-card"]}></div>
            <div className={styles["quiz-card"]}></div>
            <div className={styles["quiz-card"]}></div>
            <div className={styles["quiz-card"]}></div>
            <div className={styles["quiz-card"]}></div>
            <div className={styles["quiz-card"]}></div>
            <div className={styles["quiz-card"]}></div>
            <div className={styles["quiz-card"]}></div>
            <div className={styles["quiz-card"]}></div>
            <div className={styles["quiz-card"]}></div>
            <div className={styles["quiz-card"]}></div>
            <div className={styles["quiz-card"]}></div>
            <div className={styles["quiz-card"]}></div>
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
      <div className={styles["leaderboard"]}>
        <h1 className={styles["leaderboard-title"]}>Leaderboard</h1>
        <div className={styles["top3-container"]}>
          <div className={styles["top2"]}></div>
          <div className={styles["top1"]}></div>
          <div className={styles["top3"]}></div>
        </div>
      </div>
    </div>
  );
}
