import { AppBar, Link, Toolbar, Typography } from "@mui/material";

const NavBar = () => {
  return (
    <AppBar sx={{ maxHeight: "80px" }} elevation={0}>
      <Toolbar sx={{ backgroundColor: (theme) => theme.palette.black.main }}>
        <Link href={`#`}>
          <Typography variant="h3" fontWeight="bold">
            RM
          </Typography>
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
