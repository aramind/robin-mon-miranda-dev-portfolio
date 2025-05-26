import { Box, Stack, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import React, { Fragment } from "react";
import ProjectImage from "./ProjectImage";
import IconImage from "./IconImage";

const ProjectCard = ({
  title,
  description,
  details,
  images = [],
  stack = [],
  liveLink,
  gitLink,
}) => {
  return (
    <Stack
      spacing={1}
      width={1}
      borderRadius={2}
      p={2}
      sx={{
        outlineStyle: "solid",
        outlineWidth: 1,
        outlineColor: (theme) => theme.palette.black.light,
        transition: "all 0.4s ease-in-out",
        "&:hover": {
          // outlineStyle: "solid",
          // outlineWidth: 1,
          // outlineColor: (theme) => theme.palette.primary.main,
          bgcolor: (theme) => theme.palette.black.light,
        },
      }}
    >
      <Typography color="primary" fontSize="1.2rem" fontWeight="bold">
        {title}
      </Typography>
      <Typography color="primary.light">{description}</Typography>
      <Stack direction="row" spacing={1} flexWrap="wrap" width={1}>
        {images?.map((img, index) => (
          <Fragment key={index}>
            <ProjectImage src={img} />
          </Fragment>
        ))}
      </Stack>
      <Typography variant="subtitle2" textAlign="justify">
        {details}
      </Typography>
      <Stack direction="row" height="2rem" spacing={1}>
        {stack?.map((s, index) => (
          <IconImage techName={s} key={index} />
        ))}
      </Stack>
    </Stack>
  );
};

export default ProjectCard;
