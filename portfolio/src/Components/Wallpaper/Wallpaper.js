import React, { Component } from "react";

import lofiWallpaper from "../../assets/lofiWallpaper.jpg";

export default class Wallpaper extends Component {
  render() {
    return (
      <div>
        <img
          src={require("../../assets/lofiWallpaper.jpg")}
          alt="lofi hip hop radio wallpaper"
        />
      </div>
    );
  }
}
