import React from "react";
import Slider from "../components/slider/Slider.js";
import Stack from "@mui/material/Stack";
import "./home.css";

const Home = () => {
  return (
    <div className="Home">
      <Stack className="Stack-Home">
        <Slider className="section-slider"/>
        <div className="content section1">Content 1</div>
        <div className="content section2">Content 2</div>
        <div className="content section3">Content 3</div>
      </Stack>
    </div>
  );
};

export default Home;