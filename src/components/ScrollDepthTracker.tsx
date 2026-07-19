import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { trackScrollDepth } from "@/lib/analytics/events";

// Fires GA4 scroll_depth events at 25/50/75/100% once per route.
const THRESHOLDS: (25 | 50 | 75 | 100)[] = [25, 50, 75, 100];

const ScrollDepthTracker = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const fired = new Set<number>();
    let ticking = false;

    const check = () => {
      const doc = document.documentElement;
      const scrollTop = window.scrollY || doc.scrollTop;
      const height = doc.scrollHeight - doc.clientHeight;
      if (height <= 0) return;
      const pct = (scrollTop / height) * 100;
      for (const t of THRESHOLDS) {
        if (pct >= t && !fired.has(t)) {
          fired.add(t);
          trackScrollDepth(t, pathname);
        }
      }
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        check();
        ticking = false;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  return null;
};

export default ScrollDepthTracker;