import { useState } from 'react';
import { Link } from "react-router-dom";

import "./Navbar.css";

import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';

const pages = ['Home', 'Catalog', 'About', 'Donate'];

const Navbar = () => {

  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar sx={{height: 70, backgroundColor: 'white', position: "static"}}>
      <Toolbar>

        {/* Nav Links */}
        <Box className="navlinks">
          {pages.map((pages) => (
            <MenuItem key={pages}>
              <Typography textAlign="center">
                <Link to={`/${pages}`} className="link">
                  {pages}
                </Link>
              </Typography>
            </MenuItem>
          ))}
        </Box>

        {/* Dropdown Links */}
        <Box className="dropdown">  
          <IconButton className="dropdown-button" onClick={handleOpenNavMenu} >
            {/* <Menu 
              id="menu-dropdown"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'top',
                horizontal: '',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
            >
              {pages.map((pages) => (
                <MenuItem key={pages} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">
                    <Link to={`/${pages}`} className="droplink">
                      {pages}
                    </Link>
                  </Typography>
                </MenuItem>
              ))}
            </Menu> */}
            <Typography className='dropdown-title'>Menu</Typography>
          </IconButton>

          <Menu 
            id="menu-dropdown"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: 'top',
              horizontal: '',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
          >
            {pages.map((pages) => (
              <MenuItem key={pages} onClick={handleCloseNavMenu}>
                <Typography textAlign="center">
                  <Link to={`/${pages}`} className="droplink">
                    {pages}
                  </Link>
                </Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
export default Navbar;

// import { useState } from 'react';
// import "./Navbar.css";

// const Navbar = () => {
//   const [isNavExpanded, setIsNavExpanded] = useState(false);

//   return (
//     <>
//       <nav>

//         {/* onClick:  n==0    -> setIsNavExpanded(false)
//                       n==Odd  -> setIsNavExpanded(true) 
//                       n==Even -> setIsNavExpanded(false) */}
//         <button className="hamburger" onClick={() => {
//           setIsNavExpanded(!isNavExpanded);
//         }}>
//           <h1>Menu</h1>
//         </button>

//         {/* Logic:  isNavExpanded==true  -> className="nav-menu expanded"  
//                     isNavExpanded==false -> className="nav-menu" */}
//         <div className={isNavExpanded ? "nav-menu expanded" : "nav-menu"}>
//           <ul>
//             <li>
//               <a href="/home">Home</a>
//               <hr/>
//             </li>
//             <li>
//               <a href="/catalog">Catalog</a>
//               <hr/>
//             </li>
//             <li>
//               <a href="/about">About</a>
//               <hr/>
//             </li>
//             <li>
//               <a href="/donate">Donate</a>
//               <hr/>
//             </li>
//           </ul>
//         </div>
//       </nav>
//     </>
//   );
// };

// export default Navbar;
