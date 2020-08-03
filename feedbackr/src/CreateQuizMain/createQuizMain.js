import React, { useState } from 'react';

// Functions
import { updateQuiz, postQuestion, getOneQuiz } from '../apiService'

// Components
import ViewQuiz from '../ViewQuiz/viewQuiz';
import CreateQuestionForm from '../CreateQuestionForm/createQuestionForm';
import CreateQuestionPreview from '../CreateQuestionPreview/createQuestionPreview';
import CreateQuizForm from '../CreateQuizForm/createQuizForm';

function CreateQuizMain (props) {
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

  const [ quizId, setQuizId ] = useState("");
  const [ question, setQuestion ] = useState(questionInitialState);
  const quiz = props.quiz;
  const setQuiz = props.setQuiz;
  const db = props.db;
  const setDb = props.setDb;


  const handleQuestionSubmit = function (newQuestion) {
    const newQuestionToDb = {
      quizId: quizId,
      question: newQuestion
    }
    postQuestion(newQuestionToDb);
    getOneQuiz(quizId, setQuiz);
    console.log('quiz after question added', quiz);
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
    updateQuiz(update);
  }
  
  return (
    <div className="create-quiz">
      <CreateQuizForm quiz={quiz} setQuiz={setQuiz} quizId={quizId} setQuizId={setQuizId}/>
      
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