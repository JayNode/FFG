import React from "react";

import Slider from "../../components/slider/Slider.js";
import SectionOne from "./home-s1";
import SectionTwo from "./home-s2.js";
import SectionThree from "./home-s3.js";
import "./home.css";

import Stack from "@mui/material/Stack";

const Home = () => {
  return (
    <Stack id="Home">

      <Slider />
      <SectionOne />
      <SectionTwo />
      <SectionThree />

    </Stack>
  );
};

export default Home;