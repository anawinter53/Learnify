import React, { useState } from "react";
import styles from "./index.module.css";

export default function CreateFlashcardModal({ showModal, setShowModal }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [subject, setSubject] = useState("");

  function handleFlip() {
    setIsFlipped(!isFlipped);
  }

  const handleSubjectChange = (e) => {
    setSubject(e.target.value);
  };

  const handleInputClick = (e) => {
    e.stopPropagation();
  };

  const openCloseModal = (e) => {
    e.stopPropagation()
    setShowModal(!showModal);
    setIsFlipped(false);
  };

  return (
    <div
      className={styles["overlay"]}
      style={{ display: showModal ? "flex" : "none" }}
    >
      <div
        className={styles["create-flashcard"]}
        style={{ transform: isFlipped ? "rotateY(180deg)" : "none" }}
        onClick={handleFlip}
      >
        <div className={styles["front"]}>
          <select value={subject} onChange={handleSubjectChange}onClick={handleInputClick}>
            <option disabled value="">
              Select a subject
            </option>
            <option value="geography">Geography</option>
            <option value="history">History</option>
            <option value="chemistry">Chemistry</option>
            <option value="biology">Biology</option>
            <option value="physics">Physics</option>
            <option value="mathematics">Mathematics</option>
            <option value="english">English</option>
            <option value="sports">Sports</option>
            <option value="religious-education">
              Religious Education
            </option>
          </select>
          <input className={styles["flashcard-question"]} type="text" placeholder="Question" onClick={handleInputClick} />
          <div className={styles["options"]}>
            <button onClick={openCloseModal} className={styles["cancel"]}>Cancel</button>
            <button onClick={openCloseModal} className={styles["submit"]}>Submit</button>
          </div>
        </div>
        <div className={styles["back"]}>
          <input className={styles["flashcard-answer"]} type="text" placeholder="Answer" onClick={handleInputClick} />
        </div>
      </div>
    </div>
  );
}
