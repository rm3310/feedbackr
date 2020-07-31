import React from 'react';

function MultipleChoice (props) {
  
  const question = props.question;

  const handleChange = props.handleChange;
  const handleAdd = props.handleAdd
  const handleRemove = props.handleRemove
  
  return (
    <div>
      {question.answerOptions.map((option, index) => (
        <div key={index} className="question-builder__input"> 
          <label>Answer option {String.fromCharCode(index+65)}</label>
          <input
            className="answers"
            name="answerOptions"
            value={option.label}
            onChange={(event) => handleChange(event, index)}
          ></input>
          <button
            type="button"
            className="add"
            name="answerOptions"
            onClick={(event) => handleAdd(event, index)}
          >+</button>
          <button
            type="button"
            className="remove"
            name="answerOptions"
            onClick={(event) => handleRemove(event, index)}>-</button>
        </div>
      ))
      }

      <div className="question-builder__input">
      <label>Correct answer</label>
      <select
        onChange={handleChange}
        className="dropdown"
        name="correctAnswer"
      ><option value={""}></option>
        {question.answerOptions.map((option, index) => (
          <option key={index} value={option.value}>{`${String.fromCharCode(index+65)}: ${option.label}`}</option>
        ))}
      </select>
      </div>
    </div>
  )
}

export default MultipleChoice;