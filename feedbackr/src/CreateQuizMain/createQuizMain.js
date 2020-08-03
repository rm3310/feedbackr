import React, { useState } from 'react';

// Functions
import { getAllQuizzes, postQuiz, updateQuiz, postQuestion, getOneQuiz } from '../apiService'

// Components
import ViewQuiz from '../ViewQuiz/viewQuiz';
import CreateQuestionForm from '../CreateQuestionForm/createQuestionForm';
import CreateQuestionPreview from '../CreateQuestionPreview/createQuestionPreview';

function CreateQuizMain (props) {
  let quizId = null;
  const quiz = props.quiz;
  const setQuiz = props.setQuiz;
  const db = props.db;
  const setDb = props.setDb;

  const questionInitialState = { // object form initial question state
    questionType: 1,
    question: "",
    points: 0,
    answerOptions: [{
      value: 0,
      label: ""
    }],
    correctAnswer: null,
    tags: "",
    time: 0,
  }

  const [ question, setQuestion ] = useState(questionInitialState)

  const handleQuestionSubmit = function (newQuestion) {
    setQuiz(prevState => {
      const questions = [...prevState.questions, newQuestion]
      const newState = {...prevState, questions: questions}
      return newState
    });

    console.log('quiz after question submit',quiz);
    const newQuestionToDb = {
      quizId: quizId,
      question: newQuestion
    }
    // postQuestion(newQuestionToDb);
    // 
    // then get one quiz and setQuiz by that
  }

  const handleSaveQuiz = function () {
    console.log("THE CURRENT QUIZ", quiz)
    setDb(prevState => ([...prevState, quiz]));
    console.log('THE FULL QUIZ DATABASE', db);
    const update = {
      quizId: quizId,
      name: quiz.name,
      tags: quiz.tags
    }
    // updateQuiz(update);
  }

  const handleQuizName = function (event) {
    event.persist();
    setQuiz(prevState => {
      const newState = {
        ...prevState,
        name: event.target.value
      }
      return newState;
    })
    console.log('quiz after name change', quiz);
  }

  const handleQuizTags = function (event) {
    event.persist();
    setQuiz(prevState => {
      const newState = {
        ...prevState,
        tags: event.target.value
      }
      return newState;
    })
    console.log('quiz after tag change', quiz);
  }

  const handleCreateQuiz = function () {
    setQuiz({
      name: "",
      tags: "",
      questions: []
    });

    // const currentQuiz = postQuiz(quiz);// create quiz - create new quiz ID
    // quizId = currentQuiz._id;
  }
  
  return (
    <div className="create-quiz">
      <div className="create-quiz__details">
        <div className="create-quiz__details__container modal"></div>
        <p>Quiz Name*</p>
        <input type="text" value={quiz.name} onChange={handleQuizName} required></input>
        <p>Quiz tags</p>
        <input type="text" value={quiz.tags} onChange={handleQuizTags}></input>
        <button onClick={handleCreateQuiz} className="modal-container">Create Quiz</button>
      </div>
      <div className="create-quiz__create-question-form">
        <CreateQuestionForm handleQuestionSubmit={handleQuestionSubmit} question={question} setQuestion={setQuestion} questionInitialState={questionInitialState}/>
        <button onClick={handleSaveQuiz}>Update quiz details</button>
      </div>

      <div className="create-quiz__quiz-preview">
        <h2>Quiz preview</h2>
        <ViewQuiz quiz={quiz} />
        <CreateQuestionPreview question={question} />
      </div>
    </div>
  )
}

export default CreateQuizMain