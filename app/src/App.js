import React, { Component } from 'react';

import logo from './logo.svg';

// Import Components
import Header from './components/Heading/Header.js';
import AboutMe from './components/About_Me/About_Me.js';
import ProjectSection from './components/Projects/ProjectSection.js';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <AboutMe />
        <ProjectSection />
      </div>
    );
  }
}

export default App;
