import { Box, Stack } from "@mui/material";
import React from "react";
import JobHighlights from "./JobHighlights";
import JobRole from "./JobRole";

const Experience = ({ exp }) => {
  console.log(exp.roles);
  return (
    <Stack width={1} flexWrap="wrap">
      {exp?.roles?.map((role, index) => (
        <JobRole key={index} title={role?.title} period={role?.period} />
      ))}
      <Box ml={2}>
        <JobHighlights highlights={exp?.highlights} />
      </Box>
    </Stack>
  );
};

export default Experience;
