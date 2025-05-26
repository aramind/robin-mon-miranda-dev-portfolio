import React from "react";
import useIsInMobile from "../../hooks/useIsInMobile";
import { Box, Stack } from "@mui/material";
import ExpMain from "./ExpMain";
import { experiences } from "../../data/data";

const Experiences = () => {
  const isInMobile = useIsInMobile();
  return (
    <Stack
      id="experiences"
      component="section"
      px={{ xs: 2, md: 10 }}
      justifyContent="flex-start"
      direction="row"
      minHeight="100vh"
      spacing={4}
    >
      {!isInMobile && <Box flex={1} />}
      <Box flex={isInMobile ? 1 : 2}>
        <ExpMain experiences={experiences} />
      </Box>
    </Stack>
  );
};

export default Experiences;
