import React from "react";
import { useForm } from "react-hook-form";

import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Stack,
  Typography,
} from "@mui/material";
import useIsInMobile from "../hooks/useIsInMobile";
import useConfirmActionDialog from "../hooks/useConfirmActionDialog";
import ControlledTextField from "./ControlledTextField";

const defaultFormValues = {
  name: "",
  company: "",
  email: "",
  subject: "",
  message: "",
};

const SendMessageDialog = ({ open, setOpen, sendMessageRequest }) => {
  const isInMobile = useIsInMobile();
  const { handleOpen: handleConfirmSend, renderConfirmActionDialog } =
    useConfirmActionDialog(setOpen);
  // form related
  const { control, reset, handleSubmit } = useForm({
    mode: "onTouched",
    defaultValues: defaultFormValues,
  });

  const onSubmit = async (formData) => {
    console.log(formData);
    handleConfirmSend(
      "Confirm send",
      "Everything good? Ready to send your message?",
      () => sendMessageRequest(formData)
    );
  };

  const handleClose = (e) => {
    e.preventDefault();
    e.stopPropagation();
    reset(defaultFormValues);
    setOpen(false);
  };

  const handleClear = (e) => {
    e.preventDefault();
    e.stopPropagation();
    reset(defaultFormValues);
  };

  return (
    <form noValidate>
      <Dialog
        open={open}
        onClose={handleClose}
        fullWidth
        slotProps={{
          paper: {
            sx: {
              backgroundColor: (theme) => theme.palette.white.dark,
              color: (theme) => theme.palette.white.dark,
              borderRadius: 2,
            },
          },
        }}
        maxWidth={isInMobile ? "xl" : "md"}
      >
        <DialogTitle id="send-message-dialog">
          <Typography
            fontSize={{ xs: "1.4rem", md: "1.8rem" }}
            fontWeight="bold"
            sx={{ fontFamily: (theme) => theme.typography.poppins }}
            color="primary.dark"
          >
            Let's Connect
          </Typography>
        </DialogTitle>

        <DialogContent
          sx={{
            overflow: "visible",
          }}
        >
          <Stack spacing={2} py={2}>
            <Stack direction={{ xs: "column", md: "row" }} spacing={2}>
              <ControlledTextField
                name="name"
                control={control}
                label="Name"
                rules={{ required: "Name is required" }}
              />
              <ControlledTextField
                name="company"
                control={control}
                label="Company"
              />
            </Stack>
            <ControlledTextField
              name="email"
              control={control}
              label="Email"
              type="email"
              rules={{
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+\.\S+$/,
                  message: "Invalid email address",
                },
              }}
            />
            <ControlledTextField
              name="subject"
              control={control}
              label="Subject"
              rules={{ required: "Subject is required" }}
            />
            <ControlledTextField
              name="message"
              control={control}
              label="Message"
              multiline
              rows={4}
              rules={{ required: "Message is required" }}
            />
          </Stack>
        </DialogContent>
        <DialogActions>
          <Stack
            direction="row"
            justifyContent="stretch"
            alignItems="center"
            width={{ xs: 1, md: "500px" }}
            spacing={1}
            px={{ xs: 2 }}
          >
            <Button
              onClick={handleClose}
              variant="outlined"
              sx={{
                flex: 1,
                py: 1,
                borderColor: (theme) => theme.palette.primary.dark,
                color: (theme) => theme.palette.black.main,
                "&:hover": {
                  borderColor: (theme) => theme.palette.primary.dark,
                  color: (theme) => theme.palette.primary.dark,
                  backgroundColor: (theme) => theme.palette.white.dark,
                },
              }}
            >
              CANCEL
            </Button>
            <Button
              onClick={handleClear}
              variant="outlined"
              sx={{
                flex: 1,
                py: 1,
                borderColor: (theme) => theme.palette.primary.dark,
                color: (theme) => theme.palette.black.main,
                "&:hover": {
                  borderColor: (theme) => theme.palette.primary.dark,
                  color: (theme) => theme.palette.primary.dark,
                  backgroundColor: (theme) => theme.palette.white.dark,
                },
              }}
            >
              CLEAR
            </Button>
            <Button
              //   type="submit"
              variant="contained"
              onClick={handleSubmit(onSubmit)}
              width="200px"
              sx={{
                flex: 1,
                py: 1,
                backgroundColor: (theme) => theme.palette.primary.dark,
                color: (theme) => theme.palette.white.main,
                "&:hover": {
                  backgroundColor: (theme) => theme.palette.primary.main,
                  color: (theme) => theme.palette.black.dark,
                },
              }}
            >
              SEND
            </Button>
          </Stack>
        </DialogActions>
        {/* </DraggableDialog> */}
        <Box height="1rem" />
      </Dialog>
      {renderConfirmActionDialog()}
    </form>
  );
};

export default SendMessageDialog;
