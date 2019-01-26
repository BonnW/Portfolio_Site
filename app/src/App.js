import React, { Component } from "react";
import { Route, Link } from "react-router-dom";

import logo from "./logo.svg";

// Import Components
import Body from "./components/Body/Body.js";
import Landing from "./components/Landing/Landing.js";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={Body} />
      </div>
    );
  }
}

export default App;
