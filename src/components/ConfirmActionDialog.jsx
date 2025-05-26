import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Paper,
  Stack,
} from "@mui/material";
import React, { useRef } from "react";
import Draggable from "react-draggable";

const DraggablePaperComponent = (props) => {
  return (
    <Draggable
      handle="#draggable-dialog-title"
      cancel={"[class*=*MuiDialogContent-root"}
    >
      <Paper
        {...props}
        sx={{ bgcolor: (theme) => theme.palette.black.light, width: "100%" }}
      />
    </Draggable>
  );
};
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
      PaperComponent={DraggablePaperComponent}
      slotProps={{
        paper: { ref: dialogRef },
      }}
      maxWidth={maxWidth}
    >
      <DialogTitle id="draggable-dialog-title">{title}</DialogTitle>
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
