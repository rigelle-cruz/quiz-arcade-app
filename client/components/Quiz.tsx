import { useState } from 'react'
import { useQuery } from 'react-query'

import { fetchTriviaQuestions } from '../apis/questionsApi'
import { useNavigate } from 'react-router-dom'

interface Question {
  category: string
  type: string
  difficulty: string
  question: string
  correct_answer: string
  incorrect_answers: string[]
}

function Quiz() {
  const {
    data: questionsData,
    isLoading,
    isError,
  } = useQuery('triviaQuestions', fetchTriviaQuestions)

  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [score, setScore] = useState(0)
  const [isGameOver, setIsGameOver] = useState(false)

  const questions: Question[] = questionsData?.results || []

  const navigate = useNavigate()

  const handleAnswer = (isCorrect: boolean) => {
    if (isCorrect) {
      setScore(score + 1)
    } else {
      setIsGameOver(true)
      navigate('/gameover')
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1)
    }
  }

  if (isGameOver) {
    return null
  }

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (isError) {
    return <div>Error fetching questions</div>
  }

  return (
    <div>
      {!isGameOver && currentQuestion < questions.length && (
        <div>
          <h2>True or False Quiz</h2>
          <h3>Question {currentQuestion + 1}</h3>
          <p>{questions[currentQuestion].question}</p>
          <button
            onClick={() =>
              handleAnswer(questions[currentQuestion].correct_answer === 'True')
            }
          >
            True
          </button>
          <button
            onClick={() =>
              handleAnswer(
                questions[currentQuestion].correct_answer === 'False'
              )
            }
          >
            False
          </button>
          <p>Score: {score}</p>
        </div>
      )}
    </div>
  )
}

export default Quiz
