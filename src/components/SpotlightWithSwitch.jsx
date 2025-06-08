import React, { useState } from "react";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import { IconButton } from "@mui/material";
import useSpotlightEffectWithSwitch from "../hooks/useSpotlightEffectWithSwitch";

export default function SpotlightWithSwitch() {
  const [isOff, setIsOff] = useState(true);
  const [isButtonHovered, setIsButtonHovered] = useState(false); // NEW

  const spotlightRef = useSpotlightEffectWithSwitch({
    isOff,
    isButtonHovered, // pass to hook
  });

  return (
    <>
      <canvas
        ref={spotlightRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          pointerEvents: "none",
          width: "100vw",
          height: "100vh",
          zIndex: 9999,
        }}
      />

      {isOff && (
        <IconButton
          color="primary"
          aria-label="toggle spotlight"
          onClick={() => setIsOff(false)}
          onMouseEnter={() => setIsButtonHovered(true)}
          onMouseLeave={() => setIsButtonHovered(false)}
          sx={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 10000,
            "&:hover": {
              color: "secondary.main",
            },
          }}
        >
          <PowerSettingsNewIcon sx={{ fontSize: 60 }} />
        </IconButton>
      )}
    </>
  );
}
