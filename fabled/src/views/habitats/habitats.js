import React from "react";

import "./habitats.css";

import ItemCard2 from "../.././components/itemCard/ItemCard2";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";

const Habitats = () => {
  return (
    <div id="Habitats">
      <h1 id="catalog-title2">Creature Habitats</h1>
      <Container>
        <ItemCard2 />
      </Container>
    </div>
  );
};

export default Habitats;
