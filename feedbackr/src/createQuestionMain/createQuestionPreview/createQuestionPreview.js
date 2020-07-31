import React from 'react';

const question = {
  questionType: 1, // need to create a library of question types
  question: "This is a sample question",
  points: 0,
  answerOptions: [
    {value: 0, label: "option A"},
    {value: 1, label: "option B"},
    {value: 2, label: "option C"}],
  correctAnswer: "1",
  tags: [],
  time: 0,
}

function CreateQuestionPreview (props) {
  // question = props.question;
  // handleChange = props.handleChange

  function handleChange (event) {
    console.log(event.target)
  }

  return (
    <div>
    <form>
      <label>{question.question} ({question.points} points)</label>
      <input type="text"></input>
    </form>
    
    <form>
    <div className="question-builder__input">
        <label>{question.question} ({question.points} points)</label>
        <div
          onChange={handleChange}
          className="select"
        >
          {question.answerOptions.map((option, index) => (
            <label>
              <input type="radio" key={index} value={option.value}/>
              {option.label}
            </label>
          ))}
        </div>
      </div>
    </form>
    </div>
  )
}

export default CreateQuestionPreview;

