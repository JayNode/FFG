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
          Fabled Fieldguide is an environmental conservation organization that
          uses a different approach to helping and learning about the
          environment with the help of our creatures, and fieldguide.
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
              Creatures are the guardians of their respective environments. They
              will help guide you to learn, enjoy and help out in saving this
              planet.
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
              Environments are the domains that make up planet earth. There are
              many different ways to help out, and learning about the
              environment is just the first step.
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
              The fieldguide is used to keep track of your progress with helping
              the environment. It will encompass the creatures, environment, and
              ways you can help too.
            </p>
          </div>
        </Stack>
      </Container>
    </Stack>
  );
};

export default Introduction;
