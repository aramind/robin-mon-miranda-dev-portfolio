import { Box } from "@mui/material";
import React from "react";

const ExpPanel = ({ children, value, index }) => {
  return (
    <Box
      role="tabpanel"
      value={value !== index}
      id={`experience-tabpanel-${index}`}
    >
      {value === index && <Box sx={{ py: 2 }}>{children}</Box>}
    </Box>
  );
};

export default ExpPanel;
