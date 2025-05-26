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
      <Stack spacing={{ xs: 1, md: 2 }} ml={{ xs: 0, md: 4 }}>
        {projects?.map((p, index) => (
          <ProjectCard
            key={index}
            title={p.title}
            description={p.description}
            details={p.details}
            images={p.images}
            stack={p.stack}
            gitLink={p.gitLink}
            liveLink={p.liveLink}
          />
        ))}
      </Stack>
    </Box>
  );
};

export default ProjectMain;
