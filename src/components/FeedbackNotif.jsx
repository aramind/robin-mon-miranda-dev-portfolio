import { Alert, Snackbar } from "@mui/material";
import React from "react";

const FeedbackNotif = ({ message, open, severity, onClose, anchorOrigin }) => {
  return (
    <Snackbar
      open={open}
      autoHideDuration={severity === "success" ? 5000 : null}
      onClose={onClose}
      anchorOrigin={anchorOrigin || { vertical: "top", horizontal: "center" }}
      sx={{ zIndex: "999999" }}
    >
      <Alert onClose={onClose} severity={severity} sx={{ width: "100%" }}>
        {message}{" "}
      </Alert>
    </Snackbar>
  );
};

export default FeedbackNotif;
