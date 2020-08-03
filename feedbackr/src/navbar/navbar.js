import React from 'react';

function NavBar (props) {
  return (
    <div className="navbar">
      <div className="logo"></div>
      <ul className="navbar__ul">
        <li className="navbar__li"><a href="/create-quiz">Create Quiz</a></li>
        <li className="navbar__li"><a href="/view-quizzes">View quizzes</a></li>
      </ul>
    </div>
  )
}

export default NavBar;