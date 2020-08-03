import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Component imports
import NavBar from './Navbar/navbar'
import CreateQuizMain from './CreateQuizMain/createQuizMain';
import ViewQuiz from './ViewQuiz/viewQuiz'
import { getAllQuizzes, postQuiz, updateQuiz, postQuestion } from './apiService'

function App() {
  
  const [quiz, setQuiz] = useState({
    name: "",
    tags: "",
    questions: []
  });

  const [db, setDb] = useState([]);

  useEffect(()=>{
    getAllQuizzes(setDb);
  },[]);
  console.log('db from database', db);

  return (
    <Router>
      <div className="App">
        <NavBar/>
        <Route path="/create-quiz" render={(props)=> <CreateQuizMain {...props} quiz={quiz} setQuiz={setQuiz} db={db} setDb={setDb}/>}></Route>
        <Route path="/view-quiz" render={(props)=> <ViewQuiz {...props} quiz={quiz}/>}></Route>
        {/* footer */}
      </div>
    </Router>  
  );
}

export default App;
