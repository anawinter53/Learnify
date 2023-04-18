import styles from './index.module.css'
import React, { useEffect, useState } from 'react'

export default function QuizQuestion({question}) {
    const [answers, setAnswers] = useState([])

    const getAnswers = () => {
        setAnswers([question.answer, question.fake_answer1, question.fake_answer2, question.fake_answer3].sort(() => Math.random() - 0.5));
    }

    useEffect(() => {
        getAnswers()
    }, [question])

    const handleCheck = (e) => {
        console.log(e.target.className)
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
