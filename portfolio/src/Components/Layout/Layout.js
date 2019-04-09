import React, { Component } from "react";
import {
  Hidden,
  Drawer,
  Divider,
  withStyles,
  Paper,
  Typography
} from "@material-ui/core";
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

  drawerContainer: {
    height: "100%"
  },

  drawer: {
    [theme.breakpoints.up("xs")]: {
      flexShrink: 0
    }
  },

  content: {
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
        <Hidden xsUp implementation="css">
          <div>
            <Paper className={classes.root} elevation={1}>
              <Typography variant="h5" component="h3">
                This is a sheet of paper.
              </Typography>
              <Typography component="p">
                Paper can be used to build surface or other elements for your
                application.
              </Typography>
            </Paper>
          </div>
        </Hidden>
        <main className={classes.content}>
          <Wallpaper />
        </main>
      </div>
    );
  }
}

export default withStyles(styles)(Layout);
