import React, { Component } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import green from "@material-ui/core/colors/green";
import Popover from "@material-ui/core/Popover";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

// import "./PageNav.css";

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
    // marginLeft: "260",
    height: "500px",
    width: "500px"
    // margin: theme.spacing.unit * 2
  },

  listContainer: {
    // textAlign: "center"
  },
  listRoot: {
    textAlign: "center"
  },
  listButton: {
    fontSize: 20,
    fontWeight: "bold"
    // backgroundColor: "green"

    // border: "10px solid black"
  },
  listText: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    // backgroundColor: "blue",
    margin: "auto"
  }
});

// const inlineStyles = {
//   anchorVertical: {
//     top: {
//       top: -5
//     },
//     center: {
//       top: "calc(50% - 5px)"
//     },
//     bottom: {
//       bottom: -5
//     }
//   },
//   anchorHorizontal: {
//     left: {
//       left: -5
//     },
//     center: {
//       left: "calc(50% - 5px)"
//     },
//     right: {
//       right: -5
//     }
//   }
// };

class PageNav extends Component {
  state = {
    open: false,
    // anchorOriginVertical: "top",
    // anchorOriginHorizontal: "right",
    transformOriginVertical: "top",
    transformOriginHorizontal: "left",
    positionTop: 25, // Just so the popover can be spotted more easily
    positionLeft: 285, // Same as above
    anchorReference: "anchorPosition"
  };

  handleChange = key => (event, value) => {
    this.setState({
      [key]: value
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
        <List component="nav" className={classes.listRoot}>
          <ListItem
            button
            onClick={this.handleClickButton}
            className={classes.listButton}
          >
            <Typography align="center" className={classes.listText}>
              About Me
            </Typography>
          </ListItem>
          <ListItem
            button
            onClick={this.handleClickButton}
            className={classes.listButton}
          >
            <Typography align="center" className={classes.listText}>
              Projects
            </Typography>
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
            The content of the Popover./
          </Typography>
        </Popover>
      </div>
    );
  }
}

export default withStyles(styles)(PageNav);
