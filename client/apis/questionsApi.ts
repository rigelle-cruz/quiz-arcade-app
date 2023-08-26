import request from 'superagent'

const baseUrl = '/api/v1/questions'

const fetchTriviaQuestions = async () => {
  const response = await request.get(
    'https://opentdb.com/api.php?amount=50&category=15&type=boolean'
  )

  return response.body
}
