import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Stack,
} from "@mui/material";
import React, { useRef } from "react";

const ConfirmActionDialog = ({
  open = false,
  setOpen,
  title = "",
  content = "",
  handleReset,
  handleConfirm,
  maxWidth = "md",
}) => {
  const dialogRef = useRef(null);

  const handleClose = (e) => {
    e.stopPropagation();
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      slotProps={{
        paper: { ref: dialogRef },
      }}
      maxWidth={maxWidth}
    >
      <DialogTitle id="dialog-title">{title}</DialogTitle>
      <DialogContent>{content}</DialogContent>
      <DialogActions>
        <Stack spacing={1} direction="row">
          <Button variant="outlined" onClick={() => setOpen(false)}>
            cancel
          </Button>
          <Button variant="outlined" onClick={handleReset}>
            reset
          </Button>
          <Button
            variant="contained"
            onClick={() => {
              handleConfirm();
              setOpen(false);
            }}
          >
            confirm
          </Button>
        </Stack>
      </DialogActions>
    </Dialog>
  );
};

export default ConfirmActionDialog;
