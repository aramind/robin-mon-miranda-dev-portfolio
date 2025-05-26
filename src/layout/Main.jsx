import { Box, Stack } from "@mui/material";
import React, { useRef } from "react";
import Landing from "../sections/landing/Landing";
import Project from "../sections/projects/Project";
import SideHero from "../components/SideHero";
import useStickySideHero from "../hooks/useStickySideHero";
import Experiences from "../sections/experiences/Experiences";
import About from "../sections/about/About";
import Contact from "../sections/contact/Contact";

const Main = () => {
  const landingRef = useRef();
  const experiencesRef = useRef();
  const { isSticky, isVisible } = useStickySideHero({
    landingRef,
    experiencesRef,
  });

  console.log(isSticky);
  console.log(isVisible);

  return (
    <Box
      display="flex"
      flexDirection="column"
      minHeight="100vh"
      paddingTop="80px"
      //   sx={{ backgroundColor: (theme) => theme.palette.black.main }}
    >
      <Landing ref={landingRef} />
      <Stack direction="row" mb={2} className="outlined">
        <Box
          flex={1}
          sx={{
            display: { xs: "none", md: isVisible ? "flex" : "none" }, // show only when visible on md+
            position: isSticky ? "fixed" : "relative",
            top: isSticky ? 120 : "auto",
            width: isSticky ? "30vw" : "auto", // fix width when fixed
            alignSelf: "flex-start",
            justifyContent: "center",
            pl: 10,
          }}
        >
          <SideHero isVisible={isVisible} />
        </Box>
        <Stack flex={2} width={1} direction="column">
          <Project />
          <Experiences ref={experiencesRef} />
        </Stack>
      </Stack>
      <br />
      <About />
      <Contact />
    </Box>
  );
};

export default Main;
