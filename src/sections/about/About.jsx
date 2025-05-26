import React from "react";
import SectionTitle from "../../components/SectionTitle";
import { Box, Stack } from "@mui/material";

const About = () => {
  return (
    <Box width={1} height={1} mb={2}>
      <SectionTitle title="About me" />
      <br />
      <Stack spacing={2} ml={{ xs: 0, md: 4 }}></Stack>
      <br />
    </Box>
  );
};

export default About;
