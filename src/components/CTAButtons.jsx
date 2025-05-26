import { Button, Stack } from "@mui/material";
import React from "react";

const CTAButtons = ({ handleOpenMessageDialog }) => {
  return (
    <Stack
      direction={{ xs: "column", md: "row" }}
      justifyContent="space-between"
      spacing={2}
      mt={2}
    >
      <Button variant="outlined" fullWidth sx={{ py: 1.5 }}>
        CHECK MY RESUME
      </Button>
      <Button
        variant="contained"
        fullWidth
        sx={{ py: 1.5 }}
        onClick={handleOpenMessageDialog}
      >
        SHOOT ME A MESSAGE
      </Button>
    </Stack>
  );
};

export default CTAButtons;
