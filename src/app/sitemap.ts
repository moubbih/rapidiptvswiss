import type { MetadataRoute } from "next";
import { ALL_BLOG_POSTS } from "@/lib/allBlogPosts";

export default function sitemap(): MetadataRoute.Sitemap {
  const BASE_URL = "https://rapidiptvswiss.com";

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: BASE_URL, lastModified: new Date("2026-04-13") },
    { url: `${BASE_URL}/plans`, lastModified: new Date("2026-04-13") },
    { url: `${BASE_URL}/live-channels`, lastModified: new Date("2026-04-10") },
    { url: `${BASE_URL}/sports`, lastModified: new Date("2026-04-05") },
    { url: `${BASE_URL}/movies-series`, lastModified: new Date("2026-04-05") },
    { url: `${BASE_URL}/faq`, lastModified: new Date("2026-04-13") },
    { url: `${BASE_URL}/installation-guide`, lastModified: new Date("2026-04-01") },
    { url: `${BASE_URL}/supported-devices`, lastModified: new Date("2026-04-01") },
    { url: `${BASE_URL}/about`, lastModified: new Date("2026-03-15") },
    { url: `${BASE_URL}/reach-us`, lastModified: new Date("2026-03-15") },
    { url: `${BASE_URL}/reseller`, lastModified: new Date("2026-03-15") },
    { url: `${BASE_URL}/articles`, lastModified: new Date("2026-04-13") },
    { url: `${BASE_URL}/setup-guides/firestick`, lastModified: new Date("2026-04-01") },
    { url: `${BASE_URL}/setup-guides/smart-tv`, lastModified: new Date("2026-04-01") },
    { url: `${BASE_URL}/setup-guides/apple-tv`, lastModified: new Date("2026-04-01") },
    { url: `${BASE_URL}/setup-guides/android`, lastModified: new Date("2026-04-01") },
    { url: `${BASE_URL}/setup-guides/iptv-smarters`, lastModified: new Date("2026-04-01") },
    { url: `${BASE_URL}/setup-guides/tivimate`, lastModified: new Date("2026-04-01") },
    { url: `${BASE_URL}/tos`, lastModified: new Date("2026-03-01") },
    { url: `${BASE_URL}/privacy`, lastModified: new Date("2026-03-01") },
    { url: `${BASE_URL}/refunds`, lastModified: new Date("2026-03-01") },
    { url: `${BASE_URL}/cancellations`, lastModified: new Date("2026-03-01") },
    { url: `${BASE_URL}/impressum`, lastModified: new Date("2026-04-13") },
    { url: `${BASE_URL}/iptv-zurich`, lastModified: new Date("2026-04-13") },
    { url: `${BASE_URL}/iptv-geneve`, lastModified: new Date("2026-04-13") },
    { url: `${BASE_URL}/iptv-basel`, lastModified: new Date("2026-04-13") },
    { url: `${BASE_URL}/iptv-bern`, lastModified: new Date("2026-04-13") },
    { url: `${BASE_URL}/iptv-lausanne`, lastModified: new Date("2026-04-13") },
    { url: `${BASE_URL}/iptv-lugano`, lastModified: new Date("2026-04-13") },
  ];

  const blogRoutes: MetadataRoute.Sitemap = ALL_BLOG_POSTS.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.publishedDate),
  }));

  return [...staticRoutes, ...blogRoutes];
}
