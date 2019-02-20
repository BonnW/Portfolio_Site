import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

// Component Imports
import Container from "./Components/Container/Container";
import Layout from "./Components/Layout/Layout";
import Wallpaper from "./Components/Wallpaper/Wallpaper";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Container />
      </div>
    );
  }
}

export default App;
