import { Box } from "@mui/material";
import React from "react";

const ProjectImage = ({ src, maxHeight = "120px", maxWidth = "200px" }) => {
  return (
    <Box
      display="flex"
      alignItems="center"
      gap={1}
      component="img"
      src={src}
      maxHeight={maxHeight}
      maxWidth={maxWidth}
      sx={{ objectPosition: "bottom", objectFit: "contain" }}
    />
  );
};

export default ProjectImage;
