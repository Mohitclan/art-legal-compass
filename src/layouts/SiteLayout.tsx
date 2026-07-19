import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import DisclaimerModal from "@/components/DisclaimerModal";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import ScrollDepthTracker from "@/components/ScrollDepthTracker";
import { loadGA } from "@/lib/analytics/ga";
import { useTrackPageView } from "@/lib/analytics/useTrackPageView";

// Global site chrome: DisclaimerModal + Navbar + <main><Outlet/></main> +
// Footer, plus route-level effects (scroll reset, GA page views, scroll
// depth). Homepage render tree remains identical — Navbar/Footer positions
// and blur behaviour are preserved.

const SiteLayout = () => {
  const [accepted, setAccepted] = useState(false);
  const [rejected, setRejected] = useState(false);

  useEffect(() => {
    // Defer analytics loader until after first paint.
    const w = window as Window & {
      requestIdleCallback?: (cb: () => void) => number;
      cancelIdleCallback?: (id: number) => void;
    };
    const id = w.requestIdleCallback
      ? w.requestIdleCallback(() => loadGA())
      : window.setTimeout(() => loadGA(), 200);
    return () => {
      if (w.cancelIdleCallback) w.cancelIdleCallback(id as number);
      else window.clearTimeout(id as number);
    };
  }, []);

  useTrackPageView();

  return (
    <>
      <ScrollToTop />
      <ScrollDepthTracker />
      <DisclaimerModal onAccept={() => setAccepted(true)} onReject={() => setRejected(true)} />

      <div
        className={`transition-all duration-500 ${
          !accepted && !rejected ? "blur-sm pointer-events-none" : ""
        }`}
      >
        <Navbar />
        <main id="main-content" role="main">
          <Outlet />
        </main>
        <Footer />
      </div>

      {rejected && (
        <div className="fixed inset-0 bg-primary/95 flex items-center justify-center z-50">
          <div className="text-center text-primary-foreground p-8">
            <h2 className="font-playfair text-3xl font-bold mb-4">
              Thank you for visiting
            </h2>
            <p className="text-lg">You have chosen to exit this website.</p>
          </div>
        </div>
      )}
    </>
  );
};

export default SiteLayout;