import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { gtagPageView } from "./ga";

export function useTrackPageView() {
  const location = useLocation();
  useEffect(() => {
    gtagPageView(location.pathname + location.search);
  }, [location.pathname, location.search]);
}