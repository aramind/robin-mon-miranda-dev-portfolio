import { Paper } from "@mui/material";
import React from "react";
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

export default DraggablePaperComponent;
