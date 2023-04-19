import React from "react";
import styles from "./index.module.css"

export default function CreateFlashcardModel() {
  return (
    <div className={styles["overlay"]}>
      <div className={styles["create-flashcard"]}>
        <div key={f.card_id} onClick={() => handleFlip(f.card_id)} className={styles["flashcard-card"]} style={{transform: flippedCards.includes(f.card_id) ? 'rotateY(180deg)' : 'none'}}>
          <div className={styles["front"]}>
            <h2 className={styles["flashcard-title"]}>{f.collection}</h2>
            <h2 className={styles["flashcard-question"]}>{f.question}</h2>
          </div>
          <div className={styles["back"]}>
            <h2 className={styles["flashcard-answer"]}>{f.fact}</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
