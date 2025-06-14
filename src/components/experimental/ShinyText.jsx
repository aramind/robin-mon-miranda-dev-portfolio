import { Box, useTheme } from "@mui/material";

const ShinyText = ({
  children,
  disabled = false,
  speed = 5,
  className = "",
}) => {
  const animationDuration = `${speed}s`;
  const theme = useTheme();

  return (
    <Box
      component="span"
      className={`${!disabled ? "shiny-text" : ""} ${className}`}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        background: !disabled
          ? `linear-gradient(
              120deg,
              ${theme.palette.secondary.light} 40%,
              ${theme.palette.white.light} 50%,
              ${theme.palette.secondary.light} 40%
            )`
          : undefined,
        backgroundSize: !disabled ? "200% 100%" : undefined,
        WebkitBackgroundClip: !disabled ? "text" : undefined,
        backgroundClip: !disabled ? "text" : undefined,
        color: "#b5b5b5a4", // fallback/initial color
        animation: !disabled
          ? `shine ${animationDuration} linear infinite`
          : "none",
      }}
    >
      {children}
    </Box>
  );
};

export default ShinyText;
