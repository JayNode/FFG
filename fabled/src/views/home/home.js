import React from "react";

import Slider from "../../components/slider/Slider.js";
import Introduction from "./home-s1";
import SectionTwo from "./home-s2.js";
import SectionThree from "./home-s3.js";
import "./home.css";

import Stack from "@mui/material/Stack";

const Home = () => {
  return (
    <Stack id="Home">

      <Slider />
      <Introduction />
      <SectionTwo />
      <SectionThree />

    </Stack>
  );
};

export default Home;