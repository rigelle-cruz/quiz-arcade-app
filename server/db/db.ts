import connection from './connection'

export async function getQuestions(db = connection) {
  return await db('questions').select()
}
