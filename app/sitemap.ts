import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib";
export const dynamic = "force-static";
export default function sitemap(): MetadataRoute.Sitemap {
  return ["/", "/meniu/", "/cazare/", "/confidentialitate/", "/cookies/"].map((p) => ({ url: SITE_URL + p, changeFrequency: "monthly" }));
}
