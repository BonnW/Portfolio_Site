import React, { Component } from "react";
import { Hidden, Drawer, Divider, withStyles } from "@material-ui/core";
// import Paper from "@material-ui/core/Paper";
// import Typography from "@material-ui/core/Typography";
import CssBaseline from "@material-ui/core/CssBaseline";

import Header from "../Header/Header.js";
import PageNav from "../PageNav/PageNav.js";
import Wallpaper from "../Wallpaper/Wallpaper";

const drawerWidth = 260;

const styles = theme => ({
  root: {
    display: "flex",
    height: "100%"
  },

  // mobileRoot: {
  //   display: "flex",
  //   width: "100%",
  //   backgroundColor: "white"
  // },

  drawerContainer: {
    height: "100%"
  },

  // drawer: {
  //   [theme.breakpoints.up("xs")]: {
  //     flexShrink: 0
  //   }
  // },

  content: {
    [theme.breakpoints.up("xs")]: {
      flexShrink: 0
    },
    backgroundColor: "maroon",
    width: "100%",
    height: "100%"
    // border: "1px solid black"
  },
  drawerPaper: {
    width: drawerWidth,
    height: "100%",
    borderRight: "1px solid black",
    background: "#8e0e00",
    background: "-webkit-linear-gradient(to bottom, #8e0e00, #1f1c18)",
    background: "linear-gradient(to bottom, #8e0e00, #1f1c18)"
  }
});

class Layout extends Component {
  state = {
    mobileOpen: false
  };

  handleDrawerToggle = () => {
    this.setState({ mobileOpen: !this.state.mobileOpen });
  };

  render() {
    const { classes, children } = this.props;

    const drawer = (
      <div className={classes.drawerContainer}>
        <Header />
        <Divider />
        <PageNav />
      </div>
    );

    return (
      <div className={classes.root}>
        <CssBaseline />
        {/* <Hidden smUp implementation="css">
          <div>test</div>
        </Hidden> */}
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
        {/* 
            NOTE for Mobile Development
            Display content OVER wallpaper.
            Cannot do it with <Hidden> Object as
            it only replaces the drawer and moves the wallpaper over.
          
           */}
        <main className={classes.content}>
          <Wallpaper />
        </main>
      </div>
    );
  }
}

export default withStyles(styles)(Layout);
