import React from 'react';

import MultipleChoicePreview from '../QuestionPreviewLibrary/multipleChoicePreview'

function CreateQuestionPreview (props) {
  
  const question = props.question;

  return (
    <MultipleChoicePreview question={question}/>
  )
}

export default CreateQuestionPreview;