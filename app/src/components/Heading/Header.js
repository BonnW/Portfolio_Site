import React, { Component } from "react";
import { Grid, Row, Col, Image } from "react-bootstrap";
import ReactSVG from "react-svg";

// import Icon svg
// import githubIcon from '../../assets/github.svg';

// import profile picture
import pic from "../../assets/profilePic.png";

// import css
import "./Header.css";

const iconStyles = {
  width: 40,
  height: 60
};

class Header extends Component {
  render() {
    return (
      <div>
        <Grid className="Container">
          <Row>
            <Col xs={4} xsOffset={4}>
              <Image src={pic} className="profile-pic" />
            </Col>
          </Row>
          <Row>
            <Col xs={8} xsOffset={2} className="Name_Box">
              <div className="title">
                <h1>Bonn Wonghansa</h1>
                <h2>Full-Stack Engineer</h2>
              </div>
            </Col>
          </Row>
          <Row>
            <Col xs={1} xsOffset={5}>
              <a href="https://github.com/BonnW" target="_blank">
                <ReactSVG src="github.svg" />
              </a>
            </Col>
            <Col xs={1}>
              <a
                href="https://www.linkedin.com/in/bonn-wonghansa-75bb8914b/"
                target="_blank"
              >
                <ReactSVG src="linkedin.svg" />
              </a>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Header;
