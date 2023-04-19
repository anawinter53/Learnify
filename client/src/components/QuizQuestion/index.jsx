import styles from './index.module.css'
import React, { useEffect, useState, useRef } from 'react'

export default function QuizQuestion({questions, updateScore}) {
    const [answers, setAnswers] = useState([])
    const [question, setQuestion] = useState([])
    const [count, setCount] = useState(0)
    const [toggle, setToggle] = useState(false)
    const [score, setScore] = useState(0)
    const optionsRef = useRef()



    const updateQuestion = async () => {
        if (count < questions.length) {
            setQuestion(questions[count])
        setAnswers([questions[count].answer, questions[count].fake_answer1, questions[count].fake_answer2, questions[count].fake_answer3].sort(() => Math.random() - 0.5));
        setCount(count + 1)
        setToggle(false)
        for (const o of optionsRef.current.children) {
            o.style.background = "white"
        }
        } else {
            setToggle(true)
            const id = localStorage.getItem("user_id")
            updateScore(id, score, questions.length)
        }
        
    }

    useEffect(() => {
        updateQuestion()
    }, [])

    const handleCheck = (e) => {
        const options = optionsRef.current.children
        for (const o of options) {
            console.log(o.className)
            if (o.className.includes("incorrect")) {
                o.style.background = "red"
            } else {
                o.style.background = "green"
            }
        }
        console.log(e.target.textContent)
        
        if (e.target.textContent == question.answer) {
            setScore(score + 1)
            console.log("score increased")
        }
        
        console.log(options)
        const timer = setTimeout(() => {
            updateQuestion()
        }, 2000)
        
    }

    return(
        <div>
            <div className={styles["container"]}>
                <p className={styles['score']}>Score: {score}</p>
                <h2>Question {count} :</h2>
                <h3>{question.question}</h3>
                <div className={styles['options-container']} ref={optionsRef}>{answers.map((answer) => 
                    <button className={`${styles[answer === question.answer ? 'correct' : 'incorrect']}`}  onClick={handleCheck}>{answer}</button>
                )}</div>
            </div>
            <div className={`${styles[toggle ? 'quiz-complete' : 'quiz-incomplete']}`}>
                <h2>Quiz Complete!</h2>
                <p>You scored {score} / {questions.length}</p>
            </div>
        </div>

    )
}
