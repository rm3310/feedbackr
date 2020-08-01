import React, { useState } from 'react';

// 
import CreateQuiz from '../CreateQuiz/createQuiz';

// import children
import CreateQuestionForm from '../CreateQuestionForm/createQuestionForm';
import CreateQuestionPreview from '../CreateQuestionPreview/createQuestionPreview';



function CreateQuestionMain (props) {
  
  const quiz = props.quiz;
  const setQuiz = props.setQuiz;
  const db = props.db;
  const setDb = props.setDb

  const questionInitialState = { // object form initial question state
    questionType: 1,
    question: "",
    points: 0,
    answerOptions: [{
      value: 0,
      label: ""
    }],
    correctAnswer: null,
    tags: [],
    time: 0,
  }

  const [ question, setQuestion ] = useState(questionInitialState)

  const handleQuestionSubmit = function (fullQuestion) {
    setQuiz((question)=>[...question, fullQuestion])
    // will use fetch to send to backend and save in database

    console.log(quiz);
  }

  const handleQuizSubmit = function () {
    setDb((quizzes)=>[...quizzes, quiz]);
    setQuiz([]);
    console.log(db);
  }
  
  return (
    <div>
      <CreateQuestionForm handleQuestionSubmit={handleQuestionSubmit} question={question} setQuestion={setQuestion}/>
      <button onClick={handleQuizSubmit}>Save Quiz</button>
      <CreateQuiz quiz={quiz} />
      <CreateQuestionPreview question={question} />
    </div>
  )
}

export default CreateQuestionMain;