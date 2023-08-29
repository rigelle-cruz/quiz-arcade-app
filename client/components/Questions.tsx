import { useState } from 'react'

interface QuestionProps {
  question: {
    question: string
    correct_answer: string
  }
  onAnswer: (isCorrect: boolean) => void
}

function Questions({ question, onAnswer }: QuestionProps) {
  const [answered, setAnswered] = useState(false)
  const handleAnswer = (isTrue: boolean) => {
    if (isTrue === (question.correct_answer === 'True')) {
      onAnswer(true) // Correct answer, move to the next question
    } else {
      onAnswer(false) // Incorrect answer, trigger Game Over
    }
    setAnswered(true) // Mark the question as answered
  }

  return (
    <div>
      <h2>{question.question}</h2>
      {!answered && (
        <div>
          <button onClick={() => handleAnswer(true)}>True</button>
          <button onClick={() => handleAnswer(false)}>False</button>
        </div>
      )}
    </div>
  )
}

export default Questions
