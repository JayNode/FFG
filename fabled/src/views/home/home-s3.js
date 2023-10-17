import React from "react";
import { Link } from "react-router-dom";

import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const images = [
  "Conserve wildlife",
  "Protect freshwater resources",
  "Restore forests",
  "Encourage climate safety",
  "Teach conservation",
  "Zero-carbon world",
];

const MissionStatement = () => {
  return (
    <Stack className="content" id="mission-statement">
      <Container id="goal">
        <h1 className="heading">Mission</h1>
        <hr className="heading-line" />
        <p className="heading-paragraph">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </Container>

      <Container id="goal-grid">
        <Box sx={{ flexGrow: 1 }}>
          <Grid
            container
            spacing={{ xs: 1, md: 2 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {images.map((images) => (
              <Grid item xs={2} sm={4} md={4} key={images}>
                <Link className="goal-links" to="">
                  <Stack
                    className="goal-items"
                    justifyContent="space-between"
                    alignItems="center"
                    direction="row"
                  >
                    <div>
                      <img className="goal-imgs" src={`${images}`} alt={``} />
                      <h3 className="goal-topics">{`${images}`}</h3>
                    </div>
                    <ArrowForwardIosIcon
                      sx={{ color: "black", fontSize: "15px" }}
                    />
                  </Stack>
                </Link>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Stack>
  );
};

export default MissionStatement;
