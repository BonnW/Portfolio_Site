import React, { Component } from "react";

// import profile pic from src/assets
import pic from "../../assets/SampleProfilePic.jpg";

import "./Header.css";

export default class Header extends Component {
  render() {
    return (
      <div>
        <img className="Profile__Picture" src={pic} alt="profile_pic" />
        <h1>Hi I'm Bonn :)</h1>
        <h2> -->Social Media Icons </h2>
      </div>
    );
  }
}
