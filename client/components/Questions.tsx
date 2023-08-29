import { useState, useEffect } from 'react'

interface QuestionProps {
  question: {
    question: string
    correct_answer: string
  }
  onAnswer: (isCorrect: boolean) => void
  onNext: () => void // Add a callback for moving to the next question
}

function Questions({ question, onAnswer, onNext }: QuestionProps) {
  const [answered, setAnswered] = useState(false)

  const handleAnswer = (isTrue: boolean) => {
    if (!answered) {
      if (isTrue === (question.correct_answer === 'True')) {
        onAnswer(true) // Correct answer, move to the next question
      } else {
        onAnswer(false) // Incorrect answer, trigger Game Over
      }
      setAnswered(true) // Mark the question as answered
    }
  }

  useEffect(() => {
    if (answered) {
      // Reset the answered state when moving to the next question
      setAnswered(false)
    }
  }, [answered])

  return (
    <div>
      <h2>{question.question}</h2>
      {!answered && (
        <div>
          <button onClick={() => handleAnswer(true)}>True</button>
          <button onClick={() => handleAnswer(false)}>False</button>
        </div>
      )}
      {answered && (
        <div>
          <button onClick={onNext}>Next Question</button>
        </div>
      )}
    </div>
  )
}

export default Questions
