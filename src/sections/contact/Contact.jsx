import { Box, Typography } from "@mui/material";
import React from "react";
import useIsInMobile from "../../hooks/useIsInMobile";
import CTAButtons from "../../components/CTAButtons";
import PersonalDetails from "./PersonalDetails";
import { Gradient } from "@mui/icons-material";
import GradientText from "../../components/experimental/GradientText";

const Contact = ({ handleOpenMessageDialog }) => {
  const isInMobile = useIsInMobile();
  return (
    <Box
      height="100vh"
      mb={2}
      id="contact"
      component="section"
      spacing={2}
      px={2}
      width={{ xs: 1, md: "45rem" }}
      mx="auto"
      pb="4rem"
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <GradientText colorType="secondaryDark" isCentered={true}>
        <Typography
          variant={isInMobile ? "h4" : "h2"}
          fontWeight="bold"
          sx={{ fontFamily: (theme) => theme.typography.poppins }}
          textAlign="center"
          color="secondary"
        >
          Let's Connect!
        </Typography>
      </GradientText>
      <br />
      <Typography
        sx={{ fontFamily: (theme) => theme.typography.nunito }}
        textAlign="center"
        fontSize={{ xs: "1rem", md: "1.4rem" }}
      >
        I'm currently seeking opportunities to kickstart my journey in software
        development. If you're open to connecting or have a role where I could
        contribute and grow, I'd love to hear from you!
      </Typography>
      <br />
      <CTAButtons handleOpenMessageDialog={handleOpenMessageDialog} />
      <br />
      <br />
      <PersonalDetails />
    </Box>
  );
};

export default Contact;
