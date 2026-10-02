// Every URL the previous (Weebly) site published, mapped to its new home.
// The 18 blog posts keep their original addresses under /blog/, so they need
// no redirect at all. Permanent (301/308) redirects, applied in next.config.ts.

export const redirectMap: { from: string; to: string }[] = [
  // Pages
  { from: "/index.html", to: "/" },
  { from: "/traditional-ooh.html", to: "/static-billboards-tanzania/" },
  { from: "/digital-ooh.html", to: "/digital-billboards-tanzania/" },
  { from: "/airport-advertising.html", to: "/airport-advertising-tanzania/" },
  { from: "/contact-us.html", to: "/contact/" },
  { from: "/our-gallery.html", to: "/billboards-in-tanzania/" },
  { from: "/our-solutions.html", to: "/billboards-in-tanzania/" },
  { from: "/test-features.html", to: "/" },
  { from: "/blog.html", to: "/blog/" },
  { from: "/blog/previous/:page", to: "/blog/" },
  { from: "/1/post/:year/:month/:slug.html", to: "/blog/" },

  // Addresses that existed briefly on the first version of this site (2 Oct 2026)
  { from: "/insights", to: "/blog/" },
  { from: "/insights/:slug", to: "/blog/:slug/" },
  { from: "/work", to: "/blog/" },
  { from: "/work/tanzanias-first-3d-screen", to: "/blog/unveiling-the-extra-dimension-introducing-tanzanias-first-3d-screen/" },
  { from: "/work/vodacom-screen-placement", to: "/blog/how-strategic-screen-placement-transforms-consumer-engagement-a-case-study-with-vodacom-tanzania/" },
  { from: "/work/circle-k-retail-digital-signage", to: "/blog/transforming-retail-spaces-with-digital-signage-by-ashton-media/" },
  { from: "/work/kfc-countdown-to-iftar", to: "/blog/kfc-countdown-to-iftar-using-data-driven-dooh-advertising/" },
  { from: "/work/chole-junction-dooh-upgrade", to: "/blog/our-latest-dooh-upgrade-at-chole-junction-masaki-dar-es-salaam/" },
  { from: "/work/pepsi-logo-launch", to: "/blog/pepsi-logo-launch-with-ashton-media/" },
  { from: "/work/tecno-viral-outdoor-strategy", to: "/blog/simple-yet-viral-outdoor-ad-strategy-by-tecno/" },
];
