import React from 'react';

function QuestionCard (props) {
  
  const question = props.question;

  const addToQuiz = function (event) {
    console.log(event)
  }

  return (
    <div>
      <h3>{question.question}</h3>
      <p>Points: {question.points}</p>
      {question.tags.map((tag, index)=>(
        <span key={index}>{tag}; </span>
      ))}
      <button onClick={addToQuiz}>Add to Quiz</button>
    </div>
  )
}

export default QuestionCard;