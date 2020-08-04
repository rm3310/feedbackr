import React, { useState } from 'react';
import QuizCard from '../QuizCard/quizCard';

function QuizList (props) {

  const quizList = props.quizList;

  return (
    <div className="quiz-list">
      <p>Choose a quiz to start</p>
      {quizList.map((quiz) => (
        <QuizCard key={quiz._id} quiz={quiz}/>
      ))}
    </div>
  )
}

export default QuizList;