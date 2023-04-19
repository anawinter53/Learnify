import React, { useState } from "react";
import styles from "./index.module.css";

export default function CreateFlashcardModal({ showModal, setShowModal }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [subject, setSubject] = useState("");
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [data, setData] = useState({});

  function handleFlip() {
    setIsFlipped(!isFlipped);
  }

  const handleQuestionChange = (e) => {
    setQuestion(e.target.value);
  };

  const handleAnswerChange = (e) => {
    setAnswer(e.target.value);
  };

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

  async function createFlashcard() {
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ collection: subject, question: question, fact: answer })
      };
    
      const res = await fetch(`http://localhost:8080/flashcards/`, options);
      
      if (res.ok) {
        console.log('created')
      } else {
        console.log("Something failed, very sad! :(");
      }
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setIsFlipped(false);

    if (question && subject && answer) {
      createFlashcard();
      setShowModal(false);
      e.target.reset()
    }
  };

  return (
    <div
      className={styles["overlay"]}
      style={{ display: showModal ? "flex" : "none" }}
    >
      <form onSubmit={handleFormSubmit}>
        <div className={styles["create-flashcard"]} style={{ transform: isFlipped ? "rotateY(180deg)" : "none" }} onClick={handleFlip}>
          <div className={styles["front"]}>
            <select value={subject} onChange={handleSubjectChange} onClick={handleInputClick} name="subjects">
              <option disabled value="">
                Select a subject
              </option>
              <option value="Geography">Geography</option>
              <option value="History">History</option>
              <option value="Chemistry">Chemistry</option>
              <option value="Biology">Biology</option>
              <option value="Physics">Physics</option>
              <option value="Mathematics">Mathematics</option>
              <option value="English">English</option>
              <option value="Sports">Sports</option>
              <option value="Religious-Education">
                Religious Education
              </option>
            </select>
            <input className={styles["flashcard-question"]} type="text" name="question" placeholder="Question" onChange={handleQuestionChange} onClick={handleInputClick}/>
            <div className={styles["options"]}>
              <button onClick={openCloseModal} className={styles["cancel"]}>Cancel</button>
              <button type="submit" className={styles["submit"]}>Submit</button>
            </div>
          </div>
          <div className={styles["back"]}>
            <input className={styles["flashcard-answer"]} type="text" name="answer" placeholder="Answer" onChange={handleAnswerChange} onClick={handleInputClick}/>
            <div className={styles["options"]}>
              <button onClick={openCloseModal} className={styles["cancel"]}>Cancel</button>
              <button type="submit" className={styles["submit"]}>Submit</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}