import React from "react";
import { Controller, useForm } from "react-hook-form";

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import useIsInMobile from "../hooks/useIsInMobile";

const SendMessageDialog = ({ open, setOpen, submitHandler }) => {
  const isInMobile = useIsInMobile();
  // form related
  const {
    control,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
    defaultValues: {
      name: "",
      company: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (formData) => {
    console.log(formData);
  };

  const handleClose = (e) => {
    e.preventDefault();
    e.stopPropagation();
    reset({});
    setOpen(false);
  };

  const handleClear = (e) => {
    e.preventDefault();
    e.stopPropagation();
    reset({});
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <Dialog
        open={open}
        onClose={handleClose}
        fullWidth
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

        <DialogContent>
          <Stack spacing={2}>
            <Stack direction={{ xs: "column", md: "row" }} spacing={2}>
              <Controller
                name="name"
                control={control}
                rules={{ required: "Name is required" }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Name"
                    fullWidth
                    error={!!errors.name}
                    helperText={errors.name?.message}
                    // size={{ xs: "small", md: "medium" }}
                  />
                )}
              />
              <Controller
                name="company"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Company"
                    fullWidth
                    // size={{ xs: "small", md: "medium" }}
                  />
                )}
              />
            </Stack>
            <Controller
              name="email"
              control={control}
              rules={{
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+\.\S+$/,
                  message: "Invalid email address",
                },
              }}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Email"
                  type="email"
                  fullWidth
                  error={!!errors.email}
                  helperText={errors.email?.message}
                  //   size={{ xs: "small", md: "medium" }}
                />
              )}
            />
            <Controller
              name="subject"
              control={control}
              rules={{ required: "Subject is required" }}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Subject"
                  fullWidth
                  error={!!errors.subject}
                  helperText={errors.subject?.message}
                  //   size={{ xs: "small", md: "medium" }}
                />
              )}
            />
            <Controller
              name="message"
              control={control}
              rules={{ required: "Message is required" }}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Message"
                  multiline
                  rows={4}
                  fullWidth
                  error={!!errors.message}
                  helperText={errors.message?.message}
                  //   size={{ xs: "small", md: "medium" }}
                />
              )}
            />
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleClose}
            variant="outlined"
            sx={{
              borderColor: (theme) => theme.palette.primary.dark,
              color: (theme) => theme.palette.black.main,
              width: "160px",
              "&:hover": {
                borderColor: (theme) => theme.palette.primary.dark,
                color: (theme) => theme.palette.primary.dark,
                backgroundColor: (theme) => theme.palette.white.light,
              },
            }}
          >
            Cancel
          </Button>
          <Button
            onClick={handleClear}
            variant="outlined"
            sx={{
              borderColor: (theme) => theme.palette.primary.dark,
              color: (theme) => theme.palette.black.main,
              width: "160px",
              "&:hover": {
                borderColor: (theme) => theme.palette.primary.dark,
                color: (theme) => theme.palette.primary.dark,
                backgroundColor: (theme) => theme.palette.white.light,
              },
            }}
          >
            Clear
          </Button>
          <Button
            type="submit"
            variant="contained"
            onClick={handleClose}
            width="200px"
            sx={{
              backgroundColor: (theme) => theme.palette.primary.dark,
              color: (theme) => theme.palette.white.main,
              width: "160px",
              "&:hover": {
                backgroundColor: (theme) => theme.palette.primary.main,
              },
            }}
          >
            Send
          </Button>
        </DialogActions>

        {/* </DraggableDialog> */}
      </Dialog>
    </form>
  );
};

export default SendMessageDialog;
