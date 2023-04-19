import { useEffect, useState } from "react";
import styles from "./index.module.css";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { CreateFlashcardModal } from "../../components";

export default function FlashcardsList() {
  const { category } = useParams();
  const [flashcards, setFlashcards] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [hasColours, setHasColours] = useState(false);
  const navigate = useNavigate();

  const getColours = () => {
    switch (category) {
      case "Geography":
        return "#60B49A";
      case "History":
        return "#A36B27";
      case "Chemistry":
        return "#FFD300 ";
      case "Biology":
        return "#74B72E";
      case "Physics":
        return "#3861A8";
      case "Mathematics":
        return "#7C4DFF";
      case "English":
        return "#FF6293";
      case "Sports":
        return "#FF6F00";
      case "Religious Education":
        return "#8C7851";
      default:
        break;
    }
  }

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

    setFlashcards(data);

    setHasColours(false);
  };

  useEffect(() => {
    getData();
  }, []);

  const openCloseModal = (e) => {
    e.stopPropagation();
    setShowModal(!showModal);
  };

  const handleFavorites = async (e, cardId) => {
    e.stopPropagation();
    const userId = localStorage.getItem("user_id");
  
    const response = await fetch(
      `http://localhost:8080/flashcards/favorite/user/${userId}/card/${cardId}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ cardId }),
      }
    );
    const data = await response.json();
    return data;

  };

  return (
    <>
      <CreateFlashcardModal
        showModal={showModal}
        setShowModal={setShowModal}
        getData={getData}
      />
      <div className={styles["flashcards"]}>
        <div className={styles["container"]}>
          <h1 className={styles["title"]}>{`${category} Flashcards`}</h1>
          <div className={styles["content"]}>
            <div className={styles["options"]}>
              <div>
                <NavLink
                  to={`/dashboard/flashcards/${category}/activity`}
                  className={`${styles["flashcard-practice"]} ${styles["btn"]}`}
                >
                  Practice
                </NavLink>
              </div>
              <div className={styles["create-back"]}>
                <button
                  className={`${styles["flashcard-create"]} ${styles["btn"]}`}
                  onClick={openCloseModal}
                >
                  Create
                </button>
                <button
                  onClick={() => navigate(-1)}
                  className={`${styles["flashcard-back"]} ${styles["btn"]}`}
                >
                  Back
                </button>
              </div>
            </div>
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
                        : "none",
                      background: getColours()
                    }}
                  >
                    <button className={styles["favoriteBtn"]} onClick={(e) => handleFavorites(e, f.card_id)}>★</button>
                    <div className={styles["front"]}>
                      <h2 className={styles["flashcard-question"]}>
                        {f.question}
                      </h2>
                    </div>
                    <div className={styles["back"]}>
                      <h2 className={styles["flashcard-answer"]}>{f.fact}</h2>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
