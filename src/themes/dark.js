const { createTheme } = require("@mui/material");

const COLORS = {
  primary: {
    dark: "#058572",
    main: "#22D1AE",
    light: "#AAEEE0",
  },
  secondary: {
    dark: "#CCA114",
    main: "#E9BB1D",
    light: "#F2E7BF",
  },
  black: {
    dark: "#0D0D15",
    main: "#1E1C29",
    light: "#3D4655",
  },
  white: {
    dark: "#D6D6D6",
    main: "#E0E0E0",
    light: "#F5F5F5",
  },
};

const darkTheme = createTheme({
  palette: {
    primary: COLORS.primary,
    secondary: COLORS.secondary,
    black: COLORS.black,
    white: COLORS.white,
  },
  typography: {
    fontFamily: `"Inter", "Nunito Sans", "Roboto", sans-serif`,
    condensed: `"Barlow Condensed", sans-serif`,
    poppins: `"Poppins", sans-serif`,
  },
  components: {
    MuiLink: {
      styleOverrides: {
        root: {
          textDecoration: "none",
          color: COLORS.white.main,
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: COLORS.black.main,
          color: COLORS.white.main, // optional text color on body
        },
      },
    },
  },
});

export default darkTheme;
