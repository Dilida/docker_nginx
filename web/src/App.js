import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import InputTesting from './child';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Hello world!</h1>
        </header>
        <p className="App-intro">
          Looks like you're all set!
        </p>
          <InputTesting/>
      </div>
    );
  }
}

export default App;
