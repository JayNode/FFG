import React from "react";
import "./headerImg.css";

import Img from "../../images/header/homeheaderimg.jpg";

const HeaderImg = () => {
  return (
    <div id="slider">
      <div id="slide-layout">
        <img src={Img} alt="slide" />
        <div className="slide-content">
          <h2>Forest Preservation</h2>
          <hr />
          <p>Get started and learn about how you can help!</p>
          <button className="slide-button">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default HeaderImg;
