import type { MetadataRoute } from "next";

// A sitemap tells Google which pages exist. Google reads this to index
// your site so it shows up in search results.
// (After you buy a custom domain, update the URL in layout.tsx — this
//  file picks it up automatically.)
export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://yatra-niwas.vercel.app";
  return [
    {
      url: base,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
