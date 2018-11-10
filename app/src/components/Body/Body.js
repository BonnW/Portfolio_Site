import React, { Component } from "react";

// import css
import "./Body.css";

// import portfolio components
import Header from "../Heading/Header.js";
import AboutMe from "../About_Me/About_Me.js";
import ProjectSection from "../Projects/ProjectSection.js";

class Body extends Component {
  render() {
    return (
      <div className="body">
        <div className="content">
          <Header />
          <AboutMe />
          <ProjectSection />
        </div>
      </div>
    );
  }
}

export default Body;
