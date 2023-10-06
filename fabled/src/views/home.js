import React from "react";
import "./home.css"
import yetiNatureHeader from '../images/header/TinyTree-Header.jpg'

const Home = () => {
  return (
    <div className="Home">
      <div className="header">
        <img src={yetiNatureHeader} alt="Header Img" />
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
