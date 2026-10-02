// Writes vercel.json so the legacy redirects are answered at Vercel's edge in a single hop
// (Next.js would otherwise add a trailing-slash hop first), and so the bare domain always
// sends people to www — one canonical host for Google. Run: node scripts/make-vercel-json.mjs
import { writeFileSync } from "node:fs";
const { redirectMap } = await import("../src/content/redirects.ts");
const { site } = await import("../src/content/site.ts");

const canonicalHost = new URL(site.url).host; // www.ashtonmedia.net
const bareHost = canonicalHost.replace(/^www\./, "");

const toVercel = (p) => p.replace(/:([a-zA-Z]+)/g, ":$1");
const legacy = redirectMap.flatMap((r) => {
  const src = toVercel(r.from);
  const bare = src.replace(/\/$/, "");
  const variants = /\.[a-z]+$/.test(bare) ? [bare] : [bare, `${bare}/`];
  return variants.map((source) => ({ source, destination: r.to, permanent: true }));
});

// Legacy paths first so an old link on the bare domain lands on its new page in one hop
// (destinations are absolute on the www host); then everything else on the bare host → www.
const redirects = [
  ...legacy.map((r) => ({ ...r, destination: `${site.url}${r.destination}` })),
  { source: "/:path*", has: [{ type: "host", value: bareHost }], destination: `${site.url}/:path*`, permanent: true },
];
const json = { redirects };
writeFileSync(new URL("../vercel.json", import.meta.url), JSON.stringify(json, null, 2) + "\n");
console.log("vercel.json:", redirects.length, "redirects (incl. bare host → www)");
