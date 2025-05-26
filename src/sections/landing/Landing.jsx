import { Box, Button, Stack, Typography } from "@mui/material";
import useIsInMobile from "../../hooks/useIsInMobile";
import { forwardRef } from "react";
import CTAButtons from "../../components/CTAButtons";

const Landing = forwardRef(({ handleOpenMessageDialog }, ref) => {
  const isInMobile = useIsInMobile();
  return (
    <Box
      ref={ref}
      px={2}
      height="80vh"
      pl={{ md: 10 }}
      alignContent="center"
      direction="row"
      width={{ xs: "100%", md: "70vw" }}
      id="landing"
    >
      <Stack>
        <Typography fontSize="1.1rem">Hi, my name is</Typography>
        <Typography
          variant={isInMobile ? "h3" : "h2"}
          fontWeight="bold"
          color="primary"
        >
          Robin Mon Miranda
        </Typography>
        <Typography
          variant={isInMobile ? "h5" : "h4"}
          fontWeight="bold"
          color="primary.light"
        >
          Engineer. Educator. Now, to build with code.
        </Typography>
        <br />
        <Box width={{ xs: 1, md: "50%" }}>
          <Typography fontSize={{ xs: "1rem", md: "1.2rem" }}>
            I’m an electronics engineer transitioning into software development.
            I’m currently open to work and excited to begin a career where I can
            provide solutions through code.
          </Typography>
          <CTAButtons handleOpenMessageDialog={handleOpenMessageDialog} />
        </Box>
      </Stack>
    </Box>
  );
});

export default Landing;
