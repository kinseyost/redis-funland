import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';

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
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          { date }
        </p>
      </div>
    );
  }
}

export default connect(mapStateToProps)(App);
