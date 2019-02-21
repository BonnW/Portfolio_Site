import React, { Component } from "react";
import Layout from "../Layout/Layout";
import Wallpaper from "../Wallpaper/Wallpaper";

import "./Container.css";

export default class Container extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Wallpaper />
        </Layout>
      </div>
    );
  }
}
