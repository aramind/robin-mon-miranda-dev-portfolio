import { Box } from "@mui/material";
import React from "react";
import ImageWrapper from "../../components/ImageWrapper";

const ImageForMobileScreen = () => {
  return (
    <>
      {/* <ImageWrapper
            src="/assets/about/profile.png"
            height="240px"
            width="240px"
          /> */}
      <Box
        position="relative"
        width="240px"
        height="240px"
        sx={{
          display: "inline-block",
        }}
      >
        {/* Offset square background */}
        <Box
          position="absolute"
          width="240px"
          height="240px"
          sx={{
            // backgroundColor: (theme) => theme.palette.black.main,
            outline: "2px solid",
            outlineColor: (theme) => theme.palette.primary.main,
            top: "8px", // push background down
            right: "8px", // push background right
            zIndex: 0,
            borderRadius: "8px", // optional, for soft corners
          }}
        />
        {/* Actual profile image on top */}
        <Box
          position="absolute"
          top={0}
          left={0}
          zIndex={-1}
          sx={{
            overflow: "hidden",
            borderRadius: "8px",
            cursor: "pointer",
            // "& img": {
            //   filter: "grayscale(100%)",
            //   transition: "filter 0.3s ease",
            // },
            // "&:hover img": {
            //   filter: "grayscale(0%)",
            // },
            // "&:hover .tint-overlay": {
            //   opacity: 0,
            // },
          }}
        >
          <ImageWrapper
            src="/assets/about/profile.png"
            height="240px"
            width="240px"
          />
          {/* <Box
            className="tint-overlay"
            position="absolute"
            top={0}
            left={0}
            width="100%"
            height="100%"
            sx={{
              backgroundColor: (theme) => theme.palette.primary.dark,
              mixBlendMode: "multiply",
              opacity: 0.6,
              transition: "opacity 0.3s ease",
            }}
          /> */}
        </Box>
      </Box>
    </>
  );
};

export default ImageForMobileScreen;
