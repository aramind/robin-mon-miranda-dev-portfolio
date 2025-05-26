import { Box, Stack } from "@mui/material";
import React, { useRef } from "react";
import Landing from "../sections/landing/Landing";
import Project from "../sections/projects/Project";
import SideHero from "../components/SideHero";
import useStickySideHero from "../hooks/useStickySideHero";

const Main = () => {
  const landingRef = useRef();
  const { isSticky, isVisible } = useStickySideHero(landingRef);

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
      <Stack className="outlined" direction="row">
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
        <Box flex={2}>
          <Project />
          <Box height="150vh" id="experiences" className="outlined">
            experiences
          </Box>
        </Box>
      </Stack>
      <Box height="150vh" id="about" className="outlined">
        about me
      </Box>
      <Box height="100vh" id="contact">
        contact
      </Box>
    </Box>
  );
};

export default Main;
