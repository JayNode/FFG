import React from "react";

import bigfoot from "../.././images/sticker/bigfoot-sticker.png";
import cave from "../.././images/sticker/cave-sticker.png";
import scroll from "../.././images/sticker/scroll-sticker.png";

import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";

const SectOne = () => {
  return (
    <Stack className="content section1" direction="row">
      <Container id="sect1-intro">
        <h2>Who we are</h2>
        <hr />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <Button id="intro-bttn" variant="outlined">
          Mission
        </Button>
      </Container>

      <Container id="sect1-categories">
        <Stack direction="row" alignItems="center" spacing={10}>
          <img className="sect1-img" src={bigfoot} alt="bigfoot" />
          <div>
            <Stack direction="row" justifyContent="space-between" spacing={1}>
              <h1>Beasts</h1>
              <Button variant="outlined">Catalog</Button>
            </Stack>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </Stack>

        <hr className="sect1-divider" />

        <Stack direction="row" alignItems="center" spacing={10}>
          <img className="sect1-img" src={cave} alt="cave" />
          <div>
            <Stack direction="row" justifyContent="space-between" spacing={1}>
              <h1>Environment</h1>
              <Button variant="outlined">Habitats</Button>
            </Stack>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </Stack>

        <hr className="sect1-divider" />

        <Stack direction="row" alignItems="center" spacing={10}>
          <img className="sect1-img" src={scroll} alt="scroll" />
          <div>
            <Stack direction="row" justifyContent="space-between" spacing={1}>
              <h1>Fieldguide</h1>
              <Button variant="outlined">Adventure</Button>
            </Stack>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </Stack>
      </Container>
    </Stack>
  );
};

export default SectOne;
