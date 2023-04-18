import React, { useEffect, useState } from "react";
import { QuizQuestion } from "../../components";
import styles from "./index.module.css"
import { useParams } from "react-router-dom";

export default function Quizzes() {
  const [loading, setLoading] = useState(true)
  const [questions, setQuestions] = useState([])
  const [question, setQuestion] = useState([])
  const [count, setCount] = useState(0)
  const { subject } = useParams()

  async function getQuestions() {
    const category = subject[0].toUpperCase() + subject.substring(1)
    const response = await fetch(`http://localhost:8080/quiz/${category}`)
    const data = await response.json()
 
    setQuestions(data)
    setLoading(false)
  }

  useEffect(() => {
    getQuestions()
    
  }, [])

  function updateQuestion() {
    setCount(count + 1)
    setQuestion(questions[count])
  }



  function displayQuestion() {
    return (
      <div className={styles["container"]}>
          <h1 className={styles["title"]}>Quizzes</h1>
        <QuizQuestion question={question}/>
        <button onClick={updateQuestion}>Next Question</button>
      </div>
    )
  }

  return loading ? <h2><em>loading...</em></h2> : displayQuestion();


}