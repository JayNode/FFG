import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

import "./Navbar.css";
import Login from "./NavLogin"

import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
import DialogContent from "@mui/material/DialogContent";
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import AppBar from "@mui/material/AppBar";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Dialog from "@mui/material/Dialog";
import Backdrop from "@mui/material/Backdrop";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import Stack from "@mui/material/Stack";
import { DialogTitle } from "@mui/material";
import DialogActions from "@mui/material/DialogActions";
import DialogContentText from "@mui/material/DialogContentText";

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
  const [open, setOpen] = useState(false);

  const [fullWidth, setFullWidth] = React.useState(true);
  const [maxWidth, setMaxWidth] = React.useState('sm');

  const handleChange = (panel) => (_event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
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
          <Button id="login-bttn" onClick={handleOpen} variant="contained">
            Login
          </Button>
          <Dialog
            fullWidth={fullWidth}
            maxWidth={maxWidth}
            open={open}
            onClose={handleClose}
          >
            <Login />
          </Dialog>
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
