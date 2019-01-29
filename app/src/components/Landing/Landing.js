import React, { Component } from "react";
import { Grid, Row, Col, Image } from "react-bootstrap";

import "./Landing.css";

import ThailandBackdrop from "../../assets/Thailand_Backdrop.jpg";

let imgUrl = "../../assets/Thailand_Backdrop.jpg";

// let Landing_Styles = {
//   width: "100%",
//   height: "auto",
//   backgroundImage: "url(" + imgUrl + ")"
// };

class Landing extends Component {
  render() {
    return (
      <div className="Landing_Main">
        <div className="test_header">
          <div className="title">
            <h1>Hi I'm Bonn!</h1>
            <h2>I'm a Full-Stack Software Developer!</h2>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
