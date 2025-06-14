import { Button, Stack, Typography } from "@mui/material";
import React from "react";
import { links } from "../data/data";
import ShinyText from "./experimental/ShinyText";
import Magnet from "./experimental/Magnet";

const CTAButtons = ({ direction, handleOpenMessageDialog }) => {
  return (
    <Stack
      direction={direction || { xs: "column", md: "row" }}
      justifyContent="space-between"
      spacing={2}
      mt={2}
    >
      <Button
        variant="outlined"
        fullWidth
        sx={{ py: 1.5 }}
        onClick={() =>
          window.open(links?.resume, "_blank", "noopener,noreferrer")
        }
      >
        <ShinyText>
          <Typography>CHECK MY RESUME</Typography>
        </ShinyText>
      </Button>

      <Magnet>
        <Button
          variant="contained"
          fullWidth
          sx={{ py: 1.5 }}
          onClick={handleOpenMessageDialog}
        >
          <Typography>SHOOT ME A MESSAGE</Typography>
        </Button>
      </Magnet>
    </Stack>
  );
};

export default CTAButtons;
