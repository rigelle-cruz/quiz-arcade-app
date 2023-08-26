import request from 'superagent'

const baseUrl = '/api/v1/questions'

export async function fetchTriviaQuestions() {
  const response = await request.get(
    'https://opentdb.com/api.php?amount=50&category=15&type=boolean'
  )

  return response.body
}
