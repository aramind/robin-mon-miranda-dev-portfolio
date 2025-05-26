import { useEffect, useState } from "react";

const useActiveSection = (sectionIds) => {
  const [active, setActive] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      let maxVisibleRatio = 0;
      let currentActive = "";

      sectionIds.forEach((id) => {
        const el = document.getElementById(id);
        if (!el) return;

        const rect = el.getBoundingClientRect();
        const height =
          window.innerHeight || document.documentElement.clientHeight;

        // Calculate visible height of the element
        const visibleHeight = Math.max(
          0,
          Math.min(rect.bottom, height) - Math.max(rect.top, 0)
        );
        const visibleRatio = visibleHeight / rect.height;

        if (visibleRatio > maxVisibleRatio && visibleRatio > 0.3) {
          maxVisibleRatio = visibleRatio;
          currentActive = id;
        }
      });

      if (currentActive) setActive(currentActive);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // run on mount too

    return () => window.removeEventListener("scroll", handleScroll);
  }, [sectionIds]);

  return active;
};

export default useActiveSection;
