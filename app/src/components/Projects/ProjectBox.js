import React, { Component } from 'react';
import { Panel, Carousel } from 'react-bootstrap';

// import Project sample pics
import pic1 from '../../assets/profilePic.png';


class ProjectBox extends Component {
  
  render() {
    return (
      <div className="Project_Box">
        <Carousel>
          <Carousel.Item>
            <img width={100} height={200} alt="200x200" src={pic1} />
            <Carousel.Caption>
              <h2>Test</h2>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Carousel.Caption>
              <h2>Test2</h2>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Carousel.Caption>
              <h2>Test3</h2>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    )
  }
}


export default ProjectBox;