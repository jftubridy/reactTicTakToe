import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';

function Square(props) {
  // change to a function component because it only contains a render and doesn't have its own state
  return (
    <button 
      className="square" 
      onClick={props.onClick}>
      {/* changed this.state to this.props from state their state is now controlled in Board*/}
      {props.value}
    </button>
  );
}

export default Square;