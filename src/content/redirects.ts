// Every URL the previous (Weebly) site published, mapped to its new home.
// Permanent (301) redirects, applied in next.config.ts. Keep this list complete:
// "100% of old URLs redirected" is a launch criterion.

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
  { from: "/blog.html", to: "/insights/" },
  { from: "/blog", to: "/insights/" },
  { from: "/blog/previous/:page", to: "/insights/" },
  { from: "/1/post/:year/:month/:slug.html", to: "/insights/" },

  // Project posts → case studies
  { from: "/blog/unveiling-the-extra-dimension-introducing-tanzanias-first-3d-screen", to: "/work/tanzanias-first-3d-screen/" },
  { from: "/blog/how-strategic-screen-placement-transforms-consumer-engagement-a-case-study-with-vodacom-tanzania", to: "/work/vodacom-screen-placement/" },
  { from: "/blog/transforming-retail-spaces-with-digital-signage-by-ashton-media", to: "/work/circle-k-retail-digital-signage/" },
  { from: "/blog/kfc-countdown-to-iftar-using-data-driven-dooh-advertising", to: "/work/kfc-countdown-to-iftar/" },
  { from: "/blog/our-latest-dooh-upgrade-at-chole-junction-masaki-dar-es-salaam", to: "/work/chole-junction-dooh-upgrade/" },
  { from: "/blog/pepsi-logo-launch-with-ashton-media", to: "/work/pepsi-logo-launch/" },
  { from: "/blog/simple-yet-viral-outdoor-ad-strategy-by-tecno", to: "/work/tecno-viral-outdoor-strategy/" },

  // Editorial posts → insights, same slugs
  { from: "/blog/ooh-is-unskipable", to: "/insights/ooh-is-unskipable/" },
  { from: "/blog/the-6-biggest-myths-and-misconceptions-about-out-of-home-advertising", to: "/insights/the-6-biggest-myths-and-misconceptions-about-out-of-home-advertising/" },
  { from: "/blog/why-tanzanian-advertisers-have-increased-their-visibility-on-digital-out-of-home-advertising-in-2024", to: "/insights/why-tanzanian-advertisers-have-increased-their-visibility-on-digital-out-of-home-advertising-in-2024/" },
  { from: "/blog/the-rule-of-7-the-power-of-high-frequency", to: "/insights/the-rule-of-7-the-power-of-high-frequency/" },
  { from: "/blog/the-power-of-qr-codes-in-creative-marketing-campaigns", to: "/insights/the-power-of-qr-codes-in-creative-marketing-campaigns/" },
  { from: "/blog/win-the-engaging-ability-of-gen-z-with-digital-advertising", to: "/insights/win-the-engaging-ability-of-gen-z-with-digital-advertising/" },
  { from: "/blog/how-to-maximize-advertising-impact-with-the-digital-advertising-revolution-ashton-media-leads-the-way", to: "/insights/how-to-maximize-advertising-impact-with-the-digital-advertising-revolution-ashton-media-leads-the-way/" },
  { from: "/blog/use-location-intelligently-how-well-located-billboard-advertising-can-transform-your-business", to: "/insights/use-location-intelligently-how-well-located-billboard-advertising-can-transform-your-business/" },
  { from: "/blog/target-engage-and-convert-win-thousands-of-airport-travelers", to: "/insights/target-engage-and-convert-win-thousands-of-airport-travelers/" },
  { from: "/blog/how-to-manage-your-brand-reputation-with-out-of-home-ooh-advertising", to: "/insights/how-to-manage-your-brand-reputation-with-out-of-home-ooh-advertising/" },
  { from: "/blog/tell-your-brand-message-in-just-10-seconds", to: "/insights/tell-your-brand-message-in-just-10-seconds/" },

  // Anything else that was under /blog/
  { from: "/blog/:slug", to: "/insights/" },
];
