import React, { Component } from "react";

import { withStyles, Hidden } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

import lofiWallpaper from "../../assets/lofiWallpaper.jpg";

const styles = theme => ({
  root: {
    height: "100%",
    width: "100%",
    backgroundImage: "url(" + lofiWallpaper + ")",
    backgroundSize: "cover",
    boxShadow: `1px 3px 5px black`
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
        <Hidden smUp implementation="css">
          <Paper className={classes.root} elevation={1}>
            <Typography variant="h5" component="h3">
              This is a sheet of paper.
            </Typography>
            <Typography component="p">
              Paper can be used to build surface or other elements for your
              application.
            </Typography>
          </Paper>
        </Hidden>
        {/* Stream Lofi Hip Hop Radio on some sort of Youtube player */}
      </div>
    );
  }
}

export default withStyles(styles)(Wallpaper);
