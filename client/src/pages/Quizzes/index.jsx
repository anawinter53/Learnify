import styles from "./index.module.css";

export default function Quizzes() {
  return (
    <div className={styles["quizzes"]}>
      <div className={styles["container"]}>
        <h1 className={styles["title"]}>Quizzes</h1>
        <div className={styles["content"]}>
          <div className={styles["quiz-card"]}>
            <h1 className={styles["quiz-title"]}>Geography</h1>
            <div className={styles["quiz-background"]}></div>
            <img
              src="https://images.unsplash.com/photo-1521295121783-8a321d551ad2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              className={styles["quiz-image"]}
            />
          </div>
          <div className={styles["quiz-card"]}>
            <h1 className={styles["quiz-title"]}>History</h1>
            <div className={styles["quiz-background"]}></div>
            <img
              src="https://images.unsplash.com/photo-1461360370896-922624d12aa1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80"
              className={styles["quiz-image"]}
            />
          </div>
          <div className={styles["quiz-card"]}>
            <h1 className={styles["quiz-title"]}>Chemistry</h1>
            <div className={styles["quiz-background"]}></div>
            <img
              src="https://images.unsplash.com/photo-1608037222022-62649819f8aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
              className={styles["quiz-image"]}
            />
          </div>
          <div className={styles["quiz-card"]}>
            <h1 className={styles["quiz-title"]}>Biology</h1>
            <div className={styles["quiz-background"]}></div>
            <img
              src="https://images.unsplash.com/photo-1530026405186-ed1f139313f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
              className={styles["quiz-image"]}
            />
          </div>
          <div className={styles["quiz-card"]}>
            <h1 className={styles["quiz-title"]}>Physics</h1>
            <div className={styles["quiz-background"]}></div>
            <img
              src="https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
              className={styles["quiz-image"]}
            />
          </div>
          <div className={styles["quiz-card"]}>
            <h1 className={styles["quiz-title"]}>Mathematics</h1>
            <div className={styles["quiz-background"]}></div>
            <img
              src="https://images.unsplash.com/photo-1518133910546-b6c2fb7d79e3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"
              className={styles["quiz-image"]}
            />
          </div>
          <div className={styles["quiz-card"]}>
            <h1 className={styles["quiz-title"]}>English</h1>
            <div className={styles["quiz-background"]}></div>
            <img
              src="https://images.unsplash.com/photo-1583361704493-d4d4d1b1d70a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
              className={styles["quiz-image"]}
            />
          </div>
          <div className={styles["quiz-card"]}>
            <h1 className={styles["quiz-title"]}>Sports</h1>
            <div className={styles["quiz-background"]}></div>
            <img
              src="https://images.unsplash.com/photo-1461896836934-ffe607ba8211?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              className={styles["quiz-image"]}
            />
          </div>
          <div className={styles["quiz-card"]}>
            <h1 className={styles["quiz-title"]}>Religious Education</h1>
            <div className={styles["quiz-background"]}></div>
            <img
              src="https://images.unsplash.com/photo-1624862761959-18b9c810825d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              className={styles["quiz-image"]}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
