import React from 'react';

function MultipleChoicePreview (props) {
  
  const question = props.question;

  return (
    <form>
      <p>{question.question}</p>
      {question.answerOptions.map((answerOption, index)=>
        <div>
          <input type="radio" id={index} value={answerOption.value}/>
          <label for={index}>{String.fromCharCode(index+65)}: {answerOption.label}</label>
        </div>
      )}
    </form>
  )
}

export default MultipleChoicePreview;