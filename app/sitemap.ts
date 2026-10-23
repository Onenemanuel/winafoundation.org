import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/seo";

export const dynamic = "force-static";

const paths = [
  "/",
  "/about/",
  "/programs/",
  "/approaches/",
  "/stories/",
  "/contact/",
  "/support/",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return paths.map((path) => ({
    url: new URL(path, siteUrl).href,
    changeFrequency: "monthly",
    priority: path === "/" ? 1 : 0.7,
  }));
}
