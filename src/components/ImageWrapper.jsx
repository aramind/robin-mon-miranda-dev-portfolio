import { Box } from "@mui/material";

const ImageWrapper = ({
  src,
  height = "auto",
  width = "auto",
  maxHeight = "240px",
  maxWidth = "240px",
}) => {
  return (
    <Box
      display="flex"
      alignItems="center"
      gap={1}
      component="img"
      src={src}
      height={height}
      width={width}
      maxHeight={maxHeight}
      maxWidth={maxWidth}
      sx={{ objectPosition: "bottom", objectFit: "contain" }}
    />
  );
};

export default ImageWrapper;
