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

export async function fetchTriviaQuestions(): Promise<{
  response_code: number
  results: TriviaQuestion[]
}> {
  const response = await request.get(
    'https://opentdb.com/api.php?amount=50&category=15&type=boolean'
  )

  // Decode HTML entities in the questions
  const decodedQuestions = response.body.results.map(
    (question: TriviaQuestion) => {
      return {
        ...question,
        question: decodeHTML(question.question),
      }
    }
  )
  return {
    ...response.body,
    results: decodedQuestions,
  }
}

// Function to decode HTML entities
function decodeHTML(html: string): string {
  const textarea = document.createElement('textarea')
  textarea.innerHTML = html
  return textarea.value
}
