import request from 'superagent'

const baseUrl = '/api/v1/questions'

interface TriviaQuestion {
  category: string
  type: string
  difficulty: string
  question: string
  correct_answer: string
  incorrect_answers: string[]
}

export async function fetchTriviaQuestions() {
  const response = await request.get(
    'https://opentdb.com/api.php?amount=50&category=15&type=boolean'
  )

  return response.body
}
