import React, { useState, useEffect } from "react";
import styles from "./index.module.css";
import { useParams, Link } from "react-router-dom";

export default function FlashcardsActivity() {
  const [flashcards, setFlashcards] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [i, setI] = useState(0);
  const { category } = useParams();
  const [loaded, setLoaded] = useState(false);

  function handleFlip(cardId) {
    if (flippedCards.includes(cardId)) {
      setFlippedCards(flippedCards.filter((id) => id !== cardId));
    } else {
      setFlippedCards([...flippedCards, cardId]);
    }
  }

  const getData = async () => {
    const response = await fetch(
      `http://localhost:8080/flashcards/${category}`
    );

    const data = await response.json();

    setFlashcards(data.sort(() => Math.random() - 0.5));

    setLoaded(true);
  };

  useEffect(() => {
    getData();
  }, []);

  function next() {
    setI(i + 1);
  }
  function prev() {
    setI(i - 1);
  }
  
  function CurrentFlashcard() {
    return (
      <div className={styles["container"]}>
        <div
          key={flashcards[i].card_id}
          onClick={() => handleFlip(flashcards[i].card_id)}
          className={styles["flashcard-card"]}
          style={{
            transform: flippedCards.includes(flashcards[i].card_id)
              ? "rotateY(180deg)"
              : "none",
          }}
        >
          <div className={styles["front"]}>
            <h2 className={styles["flashcard-title"]}>
              {flashcards[i].collection}
            </h2>
            <h2 className={styles["flashcard-question"]}>
              {flashcards[i].question}
            </h2>
          </div>
          <div className={styles["back"]}>
            <h2 className={styles["flashcard-answer"]}>{flashcards[i].fact}</h2>
          </div>
        </div>
      </div>
    );
  }

  if (i === 0) {
    return (
      <div className={styles["activity"]}>
        {loaded ? <CurrentFlashcard /> : <h1>loading</h1>}
        <div className={styles["options"]}>
          <button className={styles["option"]}>prev</button>
          <button className={styles["option"]} onClick={next}>
            next
          </button>
        </div>
      </div>
    );
  } else if (flashcards[i]) {
    return (
      <div className={styles["activity"]}>
        {loaded ? <CurrentFlashcard /> : <h1>loading</h1>}
        <div className={styles["options"]}>
          <button className={styles["option"]} onClick={prev}>
            prev
          </button>
          <button className={styles["option"]} onClick={next}>
            next
          </button>
        </div>
      </div>
    );
  } else {
    return (
      <div className={styles["activity"]}>
        <div className="no-more-cards">
          <h2>Flashcards finished! Woohoo 🥳</h2>
        </div>
        <div className={styles["options"]}>
          <button className={styles["option"]} onClick={prev}>
            prev
          </button>
          <button className={styles["option"]}>
            <Link className={styles["Link"]} to='/dashboard/flashcards'>exit</Link>
          </button>
        </div>
      </div>
    );
  }
}
