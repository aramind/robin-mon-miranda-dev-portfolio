import React from "react";
import SectionTitle from "../../components/SectionTitle";
import { Avatar, Box, Chip, Stack, Typography } from "@mui/material";
// import useIsInMobile from "../../hooks/useIsInMobile";
import { aboutMe } from "../../data/data";
import useIsInMobile from "../../hooks/useIsInMobile";
import ImageForLargeScreen from "./ImageForLargeScreen";
import ImageForMobileScreen from "./ImageForMobileScreen";
import GradientText from "../../components/experimental/GradientText";
import ParagraphV2 from "./ParagraphV2";

const techStack = aboutMe?.stack;
const About = () => {
  const isInMobile = useIsInMobile();
  return (
    <Box
      width={1}
      height={1}
      mb={2}
      id="about"
      component="section"
      px={{ xs: 2, md: 10 }}
    >
      <SectionTitle title="About me" />
      <br />
      <Stack
        spacing={2}
        px={2}
        width={{ xs: 1, md: "640px" }}
        justifyContent="center"
        mx="auto"
      >
        <GradientText colorType="primaryDark" isCentered={true}>
          <Typography
            textAlign="center"
            fontSize={{ xs: "2rem", md: "2.5rem" }}
            fontWeight="bold"
            color="primary"
          >
            ROBIN MON MIRANDA
          </Typography>
        </GradientText>
        <Stack
          direction="row"
          spacing={1}
          justifyContent="center"
          alignItems="center"
          // className="outlined"
        >
          {isInMobile ? <ImageForMobileScreen /> : <ImageForLargeScreen />}
        </Stack>
        <ParagraphV2 />
        <Box height={1} />
        <Box
          display="flex"
          flexWrap="wrap"
          justifyContent="space-between"
          gap={1}
        >
          {techStack?.map((tech, index) => (
            <Chip
              key={index}
              avatar={<Avatar alt={tech} src={`/assets/tech/${tech}.png`} />}
              label={tech.toUpperCase()}
              variant="outlined"
              sx={{
                color: "primary.main",
                borderColor: "primary.main",
              }}
            />
          ))}
        </Box>
      </Stack>
      <br />
    </Box>
  );
};

export default About;
