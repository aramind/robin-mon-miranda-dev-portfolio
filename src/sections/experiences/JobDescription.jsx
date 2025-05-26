import { Box, Typography } from "@mui/material";
import React from "react";

const JobDescription = ({ descriptions = [] }) => {
  if (!Array.isArray(descriptions)) return;
  return (
    <Box component="ul" pl={2} sx={{ listStyleType: "disc" }}>
      {descriptions?.map((d, index) => (
        <Typography key={index} component="li" variant="body2">
          {d}
        </Typography>
      ))}
    </Box>
  );
};

export default JobDescription;
