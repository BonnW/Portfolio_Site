import React, { Component } from 'react';
import { Grid, Row, Col, Image } from 'react-bootstrap';
import ReactSVG from 'react-svg';

// import Icon svg
// import githubIcon from '../../assets/github.svg';

// import profile picture
import pic from '../../assets/profilePic.png';

// import css
import './Header.css';

const iconStyles = {
  width: 40,
  height: 60
}


class Header extends Component {
  

  render() {
    return (
      <div className="Container">
        <Grid>
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
              <ReactSVG src="github.svg" /> 
            </Col>
            <Col xs={1}>
              <ReactSVG src="linkedin.svg" />
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
  
}

export default Header;