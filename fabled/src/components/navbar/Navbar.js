import { useState } from "react";
import { Link } from "react-router-dom";

import "./Navbar.css";

import AppBar from "@mui/material/AppBar";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

const pages = [
  "Home",
  "Creatures",
  "Habitats",
  "Fieldguide",
  "About",
  "Donate",
];

const Navbar = () => {
  const [expanded, setExpanded] = useState(0);

  const handleChange = (panel) => (_event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <AppBar id="navbar">
      <Toolbar>
        {/* Tab Links */}
        <Container disableGutters={true} id="tabs">
          {pages.map((pages) => (
            <Link to={`/${pages}`} id="tab-link" className="link">
              {pages}
            </Link>
          ))}
        </Container>

        {/* Dropdown Links */}
        <Container id="dropdown">
          <Accordion
            disableGutters={true}
            expanded={expanded === "panel"}
            onChange={handleChange("panel")}
          >
            <AccordionSummary>
              <Typography id="drop-header">Menu</Typography>
            </AccordionSummary>

            <AccordionDetails>
              {pages.map((pages) => (
                <Typography id="drop-menu">
                  <Link to={`/${pages}`} id="drop-link" className="link">
                    {pages}
                  </Link>
                </Typography>
              ))}
            </AccordionDetails>
          </Accordion>
        </Container>
      </Toolbar>
      <Toolbar />
    </AppBar>
  );
};
export default Navbar;
