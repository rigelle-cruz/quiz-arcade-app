import { useState } from 'react'
import { useQuery } from 'react-query'

import Questions from './Questions'
import { fetchTriviaQuestions } from '../apis/questionsApi'
import GameOver from './GameOver'

function Quiz() {
  const { data, error, isLoading } = useQuery(
    'triviaQuestions',
    fetchTriviaQuestions
  )

  const [score, setScore] = useState<number>(0)
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  // const [gameOver, setGameOver] = useState(false)

  const handleAnswer = (isCorrect: boolean) => {
    if (isCorrect) {
      setScore(score + 1)
    }
    // Move to the next question
    setCurrentQuestionIndex(currentQuestionIndex + 1)
  }

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (error instanceof Error) {
    return <div>Error: {error.message}</div>
  }
  if (currentQuestionIndex >= data.results.length) {
    // All questions answered, show Game Over
    return <GameOver score={score} />
  }

  const currentQuestion = data.results[currentQuestionIndex]

  return (
    <>
      <h1>Quiz Game</h1>
      <div>
        <p>Score: {score}</p>
        {currentQuestionIndex < data.results.length ? (
          <Questions
            question={currentQuestion}
            onAnswer={handleAnswer}
            onNext={() => {}}
          />
        ) : (
          <GameOver score={score} />
        )}
      </div>
    </>
  )
}

export default Quiz
