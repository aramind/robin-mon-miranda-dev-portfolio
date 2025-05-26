import { Box, Stack } from "@mui/material";
import React from "react";
import SectionTitle from "../../components/SectionTitle";
import { projects } from "../../data/data";
import ProjectCard from "./ProjectCard";

const ProjectMain = () => {
  return (
    <Box width={1} height={1}>
      <SectionTitle title="Some things I've built" />
      <br />
      <Stack spacing={2} ml={4}>
        {projects?.map((p, index) => (
          <ProjectCard
            title={p.title}
            description={p.description}
            details={p.details}
            images={p.images}
            stack={p.stack}
          />
        ))}
      </Stack>
    </Box>
  );
};

export default ProjectMain;
