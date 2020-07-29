import React, { useState, useEffect } from 'react';

// Component imports
import NavBar from './navbar/navbar'
import CreateQuestionMain from "./createQuestionMain/createQuestionMain";


function App() {

  return (
    <ClickContext.Provider>
      <div className="App">
        <NavBar></NavBar>
        <CreateQuestionMain/>
      </div>
    </ClickContext.Provider>
  );
}

const ClickContext = React.createContext();

export {ClickContext}

export default App;
