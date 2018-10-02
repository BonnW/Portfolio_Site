import React, { Component } from 'react';
import { Grid, Row, Col, Image, Panel } from 'react-bootstrap';

import ProjectBox from './ProjectBox.js';

import './ProjectSection.css';

// import images
import comingSoon from '../../assets/comingSoon.png';


class ProjectSection extends Component {
  
  render() {
    return(
      <div>
        <div className="Projects_Title">
          <h1>Projects</h1>
        </div>
        <br />
        <div>
          <Grid className="Grid_Container">
            <Row className="Project_Row">
              <Col xs={4} xsOffset={1} className="Box">
                <ProjectBox />
              </Col>
              <Col xs={4} xsOffset={2} className="Box">
                <Panel>
                  <Panel.Body>Test</Panel.Body>
                  <Panel.Footer>Test Title</Panel.Footer>
                </Panel>
              </Col>
            </Row>
            <Row className="Project_Row">
              <Col xs={4} xsOffset={1} className="Box">
                <Image src={comingSoon} className="ComingSoon_Box" />
              </Col>
              <Col xs={4} xsOffset={2} className="Box">
                <Image src={comingSoon} className="ComingSoon_Box" />
              </Col>
            </Row>
            <Row className="Project_Row">
              <Col xs={4} xsOffset={1} className="Box">
                <Image src={comingSoon} className="ComingSoon_Box" />
              </Col>
              <Col xs={4} xsOffset={2} className="Box">
                <Image src={comingSoon} className="ComingSoon_Box" />
              </Col>
            </Row>
          </Grid>
        </div>
      </div>
    );
  }
}


export default ProjectSection;