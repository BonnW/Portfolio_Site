import React, { Component } from 'react';
import { Grid, Row, Col, Well, Panel } from 'react-bootstrap';

import ProjectBox from './ProjectBox.js';

import './ProjectSection.css';


class ProjectSection extends Component {
  
  render() {
    return(
      <div>
        <div className="Projects_Title">
          <h1>Projects</h1>
        </div>
        <div>
          <Grid className="Grid_Container">
            <Row className="Project_Row">
              <Col xs={4} xsOffset={1} className="Box">
                <Panel>
                  <Panel.Body>Test</Panel.Body>
                  <Panel.Footer>Test Title</Panel.Footer>
                </Panel>
                {/* <ProjectBox /> */}
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
                Stuff
              </Col>
              <Col xs={4} xsOffset={2} className="Box">
                More Stuff
              </Col>
            </Row>
            <Row className="Project_Row">
              <Col xs={4} xsOffset={1} className="Box">
                Stuff
              </Col>
              <Col xs={4} xsOffset={2} className="Box">
                More Stuff
              </Col>
            </Row>
          </Grid>
        </div>
      </div>
    );
  }
}


export default ProjectSection;