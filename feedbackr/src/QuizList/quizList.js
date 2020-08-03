import React, { useState } from 'react';
import QuizCard from '../QuizCard/quizCard';

function QuizList (props) {

  const quizList = props.quizList;

  const openQuiz = function (quiz) {
    console.log(quiz);
  }

  return (
    <div className="quiz-list">
      <p>Choose a quiz to start</p>
      {quizList.map((quiz) => (
        <QuizCard key={quiz._id} quiz={quiz} onClick={()=>openQuiz(quiz)}/>
      ))}
    </div>
  )
}

export default QuizList;