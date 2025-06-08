import { useEffect, useRef, useState } from "react";
import useIsInMobile from "./useIsInMobile";

const useSpotlightEffectWithSwitch = (config = {}) => {
  const {
    spotlightSizeOn = 150,
    spotlightSizeOff = 50,
    spotlightIntensity = 0.8,
    fadeSpeed = 0.1,
    glowColor = "255, 255, 255",
    pulseSpeed = 2000,
    isOff = true,
    overlayFadeSpeed = 0.005,
  } = config;

  const canvasRef = useRef(null);
  const ctxRef = useRef(null);
  const spotlightPos = useRef({ x: 0, y: 0 });
  const targetPos = useRef({ x: 0, y: 0 });
  const overlayOpacity = useRef(isOff ? 1 : 0.0);
  const animationFrame = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const isInMobile = useIsInMobile();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctxRef.current = ctx;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const lerp = (start, end, factor) => {
      return start + (end - start) * factor;
    };

    const handleMouseMove = (e) => {
      targetPos.current = { x: e.clientX, y: e.clientY };
      setIsHovered(true);
    };

    const handleMouseLeave = () => {
      setIsHovered(false);
    };

    if (isHovered) {
    }
    const render = () => {
      if (!canvas || !ctx) return;

      spotlightPos.current.x = lerp(
        spotlightPos.current.x,
        targetPos.current.x,
        fadeSpeed
      );
      spotlightPos.current.y = lerp(
        spotlightPos.current.y,
        targetPos.current.y,
        fadeSpeed
      );

      // Gradually fade overlay opacity
      const targetOpacity = isOff ? 0.98 : 0;
      overlayOpacity.current = lerp(
        overlayOpacity.current,
        targetOpacity,
        overlayFadeSpeed
      );

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = `rgba(0, 0, 0, ${overlayOpacity.current})`;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Dynamic spotlight size based on isOff
      const adjustedSpotlightSizeOn = isInMobile ? 1 : spotlightSizeOn;
      const spotlightSize = isOff ? spotlightSizeOff : adjustedSpotlightSizeOn;
      const pulseScale =
        1 + 0.1 * Math.sin((Date.now() / pulseSpeed) * Math.PI * 2);
      const currentSpotlightSize = spotlightSize * pulseScale;

      // Spotlight gradient
      const gradient = ctx.createRadialGradient(
        spotlightPos.current.x,
        spotlightPos.current.y,
        0,
        spotlightPos.current.x,
        spotlightPos.current.y,
        currentSpotlightSize
      );
      gradient.addColorStop(0, `rgba(${glowColor}, ${spotlightIntensity})`);
      gradient.addColorStop(
        0.5,
        `rgba(${glowColor}, ${spotlightIntensity * 0.5})`
      );
      gradient.addColorStop(1, "rgba(0, 0, 0, 0)");

      ctx.globalCompositeOperation = "destination-out";
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(
        spotlightPos.current.x,
        spotlightPos.current.y,
        currentSpotlightSize,
        0,
        Math.PI * 2
      );
      ctx.fill();
      ctx.globalCompositeOperation = "source-over";

      // Soft glow around spotlight
      const glowGradient = ctx.createRadialGradient(
        spotlightPos.current.x,
        spotlightPos.current.y,
        0,
        spotlightPos.current.x,
        spotlightPos.current.y,
        currentSpotlightSize * 1.2
      );
      glowGradient.addColorStop(0, `rgba(${glowColor}, 0.2)`);
      glowGradient.addColorStop(1, "rgba(0, 0, 0, 0)");
      ctx.fillStyle = glowGradient;
      ctx.beginPath();
      ctx.arc(
        spotlightPos.current.x,
        spotlightPos.current.y,
        currentSpotlightSize * 1.2,
        0,
        Math.PI * 2
      );
      ctx.fill();

      animationFrame.current = requestAnimationFrame(render);
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    render();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      if (animationFrame.current) {
        cancelAnimationFrame(animationFrame.current);
      }
    };
  }, [
    spotlightSizeOn,
    spotlightSizeOff,
    spotlightIntensity,
    fadeSpeed,
    glowColor,
    pulseSpeed,
    isOff,
    overlayFadeSpeed,
    isInMobile,
  ]);

  return canvasRef;
};

export default useSpotlightEffectWithSwitch;
