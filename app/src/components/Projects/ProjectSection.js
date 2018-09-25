import React, { Component } from 'react';
import { Grid, Row, Col, Well } from 'react-bootstrap';

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
              <Col sm={6} className="Box">
                <Well>
                  Stuff
                </Well>
              </Col>
              <Col sm={6} className="Box">
                <Well>
                  More Stuff
                </Well>
              </Col>
            </Row>
            <Row>
              <Col sm={6} className="Box">
                <Well>
                  Stuff
                </Well>
              </Col>
              <Col sm={6} className="Box">
                <Well>
                  More Stuff
                </Well>
              </Col>
            </Row><Row>
              <Col sm={6} className="Box">
                <Well>
                  Stuff
                </Well>
              </Col>
              <Col sm={6} className="Box">
                <Well>
                  More Stuff
                </Well>
              </Col>
            </Row>
          </Grid>
        </div>
      </div>
    );
  }
}


export default ProjectSection;