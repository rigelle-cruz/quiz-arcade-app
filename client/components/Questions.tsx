import { useQuery } from 'react-query'
import { fetchTriviaQuestions } from '../apis/questionsApi'

interface QuestionProps {
  question: {
    question: string
    correct_answer: string
  }
  onAnswer: (isCorrect: boolean) => void
}

function Questions() {
  const { data, error, isLoading } = useQuery(
    'triviaQuestions',
    fetchTriviaQuestions
  )

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (error instanceof Error) {
    return <div>Error: {error.message}</div>
  }

  return (
    <div>
      <h1>Trivia Questions</h1>
      <ul>
        {data.results.map((question: any, index: number) => (
          <li key={index}>{question.question}</li>
        ))}
      </ul>
    </div>
  )
}

export default Questions
