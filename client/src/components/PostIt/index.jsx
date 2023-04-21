import styles from "./index.module.css";
import { MdDashboard, BsQuestionSquareFill, BsCardText, FaUserAlt } from 'react-icons/all';

export default function PostIt({card0, card1, card2, card3}) {
  const scroll = (card) => {
    const headerOffset = 80;
    const elementPosition = card.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    setTimeout(() => {
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }, 250);
  }

  return (
    <div className={styles["card-container"]}>
      <div onClick={() => scroll(card0.current)} className={`${styles["card"]} ${styles["card-0"]}`} role='card'>
        <div className={styles["card-heading"]}>Dashboard</div>
        <div className={styles["card-body"]}><MdDashboard className={styles["icon"]}/></div>
      </div>
      <div onClick={() => scroll(card1.current)} className={`${styles["card"]} ${styles["card-1"]}`} role='card'>
        <div className={styles["card-heading"]}>Quizzes</div>
        <div className={styles["card-body"]}><BsQuestionSquareFill className={styles["icon"]}/></div>
      </div>
      <div onClick={() => scroll(card2.current)} className={`${styles["card"]} ${styles["card-2"]}`} role='card'>
        <div className={styles["card-heading"]}>Flashcards</div>
        <div className={styles["card-body"]}><BsCardText className={styles["icon"]}/></div>
      </div>
      <div onClick={() => scroll(card3.current)} className={`${styles["card"]} ${styles["card-3"]}`} role='card'>
        <div className={styles["card-heading"]}>User Profile</div>
        <div className={styles["card-body"]}><FaUserAlt className={styles["icon"]}/></div>
      </div>
    </div>
  );
}
