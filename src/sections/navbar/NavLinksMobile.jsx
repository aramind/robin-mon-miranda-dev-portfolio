import { IconButton, Link, Menu, MenuItem, Typography } from "@mui/material";
import React, { useState } from "react";
import useActiveSection from "../../hooks/useActiveSection";
import { HamburgerIcon } from "../../utils/muiIcons";

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
      >
        {sections?.map((s, index) => (
          <MenuItem key={index} onClick={handleCloseMenu}>
            <Link
              href={`#${s.name}`}
              sx={{
                color: active === s.name ? "secondary.main" : "white.main",
                transition: "color 0.3s",
              }}
            >
              <Typography variant="h6" noWrap>
                {s.text}
              </Typography>
            </Link>
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default NavLinksMobile;
