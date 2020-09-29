import React, { useState } from 'react';

function Burger (props) {
  const [open, setOpen] = useState(false);
  
  let menu
  if (open) {
    menu = 
    (<ul className="navbar__hamburger-ul">
      <li className="navbar__hamburger-li"><a href="/create-quiz">Create Quiz</a></li>
      <li className="navbar__hamburger-li"><a href="/view-quizzes">View quizzes</a></li>
    </ul>)
  }

  return (
    <div className="navbar__burger" onClick={()=>setOpen(!open)}>
      <div className="line"/>
      <div className="line"/>
      <div className="line"/>
      { menu }
    </div>
  )
}

export default Burger;