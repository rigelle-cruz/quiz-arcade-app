import { useState } from 'react'

import Questions from './Questions'

function Quiz() {
  const [score, setScore] = useState(0)
  const [questionIndex, setQuestionIndex] = useState(0)
  const [gameOver, setGameOver] = useState(false)

  return (
    <>
      <h1>QUIZ</h1>
      <Questions />
      {/* make conditional rendering */}
    </>
  )
}

export default Quiz
