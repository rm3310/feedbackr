import React, { useState } from 'react';

// import children
import CreateQuestionForm from './CreateQuestionForm/createQuestionForm';
import CreateQuestionPreview from './CreateQuestionPreview/createQuestionPreview';

const db = [];

function CreateQuestionMain (props) {
  
  const questionInitialState = { // object form initial question state
    questionType: 1,
    question: "",
    points: 0,
    answerOptions: [{
      value: 0,
      label: ""
    }],
    correctAnswer: "",
    tags: [],
    time: 0,
  }

  const [ question, setQuestion ] = useState(questionInitialState)

  const handleQuestionSubmit = function (fullQuestion) {
    
    db.push(fullQuestion);
    // will use fetch to send to backend and save in database

    console.log(db);
  }
  
  return (
    <div>
      <CreateQuestionForm handleQuestionSubmit={handleQuestionSubmit} question={question} setQuestion={setQuestion}/>
      <CreateQuestionPreview question={question} />
    </div>
  )
}

export default CreateQuestionMain;