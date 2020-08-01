import React, { useState } from 'react';

function MultipleChoicePreview (props) {
  
  const question = props.question;
  const answer = props.answer;
  const setAnswer = props.setAnswer;

  // const [answer, setAnswer] = useState({name:"", value: null});

  const handleAnswerSelect = function (event) {
    console.log(event.target.name,event.target.value);
    console.log("answerChosen before:", answer);
    setAnswer({name: event.target.name, value: event.target.value});
    console.log("answerChosen after:", answer);
  }

  return (
    <div>
      <p>{question.question}</p>
      {question.answerOptions.map((answerOption, index)=>
        <div key={`${index}${answerOption}`}>
          <input
            type="radio"
            id={index}
            value={answerOption.value}
            onChange={handleAnswerSelect}
            name={question.question}
            // checked={answer.name === answerOption.value}
            />
          <label htmlFor={index}>{String.fromCharCode(index+65)}: {answerOption.label}</label>
        </div>
      )}
    </div>
  )
}

export default MultipleChoicePreview;