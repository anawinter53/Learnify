import React, { useState } from 'react'

export default function FlashcardActivity() {
  const [flipped, setFlipped] = useState(false)
  const [flashcards, setFlashcards] = useState([])
  const { category } = useParams()

  const getData = async () => {
    const response = await fetch(`http://localhost:8080/flashcards/${category}`)

    const data = await response.json()
    console.log(data)

    setFlashcards(data)
  } 

  useEffect(() => {
    getData()
  }, [])

  return (
    <div onClick={setFlipped(!flipped)}>
      {flipped ? flashcards.fact : flashcards.question}
      <div className='options'>
        <button className='option'>prev</button>
        <button className='option'>next</button>
      </div>
    </div>
  )
}
