import { Typography } from "@mui/material";
import React from "react";

const JobRole = ({ title, period }) => {
  return (
    <Typography>
      <Typography
        component="span"
        display="inline"
        color={{ xs: "primary.light", md: "primary.main" }}
        fontWeight={{ md: "bold" }}
      >
        {title}
      </Typography>
      <Typography
        component="span"
        display="inline"
        color="primary.light"
        sx={{ ml: 1 }}
      >
        ({period})
      </Typography>
    </Typography>
  );
};

export default JobRole;
