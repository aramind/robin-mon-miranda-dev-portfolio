import { Typography } from "@mui/material";
import React from "react";
import useIsInMobile from "../hooks/useIsInMobile";

const SectionTitle = ({ title }) => {
  const isInMobile = useIsInMobile();
  return (
    <Typography
      variant={isInMobile ? "h5" : "h4"}
      sx={{ fontFamily: (theme) => theme.typography.condensed }}
      textAlign={{ xs: "center", md: "left" }}
    >
      {title.toUpperCase()}
    </Typography>
  );
};

export default SectionTitle;
