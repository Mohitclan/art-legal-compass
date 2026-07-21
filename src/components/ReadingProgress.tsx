import { useEffect, useState } from "react";

const ReadingProgress = () => {
  const [pct, setPct] = useState(0);
  useEffect(() => {
    let raf = 0;
    const tick = () => {
      const h = document.documentElement;
      const height = h.scrollHeight - h.clientHeight;
      setPct(height > 0 ? Math.min(100, (h.scrollTop / height) * 100) : 0);
    };
    const onScroll = () => { cancelAnimationFrame(raf); raf = requestAnimationFrame(tick); };
    tick();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => { window.removeEventListener("scroll", onScroll); cancelAnimationFrame(raf); };
  }, []);
  return (
    <div aria-hidden="true" className="fixed top-0 left-0 right-0 z-[60] h-0.5 bg-transparent pointer-events-none">
      <div className="h-full bg-gradient-gold transition-[width] duration-75 ease-linear" style={{ width: `${pct}%` }} />
    </div>
  );
};

export default ReadingProgress;
