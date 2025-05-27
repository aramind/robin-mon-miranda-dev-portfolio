import React from "react";
import ImageWrapper from "../../components/ImageWrapper";
import { Box } from "@mui/material";

const syncTransition = "opacity 1s ease-in-out";

const BoxOutline = ({ isAbove }) => (
  <Box
    className={isAbove ? "top-outline" : "bottom-outline"}
    position="absolute"
    width="240px"
    height="240px"
    sx={{
      transition: syncTransition,
      backgroundColor: (theme) => theme.palette.primary.main,
      opacity: isAbove ? 0.2 : 0,
      //   outline: "2px solid",
      outlineColor: (theme) => theme.palette.primary.main,
      top: isAbove ? "-10px" : "10px", // push background down
      right: isAbove ? "10px" : "10px", // push background right
      zIndex: isAbove ? 3 : 0,
      borderRadius: "8px", // optional, for soft corners
    }}
  />
);
const ImageForLargeScreen = () => {
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
          cursor: "pointer",
          // When hovering this container:
          "&:hover .bottom-outline": {
            opacity: 0.2,
            transition: syncTransition,
          },
          "&:hover .top-outline": {
            opacity: 0,
            transition: syncTransition,
          },
          "&:hover .tint-overlay": {
            opacity: 0,
            transition: syncTransition,
          },
          "&:hover .image-box": {
            filter: "grayscale(0%)",
            transition: syncTransition,
          },
        }}
      >
        {/* Offset square background */}
        <BoxOutline isAbove={false} />
        {/* line on top na mawawala on hove */}
        <BoxOutline isAbove={true} className="top-outline" />
        {/* image and tint overlay */}
        <Box
          className="image-box"
          position="absolute"
          top={0}
          left={0}
          zIndex={1}
          sx={{
            overflow: "hidden",
            borderRadius: "8px",
            cursor: "pointer",

            filter: "grayscale(100%)",
            transition: "filter 0.3s ease",
            width: "240px",
            height: "240px",
            position: "relative",
          }}
          // sx={{
          //   overflow: "hidden",
          //   borderRadius: "4px",
          //   cursor: "pointer",
          //   position: "relative",
          //   "&:hover .tint-overlay": {
          //     opacity: 0,
          //   },
          // }}
        >
          <ImageWrapper
            src="/assets/about/profile.png"
            height="240px"
            width="240px"
            style={{ zIndex: 0, position: "relative" }} // explicitly behind
          />
          <Box
            className="tint-overlay"
            position="absolute"
            top={0}
            left={0}
            width="100%"
            height="100%"
            sx={{
              backgroundColor: (theme) => theme.palette.primary.main,
              mixBlendMode: "multiply",
              opacity: 0.6,
              transition: "opacity 0.8s ease",
              zIndex: 1,
            }}
          />
          {/* <Box
                className="image-overlay"
                position="absolute"
                top={0}
                left={0}
                width="100%"
                height="100%"
                sx={{
                  backgroundColor: "rgba(0, 0, 0, 0.9)", // semi-transparent gray
                  transition: "opacity 0.3s ease",
                  opacity: 1,
                }}
              /> */}
        </Box>
      </Box>
      {/* <Box
            height={{ xs: "200px", md: "240px" }}
            width={{ xs: "200px", md: "240px" }}
            sx={{ backgroundColor: (theme) => theme.palette.primary.main }}
          /> */}

      {/* {!isInMobile && (
            <>
              <ImageWrapper
                src="/assets/ilms/2.png"
                height="192px"
                width="192px"
              />
              <ImageWrapper
                src="/assets/ilms/3.png"
                height="192px"
                width="192px"
              />
            </>
          )} */}
    </>
  );
};

export default ImageForLargeScreen;
