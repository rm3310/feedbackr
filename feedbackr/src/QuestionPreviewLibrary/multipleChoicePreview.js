import React, { useEffect } from 'react';

function MultipleChoicePreview (props) {
  
  const question = props.question;
  const questionIndex = props.questionIndex;
  const quizAnswers = props.quizAnswers;
  const setQuizAnswers = props.setQuizAnswers;

  const handleAnswerSelect = function (event) {
    event.persist();
    const isCorrectAnswer = question.correctAnswer == event.target.value ? true : false;
    setQuizAnswers(prevState => {
      const newState = [...prevState];
      newState[questionIndex].selectedAnswer.value = event.target.value;
      newState[questionIndex].selectedAnswer.correct = isCorrectAnswer;
      return newState;
    })
  }

  return (
    <div className="multiple-choice-preview">
      <p className="multiple-choice-preview__question">{question.question}</p>
      {question.answerOptions.map((answerOption, index)=>
        <div key={`${index}${answerOption.label}`} className="multiple-choice-preview__options">
          <span className="radio-button"></span>
          <input
            type="radio"
            id={index}
            value={answerOption.value}
            onChange={handleAnswerSelect}
            name={question.question}
            />
          <label htmlFor={index}>{String.fromCharCode(index+65)}: {answerOption.label}</label>
        </div>
      )}
    </div>
  )
  
}

export default MultipleChoicePreview;