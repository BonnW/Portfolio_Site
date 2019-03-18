import React, { Component } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import green from "@material-ui/core/colors/green";
import Popover from "@material-ui/core/Popover";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";

import "./PageNav.css";

const styles = theme => ({
  buttonWrapper: {
    position: "relative",
    marginBottom: theme.spacing.unit * 4
  },
  anchor: {
    backgroundColor: green[500],
    width: 10,
    height: 10,
    borderRadius: "50%",
    position: "absolute"
  },
  radioAnchor: {
    color: green[600],
    "&$checked": {
      color: green[500]
    }
  },
  checked: {},
  typography: {
    height: "500px",
    margin: theme.spacing.unit * 2
  }
});

const inlineStyles = {
  anchorVertical: {
    top: {
      top: -5
    },
    center: {
      top: "calc(50% - 5px)"
    },
    bottom: {
      bottom: -5
    }
  },
  anchorHorizontal: {
    left: {
      left: -5
    },
    center: {
      left: "calc(50% - 5px)"
    },
    right: {
      right: -5
    }
  }
};

class PageNav extends Component {
  state = {
    open: false,
    anchorOriginVertical: "top",
    anchorOriginHorizontal: "left",
    transformOriginVertical: "top",
    transformOriginHorizontal: "left",
    positionTop: 200, // Just so the popover can be spotted more easily
    positionLeft: 400, // Same as above
    anchorReference: "anchorEl"
  };

  handleChange = key => (event, value) => {
    this.setState({
      [key]: value
    });
  };

  handleNumberInputChange = key => event => {
    this.setState({
      [key]: parseInt(event.target.value, 10)
    });
  };

  handleClickButton = () => {
    this.setState({
      open: true
    });
    console.log("clicked");
  };

  handleClose = () => {
    this.setState({
      open: false
    });
  };

  render() {
    const { classes } = this.props;
    const {
      open,
      anchorOriginVertical,
      anchorOriginHorizontal,
      transformOriginVertical,
      transformOriginHorizontal,
      positionTop,
      positionLeft,
      anchorReference
    } = this.state;
    return (
      <div className="Nav__Main">
        <List component="nav">
          <ListItem button onClick={this.handleClickButton}>
            <ListItemText primary="About Me" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Projects" />
          </ListItem>
        </List>
        <Popover
          open={open}
          anchorEl={this.anchorEl}
          anchorReference={anchorReference}
          anchorPosition={{ top: positionTop, left: positionLeft }}
          onClose={this.handleClose}
          anchorOrigin={{
            vertical: anchorOriginVertical,
            horizontal: anchorOriginHorizontal
          }}
          transformOrigin={{
            vertical: transformOriginVertical,
            horizontal: transformOriginHorizontal
          }}
        >
          <Typography className={classes.typography}>
            The content of the Popover. The content of the Popover. The content
            of the Popover.The content of the Popover. The content of the
            Popover. The content of the Popover. The content of the Popover.The
            content of the Popover.
          </Typography>
        </Popover>
        <h4>vv Projects Dropdown vv</h4>
      </div>
    );
  }
}

export default withStyles(styles)(PageNav);
