import React from "react";

import "./habitats.css";

import HabitatCard from "../.././components/itemCard/habitatCard";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";

const Habitats = () => {
  return (
    <div id="Habitats">
      <h1 id="catalog-title2">Creature Habitats</h1>
      <Container>
        <HabitatCard />
      </Container>
    </div>
  );
};

export default Habitats;
