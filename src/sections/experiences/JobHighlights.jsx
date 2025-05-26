import { Box, Typography } from "@mui/material";
import React from "react";

const JobHighlights = ({ highlights }) => {
  if (!Array.isArray(highlights)) return;
  return (
    <Box component="ul" pl={2} sx={{ listStyleType: "disc" }}>
      {highlights?.map((d, index) => (
        <Typography key={index} component="li" variant="body2">
          {d}
        </Typography>
      ))}
    </Box>
  );
};

export default JobHighlights;
