import { useQuery } from 'react-query'

interface QuestionProps {
  question: {
    question: string
    correct_answer: string
  }
  onAnswer: (isCorrect: boolean) => void
}

function Questions() {
  return <div></div>
}

export default Questions
