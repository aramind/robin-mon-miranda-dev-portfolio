import { Link, Stack, Typography } from "@mui/material";
import React from "react";
import useActiveSection from "../../hooks/useActiveSection";

import ResumeButton from "../../components/ResumeButton";
import Magnet from "../../components/experimental/Magnet";

const NavbarLinks = ({ sections }) => {
  const active = useActiveSection(sections.map((s) => s.name));

  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      spacing={4}
    >
      {sections?.map((s) => (
        <Link
          href={`#${s.name}`}
          sx={{
            color: active === s.name ? "secondary.main" : "white.main",
            transition: "color 0.3s",
            "&:hover": {
              color: "secondary.light",
            },
          }}
        >
          <Typography variant="h6" noWrap>
            {s.text}
          </Typography>
        </Link>
      ))}
      <Magnet>
        <ResumeButton />
      </Magnet>
    </Stack>
  );
};

export default NavbarLinks;
