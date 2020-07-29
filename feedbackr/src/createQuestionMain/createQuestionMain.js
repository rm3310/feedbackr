import React, { useState } from 'react';

// import children
import CreateQuestionForm from './createQuestionForm/createQuestionForm';
import CreateQuestionPreview from './createQuestionPreview/createQuestionPreview';

const db = [];

function CreateQuestionMain (props) {
  
  const [ question, setQuestion ] = useState({
    questionType: "", // need to create a library of question types
    question: "",
    points: 0,
    answerOptions: [],
    correctAnswer: "",
    tags: [],
    time: 0,
  })

  const handleQuestionSubmit = function (question) {
    console.log(question);
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