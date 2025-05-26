import { Box, Stack } from "@mui/material";
import ProjectMain from "./ProjectMain";

const Project = () => {
  return (
    <Stack
      id="projects"
      component="section"
      px={10}
      justifyContent="flex-start"
      direction="row"
      minHeight="100vh"
      spacing={4}
    >
      <Box flex={1} />
      <Box flex={2}>
        <ProjectMain />
      </Box>
    </Stack>
  );
};

export default Project;
