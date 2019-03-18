import React, { Component } from "react";

import "./Wallpaper.css";
import { withStyles } from "@material-ui/core";

// export default class Wallpaper extends Component {
//   render() {
//     return (
//       <div className="Wallpaper__Root">
//         <img
//           src={require("../../assets/lofiWallpaper.jpg")}
//           alt="lofi hip hop radio wallpaper"
//         />
//       </div>
//     );
//   }
// }

const styles = theme => ({
  root: {
    background: "maroon",
    width: "100%",
    height: "100%"
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
        <img
          className="Wallpaper__Img"
          src={require("../../assets/lofiWallpaper.jpg")}
          alt="lofi hip hop radio wallpaper"
        />
      </div>
    );
  }
}

export default withStyles(styles)(Wallpaper);
