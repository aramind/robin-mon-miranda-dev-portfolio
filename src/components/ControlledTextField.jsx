import { InputAdornment, TextField } from "@mui/material";
import React from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import { Controller } from "react-hook-form";

const myBlack = (theme) => theme.palette.black.light;
const getStatusAdornment = (hasError, isTouched) => {
  if (!isTouched) {
    return (
      <InputAdornment position="end">
        <RadioButtonUncheckedIcon
          sx={{ color: (theme) => theme.palette.black.light }}
        />
      </InputAdornment>
    );
  }

  return (
    <InputAdornment position="end">
      {hasError ? (
        <CancelIcon sx={{ color: "error.main" }} />
      ) : (
        <CheckCircleIcon sx={{ color: "primary.dark" }} />
      )}
    </InputAdornment>
  );
};

const getTextFieldSx = (hasError, isTouched) => {
  if (!isTouched) {
    // Untouched: gray label and border
    return {
      "& .MuiInputLabel-root": {
        color: myBlack,
      },
      "& .MuiOutlinedInput-root": {
        "& fieldset": {
          borderColor: myBlack,
        },
        "&:hover fieldset": {
          borderColor: myBlack,
        },
      },
    };
  } else if (hasError) {
    // Touched and error: use MUI error styles (red)
    return {};
  } else {
    // Touched and valid: green styles
    return {
      "& .MuiInputLabel-root": {
        color: "primary.dark",
      },
      "& .MuiInputLabel-root.Mui-focused": {
        color: "primary.dark",
      },
      "& .MuiOutlinedInput-root": {
        "& fieldset": {
          borderColor: "primary.dark",
        },
        "&.Mui-focused fieldset": {
          borderColor: "primary.dark",
        },
      },
    };
  }
};

const ControlledTextField = ({
  name,
  control,
  label,
  type = "text",
  rules = {},
  multiline = false,
  rows,
  fullWidth = true,
  ...rest
}) => {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field, fieldState }) => {
        const hasError = !!fieldState.error;
        const isTouched = fieldState.isTouched;

        return (
          <TextField
            {...field}
            label={label}
            type={type}
            fullWidth={fullWidth}
            error={hasError}
            helperText={fieldState.error?.message}
            multiline={multiline}
            rows={rows}
            sx={getTextFieldSx(hasError, isTouched)}
            InputProps={{
              endAdornment: getStatusAdornment(hasError, isTouched),
            }}
            {...rest}
          />
        );
      }}
    />
  );
};

export default ControlledTextField;
