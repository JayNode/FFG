import React from "react";

import "./creatures.css";

import CreatureCard from "../.././components/itemCard/creatureCard";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";

const Creatures = () => {
  return (
    <div id="Creatures">
      <h1 id="catalog-title">Creature Catalog</h1>
      <Container>
        <CreatureCard />
      </Container>
    </div>
  );
};

export default Creatures;
