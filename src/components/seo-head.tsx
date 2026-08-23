import { useEffect } from "react";
import type { SeoMeta } from "@/types";

type SeoHeadProps = {
  meta: SeoMeta;
  schema?: Record<string, unknown> | Array<Record<string, unknown>>;
};

export function SeoHead({ meta, schema }: SeoHeadProps) {
  useEffect(() => {
    document.title = meta.title;

    const setMetaTag = (
      name: string,
      content: string,
      attribute: "name" | "property" = "name",
    ) => {
      let tag = document.head.querySelector(
        `meta[${attribute}="${name}"]`,
      ) as HTMLMetaElement | null;
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute(attribute, name);
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", content);
    };

    setMetaTag("description", meta.description);
    setMetaTag("og:title", meta.title, "property");
    setMetaTag("og:description", meta.description, "property");
    setMetaTag("og:type", "website", "property");
    setMetaTag("og:url", meta.canonical ?? window.location.href, "property");
    setMetaTag("twitter:title", meta.title, "name");
    setMetaTag("twitter:description", meta.description, "name");
    setMetaTag("twitter:card", "summary", "name");
    setMetaTag("theme-color", "#eee9de");

    if (meta.canonical) {
      let link = document.head.querySelector(
        'link[rel="canonical"]',
      ) as HTMLLinkElement | null;
      if (!link) {
        link = document.createElement("link");
        link.rel = "canonical";
        document.head.appendChild(link);
      }
      link.href = meta.canonical;
    }

    const existing = document.getElementById("route-schema");
    if (existing) existing.remove();

    if (schema) {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.id = "route-schema";
      script.text = JSON.stringify(schema);
      document.head.appendChild(script);
    }

    return () => {
      const injected = document.getElementById("route-schema");
      if (injected) injected.remove();
    };
  }, [meta, schema]);

  return null;
}
