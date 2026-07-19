import { gtagEvent } from "./ga";

export const trackNavClick = (label: string, to: string) =>
  gtagEvent("nav_click", { label, to });

export const trackCTA = (label: string, location: string) =>
  gtagEvent("cta_click", { label, location });

export const trackConsultation = (source: string) =>
  gtagEvent("consultation_click", { source });

export const trackPhoneClick = (source: string) =>
  gtagEvent("phone_click", { source });

export const trackEmailClick = (source: string) =>
  gtagEvent("email_click", { source });

export const trackWhatsApp = (source: string) =>
  gtagEvent("whatsapp_click", { source });

export const trackServiceView = (slug: string) =>
  gtagEvent("service_view", { service_slug: slug });

export const trackContactSubmit = (source: string) =>
  gtagEvent("contact_submit", { source });

export const trackScrollDepth = (percent: 25 | 50 | 75 | 100, path: string) =>
  gtagEvent("scroll_depth", { percent, path });