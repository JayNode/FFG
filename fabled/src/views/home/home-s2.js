import React from "react";
import Island from "../.././images/header/IslandHome-Header.jpg";
import Fall from "../.././images/header/FallForest-Header.jpg";
import Matterhorn from "../.././images/header/Matterhorn-Header.jpg";

import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";

const SectTwo = () => {
  return (
    <Stack
      className="content section2" 
      direction="row" 
      justifyContent="space-around" 
      alignItems="flex-start" 
      spacing={10}
    >
      <Container>
        <div className="news-container sect2-news1">
          <img className="news-img" src={Island} alt="island" />
          <h1>Island resouces plummet after rise in tourism</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>  
      </Container>

      <Container>
        <div className="news-container sect2-news2">
          <img className="news-img" src={Fall} alt="fall" />
          <h1>Leaves change color for first time in California</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </Container>

      <Container>
        <div className="news-container sect2-news3">
          <img className="news-img" src={Matterhorn} alt="matterhorn" />
          <h1>Climber trapped, rescuers racing time</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </Container>
    </Stack>
  );
};

export default SectTwo;