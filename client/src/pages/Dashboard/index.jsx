import { useEffect, useState } from "react";
import styles from "./index.module.css";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {

  const [username, setUsername] = useState("")
  const [flashcards, setFlashcards] = useState([])
  const [flippedCards, setFlippedCards] = useState([]);



  function handleFlip(cardId) {
    if (flippedCards.includes(cardId)) {
      setFlippedCards(flippedCards.filter((id) => id !== cardId));
    } else {
      setFlippedCards([...flippedCards, cardId]);
    }
  }


  const getUser = async () => {
    const response = await fetch(`http://localhost:8080/users/username/${localStorage.getItem("user_id")}`)

    setUsername(await response.json())
  }

  const getFavoritedCards = async () => {
    const response = await fetch(`http://localhost:8080/flashcards/favorite/user/${localStorage.getItem("user_id")}`)

    setFlashcards(await response.json())
  }

  useEffect(() => {
    getUser()
    getFavoritedCards()
  }, [])

  return (
    <div className={styles["dashboard"]}>
      <div className={styles["container"]}>
        <h1 className={styles["title"]}>Welcome back {username}</h1>
        <div className={styles["content"]}>
          <h1 className={styles["content-heading"]}>Favorited flashcards</h1>
          <div className={styles["cards"]}>
          {flashcards.map((f) => {
                return (
                  <div
                    key={f.card_id}
                    onClick={() => handleFlip(f.card_id)}
                    className={styles["flashcard-card"]}
                    style={{
                      transform: flippedCards.includes(f.card_id)
                        ? "rotateY(180deg)"
                        : "none"
                    }}
                  >
                    
                    <div className={styles["front"]}>
                      <h2 className={styles["flashcard-question"]}>
                        {f.question}
                      </h2>
                      <button className={styles["favoriteBtn"]} onClick={() => handleFavorites(f.card_id)}>Favorite</button>
                    </div>
                    <div className={styles["back"]}>
                      <h2 className={styles["flashcard-answer"]}>{f.fact}</h2>
                      <button className={styles["favoriteBtn"]} onClick={() => handleFavorites(f.card_id)}>Favorite</button>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  )
}
