import styles from './index.module.css'
import React, { useEffect, useState, useRef } from 'react'

export default function QuizQuestion({questions}) {
    const [answers, setAnswers] = useState([])
    const [question, setQuestion] = useState([])
    const [count, setCount] = useState(0)
    const [toggle, setToggle] = useState(false)
    const optionsRef = useRef()



    const updateQuestion = () => {
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
            if (o.className == "_correct_1inp1_21 undefined") {
                o.style.background = "green"
            } else {
                o.style.background = "red"
            }
        }
        
        console.log(options)
        const timer = setTimeout(() => {
            updateQuestion()
        }, 2000)
        
    }

    return(
        <div className={styles["container"]}>
            <h2>{question.question}</h2>
            <div className={styles['options-container']} ref={optionsRef}>{answers.map((answer) => 
                <button className={`${styles[answer === question.answer ? 'correct' : 'incorrect']} ${styles[toggle ? 'answered' : '']}`}  onClick={handleCheck}>{answer}</button>
            )}</div>
        </div>
    )
}
