import { Typography } from "@mui/material";
import React from "react";

const ParagraphWrapper = ({ children }) => (
  <Typography
    variant="body2"
    textAlign="justify"
    fontSize={{ md: "1.2rem" }}
    sx={{
      "& .highlighted": {
        transition: "all 0.3s ease",
      },
      "&:hover .highlighted": {
        // backgroundColor: "secondary.lightest",

        borderBottom: "1.5px solid",
        color: "secondary.main",
      },
    }}
  >
    {children}
  </Typography>
);

export default ParagraphWrapper;
