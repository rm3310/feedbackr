import React from 'react';
import Burger from './burger';
import RightNav from './rightnav';

function NavBar (props) {
  return (
    <div className="navbar">
      <div className="logo">Feedbackr</div>
      {/* <ul className="navbar__ul">
        <li className="navbar__li"><a href="/create-quiz">Create Quiz</a></li>
        <li className="navbar__li"><a href="/view-quizzes">View quizzes</a></li>
      </ul> */}
      <RightNav />
      <Burger />
    </div>
  )
}

export default NavBar;