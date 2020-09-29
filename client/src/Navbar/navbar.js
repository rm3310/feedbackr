import React from 'react';
import Burger from './burger';
import RightNav from './rightnav';

function NavBar (props) {
  return (
    <div className="navbar">
      <div className="logo">Feedbackr</div>
      <RightNav />
      <Burger />
    </div>
  )
}

export default NavBar;