import { Box, useTheme } from "@mui/material";
import React from "react";

const gradientKeyFrames = `@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
`;

const GradientText = ({
  children,
  //   colors = ["#22D1AE", "#058572", "#40ffaa", "#058572", "#22D1AE"],
  colorType = "primaryDark",
  animationSpeed = 10,
  showBorder = false,
  isCentered,
}) => {
  const theme = useTheme();

  const primary = theme.palette.primary.main;
  const primaryDark = theme.palette.primary.dark;
  const primaryLight = theme.palette.primary.light;
  const secondary = theme.palette.secondary.main;
  const secondaryDark = theme.palette.secondary.dark;
  const secondaryLight = theme.palette.secondary.light;

  const colors = {
    primaryDark: [primary, primaryDark, primary, primaryDark, primary],
    primaryLight: [primaryLight, primary, primaryLight, primary, primaryLight],
    secondaryDark: [
      secondaryLight,
      secondaryDark,
      secondary,
      secondaryDark,
      secondaryLight,
    ],
    secondaryLight: [
      secondaryLight,
      secondary,
      secondaryLight,
      secondary,
      secondaryLight,
    ],
  };
  const gradientImage = `linear-gradient(to right, ${
    colors?.[colorType]?.join(", ") ||
    [primary, primaryDark, primary, primaryDark, primary].join(", ")
  })`;

  const addLocalStyles = {
    wrapper: {
      justifyContent: isCentered ? "center" : "flex-start",
    },
    overlay: {
      backgroundImage: gradientImage,
      animation: `gradient ${animationSpeed}s linear infinite`,
    },
    textContent: {
      backgroundImage: gradientImage,
      animation: `gradient ${animationSpeed}s linear infinite`,
    },
  };

  return (
    <>
      <style>{gradientKeyFrames}</style>
      <Box style={{ ...localStyles.wrapper, ...addLocalStyles.wrapper }}>
        {showBorder && (
          <Box style={{ ...localStyles.overlay, ...addLocalStyles.overlay }}>
            <Box component="div" sx={localStyles.overlayBefore} />
          </Box>
        )}
        <Box
          style={{ ...addLocalStyles.textContent, ...localStyles.textContent }}
        >
          {children}
        </Box>
      </Box>
    </>
  );
};

export default GradientText;

const localStyles = {
  wrapper: {
    position: "relative",
    // margin: "0 auto",
    margin: "0 0 0 -3px ",
    display: "flex",
    width: "100%",
    flexDirection: "row",
    justifyContent: "flex-start", // iwant this to be conditional dependin gon the isCentered?
    alignItems: "center",
    backdropFilter: "blur(10px)",
    transition: "box-shadow 1s ease-out",
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundSize: "300% 100%",
    borderRadius: "inherit",
    zIndex: 0,
  },
  overlayBefore: {
    position: "absolute",
    width: "calc(100% - 2px)",
    height: "calc(100% - 2px)",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#060010",
    borderRadius: "inherit",
    zIndex: -1,
  },
  textContent: {
    zIndex: 2,
    backgroundSize: "300% 100%",
    backgroundClip: "text",
    WebkitBackgroundClip: "text",
    color: "transparent",
    WebkitTextFillColor: "transparent",
    margin: 0,
    padding: 0,
    textAlign: "left",
  },
};
