import { useState } from 'react';
import { Link } from "react-router-dom";

import "./Navbar.css";

import { AppBar } from '@mui/material';
import { Accordion } from '@mui/material';
import { AccordionDetails } from '@mui/material';
import { AccordionSummary } from '@mui/material';
import { Container } from '@mui/material';
import { Toolbar } from '@mui/material';
import { Typography } from '@mui/material';

const pages = ['Home', 'Catalog', 'About', 'Donate'];

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
            expanded={expanded === 'panel'} 
            onChange={handleChange('panel')}
          >
            <AccordionSummary>
              <Typography id="drop-header">
                Menu
              </Typography>
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
      <Toolbar/>
    </AppBar>
  );
}
export default Navbar;