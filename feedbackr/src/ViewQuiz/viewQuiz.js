import React from 'react';

import QuestionCard from '../QuestionCard/questioncard';
import MultipleChoicePreview from '../QuestionPreviewLibrary/multipleChoicePreview'

function ViewQuiz (props) {

  const quiz = props.quiz

  return (
    <form>
      {quiz.map((question, index)=>(
      <div key={index}>
        <span>{index+1}:</span>
        <MultipleChoicePreview question={question} />
      </div>
      ))}
      <button type="submit">submit</button>
    </form>
  )
}

export default ViewQuiz;