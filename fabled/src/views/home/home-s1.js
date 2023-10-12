import React from "react";

import bigfoot from "../.././images/sticker/bigfoot-sticker.png";
import cave from "../.././images/sticker/cave-sticker.png";
import scroll from "../.././images/sticker/scroll-sticker.png";

import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

const SectOne = () => {
  return (
    <Stack className="content section1" direction="row">
      <Container>
        <div id="s1A-content">
          <h1>Fabled Fieldguide</h1>
          <h2>Who we are</h2>
          <hr />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
      </Container>

      <Container>
        <div id="s1B-content">
          <Stack direction="row" alignItems="center" spacing={10} >
            <div>
              <img id="s1-bigfoot" src={bigfoot} alt="bigfoot" />
            </div>
            <div>
              <Stack direction="row" justifyContent="space-between" spacing={1}>
                <h1>Beasts</h1>
                <div className="s1B-button">
                  <Button variant="outlined">Catalog</Button>
                </div>
              </Stack>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </Stack>

          <hr id="s1B-divider"/>

          <Stack direction="row" alignItems="center" spacing={10} >
            <div>
              <img id="s1-cave" src={cave} alt="cave" />
            </div>
            <div>
              <Stack direction="row" justifyContent="space-between" spacing={1} >
                <h1>Environment</h1>
                <div className="s1B-button">
                  <Button variant="outlined">Habitats</Button>
                </div>
              </Stack>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </Stack>

          <hr id="s1B-divider"/>

          <Stack direction="row" alignItems="center" spacing={10} >
            <div>
              <img id="s1-scroll" src={scroll} alt="scroll" />
            </div>
            <div>
              <Stack direction="row" justifyContent="space-between" spacing={1} >
                <h1>Fieldguide</h1>
                <div className="s1B-button">
                  <Button variant="outlined">Adventure</Button>
                </div>
              </Stack>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </Stack>
        </div>
      </Container>
    </Stack>
  );
};

export default SectOne;