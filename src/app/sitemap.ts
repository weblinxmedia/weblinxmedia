// app/sitemap.ts
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.weblinxmedia.com",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: "https://www.weblinxmedia.com/about",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://www.weblinxmedia.com/services",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },
     {
      url: "https://www.weblinxmedia.com/work",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },
        {
      url: "https://www.weblinxmedia.com/contact",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },
  ];
}