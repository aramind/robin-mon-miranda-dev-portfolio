import { Box, Slide, Typography } from "@mui/material";
import CTAButtons from "./CTAButtons";

const SideHero = ({ isVisible, handleOpenMessageDialog }) => {
  return (
    <Slide
      in={isVisible}
      direction="down"
      timeout={1000}
      mountOnEnter
      unmountOnExit
    >
      <Box width={1} height={1} alignContent="center">
        <Typography
          fontSize={{ xs: "2rem", md: "2.5rem" }}
          // variant={isInMobile ? "h5" : "h4"}
          fontWeight="bold"
          color="primary"
        >
          Robin Mon Miranda
        </Typography>
        <Typography
          fontSize={{ xs: "1.1rem", md: "1.4rem" }}
          // variant={isInMobile ? "h6" : "h5"}
          fontWeight="bold"
          color="primary.light"
        >
          Engineer. Educator. Now building with code.
        </Typography>
        <Box width={{ xs: 1, md: "75%" }}>
          <Typography>
            I’m an electronics engineer and educator who has transitioned into
            software development. I’m open to opportunities and excited to begin
            contributing solutions through code.
          </Typography>
          {/* <Stack justifyContent="space-between" spacing={2} mt={2}>
            <Button variant="outlined" fullWidth sx={{ py: 1.5 }}>
              CHECK MY RESUME
            </Button>
            <Button variant="contained" fullWidth sx={{ py: 1.5 }}>
              SHOOT ME A MESSAGE
            </Button>
          </Stack> */}
          <CTAButtons
            direction="column"
            handleOpenMessageDialog={handleOpenMessageDialog}
          />
        </Box>
      </Box>
    </Slide>
  );
};

export default SideHero;
