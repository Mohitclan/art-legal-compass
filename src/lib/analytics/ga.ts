// GA4 loader + gtag wrapper. No-op when VITE_GA_MEASUREMENT_ID is absent.

const GA_ID = import.meta.env.VITE_GA_MEASUREMENT_ID as string | undefined;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

let loaded = false;

export const isGAEnabled = () => typeof window !== "undefined" && !!GA_ID;

export function loadGA() {
  if (loaded || !isGAEnabled() || typeof document === "undefined") return;
  loaded = true;

  const s = document.createElement("script");
  s.async = true;
  s.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  document.head.appendChild(s);

  window.dataLayer = window.dataLayer || [];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  window.gtag = function gtag(...args: any[]) {
    window.dataLayer!.push(args);
  };
  window.gtag("js", new Date());
  window.gtag("config", GA_ID, { send_page_view: false });
}

export function gtagEvent(name: string, params: Record<string, unknown> = {}) {
  if (!isGAEnabled() || typeof window === "undefined" || !window.gtag) return;
  window.gtag("event", name, params);
}

export function gtagPageView(path: string, title?: string) {
  if (!isGAEnabled() || typeof window === "undefined" || !window.gtag) return;
  window.gtag("event", "page_view", {
    page_path: path,
    page_title: title ?? document.title,
    page_location: window.location.href,
  });
}