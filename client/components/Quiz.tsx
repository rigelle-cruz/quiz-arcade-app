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
  const [showQuestions, setShowQuestions] = useState(false)

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

  const startQuestions = () => {
    setShowQuestions(true)
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
    <div className="quiz-container">
      {!isGameOver && showQuestions && currentQuestion < questions.length && (
        <div className="quiz-content">
          <h1>True or False</h1>
          <h2>Question {currentQuestion + 1}</h2>
          <p className="question-text">{questions[currentQuestion].question}</p>
          <div className="button-container">
            <button
              className="answer-button true-button"
              onClick={() =>
                handleAnswer(
                  questions[currentQuestion].correct_answer === 'True'
                )
              }
            >
              True
            </button>
            <button
              className="answer-button false-button"
              onClick={() =>
                handleAnswer(
                  questions[currentQuestion].correct_answer === 'False'
                )
              }
            >
              False
            </button>
          </div>
          <p className="score">Score: {score}</p>
        </div>
      )}
      {!showQuestions && (
        <div className="start">
          <div>
            <h1 className="start-header">TRUE OR FALSE</h1>
          </div>
          <button className="start-button" onClick={startQuestions}>
            Click to Start
          </button>
        </div>
      )}
      {isLoading && <div className="loading">Loading...</div>}
      {isError && <div className="error">Error fetching questions</div>}
    </div>
  )
}

export default Quiz
