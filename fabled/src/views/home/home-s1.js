import React from "react";
import { Link } from "react-router-dom";
/* Local Files */
import bigfoot from "../.././images/sticker/bigfoot-sticker.png";
import cave from "../.././images/sticker/cave-sticker.png";
import scroll from "../.././images/sticker/scroll-sticker.png";
/* MUI Tags */
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
/* MUI Icons */
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const Introduction = () => {
  return (
    <Stack className="content" id="introduction">
      <Container id="summary">
        <h2 className="heading">Who we are</h2>
        <hr className="heading-line" />
        <p className="heading-paragraph">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </Container>

      <Container id="topics">
        <Stack direction="row" alignItems="center" spacing={6}>
          <img className="topics-img" src={bigfoot} alt="bigfoot" />
          <div>
            <Stack direction="row" justifyContent="space-between" spacing={1}>
              <h1>Creatures</h1>
              <Button component={Link} to="/creatures">
                <ArrowForwardIosIcon
                  sx={{ color: "black", fontSize: "30px" }}
                />
              </Button>
            </Stack>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </Stack>

        <hr className="topics-divider" />

        <Stack direction="row" alignItems="center" spacing={6}>
          <img className="topics-img" src={cave} alt="cave" />
          <div>
            <Stack direction="row" justifyContent="space-between" spacing={1}>
              <h1>Environment</h1>
              <Button component={Link} to="/habitats">
                <ArrowForwardIosIcon
                  sx={{ color: "black", fontSize: "30px" }}
                />
              </Button>
            </Stack>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </Stack>

        <hr className="topics-divider" />

        <Stack direction="row" alignItems="center" spacing={6}>
          <img className="topics-img" src={scroll} alt="scroll" />
          <div>
            <Stack direction="row" justifyContent="space-between" spacing={1}>
              <h1>Fieldguide</h1>
              <Button component={Link} to="/fieldguide">
                <ArrowForwardIosIcon
                  sx={{ color: "black", fontSize: "30px" }}
                />
              </Button>
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

export default Introduction;
