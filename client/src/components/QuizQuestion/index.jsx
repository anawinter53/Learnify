import { useNavigate } from 'react-router-dom'
import styles from './index.module.css'
import React, { useEffect, useState, useRef } from 'react'

export default function QuizQuestion({questions, updateScore}) {
    const [answers, setAnswers] = useState([])
    const [question, setQuestion] = useState([])
    const [count, setCount] = useState(0)
    const [toggle, setToggle] = useState(false)
    const [score, setScore] = useState(0)
    const optionsRef = useRef()
    const navigate = useNavigate()

    const getColours = () => {
      const colours = {
        "orange": {
          "primary": "#D47902",
          "secondary": "#B16610",
        },
        "red": {
          "primary": "#F26E6E",
          "secondary": "#CF4B4B",
        },
        "green": {
          "primary": "#4CB731",
          "secondary": "#2C8715",
        },
        "blue": {
          "primary": "#368DDD",
          "secondary": "#1D6CB5",
        }
      }
    
      return colours
    }

    const updateQuestion = async () => {
        if (count < questions.length) {
            setQuestion(questions[count])
        setAnswers([questions[count].answer, questions[count].fake_answer1, questions[count].fake_answer2, questions[count].fake_answer3].sort(() => Math.random() - 0.5));
        setCount(count + 1)
        setToggle(false)
        let i = 0;
        for (const o of optionsRef.current.children) {
          o.style.background = getColours()[Object.keys(getColours())[i]].primary;
          o.style.border = `6.5px solid ${getColours()[Object.keys(getColours())[i]].secondary}`;
          o.removeAttribute("disabled");
          i++;
        }

        
        } else {
            setToggle(true)
        }
        
    }

    useEffect(() => {
        updateQuestion()
    }, [])

    const handleCheck = (e) => {
        const options = optionsRef.current.children
        for (const o of options) {
            if (o.className.includes("incorrect")) {
                o.style.background = "rgb(243, 85, 85)"
                o.style.border = "6.5px solid rgb(243, 85, 85)"
            } else {
                o.style.background = "rgb(84, 223, 79)"
                o.style.border = "6.5px solid rgb(84, 223, 79)"
            }
            o.setAttribute("disabled", true)
        }
        
        if (e.target.textContent == question.answer) {
            setScore(score + 1)
        }
        
        const timer = setTimeout(() => {
            updateQuestion()
        }, 2000)
        
    }

    const handleSubmit = () => {
        if (toggle) {
            const id = localStorage.getItem("user_id")
            updateScore(id, score, questions.length)
        }
    }

    useEffect(() => {
        handleSubmit()
    }, [toggle])

    return(
      <div className={styles["parent"]}>
        <div className={styles["options"]}>
          <p className={`${styles['score']} ${styles['btn']}`}>Score: {score}</p>
          <button onClick={() => navigate(-1)} className={`${styles["flashcard-back"]} ${styles["btn"]}`}>Back</button>
        </div>
        <div className={styles['content']}>  
          <div className={styles['question-info']}>  
            <h2>Question {count} :</h2>
          </div>
          <h1 className={styles['question']}>{question.question}</h1>
          <div className={styles['options-container']} ref={optionsRef}>
          {answers.map((answer, i) => 
            <button 
              key={i} 
              className={`${styles["option"]} ${styles[answer === question.answer ? 'correct' : 'incorrect']}`} 
              style={{background: getColours()[Object.keys(getColours())[i]].primary, 
                      border: `6.5px solid ${getColours()[Object.keys(getColours())[i]].secondary}`}} 
              onClick={handleCheck}>
                {answer}
            </button>
          )}
          </div>
        </div>
        <div className={`${styles[toggle ? 'quiz-complete' : 'quiz-incomplete']}`}>
          <h2>Quiz Complete!</h2>
          <p>You scored {score} / {questions.length}</p>
        </div>
      </div>

    )
}
