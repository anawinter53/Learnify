import styles from './index.module.css'
import React, { useEffect, useState, useRef } from 'react'

export default function QuizQuestion({questions}) {
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
            alert("Quiz finished")
            const response = await fetch(`127.0.0.1:8080/users/${id}`)
        }
        
    }

    useEffect(() => {
        updateQuestion()
    }, [])

    const handleCheck = (e) => {
        setToggle(true)
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
        <div className={styles["container"]}>
            <p>Score: {score}</p>
            <h2>{question.question}</h2>
            <div className={styles['options-container']} ref={optionsRef}>{answers.map((answer) => 
                <button className={`${styles[answer === question.answer ? 'correct' : 'incorrect']} ${styles[toggle ? 'answered' : '']}`}  onClick={handleCheck}>{answer}</button>
            )}</div>
        </div>
    )
}
