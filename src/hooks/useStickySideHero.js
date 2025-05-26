import { useEffect, useState } from "react";

const useStickySideHero = ({ landingRef, experiencesRef }) => {
  const [isSticky, setIsSticky] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const landing = landingRef?.current;
      const experiences = experiencesRef?.current;

      if (!landing) return;

      // Show SideHero only if we're between middle of project and bottom of experiences

      const landingBottom = landing.getBoundingClientRect().bottom;
      const experiencesTop = experiences.getBoundingClientRect().top;

      const visible = landingBottom < 200 && experiencesTop > -20;
      setIsVisible(visible);

      // Stick SideHero to top 80px only if visible
      setIsSticky(visible);
    };

    window.addEventListener("scroll", onScroll);
    onScroll(); // call once in case we're already scrolled down
    return () => window.removeEventListener("scroll", onScroll);
  }, [experiencesRef, landingRef]);
  return { isSticky, isVisible };
};

export default useStickySideHero;
