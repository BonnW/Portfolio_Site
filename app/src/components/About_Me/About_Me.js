import React, { Component } from 'react';
import { Button, Collapse, Well } from 'react-bootstrap';


class AboutMe extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false
    };
  }

  render() {
    return (
      <div>
        <Button onClick={() => this.setState({ open: !this.state.open })}>
          About Me
        </Button>
        <Collapse in={this.state.open}>
          <div>
            <Well>
              Full-Stack Developer currently enrolled
              at Lambda School with years of
              experience in Technology and Customer
              Service. Striving to continue learning,
              explore new possibilities and different
              opportunities.
            </Well>
          </div>
        </Collapse>
      </div>
    )
  }
}


export default AboutMe;
