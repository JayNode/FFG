import React from "react";

import "./creatures.css";
import Header from "../.././images/labels/creatures-label.png";

import CreatureCard from "../.././components/itemCard/creatureCard";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";

const Creatures = () => {
  return (
    <div id="Creatures">
      <img id="creatures-title" src={Header} alt="Header" />
      <div>
        <CreatureCard />
      </div>
    </div>
  );
};

export default Creatures;
