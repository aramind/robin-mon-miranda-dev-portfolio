import { Box } from "@mui/material";
import React from "react";

const IconImage = ({ techName, height = "1.5rem" }) => {
  return (
    <Box
      component="img"
      src={`/assets/tech/${techName}.png`}
      height={height}
      width={height}
      sx={{ objectPosition: "bottom", objectFit: "contain" }}
    />
  );
};

export default IconImage;
