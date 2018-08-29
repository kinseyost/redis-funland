import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import AddUser from './components/AddUser.js';
import DisplayUsers from './components/DisplayUsers.js';

const mapStateToProps = (state) => {
  const date = state.get('date');
  return {
    date,
  };
}

class App extends Component {
  render() {
    const { date } = this.props;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Redis-Funland</h1>
        </header>
        <p className="App-intro">
          { date }
        </p>
        <AddUser/>
        <DisplayUsers/>
      </div>
    );
  }
}

export default connect(mapStateToProps)(App);
