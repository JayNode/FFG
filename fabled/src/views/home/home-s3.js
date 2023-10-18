import React from "react";
import { Link } from "react-router-dom";
/* MUI Tags */
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
/* MUI Icons */
import Avatar from "@mui/material/Avatar";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ForestIcon from "@mui/icons-material/Forest";
import PetsIcon from "@mui/icons-material/Pets";
import WaterIcon from "@mui/icons-material/Water";
import WaterDropIcon from "@mui/icons-material/WaterDrop";
import GrassIcon from "@mui/icons-material/Grass";
import PublicIcon from "@mui/icons-material/Public";

const GridData = [
  {
    title: "Conserve wildlife",
    icons: <PetsIcon />,
  },
  {
    title: "Protect freshwater",
    icons: <WaterDropIcon />,
  },
  {
    title: "Restore forests",
    icons: <ForestIcon />,
  },
  {
    title: "Cleaning Oceans",
    icons: <WaterIcon />,
  },
  {
    title: "Learn and Grow",
    icons: <GrassIcon />,
  },
  {
    title: "Climate safety",
    icons: <PublicIcon />,
  },
];

const MissionStatement = () => {
  return (
    <Stack className="content" id="mission-statement">
      <Container id="missions">
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
            justifyContent="space-between"
            spacing={{ xs: 1, md: 2 }}
            columns={{ xs: 4, sm: 8, md: 13 }}
          >
            {Array.from(GridData).map((grid) => (
              <Grid item xs={3} sm={4} md={4} sx={{ paddingRight: "7px" }}>
                <Link className="mssns-links" to="/fieldguide">
                  <Stack
                    className="mssns-items"
                    justifyContent="space-between"
                    alignItems="center"
                    direction="row"
                  >
                    <Stack alignItems="center" direction="row">
                      <Avatar>{grid.icons}</Avatar>
                      <h3 className="mssns-topics">{grid.title}</h3>
                    </Stack>
                    <ArrowForwardIosIcon
                      sx={{ color: "black", fontSize: "20px" }}
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
