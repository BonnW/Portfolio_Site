import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

// import profile pic from src/assets
import pic from "../../assets/SampleProfilePic.jpg";

// import "./Header.css";
// import Wallpaper from "../Wallpaper/Wallpaper";

// export default class Header extends Component {
//   render() {
//     return (
//       <div>
//         <img
//           className="Header__Picture"
//           src={pic}
//           alt="profile_pic"
//           onClick={console.log("clicked picture")}
//         />
//         <h1>Hi I'm Bonn :)</h1>
//         <div className="Header__Icons">
//           <a target="_blank" href="https://github.com/BonnW">
//             <FaGithub size="2.5em" color="black" />
//           </a>
//           <a target="_blank" href="https://www.linkedin.com/in/bonn-wonghansa/">
//             <FaLinkedin size="2.5em" color="black" />
//           </a>
//           <a target="_blank" href="">
//             <FaTwitter size="2.5em" color="black" />
//           </a>
//         </div>
//       </div>
//     );
//   }
// }

const styles = {
  root: {
    marginTop: 15
  },

  titleBox: {
    marginTop: 15,
    marginBottom: 15
  },

  titleText: {
    marginTop: 15
  },

  avatar: {
    margin: 10
  },
  bigAvatar: {
    width: "70%",
    height: "auto",
    margin: "auto"
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
        <Grid
          container
          justify="center"
          alignItems="center"
          xs={12}
          className={classes.titleBox}
        >
          <Typography
            component="h1"
            variant="headline"
            classes={classes.titleText}
          >
            Bonn Wonghansa
          </Typography>
          <Typography variant="title" gutterBottom>
            Full-Stack Developer
          </Typography>
        </Grid>
        <Grid container justify="center" alignItems="center">
          <Grid item xs={3}>
            <a target="_blank" href="https://github.com/BonnW">
              <FaGithub size="2.5em" color="black" />
            </a>
          </Grid>
          <Grid item xs={3}>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/bonn-wonghansa/"
            >
              <FaLinkedin size="2.5em" color="black" />
            </a>
          </Grid>
          <Grid item xs={3}>
            <a target="_blank" href="">
              <FaTwitter size="2.5em" color="black" />
            </a>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default withStyles(styles)(Header);
