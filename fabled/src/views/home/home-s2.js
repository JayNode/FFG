import React from "react";
import Island from "../.././images/header/IslandHome-Header.jpg";
import Fall from "../.././images/header/FallForest-Header.jpg";
import Matterhorn from "../.././images/header/Matterhorn-Header.jpg";

import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";

const SectTwo = () => {
  return (
    <Grid 
      className="content section2" 
      container 
      justifyContent="space-evenly"
      alignItems="flex-start"
      spacing={3} 
      sx={{ FlexDirection: { xs: "column", md: "row"} }}
    >
      <Grid item xs={7} md={4}>
        <div className="news-container sect2-news1">
          <img className="news-img" src={Island} alt="island" />
          <Link className="news-link-title" href="" underline="hover">
            <h1>Island resouces plummet after rise in tourism</h1>
          </Link>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>  
      </Grid>

      <Grid item xs={7} md={4}>
        <div className="news-container sect2-news2">
          <img className="news-img" src={Fall} alt="fall" />
          <Link className="news-link-title" href="" underline="hover">
            <h1> Leaves change color for first time in California </h1>
          </Link>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </Grid>

      <Grid item xs={7} md={4}>
        <div className="news-container sect2-news3">
          <img className="news-img" src={Matterhorn} alt="matterhorn" />
          <Link className="news-link-title" href="" underline="hover">
            <h1>Climber trapped, rescuers racing time</h1>
          </Link>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </Grid>
    </Grid>
  );
};

export default SectTwo;