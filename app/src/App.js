import React, { Component } from 'react';

import logo from './logo.svg';

import Header from './components/Heading/Header.js';
import AboutMe from './components/About_Me/About_Me.js';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Header />
        <AboutMe />
      </div>
    );
  }
}

export default App;
