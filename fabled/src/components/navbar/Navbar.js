import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
/** Local Files */
import "./Navbar.css";
import LoginScreen from "./NavLogin";
/** Local Images */
import Logo from "../.././images/sticker/scroll-sticker.png";
/** MUI Tags */
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import AppBar from "@mui/material/AppBar";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Dialog from "@mui/material/Dialog";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

const pages = ["Creatures", "Habitats", "Fieldguide", "About", "Donate"];

const Navbar = () => {
  const [expanded, setExpanded] = useState(0);
  const [open, setOpen] = useState(false);

  const handleChange = (panel) => (_event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <AppBar id="navbar">
      {/* Navbar Content */}
      <Stack direction="row">
        {/** Navbar Logo */}
        <div id="logo-container">
          <Link to="/home">
            <img id="navbar-logo" src={Logo} alt="logo" />
          </Link>
        </div>
        {/** Navbar Links */}
        <Container className="links-padding">
          {pages.map((pages) => (
            <Link className="nav-links links" to={`/${pages}`}>
              {pages}
            </Link>
          ))}
        </Container>
        {/** Login Button */}
        <Container id="login-container">
          <Button
            id="login-bttn"
            onClick={handleOpen}
            variant="contained"
            disableElevation={true}
          >
            Login
          </Button>
          <Dialog open={open} onClose={handleClose}>
            <LoginScreen />
          </Dialog>
        </Container>
      </Stack>

      {/* Navbar Dropdown */}
      <Container id="dropdown">
        <Accordion
          disableGutters={true}
          expanded={expanded === "panel"}
          onChange={handleChange("panel")}
        >
          {/** Dropdown Title */}
          <AccordionSummary>
            <Typography id="drop-header">Menu</Typography>
          </AccordionSummary>
          {/** Dropdown Links */}
          <AccordionDetails>
            {pages.map((pages) => (
              <Typography id="drop-menu">
                <Link to={`/${pages}`} id="drop-link" className="links">
                  {pages}
                </Link>
              </Typography>
            ))}
          </AccordionDetails>
        </Accordion>
      </Container>
    </AppBar>
  );
};
export default Navbar;
