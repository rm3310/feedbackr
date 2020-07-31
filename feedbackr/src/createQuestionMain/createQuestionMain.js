import React, { useState } from 'react';

// import children
import CreateQuestionForm from './createQuestionForm/createQuestionForm';
import CreateQuestionPreview from './createQuestionPreview/createQuestionPreview';

const db = [];
// const fullquestion

function CreateQuestionMain (props) {
  
  const [ question, setQuestion ] = useState({
    questionType: 1, // need to create a library of question types
    question: "",
    points: 0,
    answerOptions: [{
      value: 0,
      label: ""
    }],
    correctAnswer: "",
    tags: [],
    time: 0,
  })

  const handleQuestionSubmit = function (question) {
    
    db.push(question);
    // will use fetch to send to backend and save in database

    console.log(db);
  }
  
  return (
    <div>
      <CreateQuestionForm handleQuestionSubmit={handleQuestionSubmit} question={question} setQuestion={setQuestion}/>
      <CreateQuestionPreview/>
    </div>
  )
}

export default CreateQuestionMain;