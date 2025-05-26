import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import JobHighlights from "./JobHighlights";

const JobRole = ({ title, period }) => {
  return (
    <Typography>
      <Typography
        component="span"
        display="inline"
        color="primary"
        fontSize="1.2rem"
        fontWeight="bold"
      >
        {title}
      </Typography>
      <Typography
        component="span"
        display="inline"
        color="primary.light"
        sx={{ ml: 1 }}
      >
        ({period})
      </Typography>
    </Typography>
  );
};
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
