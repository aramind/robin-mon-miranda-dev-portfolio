import { Stack, Typography } from "@mui/material";
import React from "react";
import Experience from "./Experience";

const ExperienceMobile = ({ exp }) => {
  return (
    <Stack
      spacing={1}
      width={1}
      borderRadius={2}
      p={2}
      sx={{
        outlineStyle: "solid",
        outlineWidth: 1,
        outlineColor: (theme) => theme.palette.black.light,
      }}
    >
      <Typography
        color="primary"
        fontSize="1.2rem"
        fontWeight="bold"
        textAlign={{ xs: "center", md: "left" }}
      >
        {exp?.company}
      </Typography>
      <Experience exp={exp} />
    </Stack>
  );
};

export default ExperienceMobile;
