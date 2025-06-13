import { Box, Stack, Typography, useTheme } from "@mui/material";
import useIsInMobile from "../../hooks/useIsInMobile";
import { forwardRef } from "react";
import CTAButtons from "../../components/CTAButtons";
import GradientText from "../../components/experimental/GradientText";

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

        <GradientText colorType="primaryDark">
          <Typography
            variant={isInMobile ? "h3" : "h2"}
            component="h1"
            fontWeight="bold"
            color="primary"
            sx={{ m: 0, p: 0 }}
          >
            Robin Mon Miranda
          </Typography>
        </GradientText>
        <GradientText colorType="primaryLight">
          <Typography
            variant={isInMobile ? "h5" : "h4"}
            fontWeight="bold"
            color="primary.light"
          >
            Engineer. Educator. Now building with code.
          </Typography>
        </GradientText>
        <br />
        <Box width={{ xs: 1, md: "50%" }}>
          <Typography fontSize={{ xs: "1rem", md: "1.2rem" }}>
            I’m an electronics engineer and educator who has transitioned into
            software development. I’m open to opportunities and excited to begin
            contributing solutions through code.
          </Typography>
          <CTAButtons handleOpenMessageDialog={handleOpenMessageDialog} />
        </Box>
      </Stack>
    </Box>
  );
});

export default Landing;
