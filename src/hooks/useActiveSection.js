import { useEffect, useState } from "react";

const useActiveSection = (sectionIds) => {
  const [active, setActive] = useState("");
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible) {
          setActive(visible.target.id);
        }
      },
      { threshold: 0.6 }
    );
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) {
        observer.observe(el);
      }
    });

    return () => observer.disconnect();
  }, [sectionIds]);
  return active;
};

export default useActiveSection;
