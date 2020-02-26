  
import React from 'react';
import { Link } from 'react-router-dom';

function Header(){
  return (
    <div>
      <h1>Tic Tac Toe</h1>
      <Link to="/">Home</Link> | <Link to="/newGame">New Game</Link>
    </div>
  );
}

export default Header;