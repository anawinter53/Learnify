import styles from "./index.module.css";
import React, { useEffect, useState } from "react";
import { QuizQuestion } from "../../components";

export default function Quizzes() {
  const [question, setQuestion] = useState([])

  async function getQuestion() {
    const randomId = Math.floor((Math.random() * 30) + 1)
    const response = await fetch(`http://localhost:8080/quiz/single/${randomId}`)
    const data = await response.json()
    console.log(data)
    setQuestion(data)
  }

  useEffect(() => {
    getQuestion()
  }, [])

  return (
    <div className={styles["quizzes"]}>
      <div className={styles["container"]}>
        <h1 className={styles["title"]}>Quizzes</h1>
      <QuizQuestion question={question}/>
      <button onClick={getQuestion}>New Question</button>
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
  )
}
