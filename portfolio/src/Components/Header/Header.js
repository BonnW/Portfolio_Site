import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

// import profile pic from src/assets
import pic from "../../assets/SampleProfilePic.jpg";


const styles = {
  root: {
    marginTop: 15
  },

  titleBox: {
    marginTop: 15,
    marginBottom: 5
  },

  titleText: {
    fontSize: 22,
    fontWeight: "bold",
    color: "white",
    opacity: 0.9
  },

  contactContainer: {
    border: "2px solid black",
    width: "80%",
    paddingTop: 5,
    backgroundColor: "rgb(255, 244, 244)",
    opacity: 0.9
  },

  contactBox: {
    width: "80%",
    opacity: 1
  },

  contactText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black"
  },

  avatar: {
    margin: 10
  },
  bigAvatar: {
    width: "70%",
    height: "auto",
    margin: "auto",
    border: "2px solid black"
  }
};

function Header(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <Grid container justify="center" alignItems="center">
        <Grid item xs={12} classes={classes.avatarBox}>
          <Avatar alt="Bonn W." src={pic} className={classes.bigAvatar} />
        </Grid>
        <Grid item xs={12} className={classes.titleBox}>
          <Typography variant="h3" className={classes.titleText}>
            Bonn W.
          </Typography>
          <Typography variant="h4" gutterBottom className={classes.titleText}>
            Full-Stack Developer
          </Typography>
        </Grid>
        <Grid
          container
          justify="center"
          alignItems="center"
          className={classes.contactContainer}
        >
          <Grid
            container
            xs={12}
            className={classes.contactBox}
            justify="center"
            alignItems="center"
          >
            <Grid item xs={3}>
              <a target="_blank" href="https://github.com/BonnW">
                <FaGithub size="2.2em" color="black" />
              </a>
            </Grid>
            <Grid item xs={3}>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/bonn-wonghansa/"
              >
                <FaLinkedin size="2.2em" color="black" />
              </a>
            </Grid>
            <Grid item xs={3}>
              <a target="_blank" href="">
                <FaTwitter size="2.2em" color="black" />
              </a>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default withStyles(styles)(Header);
