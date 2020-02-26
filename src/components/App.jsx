import React from 'react';
import Header from './Header';
import Error404 from './Error404';
import { Switch, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// import c from './../constants';
import ReactDOM from 'react-dom';
import Board from './Board';
import Square from './Square';
import NewGame from './NewGame';
import './App.css';

// class App extends React.Component {
//   constructor(props) {
//     super(props);


function App(){

//   render(){
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' render={()=><NewGame />} />
        {/* <Route path="/newGame" render={()=><NewGame />} /> */}
        <Route component={Error404} />
      </Switch>
    </div>
  );
//   }
}

export default App;