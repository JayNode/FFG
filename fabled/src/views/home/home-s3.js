import React from "react";

import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

const SectThree = () => {
  return (
    <Stack className="content section3" direction="row">
      <Container>
        <Box>
          <h1>Sect3A</h1>
        </Box>
      </Container>
      <Container>
        <Box>
          <h1>Sect3B</h1>
        </Box>
      </Container>
    </Stack>
  );
};

export default SectThree;