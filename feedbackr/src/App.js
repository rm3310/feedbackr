import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Component imports
import NavBar from './Navbar/navbar'
import CreateQuizMain from './CreateQuizMain/createQuizMain';
import ViewQuiz from './ViewQuiz/viewQuiz'

function App() {

  const quizQuestion1 = {
    questionType: 1,
    question: "Question 1",
    points: 2,
    answerOptions: [{value: 1, label: "Answer A1"}, {value: 2, label: "Answer B1"}, {value: 3, label: "Answer C1"}],
    correctAnswer: 1,
    tags: ["question 1", "3 options"],
    time: 0,
  }

  const quizQuestion2 = {
    questionType: 1,
    question: "Question 2",
    points: 2,
    answerOptions: [{value: 1, label: "Answer A2"}, {value: 2, label: "Answer B2"}, {value: 3, label: "Answer C2"}],
    correctAnswer: 2,
    tags: ["question 2", "3 options"],
    time: 0,
  }

  const [quiz, setQuiz] = useState([quizQuestion1, quizQuestion2]);

  const [db, setDb] = useState([quiz]);

  return (
    <Router>
      <div className="App">
        <NavBar/>
        <Route path="/create-quiz" render={(props)=> <CreateQuizMain {...props} quiz={quiz} setQuiz={setQuiz} db={db} setDb={setDb}/>}></Route>
        <Route path="/view-quiz" render={(props)=> <ViewQuiz {...props} quiz={quiz}/>}></Route>
      </div>
    </Router>  
  );
}

export default App;
