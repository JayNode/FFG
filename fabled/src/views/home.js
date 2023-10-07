import React from "react";
import Slider from "../components/slider/Slider.js";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import "./home.css";

const Home = () => {
  return (
    <div className="Home">
      <h1>HOME PAGE</h1>
      {/* <Box className="Container">
        <Slider />
      </Box>
      <Stack className="Stack-Home">
        <div className="content section1">Content 1</div>
        <div className="content section2">Content 2</div>
        <div className="content section3">Content 3</div>
      </Stack> */}
    </div>
  );
};

export default Home;

// const Home = () => {
//   return (
//     <div className="Home">
//       <div className="header">
//         <Slider />
//       </div>

//       <div className="content-body">
//         <div className="content section-one">
//         </div>
//         <div className="content section-two">
//           <h1>Heading</h1>
//         </div>
//         <div className="content section-three">
//           <h1>Heading</h1>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;
