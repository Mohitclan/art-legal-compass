// SmartImage — enforces image SEO conventions across the site.
//
// Rules:
//   • `alt` is REQUIRED and typed (no empty defaults).
//   • `width` + `height` are REQUIRED → prevents CLS.
//   • `loading` defaults to "lazy"; pass `priority` for LCP hero images.
//   • `decoding="async"` always; fetchpriority mirrors `priority`.
//   • Provide `srcSet` + `sizes` when width variants exist.
//   • Use descriptive kebab-case filenames — no IMG_1234.

import { ImgHTMLAttributes } from "react";

type SmartImageProps = Omit<
  ImgHTMLAttributes<HTMLImageElement>,
  "loading" | "decoding" | "fetchPriority"
> & {
  src: string;
  alt: string;
  width: number;
  height: number;
  priority?: boolean;
};

const SmartImage = ({ priority, ...rest }: SmartImageProps) => {
  return (
    <img
      {...rest}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
      // React 18+ accepts lowercase fetchpriority as an attribute via any-cast
      {...(priority ? ({ fetchpriority: "high" } as Record<string, string>) : {})}
    />
  );
};

export default SmartImage;