import React from "react";
import Island from "../.././images/header/IslandHome-Header.jpg";
import Fall from "../.././images/header/FallForest-Header.jpg";
import Matterhorn from "../.././images/header/Matterhorn-Header.jpg";

import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";

const SectTwo = () => {
  return (
    <Grid 
      container 
      className="content section2" 
      justifyContent="space-evenly"
      alignItems="flex-start"
      spacing={1} 
      sx={{ FlexDirection: { xs: "column", md: "row"} }}
    >
      <Grid item container className="news-container sect2-news1" xs={10} md={3}>
        <Grid item xs={6} md={12}>
          <img className="news-img" src={Island} alt="island" />
        </Grid>
        <Grid item xs={6} md={12}>
          <Link className="news-link-title" href="" underline="hover">
            <h1>Island resouces plummet after rise in tourism</h1>
          </Link>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </Grid> 
      </Grid>

      <Grid item container className="news-container sect2-news2" xs={10} md={3}>
          <Grid item xs={6} md={12}>
            <img className="news-img" src={Fall} alt="fall" />
          </Grid>
          <Grid item xs={6} md={12}>
            <Link className="news-link-title" href="" underline="hover">
              <h1> Leaves change color for first time in California </h1>
            </Link>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
       
        </Grid>
      </Grid>

      <Grid item container className="news-container sect2-news3" xs={10} md={3}>
        <Grid item xs={6} md={12}>
          <img className="news-img" src={Matterhorn} alt="matterhorn" />
        </Grid>
        <Grid item xs={6} md={12}>
          <Link className="news-link-title" href="" underline="hover">
            <h1>Climber trapped, rescuers racing time</h1>
          </Link>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default SectTwo;