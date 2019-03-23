import React, { Component } from "react";
import Layout from "../Layout/Layout";

import "./Container.css";

export default class Container extends Component {
  render() {
    return (
      <div className="Container__Root">
        <Layout />
      </div>
    );
  }
}
