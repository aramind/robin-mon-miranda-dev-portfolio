import { Box, Stack } from "@mui/material";
import React, { useRef, useState } from "react";
import Landing from "../sections/landing/Landing";
import Project from "../sections/projects/Project";
import SideHero from "../components/SideHero";
import useStickySideHero from "../hooks/useStickySideHero";
import Experiences from "../sections/experiences/Experiences";
import About from "../sections/about/About";
import Contact from "../sections/contact/Contact";
import SendMessageDialog from "../components/SendMessageDialog";
import axios from "axios";
import { sendMessageURL } from "../data/data";

const Main = () => {
  const [openMessageDialog, setOpeMessageDialog] = useState(false);

  const landingRef = useRef();
  const experiencesRef = useRef();
  const { isSticky, isVisible } = useStickySideHero({
    landingRef,
    experiencesRef,
  });

  // handlers

  const handleOpenMessageDialog = () => {
    setOpeMessageDialog(true);
  };

  // api
  const sendMessageRequest = async (formData) => {
    try {
      const res = await axios.post(sendMessageURL, formData);
      console.log(res);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      minHeight="100vh"
      paddingTop="80px"
      //   sx={{ backgroundColor: (theme) => theme.palette.black.main }}
    >
      <Landing
        ref={landingRef}
        handleOpenMessageDialog={handleOpenMessageDialog}
      />
      <Stack direction="row" mb={2}>
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
          <SideHero
            isVisible={isVisible}
            handleOpenMessageDialog={handleOpenMessageDialog}
          />
        </Box>
        <Stack flex={2} width={1} direction="column">
          <Project />
          <Experiences ref={experiencesRef} />
        </Stack>
      </Stack>
      <br />
      <About />
      <Contact handleOpenMessageDialog={handleOpenMessageDialog} />
      <SendMessageDialog
        open={openMessageDialog}
        setOpen={setOpeMessageDialog}
        sendMessageRequest={sendMessageRequest}
        // handleCloseMessageDialog={handleCloseMessageDialog}
      />
    </Box>
  );
};

export default Main;
