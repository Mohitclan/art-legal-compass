// <Link> variant that prefetches an internal route on hover / focus
// via a low-priority <link rel="prefetch">.

import { forwardRef, useCallback, useRef } from "react";
import { Link, type LinkProps } from "react-router-dom";

const prefetched = new Set<string>();

function prefetch(href: string) {
  if (typeof document === "undefined" || prefetched.has(href)) return;
  prefetched.add(href);
  const l = document.createElement("link");
  l.rel = "prefetch";
  l.as = "document";
  l.href = href;
  document.head.appendChild(l);
}

const PrefetchLink = forwardRef<HTMLAnchorElement, LinkProps>(
  ({ to, onMouseEnter, onFocus, ...rest }, ref) => {
    const armed = useRef(false);
    const arm = useCallback(() => {
      if (armed.current) return;
      armed.current = true;
      const href = typeof to === "string" ? to : (to as { pathname?: string }).pathname;
      if (href && href.startsWith("/")) prefetch(href);
    }, [to]);
    return (
      <Link
        ref={ref}
        to={to}
        onMouseEnter={(e) => { arm(); onMouseEnter?.(e); }}
        onFocus={(e) => { arm(); onFocus?.(e); }}
        {...rest}
      />
    );
  },
);
PrefetchLink.displayName = "PrefetchLink";

export default PrefetchLink;
