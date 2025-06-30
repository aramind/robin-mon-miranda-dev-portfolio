import React from "react";
import useIsInMobile from "../../hooks/useIsInMobile";
import { Box } from "@mui/material";

const Highlighted = ({ children }) => {
  const isInMobile = useIsInMobile();

  return (
    <Box
      component="span"
      color={isInMobile ? "secondary.lightest" : ""}
      className="highlighted"
      fontWeight="bold"
      sx={{
        display: "inline",
        borderBottom: "1.5px solid",
        borderColor: (theme) => theme.palette.secondary.lightest,
      }}
    >
      {children}
    </Box>
  );
};

export default Highlighted;
