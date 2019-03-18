import React, { Component } from "react";

import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

// import profile pic from src/assets
import pic from "../../assets/SampleProfilePic.jpg";

import "./Header.css";
import Wallpaper from "../Wallpaper/Wallpaper";

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

function Header() {
  return (
    <div>
      <img
        className="Header__Picture"
        src={pic}
        alt="profile_pic"
        onClick={console.log("clicked picture")}
      />
      <h1>Hi I'm Bonn :)</h1>
      <h2>Full-Stack Engineer</h2>
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
    </div>
  );
}

export default Header;
