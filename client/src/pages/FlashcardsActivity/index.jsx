import React, { useState, useEffect } from 'react';
import styles from "./index.module.css";
import { useParams, Link } from 'react-router-dom';

export default function FlashcardsActivity() {
  const [flashcards, setFlashcards] = useState([])
  const { category } = useParams()
  const [loaded, setLoaded] = useState(false)

  const getData = async () => {
    const response = await fetch(`http://localhost:8080/flashcards/${category}`)

    const data = await response.json()

    setFlashcards(data.sort(() => Math.random() - 0.5))

    setLoaded(true)
  } 

  useEffect(() => {
    getData();
  }, []);

  let i = 0;
  const next = () => {i + 1};
  const prev = () => {i - 1};
  const exit = () => {<Link to='/dashboard/flashcards/:category'/>}
  function CurrentFlashcard() {
    return (
      <div key={flashcards[i].card_id} className={styles["flashcard-card"]}>
        <h2 className={styles["flashcard-title"]}>{flashcards[i].collection}</h2>
        <h2 className={styles["flashcard-question"]}>{flashcards[i].question}</h2>
      </div>
    )
  }

  if (i === 0) {
    return (
      <>
      {loaded ? <CurrentFlashcard /> : <h1>loading</h1>}
      <div className='options'>
        <button className='option'>prev</button>
        <button className='option' onClick={next}>next</button>
      </div>
      </>
    )
  } else if(flashcards[i]) {
    return (
      <>
      {loaded ? <CurrentFlashcard /> : <h1>loading</h1>}
      <div className='options'>
        <button className='option' onClick={prev}>prev</button>
        <button className='option' onClick={next}>next</button>
      </div>
      </>
    )
  } else {
    return (
      <>
      <div className='no-more-cards'>
        <h2>Flashcards finished! Woohoo 🥳</h2>
      </div>
      <div className='options'>
        <button className='option' onClick={prev}>prev</button>
        <button className='option' onClick={exit}>exit</button>
      </div>
      </>
    )
  }
}
