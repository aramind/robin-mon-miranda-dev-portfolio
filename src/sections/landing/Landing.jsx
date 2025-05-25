import { Box, Button, Stack, Typography } from "@mui/material";

const Landing = () => {
  return (
    <Box
      height="80vh"
      pl={10}
      alignContent="center"
      direction="row"
      width={{ md: "70vw" }}
    >
      <Stack>
        <Typography fontSize="1.1rem">Hi, my name is</Typography>
        <Typography variant="h2" fontWeight="bold" color="primary">
          Robin Mon Miranda
        </Typography>
        <Typography variant="h4" fontWeight="bold" color="primary.light">
          Engineer. Educator. Now, to build with code.
        </Typography>
        <br />
        <Box width="50%">
          <Typography fontSize="1.2rem">
            I’m an electronics engineer transitioning into software development.
            I’m currently open to work and excited to begin a career where I can
            provide solutions through code.
          </Typography>
          <Stack
            direction="row"
            justifyContent="space-between"
            spacing={2}
            mt={2}
          >
            <Button variant="outlined" fullWidth>
              CHECK MY RESUME
            </Button>
            <Button variant="contained" fullWidth>
              SHOOT ME A MESSAGE
            </Button>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
};

export default Landing;
