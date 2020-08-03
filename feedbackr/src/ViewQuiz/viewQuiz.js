import React, { useState } from 'react';
import MultipleChoicePreview from '../QuestionPreviewLibrary/multipleChoicePreview'

function ViewQuiz (props) {

  const quiz = props.quiz;
  const [quizAnswers, setQuizAnswers] = useState(quiz.questions.map(question => ({
    ...question,
    selectedAnswer: {
      value: null,
      correct:false
    }
  })));

  // console.log('Script render quizAnswers: ', quizAnswers);

  const handleQuizSubmit = function (event) {
    event.preventDefault();
    console.log("quiz answers on quiz submit", quizAnswers);
  };

  return (
    <form onSubmit={handleQuizSubmit}>
      {quiz.questions.map((question, index)=>(
      <div key={index}>
        <span>{index+1}:</span>
        <MultipleChoicePreview question={question} questionIndex={index} quizAnswers={quizAnswers} setQuizAnswers={setQuizAnswers} />
      </div>
      ))}
      <button type="submit">submit</button>
    </form>
  )
}

export default ViewQuiz;