import styles from "./index.module.css"

export default function Flashcard({f, getColours, handleFlip, handleFavorites, flippedCards, favourites}) {
  return (
    
    <div
      key={f.card_id}
      onClick={() => handleFlip(f.card_id)}
      className={styles["flashcard-card"]}
      style={{
        transform: flippedCards.includes(f.card_id)
          ? "rotateY(180deg)"
          : "none",
        background: getColours(f.collection).primary,
        border: `6.5px solid ${getColours(f.collection).secondary}`,
      }}
    >
      <button
        style={{
          color: favourites.includes(f.card_id)
            ? getColours(f.collection).secondary
            : getColours(f.collection).primary,
        }}
        className={`${styles["favoriteBtn"]}`}
        onClick={(e) => handleFavorites(e, f.card_id)}
      >
        ★
      </button>
      <div className={styles["front"]}>
        <h1 className={styles["flashcard-title"]}>{f.collection}</h1>
        <h2 className={styles["flashcard-question"]}>{f.question}</h2>
      </div>
      <div className={styles["back"]}>
        <h2 className={styles["flashcard-answer"]}>{f.fact}</h2>
      </div>
    </div>
  );
}
