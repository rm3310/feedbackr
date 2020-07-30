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
    if (event.target.name !== "answerOptions") {
      setQuestion({
        ...question,
        [event.target.name]: value
      })
    } else if (event.target.name === "answerOptions") {
      setQuestion({
        ...question,
        [event.target.name]: [...question.answerOptions, value]
      })   
    }
  }
  
  function handleAdd () {

  }

  console.log('question', question);

  return (
    <form className="question-builder" onSubmit={handleSubmit}>
      <div className="question-builder__input">
        <label>Question type</label>
        <input
          type="text"
          name="questionType"
          value={question.questionType}
          onChange={handleChange}
        ></input>
      </div>

      <div className="question-builder__input">
        <label>Question</label>
        <input
          type="text"
          name="question"
          value={question.question}
          onChange={handleChange}
        ></input>
      </div>

      <div className="question-builder__input">
        <label>Points</label>
        <input
          type="number"
          name="points"
          value={question.points}
          onChange={handleChange}
        ></input>
      </div>

      <div className="question-builder__input">
        <label>Answer options</label>
        <input
          className="answers"
          type="text"
          name="answerOptions"
          value={question.answerOptions[-1]}
          onChange={handleChange}
        ></input>
        <button className= "add" onClick={handleAdd}>+</button>
        <ul>

        </ul>
      </div>

      <div className="question-builder__input">
        <label>Correct answer</label>
        <input
          type="text"
          name="correctAnswer"
          value={question.correctAnswer}
          onChange={handleChange}
        ></input>
      </div>
      
      <div className="question-builder__input">
        <label>Tags</label>
        <input
          type="text"
          name="tags"
          multiple
          value={question.tags}
          onChange={handleChange}
        ></input>
      </div>

      <div className="question-builder__input">
        <label>Time (seconds)</label>
        <input
          type="number"
          name="time"
          value={question.time}
          onChange={handleChange}
        ></input>
      </div>

      {/* <button>Add next part</button> */}
      <input type="submit" value="Create new Question" className="submit"></input>
    </form>
  )
}

export default CreateQuestionForm;