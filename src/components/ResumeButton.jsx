import { Button, Typography } from "@mui/material";
import { links } from "../data/data";
import { LaunchIcon } from "../utils/muiIcons";
import GradientText from "./experimental/GradientText";

const ResumeButton = () => {
  return (
    <Button
      variant="outlined"
      onClick={() =>
        window.open(links?.resume, "_blank", "noopener,noreferrer")
      }
      endIcon={<LaunchIcon color="secondary" />}
    >
      <GradientText colorType="secondaryDark">
        <Typography fontWeight="bold">RESUME</Typography>
      </GradientText>
    </Button>
  );
};

export default ResumeButton;
