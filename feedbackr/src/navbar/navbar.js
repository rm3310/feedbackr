import React from 'react';

function NavBar (props) {
  return (
    <div className="navbar">
      <ul className="navbar__ul">
        <li className="navbar__li"><a href="#">Create Question</a></li>
        <li className="navbar__li"><a href="#">Create Quiz</a></li>
        <li className="navbar__li"><a href="#">View quizzes</a></li>
      </ul>
    </div>
  )
}

export default NavBar;