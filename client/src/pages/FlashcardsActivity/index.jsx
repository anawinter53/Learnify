import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

export default function FlashcardsActivity() {
  const [flashcards, setFlashcards] = useState([])
  const [sortedFlashcards, setSortedFlashcards] = useState([])
  const { category } = useParams()

  const getData = async () => {
    const response = await fetch(`http://localhost:8080/flashcards/${category}`)

    const data = await response.json()
    console.log(data)

    setFlashcards(data)
  } 

  useEffect(() => {
    getData()
    const sortFlashcards = flashcards.sort(() => Math.random() - 0.5)
    setSortedFlashcards(sortFlashcards)
  }, [])

  let i = 0;
  const next = () => {i + 1};
  const prev = () => {i - 1};
  const exit = () => {<Link to='/dashboard/flashcards/:category'/>}
  function currentFlashcard() {
    <div key={sortedFlashcards[i].card_id} className={styles["flashcard-card"]}>
      <h2 className={styles["flashcard-title"]}>{sortedFlashcards[i].collection}</h2>
      <h2 className={styles["flashcard-question"]}>{sortedFlashcards[i].question}</h2>
    </div>
  }
  console.log(sortedFlashcards[i])

  if (i === 0) {
    return (
      <>
      <currentFlashcard />
      <div className='options'>
        <button className='option'>prev</button>
        <button className='option' onClick={next}>next</button>
      </div>
      </>
    )
  } else if(sortedFlashcards[i]) {
    return (
      <>
      <currentFlashcard />
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
