import React from "react";

import "./creatures.css";

import ItemCard from "../.././components/itemCard/ItemCard";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";

const Creatures = () => {
  return (
    <div id="Creatures">
      <h1 id="catalog-title">Creature Catalog</h1>
      <Container>
        <ItemCard />
      </Container>
    </div>
  );
};

export default Creatures;
