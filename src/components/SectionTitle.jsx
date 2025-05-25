import { Typography } from "@mui/material";
import React from "react";

const SectionTitle = ({ title }) => {
  return (
    <Typography
      variant="h4"
      sx={{ fontFamily: (theme) => theme.typography.condensed }}
    >
      {title.toUpperCase()}
    </Typography>
  );
};

export default SectionTitle;
