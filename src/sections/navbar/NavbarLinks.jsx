import { Link, Stack } from "@mui/material";
import React from "react";
import useActiveSection from "../../hooks/useActiveSection";

const sections = [
  { text: "projects", name: "projects" },
  { text: "experiences", name: "experiences" },
  { text: "about me", name: "about" },
  { text: "contact", name: "contact" },
];
const NavbarLinks = () => {
  const active = useActiveSection(sections.map((s) => s.name));
  return (
    <Stack direction="row" justifyContent="space-between" alignItems="center">
      {sections?.map((s) => (
        <Link
          href={`#${s.name}`}
          sx={{
            color: active === s.name ? "secondary.main" : "white.main",
            transition: "color 0.3s",
          }}
        >
          {s.text}
        </Link>
      ))}
    </Stack>
  );
};

export default NavbarLinks;
