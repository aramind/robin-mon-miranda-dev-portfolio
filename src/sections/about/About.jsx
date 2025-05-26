import React from "react";
import SectionTitle from "../../components/SectionTitle";
import { Box, Stack } from "@mui/material";

const About = () => {
  return (
    <Box
      width={1}
      height={1}
      mb={2}
      id="about"
      component="section"
      px={{ xs: 2, md: 10 }}
      className="outlined"
    >
      <SectionTitle title="About me" />
      <br />
      <Box spacing={2} width={1} className="outlined2"></Box>
      <br />
    </Box>
  );
};

export default About;
