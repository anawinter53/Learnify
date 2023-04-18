import { useEffect, useState } from "react"
import styles from "./index.module.css"
import { useParams } from "react-router-dom"

export default function FlashcardsList() {

  const { category } = useParams()
  const [flashcards, setFlashcards] = useState([])
  const [flippedCards, setFlippedCards] = useState([]);

  function handleFlip(cardId) {
    if (flippedCards.includes(cardId)) {
      setFlippedCards(flippedCards.filter(id => id !== cardId));
    } else {
      setFlippedCards([...flippedCards, cardId]);
    }
  }

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
              <div key={f.card_id} onClick={() => handleFlip(f.card_id)} className={styles["flashcard-card"]} style={{transform: flippedCards.includes(f.card_id) ? 'rotateY(180deg)' : 'none'}}>
                <div className={styles["front"]}>
                  <h2 className={styles["flashcard-title"]}>{f.collection}</h2>
                  <h2 className={styles["flashcard-question"]}>{f.question}</h2>
                </div>
                <div className={styles["back"]}>
                  <h2 className={styles["flashcard-answer"]}>{f.fact}</h2>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}