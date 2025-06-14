import { Typography } from "@mui/material";
import React from "react";
import useIsInMobile from "../hooks/useIsInMobile";
import ShinyText from "./experimental/ShinyText";

const SectionTitle = ({ title, textAlign = "center" }) => {
  const isInMobile = useIsInMobile();
  return (
    <ShinyText>
      <Typography
        variant={isInMobile ? "h5" : "h4"}
        sx={{ fontFamily: (theme) => theme.typography.condensed }}
        textAlign={textAlign}
      >
        {title.toUpperCase()}
      </Typography>
    </ShinyText>
  );
};

export default SectionTitle;
