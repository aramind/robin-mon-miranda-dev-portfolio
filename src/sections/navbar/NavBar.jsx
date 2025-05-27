import { AppBar, Box, Link, Stack, Toolbar } from "@mui/material";
import NavbarLinks from "./NavbarLinks";
import useIsInMobile from "../../hooks/useIsInMobile";
import NavLinksMobile from "./NavLinksMobile";
import ImageWrapper from "../../components/ImageWrapper";

const sections = [
  { text: "", name: "landing" },
  { text: "projects", name: "projects" },
  { text: "experiences", name: "experiences" },
  { text: "about me", name: "about" },
  { text: "contact", name: "contact" },
];

const NavBar = () => {
  const isInMobile = useIsInMobile();
  return (
    <AppBar sx={{ maxHeight: "80px" }} elevation={0}>
      <Toolbar sx={{ backgroundColor: (theme) => theme.palette.black.main }}>
        <Stack
          direction="row"
          justifyContent="space-between"
          width={1}
          alignItems="center"
        >
          <Link href={`#`}>
            {/* <Typography
              variant={isInMobile ? "h5" : "h4"}
              fontWeight="bold"
              color="primary"
            >
              RM
            </Typography> */}
            <ImageWrapper
              src="/assets/about/logo.png"
              height={isInMobile ? "54px" : "64px"}
            />
          </Link>
          <Box width={1} />
          {isInMobile ? (
            <NavLinksMobile sections={sections} />
          ) : (
            <NavbarLinks sections={sections} />
          )}
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
