import { useState } from 'react'
import { useQuery } from 'react-query'

import Questions from './Questions'
import { fetchTriviaQuestions } from '../apis/questionsApi'

function Quiz() {
  const { data, error, isLoading } = useQuery(
    'triviaQuestions',
    fetchTriviaQuestions
  )
  const [score, setScore] = useState(0)
  const [questionIndex, setQuestionIndex] = useState(0)
  const [gameOver, setGameOver] = useState(false)

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (error instanceof Error) {
    return <div>Error: {error.message}</div>
  }

  const currentQuestion = data.results[currentQuestionIndex]

  return (
    <>
      <h1>QUIZ</h1>
      <Questions />
      {/* make conditional rendering */}
    </>
  )
}

export default Quiz
