import React, { useState } from 'react';

// 
import ViewQuiz from '../ViewQuiz/viewQuiz';

// import children
import CreateQuestionForm from '../CreateQuestionForm/createQuestionForm';
import CreateQuestionPreview from '../CreateQuestionPreview/createQuestionPreview';

// {
//   name: "",
//   tags: "",
//   questions: []
// }

function CreateQuizMain (props) {
  
  const quiz = props.quiz;
  const setQuiz = props.setQuiz;
  const db = props.db;
  const setDb = props.setDb

  const questionInitialState = { // object form initial question state
    questionType: 1,
    question: "",
    points: 0,
    answerOptions: [{
      value: 0,
      label: ""
    }],
    correctAnswer: null,
    tags: [],
    time: 0,
  }

  const [ question, setQuestion ] = useState(questionInitialState)

  const handleQuestionSubmit = function (newQuestion) {
    setQuiz(prevState => {
      const questions = [...prevState.questions, newQuestion]
      const newState = {...prevState, questions: questions}
      return newState
    });

    console.log('quiz after question submit',quiz);
  }

  const handleSaveQuiz = function () {
    console.log("THE CURRENT QUIZ", quiz)
    setDb(prevState => ([...prevState, quiz]));
    setQuiz({
        name: "",
        tags: "",
        questions: []
      });
    console.log('THE FULL QUIZ DATABASE', db);
  }

  const handleQuizName = function (event) {
    event.persist();
    setQuiz(prevState => {
      const newState = {
        ...prevState,
        name: event.target.value
      }
      return newState;
    })
    console.log('quiz after name change', quiz);
  }

  const handleQuizTags = function (event) {
    event.persist();
    setQuiz(prevState => {
      const newState = {
        ...prevState,
        tags: event.target.value
      }
      return newState;
    })
    console.log('quiz after tag change', quiz);
  }
  
  return (
    <div className="create-quiz-main">
      <div>
        <p>Quiz Name</p>
        <input type="text" value={quiz.name} onChange={handleQuizName}></input>
        <p>Quiz tags</p>
        <input type="text" value={quiz.tags} onChange={handleQuizTags}></input>
      </div>
      <div className="create-quiz-main__create-question-form">
        <CreateQuestionForm handleQuestionSubmit={handleQuestionSubmit} question={question} setQuestion={setQuestion} questionInitialState={questionInitialState}/>
        <button onClick={handleSaveQuiz}>Add Quiz to Database</button>
      </div>

      <div className="create-quiz-main__quiz-preview">
        <h2>Quiz preview</h2>
        <ViewQuiz quiz={quiz} />
        {/* <CreateQuestionPreview question={question} /> */}
      </div>
    </div>
  )
}

export default CreateQuizMain