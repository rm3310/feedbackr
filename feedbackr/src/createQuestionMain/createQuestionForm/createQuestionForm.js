import React from 'react';
import { questionTypes } from '../../questionTypeLibrary/questionTypeLibrary';

// Question Type Components
import MultipleChoice from '../../questionTypeLibrary/multipleChoice';
import WrittenText from '../../questionTypeLibrary/writtenText';

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

  function renderAnswer (questionType, question, handleChange, handleAdd, handleRemove) {
    if (questionType === 1) {
      return <WrittenText handleChange={handleChange} question={question}/>
    } else if (questionType === 2) {
      return <MultipleChoice handleChange={handleChange} handleAdd={handleAdd} handleRemove={handleRemove} question={question}/>
    } 
  }

  console.log('question', question);

  return (
    <form className="question-builder" onSubmit={handleSubmit}>
      {/* Information regarding the question itself */}
      <h3>Question information</h3>
      <div className="question-builder__input">
        <label>Question type</label>
        <div
          onChange={handleChange}
          className="select"
        >
          {questionTypes.map((option, index) => (
            <label>
              <input type="radio" key={index} value={option.value} name="questionType" defaultChecked={index === 0}/>
              {option.label}
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
      
      <h3>Answer options</h3>
      {renderAnswer(question.questionType, question, handleChange, handleAdd, handleRemove)}

      {/* Meta-data regarding question */}
      <h3>Question Metadata</h3>
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
      
      <div className="question-builder__input">
        <button type="button" className="next">Add next part</button>
        <input type="submit" value="Create new Question" className="submit"></input>
      </div>
    </form>
  )
}

export default CreateQuestionForm;