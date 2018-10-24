import React, { Component } from "react";

import logo from "./logo.svg";

// Import Components
import Body from "./components/Body/Body.js";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Body />
      </div>
    );
  }
}

export default App;
