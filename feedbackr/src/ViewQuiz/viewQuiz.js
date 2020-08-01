import React, { useState } from 'react';

import QuestionCard from '../QuestionCard/questioncard';
import MultipleChoicePreview from '../QuestionPreviewLibrary/multipleChoicePreview'

function ViewQuiz (props) {

  const quiz = props.quiz;
  const [quizAnswers, setQuizAnswers] = useState([]);
  const [answer, setAnswer] = useState({name:"", value: null});

  const handleQuizSubmit = function (event) {
    event.preventDefault();
    console.log("quiz answers before", quizAnswers);
    setQuizAnswers((quizAnswers)=>[...quizAnswers, answer]);
    console.log("quiz answers after", quizAnswers);
  };

  return (
    <form onSubmit={handleQuizSubmit}>
      {quiz.map((question, index)=>(
      <div key={index}>
        <span>{index+1}:</span>
        <MultipleChoicePreview question={question} something={"something"} answer={answer} setAnswer={setAnswer} />
      </div>
      ))}
      <button type="submit">submit</button>
    </form>
  )
}

export default ViewQuiz;