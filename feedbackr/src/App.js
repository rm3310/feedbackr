import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Component imports
import NavBar from './navbar/navbar'
import CreateQuestionMain from './CreateQuestionMain/createQuestionMain';
import CreateQuiz from './CreateQuiz/createQuiz'


function App() {

  return (
    <Router>
      <div className="App">
        <NavBar/>
        <Route path="/create-question" component={CreateQuestionMain}></Route>
        <Route path="/create-quiz" component={CreateQuiz}></Route>
      </div>
    </Router>  
  );
}

export default App;
