import React from 'react';
import moment from 'moment';

function QuizCard (props) {
  const quiz = props.quiz

  let pointTotal = 0;
  quiz.questions.forEach(question => pointTotal+=question.points);

  return (
    <a className="quiz-card" href={`/do-quiz?id=${quiz._id}`}>
      <h3>{quiz.name}</h3>
      <p>Total points: {pointTotal}</p>
      <p>Number of questions: {quiz.questions.length}</p>
      <p>Posted: {moment(quiz.posted).format('MMM Do YYYY')}</p>
    </a>
  )
}

export default QuizCard;