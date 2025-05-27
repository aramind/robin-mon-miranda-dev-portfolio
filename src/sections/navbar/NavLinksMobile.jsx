import {
  Box,
  Button,
  IconButton,
  Link,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import useActiveSection from "../../hooks/useActiveSection";
import { HamburgerIcon } from "../../utils/muiIcons";
import { links } from "../../data/data";
import ResumeButton from "../../components/ResumeButton";

const NavLinksMobile = ({ sections }) => {
  const [anchorMenu, setAnchorMenu] = useState(null);

  const handleCloseMenu = () => {
    setAnchorMenu(null);
  };

  const active = useActiveSection(sections.map((s) => s.name));
  return (
    <>
      <IconButton onClick={(e) => setAnchorMenu(e.currentTarget)}>
        <HamburgerIcon
          sx={{
            fontSize: "50px",
            color: (theme) => theme.palette.secondary.main,
          }}
        />{" "}
      </IconButton>
      <Menu
        id="navlinks-mobile"
        open={Boolean(anchorMenu)}
        anchorEl={anchorMenu}
        onClose={handleCloseMenu}
        slotProps={{
          paper: {
            sx: {
              backgroundColor: (theme) => theme.palette.black.light,
            },
          },
        }}
      >
        {sections?.map((s, index) => (
          <MenuItem key={index} onClick={handleCloseMenu} className="centered">
            <Link
              href={`#${s.name}`}
              width={1}
              sx={{
                color: active === s.name ? "secondary.main" : "white.main",
                transition: "color 0.3s",
              }}
            >
              <Typography variant="h6" noWrap textAlign="center" width={1}>
                {s.text}
              </Typography>
            </Link>
          </MenuItem>
        ))}

        <Box width={1} className="centered" my={2}>
          <ResumeButton />
        </Box>
      </Menu>
    </>
  );
};

export default NavLinksMobile;
