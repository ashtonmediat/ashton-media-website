import type { Metadata } from "next";
import { site, awards } from "@/content/site";

export const SITE_URL = site.url;

export function abs(path: string) {
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

/** The preview picture shown when a link is shared on WhatsApp, LinkedIn, Facebook, Slack… (1200×630, see scripts/make-og.py). */
export const DEFAULT_OG_IMAGE = "/og/default.jpg";

/** Page metadata with canonical, Open Graph and sensible defaults. */
export function pageMeta(input: {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article";
  publishedTime?: string;
  noindex?: boolean;
  /** Path under /public of the share image, e.g. "/og/digital-billboards-tanzania.jpg". */
  image?: string;
}): Metadata {
  const url = abs(input.path);
  const image = abs(input.image ?? DEFAULT_OG_IMAGE);
  return {
    title: { absolute: input.title },
    description: input.description,
    alternates: { canonical: url },
    robots: input.noindex ? { index: false, follow: false } : undefined,
    openGraph: {
      title: input.title,
      description: input.description,
      url,
      siteName: site.name,
      type: input.type ?? "website",
      locale: "en_TZ",
      images: [{ url: image, width: 1200, height: 630, alt: input.title }],
      ...(input.publishedTime ? { publishedTime: input.publishedTime } : {}),
    },
    twitter: { card: "summary_large_image", title: input.title, description: input.description, images: [image] },
  };
}

export const organizationLd = {
  "@context": "https://schema.org",
  "@type": ["Organization", "LocalBusiness"],
  "@id": `${SITE_URL}/#organization`,
  name: site.name,
  legalName: site.legalName,
  alternateName: ["Ashton"],
  url: SITE_URL,
  logo: abs("/brand/ashton-logo.png"),
  image: abs(DEFAULT_OG_IMAGE),
  foundingDate: String(site.founded),
  telephone: site.phone.e164,
  email: site.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    addressLocality: site.address.city,
    addressCountry: site.address.countryCode,
  },
  hasMap: `https://www.google.com/maps?q=${encodeURIComponent(site.address.mapsQuery)}`,
  areaServed: { "@type": "Country", name: "Tanzania" },
  sameAs: [site.social.linkedin, site.social.instagram, site.social.facebook],
  award: awards.map((a) => `${a.body} ${a.year} — ${a.category}`),
  knowsAbout: [
    "Out-of-home advertising",
    "Digital out-of-home advertising",
    "Billboard advertising",
    "Airport advertising",
    "Transit advertising",
    "Mall advertising",
  ],
};

export function breadcrumbLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: abs(it.path),
    })),
  };
}

export function faqLd(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function serviceLd(input: { name: string; description: string; path: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: input.name,
    description: input.description,
    url: abs(input.path),
    serviceType: "Out-of-home advertising",
    areaServed: { "@type": "Country", name: "Tanzania" },
    provider: { "@id": `${SITE_URL}/#organization` },
  };
}

export function articleLd(input: { title: string; description: string; path: string; date: string; image?: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: input.title,
    description: input.description,
    url: abs(input.path),
    image: [abs(input.image ?? "/og/blog.jpg")],
    datePublished: input.date,
    dateModified: input.date,
    author: { "@id": `${SITE_URL}/#organization` },
    publisher: { "@id": `${SITE_URL}/#organization` },
    inLanguage: "en",
  };
}
