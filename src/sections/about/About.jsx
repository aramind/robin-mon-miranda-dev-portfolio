import React, { Fragment } from "react";
import SectionTitle from "../../components/SectionTitle";
import { Avatar, Box, Chip, Stack, Typography } from "@mui/material";
import useIsInMobile from "../../hooks/useIsInMobile";
import { aboutMe } from "../../data/data";
import ImageWrapper from "../../components/ImageWrapper";

const Highlighted = ({ children }) => (
  <Box
    component="span"
    color="secondary.lightest"
    fontWeight="bold"
    sx={{
      display: "inline",
      borderBottom: "1.5px solid",
      borderColor: (theme) => theme.palette.secondary.main,
    }}
  >
    {children}
  </Box>
);

const ParagraphWrapper = ({ children }) => (
  <Typography variant="body2" textAlign="justify" fontSize={{ md: "1.2rem" }}>
    {children}
  </Typography>
);

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
        <Typography
          textAlign="center"
          fontSize={{ xs: "2rem", md: "2.5rem" }}
          fontWeight="bold"
          color="primary"
        >
          ROBIN MON MIRANDA
        </Typography>
        {/* <Stack
          direction="row"
          spacing={1}
          justifyContent="center"
          alignItems="center"
        >
          <ImageWrapper src="/assets/ilms/1.png" height="192px" width="192px" />

          {!isInMobile && (
            <>
              <ImageWrapper
                src="/assets/ilms/2.png"
                height="192px"
                width="192px"
              />
              <ImageWrapper
                src="/assets/ilms/3.png"
                height="192px"
                width="192px"
              />
            </>
          )}
        </Stack> */}
        <ParagraphWrapper>
          I come from a background in{" "}
          <Highlighted>electronics engineering</Highlighted>, with years of
          experience as a college and review instructor—helping future engineers
          pass and excel in their licensure exams.
        </ParagraphWrapper>
        <ParagraphWrapper>
          While I love teaching and mentoring, what truly energized me were the
          moments I had to think of solutions to specific problems: designing
          specialized materials, creating systems tailored to unique needs, and
          figuring out how to make ideas work in practice. That’s where I
          discovered my <Highlighted>passion — building solutions</Highlighted>.
        </ParagraphWrapper>
        <ParagraphWrapper>
          This led me to <Highlighted>explore software development</Highlighted>
          , a field where I can continue doing what I love: thinking critically
          and turning ideas into tools that solve problems.
        </ParagraphWrapper>
        <ParagraphWrapper>
          Now, I’m actively <Highlighted>transitioning</Highlighted> into this
          new path. I’ve recently{" "}
          <Highlighted>
            completed a full-stack web development bootcamp
          </Highlighted>
          , where I trained in the <Highlighted>MERN stack</Highlighted>{" "}
          (MongoDB, Express, React, Node.js) and added Material UI through
          creating side projects.
        </ParagraphWrapper>
        <ParagraphWrapper>
          Tough I’m just starting out, I bring with me a strong{" "}
          <Highlighted>foundation in logic and systems thinking</Highlighted>, a
          <Highlighted>problem-solver’s mindset</Highlighted>, a{" "}
          <Highlighted>passion for building</Highlighted>, and a deep{" "}
          <Highlighted>
            commitment to continuous learning and growth
          </Highlighted>
          .
        </ParagraphWrapper>
        <ParagraphWrapper>
          As I continue learning and building, I’ve had the chance to work with
          the following technologies:
        </ParagraphWrapper>
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
