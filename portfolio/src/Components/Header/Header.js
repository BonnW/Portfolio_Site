import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import Grid from "@material-ui/core/Grid";

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
  avatarBox: {
    width: "100%"
  },

  avatar: {
    margin: 10
  },
  bigAvatar: {
    width: "80%",
    height: "auto",
    margin: "auto"
  }
};

function Header(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <Grid container justify="center" alignItems="center">
        <Grid item xs={12}>
          <Avatar alt="Bonn W." src={pic} className={classes.bigAvatar} />
        </Grid>
        <Grid item xs={12}>
          <h1>Hi I'm Bonn :)</h1>
          <h2>Full-Stack Engineer</h2>
        </Grid>
        <div className="Header__Icons">
          <a target="_blank" href="https://github.com/BonnW">
            <FaGithub size="2.5em" color="black" />
          </a>
          <a target="_blank" href="https://www.linkedin.com/in/bonn-wonghansa/">
            <FaLinkedin size="2.5em" color="black" />
          </a>
          <a target="_blank" href="">
            <FaTwitter size="2.5em" color="black" />
          </a>
        </div>
      </Grid>
    </div>
  );
}

export default withStyles(styles)(Header);
