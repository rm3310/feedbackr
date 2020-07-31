import React from 'react';

function Writtentext (props) {
  
  const question = props.question;
  const handleChange = props.handleChange;
  
  return (
    <div className="question-builder__input">
      <label>Answer</label>
      <input
        type="text"
        name="answerOptions"
        value={question.answerOptions.label}
        onChange={handleChange}
      ></input>
    </div>
  )
}

export default Writtentext;