import { useEffect, useState } from "react";
import styles from "./index.module.css";

export default function Dashboard() {

  const [username, setUsername] = useState("")

  const getUser = async () => {
    const response = await fetch(`http://localhost:8080/users/username/${localStorage.getItem("user_id")}`)

    setUsername(await response.json())
  }

  useEffect(() => {
    getUser()
  }, [])

  return (
    <div className={styles["dashboard"]}>
      <div className={styles["container"]}>
        <h1 className={styles["title"]}>Welcome back {username}</h1>
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
