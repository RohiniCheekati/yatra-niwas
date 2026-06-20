import type { MetadataRoute } from "next";

// robots.txt tells search engines they're welcome to read the whole site,
// and points them to the sitemap.
export default function robots(): MetadataRoute.Robots {
  const base = "https://sriumamaheswarayatraniwas.com";
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${base}/sitemap.xml`,
  };
}
