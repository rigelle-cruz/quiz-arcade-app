import request from 'superagent'

const baseUrl = '/api/v1/questions'

export async function fetchedQuestions() {
  const res = await request.get(baseUrl)
  return res.body
}
