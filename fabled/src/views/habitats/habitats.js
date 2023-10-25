import React from "react";

import "./habitats.css";
import Header from "../.././images/labels/habitats-label.png";

import HabitatCard from "../.././components/itemCard/habitatCard";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";

const Habitats = () => {
  return (
    <div id="Habitats">
      <img id="habitat-title" src={Header} alt="Header" />
      <Container>
        <HabitatCard />
      </Container>
    </div>
  );
};

export default Habitats;
