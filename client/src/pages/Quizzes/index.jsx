import styles from "./index.module.css";
import React from "react";
import { Link } from "react-router-dom";


export default function Quizzes() {

  return (
    <div className={styles["quizzes"]}>
      <div className={styles["container"]}>
        <h1 className={styles["title"]}>Quizzes</h1>
        <div className={styles["content"]}>
          <div className={styles["quiz-card"]}><h3><Link to={"/dashboard/quizzes/geography"}>Geography</Link></h3></div>
          <div className={styles["quiz-card"]}><h3><Link to={"/dashboard/quizzes/sports"}>Sports</Link></h3></div>
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
