// Writes vercel.json so the legacy redirects are answered at Vercel's edge in a single hop
// (Next.js would otherwise add a trailing-slash hop first). Run: node scripts/make-vercel-json.mjs
import { writeFileSync } from "node:fs";
const { redirectMap } = await import("../src/content/redirects.ts");
const toVercel = (p) => p.replace(/:([a-zA-Z]+)/g, ":$1");
const redirects = redirectMap.flatMap((r) => {
  const src = toVercel(r.from);
  const bare = src.replace(/\/$/, "");
  const variants = /\.[a-z]+$/.test(bare) ? [bare] : [bare, `${bare}/`];
  return variants.map((source) => ({ source, destination: r.to, permanent: true }));
});
const json = { redirects };
writeFileSync(new URL("../vercel.json", import.meta.url), JSON.stringify(json, null, 2) + "\n");
console.log("vercel.json:", redirects.length, "redirects");
