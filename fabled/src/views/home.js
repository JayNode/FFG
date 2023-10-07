import React from "react";
import Slider from "../components/slider/Slider.js";
import "./home.css"


const Home = () => {
  return (
    <div className="Home">
      <div className="header">
        <Slider />
      </div>
      
      <div className="content-body">
        <div className="content section-one">
          <h1>Heading</h1>
        </div>
        <div className="content section-two">
          <h1>Heading</h1>
        </div>
        <div className="content section-three">
          <h1>Heading</h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
