import React from 'react';

function RightNav (props) {
  return (
    <ul className="navbar__ul">
      <li className="navbar__li"><a href="/create-quiz">Create Quiz</a></li>
      <li className="navbar__li"><a href="/view-quizzes">View quizzes</a></li>
    </ul>
  )
}

export default RightNav;