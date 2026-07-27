import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";

// One page site. 404s and the OG image route stay out on purpose.
const sitemap = (): MetadataRoute.Sitemap => [
  {
    url: siteUrl,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 1,
  },
];

export default sitemap;
