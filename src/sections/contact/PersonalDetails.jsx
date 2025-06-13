import { IconButton, Stack, Typography } from "@mui/material";
import React from "react";
import { contactDetails } from "../../data/data";
import GradientText from "../../components/experimental/GradientText";

const DetailWithTextOnly = ({ contact }) => (
  <Stack
    direction="row"
    width={1}
    alignItems="center"
    justifyContent="center"
    spacing={1}
  >
    {contact?.icon}
    <Typography variant="body2">{contact?.value} </Typography>
  </Stack>
);

const DetailWithLinkIconOnly = ({ contact, text }) => (
  <IconButton
    onClick={() => window.open(contact?.link, "_blank", "noopener,noreferrer")}
    sx={{ color: (theme) => theme.palette.secondary.light }}
  >
    {contact?.icon}
  </IconButton>
);
const PersonalDetails = () => {
  return (
    <Stack spacing={1}>
      <GradientText isCentered={true} colorType="primaryLight">
        <Typography
          color="primary"
          fontSize={{ xs: "1.2rem", md: "1.6rem" }}
          fontWeight="bold"
          textAlign="center"
        >
          Robin Mon R. Miranda
        </Typography>
      </GradientText>
      <Stack spacing={0.5}>
        <DetailWithTextOnly
          contact={contactDetails?.find((c) => c.name === "email")}
        />
        <DetailWithTextOnly
          contact={contactDetails?.find((c) => c.name === "location")}
        />
        <Stack direction="row" justifyContent="center" alignItems="center">
          <DetailWithLinkIconOnly
            contact={contactDetails?.find((c) => c.name === "github")}
          />
          <DetailWithLinkIconOnly
            contact={contactDetails?.find((c) => c.name === "linkedin")}
          />
        </Stack>
      </Stack>
    </Stack>
  );
};

export default PersonalDetails;
