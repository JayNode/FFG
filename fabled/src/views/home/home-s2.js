import React from "react";
import Island from "../.././images/header/IslandHome-Header.jpg";
import Fall from "../.././images/header/FallForest-Header.jpg";
import Matterhorn from "../.././images/header/Matterhorn-Header.jpg";

import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";

const SectTwo = () => {
  return (
    <div className="content section2">
      <Container>
        <div className="sect2-header">
          <h1>News Stories</h1>
        </div>
        <Grid
          container
          justifyContent="space-around"
          alignItems="flex-start"
          spacing={5}
          sx={{ FlexDirection: { xs: "column", md: "row" } }}
        >
          <Grid container item xs={12} md={4}>
            <Grid item xs={6} md={12}>
              <img className="news-img" src={Island} alt="island" />
              <hr className="img-line" />
            </Grid>
            <br />
            <Grid item xs={6} md={12}>
              <Link className="news-link-title" href="" underline="hover">
                <h1>Island resouces plummet after rise in tourism</h1>
              </Link>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </Grid>
          </Grid>

          <Grid container item xs={12} md={4}>
            <Grid item xs={6} md={12}>
              <img className="news-img" src={Fall} alt="fall" />
              <hr className="img-line" />
            </Grid>
            <Grid item xs={6} md={12}>
              <Link className="news-link-title" href="" underline="hover">
                <h1> Leaves change color for first time in California </h1>
              </Link>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </Grid>
          </Grid>

          <Grid container item xs={12} md={4}>
            <Grid item xs={6} md={12}>
              <img className="news-img" src={Matterhorn} alt="matterhorn" />
              <hr className="img-line" />
            </Grid>
            <Grid item xs={6} md={12}>
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
      </Container>
    </div>
  );
};

export default SectTwo;
