import React from "react";

import Slider from "../../components/slider/Slider.js";
import Introduction from "./home-s1";
import NewsArticles from "./home-s2";
import MissionStatement from "./home-s3";
import "./home.css";

import Stack from "@mui/material/Stack";

const Home = () => {
  return (
    <Stack id="Home">
      <Slider />
      <Introduction />
      <NewsArticles />
      <MissionStatement />
    </Stack>
  );
};

export default Home;
