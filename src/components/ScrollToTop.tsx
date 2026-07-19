import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Scroll to top on route change; on hash change, smooth-scroll to element.
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace("#", "");
      // Wait for DOM paint
      requestAnimationFrame(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
        else window.scrollTo({ top: 0, behavior: "auto" });
      });
    } else {
      window.scrollTo({ top: 0, behavior: "auto" });
    }
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;