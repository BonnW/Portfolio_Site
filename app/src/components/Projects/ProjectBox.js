import React, { Component } from "react";
import { Image, Popover, OverlayTrigger, Button } from "react-bootstrap";

// import css from ProjectSection.css
import "./ProjectSection.css";

// import Project sample pics
// import pic1 from '../../assets/profilePic.png';

// import PropertyMaxx photos
import pic1 from "../../assets/PropertyMaxxLoginPic.png";
// import pic2 from '../../assets/PropertyMaxxPic2.png';
// import pic3 from '../../assets/PropertyMaxxPic3.png';

const popoverTop = (
  <Popover id="popover-positioned-right" title=" Popover top">
    More Stuff
  </Popover>
);

class ProjectBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      buttonMessage: "PropertyMaxx"
    };
  }

  handleMouseOver = () => {
    // console.log("mouse over detected");
    this.setState({ buttonMessage: "See More" });
  };

  handleMouseLeave = () => {
    this.setState({ buttonMessage: "PropertyMaxx" });
  };

  render() {
    return (
      <div className="Project_Box">
        <Image src={pic1} className="ComingSoon_Box" />
        <OverlayTrigger trigger="click" placement="top" overlay={popoverTop}>
          <Button
            className="Test_Button"
            onMouseOver={this.handleMouseOver}
            onMouseLeave={this.handleMouseLeave}
          >
            {this.state.buttonMessage}
          </Button>
        </OverlayTrigger>
      </div>
    );
  }
}

export default ProjectBox;
