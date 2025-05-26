import { IconButton, Stack, Typography } from "@mui/material";
import React, { Fragment } from "react";
import ProjectImage from "./ProjectImage";
import IconImage from "./IconImage";
import { GitIcon, LaunchIcon } from "../../utils/muiIcons";

const ProjectCard = ({
  title,
  description,
  details,
  images = [],
  stack = [],
  liveLink,
  gitLink,
}) => {
  // onclickhandlers

  const onLaunchClick = (e) => {
    e.stopPropagation();
    if (!liveLink) return;
    window.open(liveLink, "_blank", "noopener,noreferrer");
  };

  const onGitOpenClick = (e) => {
    e.stopPropagation();
    if (!gitLink) return;
    window.open(gitLink, "_blank", "noopener,noreferrer");
  };

  return (
    <Stack
      spacing={1}
      width={1}
      borderRadius={2}
      p={2}
      onClick={onLaunchClick}
      sx={{
        cursor: liveLink ? "pointer" : "default",
        outlineStyle: "solid",
        outlineWidth: 1,
        outlineColor: (theme) => theme.palette.black.light,
        transition: "all 0.4s ease-in-out",
        "&:hover": {
          bgcolor: (theme) => theme.palette.black.light,
        },
      }}
    >
      <Stack
        direction={{ xs: "column-reverse", md: "row" }}
        justifyContent="space-between"
        alignItems="center"
      >
        <Typography
          color="primary"
          fontSize="1.2rem"
          fontWeight="bold"
          textAlign={{ xs: "center", md: "left" }}
        >
          {title}
        </Typography>
        <Stack direction="row">
          <IconButton
            color="secondary"
            onClick={onLaunchClick}
            disabled={!liveLink}
          >
            <LaunchIcon />
          </IconButton>
          <IconButton
            color="secondary"
            onClick={onGitOpenClick}
            disabled={!gitLink}
          >
            <GitIcon />
          </IconButton>
        </Stack>
      </Stack>

      <Typography
        color="primary.light"
        textAlign={{ xs: "center", md: "left" }}
      >
        {description}
      </Typography>
      <Stack
        direction="row"
        spacing={1}
        flexWrap="wrap"
        width={1}
        justifyContent={{ xs: "center", md: "flex-start" }}
      >
        {images?.map((img, index) => (
          <Fragment key={index}>
            <ProjectImage src={img} />
          </Fragment>
        ))}
      </Stack>
      <Typography
        variant="subtitle2"
        textAlign={{ xs: "center", md: "justify" }}
      >
        {details}
      </Typography>
      <Stack
        direction="row"
        height="2rem"
        spacing={1}
        justifyContent={{ xs: "center", md: "flex-start" }}
        flexWrap="wrap"
      >
        {stack?.map((s, index) => (
          <IconImage techName={s} key={index} />
        ))}
      </Stack>
    </Stack>
  );
};

export default ProjectCard;
