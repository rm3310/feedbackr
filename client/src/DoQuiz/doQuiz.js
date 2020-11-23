import React, { useState, useEffect } from 'react';
import ViewQuiz from '../ViewQuiz/viewQuiz'
import { getOneQuiz } from '../apiService'

function DoQuiz (props) {

  const [quiz, setQuiz] = useState({
    name: "",
    tags: "",
    questions: []
  });
  const params = new URLSearchParams(window.location.search)
  const id = params.get('id');
  
  useEffect(() => {
    getOneQuiz(id, setQuiz)
  },[id]);
  
  console.log(quiz);

  return (
    <ViewQuiz quiz={quiz} />
  )
}

export default DoQuiz;