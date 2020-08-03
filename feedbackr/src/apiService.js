const BASE_URL = 'http://localhost:3001';

export const getAllQuizzes = async function (setDb) {
  fetch(`${BASE_URL}/quizzes`)
  .then(res => res.json())
  .then(quizzes => setDb(quizzes))
  .catch(err => console.log(err));
}

export const getOneQuiz = async function (quizId, setQuiz) {
  fetch(`${BASE_URL}/quizzes`,{
    method: 'POST',
    headers: {
      'Content-Type':'application/json'
    },
    body: JSON.stringify(quizId)
  })
  .then(res => res.json())
  .then(quiz => setQuiz(quiz))
  .catch(err => console.log(err));
}

export const postQuiz = async function (quiz, setQuizId) {
  fetch(`${BASE_URL}/quizzes`,{
    method: 'POST',
    headers: {
      'Content-Type':'application/json'
    },
    body: JSON.stringify(quiz)
  })
  .then(res => res.json())
  .then(quiz => setQuizId(quiz._id))
  .catch(err => console.log(err));
}

export const updateQuiz = async function (quiz) {
  fetch(`${BASE_URL}/quiz-update`,{
    method: 'POST',
    headers: {
      'Content-Type':'application/json'
    },
    body: JSON.stringify(quiz)
  })
  .then(res=>res.json())
  .catch(err => console.log(err));
}

export const postQuestion = async function (quiz) {
  fetch(`${BASE_URL}/questions`,{
    method: 'POST',
    headers: {
      'Content-Type':'application/json'
    },
    body: JSON.stringify(quiz)
  })
  .then(res=>res.json())
  .catch(err => console.log(err));
}

