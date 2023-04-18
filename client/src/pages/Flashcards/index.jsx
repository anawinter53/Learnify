import { useEffect, useState } from "react"
import { Categories } from "../../components"
import styles from "./index.module.css"

export default function Flashcards() {

  const [flashcards, setFlashcards] = useState([])

  const getData = async () => {
    const response = await fetch("http://localhost:8080/flashcards/")

    const data = await response.json()

    setFlashcards(data)
  } 

  useEffect(() => {
    getData()
  }, [])

  return (
    <div className={styles["flashcards"]}>
      <div className={styles["container"]}>
        <h1 className={styles["title"]}>Flashcards</h1>
        <div className={styles["content"]}>
          {/* {flashcards.map((f) => {
            return (
              <div key={f.card_id} className={styles["flashcard-card"]}>
                <h2 className={styles["flashcard-title"]}>{f.collection}</h2>
                <h2 className={styles["flashcard-question"]}>{f.question}</h2>
              </div>
            )
          })} */}
          <Categories />
        </div>
      </div>
    </div>
  )
}
