import React, { Component } from "react";

import "./Wallpaper.css";

// export default class Wallpaper extends Component {
//   render() {
//     return (
//       <div className="Wallpaper__Root">
//         <img
//           src={require("../../assets/lofiWallpaper.jpg")}
//           alt="lofi hip hop radio wallpaper"
//         />
//       </div>
//     );
//   }
// }

function Wallpaper() {
  return (
    <div className="Wallpaper__Root">
      <img
        className="Wallpaper__Img"
        src={require("../../assets/lofiWallpaper.jpg")}
        alt="lofi hip hop radio wallpaper"
      />
    </div>
  );
}

export default Wallpaper;
