import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import SideHero from "../../components/SideHero";
import ProjectMain from "./ProjectMain";

const Project = () => {
  return (
    <Stack
      id="projects"
      component="section"
      className="outlined"
      px={2}
      pl={{ md: 10 }}
      justifyContent="flex-start"
      direction="row"
      height="100vh"
    >
      <Box flex={1}>
        <SideHero />
      </Box>
      <Box flex={2}>
        <ProjectMain />
      </Box>
    </Stack>
  );
};

export default Project;
