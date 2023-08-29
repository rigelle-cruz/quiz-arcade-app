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
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  // const [gameOver, setGameOver] = useState(false)

  const handleAnswer = (isCorrect: boolean) => {
    if (isCorrect) {
      setScore(score + 1)
      setCurrentQuestionIndex(currentQuestionIndex + 1)
    }
  }

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (error instanceof Error) {
    return <div>Error: {error.message}</div>
  }

  const currentQuestion = data.results[currentQuestionIndex]

  return (
    <>
      <h1>Quiz Game</h1>
      <div>
        <p>Score: {score}</p>
        {currentQuestionIndex < data.results.length ? (
          <Questions question={currentQuestion} onAnswer={handleAnswer} />
        ) : (
          <GameOver />
        )}
      </div>
    </>
  )
}

export default Quiz
