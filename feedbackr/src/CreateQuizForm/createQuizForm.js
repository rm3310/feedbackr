import React from 'react';

// Functions
import { postQuiz, updateQuiz } from '../apiService'

function CreateQuizForm (props) {
  const quizId = props.quizId;
  const setQuizId = props.setQuizId;
  const quiz = props.quiz;
  const setQuiz = props.setQuiz;

  const handleQuizName = function (event) {
    event.persist();
    setQuiz(prevState => {
      const newState = {
        ...prevState,
        name: event.target.value
      }
      return newState;
    })
    if (quizId.length>0) {
      const updatedQuiz = {
        quizId: props.quizId,
        ...quiz
      }
      updateQuiz(updatedQuiz);
    }
    console.log('quiz after name change', quiz);
  }

  const handleCreateQuiz = function () {
    postQuiz(quiz, setQuizId);
    const element = document.getElementById('details');

  }

  return (
    <div id="details" className="create-quiz__details modal">
      <p>Quiz Name:</p>
      <input type="text" value={quiz.name} onChange={handleQuizName} required></input>
      <button onClick={handleCreateQuiz} id="create-quiz" className="modal-container">Create Quiz</button>
    </div>
  )
}

export default CreateQuizForm;