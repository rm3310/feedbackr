import React from 'react';

function MultipleChoicePreview (props) {
  
  const question = props.question;

  return (
    <div>
      <p>{question.question}</p>
      {question.answerOptions.map((answerOption, index)=>
        <div key={index}>
          <input type="radio" id={index} value={answerOption.value}/>
          <label htmlFor={index}>{String.fromCharCode(index+65)}: {answerOption.label}</label>
        </div>
      )}
    </div>
  )
}

export default MultipleChoicePreview;