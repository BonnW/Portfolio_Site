import React, { Component } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Hidden,
  Drawer,
  Divider
} from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import Menu from "@material-ui/icons/Menu";

const drawerWidth = 240;

export default class extends Component {
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
        <div className="Drawer__Toolbar" />
        hello
        <Divider />
      </div>
    );

    return (
      <div className="Drawer__Root">
        <CssBaseline />
        <AppBar position="fixed" className="Drawer__appbar">
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={this.handleDrawerToggle}
              className="Drawer__MenuButton"
            >
              <Menu />
            </IconButton>
            <Typography variant="h6" color="inherit" noWrap>
              Responsive drawer
            </Typography>
          </Toolbar>
        </AppBar>
        <nav className="Drawer__drawer">
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
          <Hidden smUp implementation="css">
            <Drawer
              container={this.props.container}
              variant="temporary"
              open={this.state.mobileOpen}
              onClose={this.handleDrawerToggle}
              classes={{
                // paper: classes.drawerPaper
                paper: "Drawer__drawerpaper"
              }}
            >
              {drawer}
            </Drawer>
          </Hidden>
          <Hidden xsDown implementation="css">
            <Drawer
              classes={{
                // paper: "classes.drawerPaper"
                paper: "Drawer__drawerPaper"
              }}
              variant="permanent"
              open
            >
              {drawer}
            </Drawer>
          </Hidden>
        </nav>
        <main className="Drawer__content">
          <div className="Drawer__toolbar" />
          {children}
        </main>
      </div>
    );
  }
}
