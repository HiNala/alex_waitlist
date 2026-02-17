import { SITE } from "@/lib/site";

export default function sitemap() {
  const pages = [
    "", "/products/dog-collar", "/products/cat-collar", "/app",
    "/about", "/blog", "/pre-order", "/privacy", "/terms", "/support"
  ].map((p) => ({
    url: `${SITE.domain}${p}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: p === "" ? 1 : 0.6,
  }));
  return pages;
}
