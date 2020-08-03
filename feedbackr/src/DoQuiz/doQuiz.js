import React, { useState } from 'react';
import ViewQuiz from '../ViewQuiz/viewQuiz'
import { getOneQuiz } from '../apiService'

function DoQuiz (props) {
  
  const [quiz, setQuiz] = useState({
    name: "",
    tags: "",
    questions: []
  });
  const params = new URLSearchParams(window.location.search)
  console.log(params.get('id'));
  const id = params.get('id');
  getOneQuiz (id, setQuiz);
  console.log(quiz);

  return (
    <ViewQuiz quiz={quiz} />
  )
}

export default DoQuiz;