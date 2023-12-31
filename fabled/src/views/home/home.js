import React from "react";
import "../.././components/scrollbar/scrollbar.css";

// import HeaderImg from "../../components/headerImg/headerImg.js";
import Slider from "../.././components/slider/Slider";
import Introduction from "./home-s1";
import NewsArticles from "./home-s2";
import MissionStatement from "./home-s3";
import "./home.css";

import Stack from "@mui/material/Stack";

const Home = () => {
  return (
    <Stack className="scrollbar" id="Home">
      <Slider />
      <Introduction />
      <NewsArticles />
      <MissionStatement />
    </Stack>
  );
};

export default Home;
