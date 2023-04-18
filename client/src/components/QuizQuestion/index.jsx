import styles from './index.module.css'
import React from 'react'

export default function QuizQuestion({question}) {
    return(
        <div>
            <h2>{question.question}</h2>
        </div>
    )
}
