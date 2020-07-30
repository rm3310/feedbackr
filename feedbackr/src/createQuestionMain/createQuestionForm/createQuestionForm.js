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
    console.log('question types',questionTypes);
    setQuestion({
      questionType: "",
      question: "",
      points: 0,
      answerOptions: [
        {
          label: "",
          value: ""
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
        value: value,
        label: value
      }

      console.log('new array', array)

      setQuestion({
        ...question,
        [event.target.name]: array
      })
    }
  }
  
  function handleSelect (event) {
    const name = event.name;
    setQuestion({
      ...question,
      [event.name]: event.value
    })
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
        <label>Test Question type</label>
        <Select
          onChange={handleSelect}
          className="select"
          options={questionTypes}
          isSearchable
        ></Select>
      </div>

      <div className="question-builder__input">
        <label>Test 2 Question type</label>
        <select
          onChange={handleSelect}
          className="select"
          options={questionTypes}
          isSearchable
        >
          {questionTypes.map((option, index) => (
            <option value="option.value">{option.label}</option>
          ))}
        </select>
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
            <label>Answer options {index+1}</label>
            <input
              className="answers"
              type="text"
              name="answerOptions"
              value={option.value}
              onChange={(event) => handleChange(event, index)}
            ></input>
            <button
              type="button"
              className="add"
              name="answerOptions"
              onClick={(event) => handleAdd(event, index)}
            >+</button>
            <button
              className="remove"
              name="answerOptions"
              onClick={(event) => handleRemove(event, index)}>-</button>
          </div>
        ))
      }

      <div className="question-builder__input">
        <label>Correct answer</label>
        <Select
          name="correctAnswer"
          className="select"
          options={question.answerOptions}
        ></Select>
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