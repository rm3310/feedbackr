import React, { useState, useEffect } from 'react';
import MultipleChoicePreview from '../QuestionPreviewLibrary/multipleChoicePreview'

function ViewQuiz (props) {

  const quiz = props.quiz;
  
  const [quizAnswers, setQuizAnswers] = useState([]);

  useEffect(()=>{
    const quizAnswerInitialState = props.quiz.questions.map(question => ({
      ...question,
      selectedAnswer: {
        value: null,
        correct: false
      }
    }))
    setQuizAnswers(quizAnswerInitialState);
  },[props.quiz.questions])
  
  const handleQuizSubmit = function (event) {
    event.preventDefault();
    console.log("quiz answers on quiz submit", quizAnswers);
    let totalScore = 0;
    let userScore = 0;
    quizAnswers.forEach((question)=>{
      console.log(quizAnswers)
      totalScore += question.points;
      userScore += question.selectedAnswer.correct === true ? question.points : 0;
    })
    console.log(userScore, '/', totalScore)
  };

  return (
    <form onSubmit={handleQuizSubmit} className="view-quiz">
    {console.log('quizAnswers', quizAnswers)}
      {quiz.questions.map((question, index)=>(
      <div key={index} className="quiz-question">
        <span className="question-number">{index+1}</span>
        <MultipleChoicePreview question={question} questionIndex={index} quizAnswers={quizAnswers} setQuizAnswers={setQuizAnswers} />
      </div>
      ))}
      <button className="submit" type="submit">How did I do?</button>
    </form>
  )
}

export default ViewQuiz;