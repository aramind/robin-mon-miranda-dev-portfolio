import { Button } from "@mui/material";
import { links } from "../data/data";
import { LaunchIcon } from "../utils/muiIcons";

const ResumeButton = () => {
  return (
    <Button
      variant="outlined"
      onClick={() =>
        window.open(links?.resume, "_blank", "noopener,noreferrer")
      }
      endIcon={<LaunchIcon />}
    >
      RESUME
    </Button>
  );
};

export default ResumeButton;
