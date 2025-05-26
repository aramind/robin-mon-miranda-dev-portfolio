import React, { forwardRef } from "react";
import useIsInMobile from "../../hooks/useIsInMobile";
import { Box, Stack } from "@mui/material";
import ExpMain from "./ExpMain";
import { experiences } from "../../data/data";
import ExpMainMobile from "./ExpMainMobile";

const Experiences = forwardRef((_, ref) => {
  const isInMobile = useIsInMobile();
  return (
    <Stack
      ref={ref}
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
});

export default Experiences;
