import type { NextConfig } from "next";
import { redirectMap } from "./src/content/redirects";
import { site } from "./src/content/site";

const canonicalHost = new URL(site.url).host; // www.ashtonmedia.net
const bareHost = canonicalHost.replace(/^www\./, "");

const nextConfig: NextConfig = {
  trailingSlash: true,
  poweredByHeader: false,
  async redirects() {
    return [
      // One canonical host: the bare domain always sends people (and Google) to www.
      {
        source: "/:path(.*)",
        has: [{ type: "host", value: bareHost }],
        destination: `${site.url}/:path`,
        permanent: true,
      },
      ...redirectMap.map((r) => ({
        source: r.from,
        destination: r.to,
        permanent: true,
      })),
    ];
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
        ],
      },
    ];
  },
};

export default nextConfig;
