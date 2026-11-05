import { Helmet } from "react-helmet-async";

const SITE_URL = "https://www.infertilitylegalsolutions.com";
const DEFAULT_IMAGE = `${SITE_URL}/og-image.jpg`;

export interface SEOProps {
  title: string;
  description: string;
  path?: string;
  image?: string;
  type?: "website" | "article" | "profile";
  robots?: string;
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
  keywords?: string;
  // Accept the PageSEO shape from useSEO() so `<SEO {...seo} />` keeps the
  // page's own canonical URL, OG image and type instead of the defaults.
  canonical?: string;
  ogImage?: string;
  ogType?: "website" | "article";
}

const SEO = ({
  title,
  description,
  path = "/",
  image,
  type,
  robots = "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  jsonLd,
  keywords,
  canonical,
  ogImage,
  ogType,
}: SEOProps) => {
  const url = canonical ?? `${SITE_URL}${path}`;
  const ogImg = image ?? ogImage ?? DEFAULT_IMAGE;
  const ogKind = type ?? ogType ?? "website";
  const schemas = Array.isArray(jsonLd) ? jsonLd : jsonLd ? [jsonLd] : [];

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="robots" content={robots} />
      <link rel="canonical" href={url} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogKind} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={ogImg} />
      <meta property="og:site_name" content="Infertility Legal Solutions" />
      <meta property="og:locale" content="en_IN" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImg} />

      {schemas.map((schema, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
};

export default SEO;