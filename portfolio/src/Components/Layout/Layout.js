import React, { Component } from "react";
import { Hidden, Drawer, Divider, withStyles } from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";

import Header from "../Header/Header.js";
import PageNav from "../PageNav/PageNav.js";
import Wallpaper from "../Wallpaper/Wallpaper";

import "./Layout.css";

const drawerWidth = 260;

const styles = theme => ({
  root: {
    display: "flex"
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      flexShrink: 0
    }
  },
  menuButton: {
    marginRight: 20,
    [theme.breakpoints.up("sm")]: {
      display: "none"
    }
  },
  content: {
    backgroundColor: "maroon",
    width: "100%",
    height: "100vh"
  },
  drawerPaper: {
    width: drawerWidth,
    height: "100vh",
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
      <div>
        <Header />
        <Divider />
        <PageNav />
      </div>
    );

    return (
      <div className={classes.root}>
        <CssBaseline />
        <nav className={classes.drawer}>
          <Hidden smUp implementation="css">
            <Drawer
              container={this.props.container}
              variant="temporary"
              open={this.state.mobileOpen}
              onClose={this.handleDrawerToggle}
              classes={{
                paper: classes.drawerPaper
              }}
            >
              {drawer}
            </Drawer>
          </Hidden>
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
        </nav>
        <main className={classes.content}>
          <Wallpaper />
        </main>
      </div>
    );
  }
}

export default withStyles(styles)(Layout);
