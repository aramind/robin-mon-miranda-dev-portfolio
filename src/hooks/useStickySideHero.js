import { useEffect, useState } from "react";

const useStickySideHero = (landingRef) => {
  const [isSticky, setIsSticky] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const projects = document.getElementById("projects");
      const about = document.getElementById("about");
      // const landing = document.getElementById("landing");
      const landing = landingRef?.current;

      if (!landing || !projects || !about) return;

      // Show SideHero only if we're between middle of project and bottom of experiences

      const landingBottom = landing.getBoundingClientRect().bottom;

      console.log(landingBottom);
      const visible = landingBottom < 500;
      setIsVisible(visible);

      // Stick SideHero to top 80px only if visible
      setIsSticky(visible);
    };

    window.addEventListener("scroll", onScroll);
    onScroll(); // call once in case we're already scrolled down
    return () => window.removeEventListener("scroll", onScroll);
  }, [landingRef]);
  return { isSticky, isVisible };
};

export default useStickySideHero;
