import { Box, Typography } from "@mui/material";
import React from "react";
import Landing from "../sections/landing/Landing";

const Main = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      minHeight="100vh"
      paddingTop="80px"
      //   sx={{ backgroundColor: (theme) => theme.palette.black.main }}
    >
      <Landing />
      <Box height="100vh" id="projects">
        projects
      </Box>
      <Box height="100vh" id="experiences">
        experiences
      </Box>
      <Box height="100vh" id="about">
        about me
      </Box>
      <Box height="100vh" id="contact">
        contact
      </Box>
    </Box>
  );
};

export default Main;
