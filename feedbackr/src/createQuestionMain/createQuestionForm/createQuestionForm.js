import React from 'react';
import { questionTypes } from '../../questionTypeLibrary/questionTypeLibrary';
import Select from 'react-select';

function CreateQuestionForm (props) {

  const handleQuestionSubmit = props.handleQuestionSubmit;
  const question = props.question;
  const setQuestion = props.setQuestion;
  
  function handleSubmit (event) {
    event.preventDefault();
    handleQuestionSubmit(question);
    setQuestion({
      questionType: 1,
      question: "",
      points: 0,
      answerOptions: [
        {
          value: 0,
          label: ""
        }
      ],
      correctAnswer: "",
      tags: [],
      time: 0,
    })
  }
  
  function handleChange (event, index) {
    const value = event.target.value;
    if (event.target.name !== "answerOptions") {
      setQuestion({
        ...question,
        [event.target.name]: value
      })
    } else if (event.target.name === "answerOptions") {
      const array = [...question.answerOptions];
      array[index] = {
        value: index,
        label: value
      }
      setQuestion({
        ...question,
        [event.target.name]: array
      })
    }
  }

  function handleAdd (event, index) {
    const name = event.target.name;
    const array = [...question[name]];
    console.log('array', array);
    array.splice(index+1,0,"");
    setQuestion({
      ...question,
      [event.target.name]: array
    })
  }

  function handleRemove (event, index) {
    const name = event.target.name;
    const array = [...question[name]];
    array.splice(index,1);
    console.log('array', array);
    setQuestion({
      ...question,
      [event.target.name]: array
    })
  }

  console.log('question', question);

  return (
    <form className="question-builder" onSubmit={handleSubmit}>
      <div className="question-builder__input">
        <label>Test 2 Question type</label>
        <div
          onChange={handleChange}
          className="select"
        >
          {questionTypes.map((option, index) => (
            <label>
              {option.label}
              <input type="radio" key={index} value={option.value} name="questionType" defaultChecked={index === 0}/>
            </label>
          ))}
        </div>
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

      {question.answerOptions.map((option, index) => (
          <div key={index} className="question-builder__input"> 
            <label>Answer option {String.fromCharCode(index+65)}</label>
            <input
              className="answers"
              name="answerOptions"
              value={option.label}
              onChange={(event) => handleChange(event, index)}
            ></input>
            <button
              type="button"
              className="add"
              name="answerOptions"
              onClick={(event) => handleAdd(event, index)}
            >+</button>
            <button
              type="button"
              className="remove"
              name="answerOptions"
              onClick={(event) => handleRemove(event, index)}>-</button>
          </div>
        ))
      }

      <div className="question-builder__input">
        <label>Correct answer</label>
        <select
          onChange={handleChange}
          className="select"
          name="correctAnswer"
        ><option value={""}></option>
          {question.answerOptions.map((option, index) => (
            <option key={index} value={option.value}>{`${String.fromCharCode(index+65)}: ${option.label}`}</option>
          ))}
        </select>
      </div>
      
      <div className="question-builder__input">
        <label>Tags</label>
        <input
          type="text"
          name="tags"
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