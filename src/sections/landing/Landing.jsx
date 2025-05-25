import { Box, Button, Stack, Typography } from "@mui/material";
import useIsInMobile from "../../hooks/useIsInMobile";

const Landing = () => {
  const isInMobile = useIsInMobile();
  return (
    <Box
      px={2}
      height="80vh"
      pl={{ md: 10 }}
      alignContent="center"
      direction="row"
      width={{ xs: "100%", md: "70vw" }}
    >
      <Stack>
        <Typography fontSize="1.1rem">Hi, my name is</Typography>
        <Typography
          variant={isInMobile ? "h3" : "h2"}
          fontWeight="bold"
          color="primary"
        >
          Robin Mon Miranda
        </Typography>
        <Typography
          variant={isInMobile ? "h5" : "h4"}
          fontWeight="bold"
          color="primary.light"
        >
          Engineer. Educator. Now, to build with code.
        </Typography>
        <br />
        <Box width={{ xs: 1, md: "50%" }}>
          <Typography fontSize={{ xs: "1rem", md: "1.2rem" }}>
            I’m an electronics engineer transitioning into software development.
            I’m currently open to work and excited to begin a career where I can
            provide solutions through code.
          </Typography>
          <Stack
            direction={{ xs: "column", md: "row" }}
            justifyContent="space-between"
            spacing={2}
            mt={2}
          >
            <Button variant="outlined" fullWidth sx={{ py: 1.5 }}>
              CHECK MY RESUME
            </Button>
            <Button variant="contained" fullWidth sx={{ py: 1.5 }}>
              SHOOT ME A MESSAGE
            </Button>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
};

export default Landing;
