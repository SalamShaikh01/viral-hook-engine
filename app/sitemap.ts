import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://viral-hook-engine-two.vercel.app",
      lastModified: new Date(),
    },
    {
      url: "https://viral-hook-engine-two.vercel.app/about",
      lastModified: new Date(),
    },
    {
      url: "https://viral-hook-engine-two.vercel.app/privacy",
      lastModified: new Date(),
    },
    {
      url: "https://viral-hook-engine-two.vercel.app/terms",
      lastModified: new Date(),
    },
  ];
}