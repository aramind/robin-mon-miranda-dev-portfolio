import { Box, Typography } from "@mui/material";
import React from "react";

const JobHighlights = ({ highlights }) => {
  if (!Array.isArray(highlights)) return;
  return (
    <Box component="ul" pl={2} sx={{ listStyleType: "disc" }} width={1}>
      {highlights?.map((d, index) => (
        <Typography
          key={index}
          component="li"
          variant="subtitle2"
          textAlign="justify"
          sx={{ whiteSpace: "normal", wordBreak: "break-word" }}
        >
          {d}
        </Typography>
      ))}
    </Box>
  );
};

export default JobHighlights;
