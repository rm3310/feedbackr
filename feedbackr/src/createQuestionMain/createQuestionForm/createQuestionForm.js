import React from 'react';

function CreateQuestionForm (props) {

  const handleQuestionSubmit = props.handleQuestionSubmit;
  const question = props.question;
  const setQuestion = props.setQuestion;
  
  function handleSubmit (event) {
    event.preventDefault();
    handleQuestionSubmit(question);
    setQuestion({
      questionType: "",
      question: "",
      points: 0,
      answerOptions: [],
      correctAnswer: "",
      tags: [],
      time: 0,
    })
  }
  
  function handleChange (event) {
    const value = event.target.value;
    setQuestion({
      ...question,
      [event.target.name]: value
    })
  }
  
  console.log('question', question);

  return (
    <form className="question-builder" onSubmit={handleSubmit}>
      <label>Question type</label>
      <input
        type="text"
        name="questionType"
        value={question.questionType}
        onChange={handleChange}
      ></input>

      <label>Question</label>
      <input
        type="text"
        name="question"
        value={question.question}
        onChange={handleChange}
      ></input>

      <label>Points</label>
      <input
        type="number"
        name="points"
        value={question.points}
        onChange={handleChange}
      ></input>
      
      <label>Answer options</label>
      <input
        type="text"
        name="answerOptions"
        value={question.answerOptions}
        onChange={handleChange}
      ></input>
      
      <label>Correct answer</label>
      <input
        type="text"
        name="correctAnswer"
        value={question.correctAnswer}
        onChange={handleChange}
      ></input>

      <label>tags</label>
      <input
        type="text"
        name="tags"
        value={question.tags}
        onChange={handleChange}
      ></input>

      <label>time</label>
      <input
        type="number"
        name="time"
        value={question.time}
        onChange={handleChange}
      ></input>
      
      <input type="submit"></input>
    </form>
  )
}

export default CreateQuestionForm;