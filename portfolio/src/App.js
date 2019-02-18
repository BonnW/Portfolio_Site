import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

// Component Imports
import Layout from "./Components/Layout/Layout";
import Wallpaper from "./Components/Wallpaper/Wallpaper";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout />
        <Wallpaper />
      </div>
    );
  }
}

export default App;
