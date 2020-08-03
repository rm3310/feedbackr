import React from 'react';

import { handleSubmit, handleChange, renderAnswer } from './formFunctions'

function CreateQuestionForm (props) {
  
  const question = props.question;
  const setQuestion = props.setQuestion;
  const questionInitialState = props.questionInitialState;
  const handleQuestionSubmit = props.handleQuestionSubmit;
  
  return (
    <form className="question-builder" onSubmit={(event)=>handleSubmit(event, handleQuestionSubmit, setQuestion, question, questionInitialState)}>
      
      <h3>Question information</h3>

      <div className="question-builder__input">
        <label>Question</label>
        <input
          type="text"
          name="question"
          value={question.question}
          onChange={(event, index)=>handleChange(event, index, setQuestion, question)}
        ></input>
      </div>

      <div className="question-builder__input">
        <label>Points</label>
        <input
          type="number"
          name="points"
          value={question.points}
          onChange={(event, index)=>handleChange(event, index, setQuestion, question)}
        ></input>
      </div>
      
      <h3>Answer options</h3>
      {renderAnswer(question.questionType, setQuestion, question)}

      {/* Meta-data regarding question */}
      {/* <h3>Question Metadata</h3> */}
      
{/* 
      <div className="question-builder__input">
        <label>Tags</label>
        <input
          type="text"
          name="tags"
          value={question.tags}
          onChange={(event, index)=>handleChange(event, index, setQuestion, question)}
        ></input>
      </div>

      <div className="question-builder__input">
        <label>Time (seconds)</label>
        <input
          type="number"
          name="time"
          value={question.time}
          onChange={(event, index)=>handleChange(event, index, setQuestion, question)}
        ></input>
      </div> */}
      
      <div className="question-builder__input">
        <input type="submit" value="Create new Question" className="submit"></input>
      </div>
    </form>
  )
}

export default CreateQuestionForm;