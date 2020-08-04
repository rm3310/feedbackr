import React, { useState, useEffect } from 'react';
import ViewQuiz from '../ViewQuiz/viewQuiz'
import { getOneQuiz } from '../apiService'

function DoQuiz (props) {
  
const tempQuiz = {
  poste: "2020-08-03T13:04:14.168Z",
  _id: "5f286f6788b08a3cc0b82a73",
  name: "postman create quiz 1",
  tag: "postman create quiz 1 tag",
  questions: [
      {
          answerOptions: [
              {
                  _id: "5f286f9a88b08a3cc0b82a75",
                  value: 1,
                  label: "Answer A1"
              },
              {
                  _id: "5f286f9a88b08a3cc0b82a76",
                  value: 2,
                  label: "Answer B1"
              },
              {
                  _id: "5f286f9a88b08a3cc0b82a77",
                  value: 3,
                  label: "Answer C1"
              }
          ],
          _id: "5f286f9a88b08a3cc0b82a74",
          questionType: "1",
          question: "postman create quiz 1 Question 1- Answer A",
          points: 2,
          correctAnswer: 1,
          tags: "question 1",
          time: 0
      },
      {
          answerOptions: [
              {
                  _id: "5f286fe188b08a3cc0b82a79",
                  value: 1,
                  label: "Answer A2"
              },
              {
                  _id: "5f286fe188b08a3cc0b82a7a",
                  value: 2,
                  label: "Answer B2"
              },
              {
                  _id: "5f286fe188b08a3cc0b82a7b",
                  value: 3,
                  label: "Answer C2"
              }
          ],
          _id: "5f286fe188b08a3cc0b82a78",
          questionType: "1",
          question: "postman create quiz 1 Question 2 - Answer B",
          points: 2,
          correctAnswer: 3,
          tags: "question 2",
          time: 0
      }
  ]
}

  const [quiz, setQuiz] = useState({
    name: "",
    tags: "",
    questions: []
  });
  const params = new URLSearchParams(window.location.search)
  console.log(params.get('id'));
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