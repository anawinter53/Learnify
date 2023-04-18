import styles from './index.module.css'
import React, { useEffect, useState } from 'react'

export default function QuizQuestion({questions}) {
    const [answers, setAnswers] = useState([])
    const [question, setQuestion] = useState([])
    const [count, setCount] = useState(0)


    const updateQuestion = () => {
        setQuestion(questions[count])
        setAnswers([questions[count].answer, questions[count].fake_answer1, questions[count].fake_answer2, questions[count].fake_answer3].sort(() => Math.random() - 0.5));
        setCount(count + 1)
    }

    useEffect(() => {
        updateQuestion()
        console.log(question)
    }, [])

    const handleCheck = (e) => {
        console.log(e.target.className)
        console.log(count)
        updateQuestion()
    }

    return(
        <div className={styles["container"]}>
            <h2>{question.question}</h2>
            <div className={styles['options-container']}>{answers.map((answer) => 
                <button className={styles[answer === question.answer ? 'correct' : 'incorrect']} onClick={handleCheck}>{answer}</button>
            )}</div>
        </div>
    )
}
