import React, { Component } from "react";

import { withStyles } from "@material-ui/core";

import lofiWallpaper from "../../assets/lofiWallpaper.jpg";

const styles = theme => ({
  root: {
    height: "100%",
    width: "100%",
    backgroundImage: "url(" + lofiWallpaper + ")",
    backgroundSize: "cover"
  }
});

class Wallpaper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayImg: true
    };
  }
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        {/* Stream Lofi Hip Hop Radio on some sort of Youtube player */}
      </div>
    );
  }
}

export default withStyles(styles)(Wallpaper);
