import { useEffect, useState } from "react"
import styles from "./index.module.css"
import { useParams } from "react-router-dom"

export default function FlashcardsList() {
  const [flashcards, setFlashcards] = useState([])
  const { category } = useParams()

  const getData = async () => {
    const response = await fetch(`http://localhost:8080/flashcards/${category}`)

    const data = await response.json()
    console.log(data)

    setFlashcards(data)
  } 

  useEffect(() => {
    getData()
  }, [])

  return (
    <div className={styles["flashcards"]}>
      <div className={styles["container"]}>
        <h1 className={styles["title"]}>{`${category} Flashcards`}</h1>
        <div className={styles["content"]}>
          {flashcards.map((f) => {
            return (
              <div key={f.card_id} className={styles["flashcard-card"]}>
                <h2 className={styles["flashcard-title"]}>{f.collection}</h2>
                <h2 className={styles["flashcard-question"]}>{f.question}</h2>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
