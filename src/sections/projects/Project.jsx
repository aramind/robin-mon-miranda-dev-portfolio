import { Box, Stack } from "@mui/material";
import ProjectMain from "./ProjectMain";
import useIsInMobile from "../../hooks/useIsInMobile";

const Project = () => {
  const isInMobile = useIsInMobile();
  return (
    <Stack
      id="projects"
      component="section"
      px={{ xs: 2, md: 10 }}
      justifyContent="flex-start"
      direction="row"
      minHeight="100vh"
      spacing={4}
    >
      {!isInMobile && <Box flex={1} />}
      <Box flex={isInMobile ? 1 : 2}>
        <ProjectMain />
      </Box>
    </Stack>
  );
};

export default Project;
