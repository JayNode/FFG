import React from "react";
import Island from "../.././images/header/IslandHome-Header.jpg";
import Fall from "../.././images/header/FallForest-Header.jpg";
import Matterhorn from "../.././images/header/Matterhorn-Header.jpg";

import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Link from "@mui/material/Link";

const SectTwo = () => {
  return (
    <Grid
      container
      className="content section2"
      justifyContent="space-around"
      alignItems="flex-start"
      spacing={5}
      sx={{ Direction: { xs: "column", md: "row" } }}
    >
      <Grid container item xs={12} md={2}>
        <Grid item xs={6} md>
          <img className="news-img" src={Island} alt="island" />
        </Grid>
        <br />
        <Grid item xs={6} md>
          <Link className="news-link-title" href="" underline="hover">
            <h1>Island resouces plummet after rise in tourism</h1>
          </Link>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </Grid>
      </Grid>

      <Grid container item xs={12} md={2}>
        <Grid item xs={6} md>
          <img className="news-img" src={Fall} alt="fall" />
        </Grid>
        <Grid item xs={6} md>
          <Link className="news-link-title" href="" underline="hover">
            <h1> Leaves change color for first time in California </h1>
          </Link>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </Grid>
      </Grid>

      <Grid container item xs={12} md={2}>
        <Grid item xs={6} md>
          <img className="news-img" src={Matterhorn} alt="matterhorn" />
        </Grid>
        <Grid item xs={6} md>
          <Link className="news-link-title" href="" underline="hover">
            <h1>Climber trapped, rescuers racing time</h1>
          </Link>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default SectTwo;
