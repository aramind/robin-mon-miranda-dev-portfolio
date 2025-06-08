import React from "react";
import useSpotlightEffect from "../hooks/useSpotlightEffect";

export default function Spotlight() {
  const canvasRef = useSpotlightEffect({
    spotlightSize: 200,
    spotlightIntensity: 0.8,
    fadeSpeed: 0.1,
    glowColor: "255, 255, 255",
    pulseSpeed: 2000,
  });

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        pointerEvents: "none", // important so it doesn't block clicks
        width: "100vw",
        height: "100vh",
        zIndex: 9999,
      }}
    />
  );
}
