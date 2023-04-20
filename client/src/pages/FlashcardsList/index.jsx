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
        return {"primary": "#4CB731", "secondary": "#2C8715"};
      case "History":
        return {"primary": "#F26E6E", "secondary": "#CF4B4B"};
      case "Chemistry":
        return {"primary": "#368DDD", "secondary": "#1D6CB5"};
      case "Biology":
        return {"primary": "#D47902", "secondary": "#B16610"};
      case "Physics":
        return {"primary": "#F26E6E", "secondary": "#CF4B4B"};
      case "Maths":
        return {"primary": "#368DDD", "secondary": "#1D6CB5"};
      case "English Literature":
        return {"primary": "#D47902", "secondary": "#B16610"};
      case "Sports Science":
        return {"primary": "#E5DF46", "secondary": "#D8B603"};
      case "Religious Education":
        return {"primary": "#4CB731", "secondary": "#2C8715"};
      default:
        console.log(category)
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

    console.log(data)

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
                      background: getColours().primary,
                      border: `6.5px solid ${getColours().secondary}`
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
