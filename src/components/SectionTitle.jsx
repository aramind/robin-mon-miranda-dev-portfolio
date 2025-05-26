import { Typography } from "@mui/material";
import React from "react";
import useIsInMobile from "../hooks/useIsInMobile";

const SectionTitle = ({ title, textAlign = "center" }) => {
  const isInMobile = useIsInMobile();
  return (
    <Typography
      variant={isInMobile ? "h5" : "h4"}
      sx={{ fontFamily: (theme) => theme.typography.condensed }}
      textAlign={textAlign}
    >
      {title.toUpperCase()}
    </Typography>
  );
};

export default SectionTitle;
