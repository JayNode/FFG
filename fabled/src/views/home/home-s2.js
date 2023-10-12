import React from "react";

import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

const SectTwo = () => {
  return (
    <Stack className="content section2" direction="row">
      <Container>
        <Box>
          <h1>Sect2A</h1>
        </Box>
      </Container>
      <Container>
        <Box>
          <h1>Sect2B</h1>
        </Box>
      </Container>
    </Stack>
  );
};

export default SectTwo;