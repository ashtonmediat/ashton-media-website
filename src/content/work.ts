// Case studies. The seven project stories from the previous blog, rewritten as
// work pages at /work/{slug}/. Results fields are filled only with figures the
// company has confirmed; none have been yet, so none are shown.

export type CaseStudy = {
  slug: string;
  client: string;
  title: string;
  date: string; // ISO, campaign date
  industry: string;
  formats: string[];
  where: string;
  summary: string;
  challenge: string;
  solution: string;
  innovation?: string;
  award?: string;
  body?: string; // extra Markdown
  related: { label: string; href: string }[];
  oldSlug: string; // previous blog slug, for the redirect map
};

export const work: CaseStudy[] = [
  {
    slug: "tanzanias-first-3d-screen",
    client: "Ashton Media",
    title: "Tanzania's first 3D screen, at the entrance of Mlimani City",
    date: "2024-01-26",
    industry: "Retail destination",
    formats: ["3D digital screen", "UHD indoor screens"],
    where: "Mlimani City, Dar es Salaam",
    summary:
      "In January 2024 Ashton Media launched the first 3D-ready screen in Tanzania at the main entrance of Mlimani City, with four UHD screens inside the mall — a new kind of inventory for the country's brands.",
    challenge:
      "Mlimani City is the heart of Dar es Salaam's retail and lifestyle traffic, and its entrance is the most valuable few seconds of a shopper's visit. A conventional screen there would be seen; the aim was to be remembered.",
    solution:
      "A 3D-ready screen at the main entrance, built so that creative appears to emerge from the display surface, complemented by four Ultra-High-Definition screens placed at the highest-traffic positions inside the mall. Together they let one brand greet shoppers at the door and continue the story to the point of purchase.",
    innovation:
      "The first 3D screen in Tanzania, from the network that won the DailyDOOH award in London in 2018 for the 3D Digital Coke Bottle.",
    related: [
      { label: "Mall advertising and 3D screens", href: "/mall-advertising-dar-es-salaam/" },
      { label: "Vodacom at Mlimani City", href: "/work/vodacom-screen-placement/" },
    ],
    oldSlug: "unveiling-the-extra-dimension-introducing-tanzanias-first-3d-screen",
  },
  {
    slug: "vodacom-screen-placement",
    client: "Vodacom Tanzania",
    title: "Vodacom's device-financing campaign across the Mlimani City network",
    date: "2024-02-03",
    industry: "Telecoms",
    formats: ["3D digital screen", "UHD indoor screens"],
    where: "Mlimani City, Dar es Salaam",
    summary:
      "Vodacom Tanzania was the first brand to use the whole Mlimani City network — the 3D screen at the entrance and the four UHD screens inside — to carry one message from the door to the shop.",
    challenge:
      "Device financing is a considered purchase. Vodacom needed shoppers to see the offer, understand it and still have it in mind when they reached the store — not a single glance at a single poster.",
    solution:
      "The 3D screen at the entrance made the first impression; the indoor UHD screens continued the narrative along the shopper's route, acting as guides and storytellers from curiosity to interest to decision. Continuous presence across multiple screens kept Vodacom top of mind for the whole visit.",
    body: `## What it showed

Where you place your story matters as much as the story itself. Strategic placement in high-traffic positions, with a message that follows the consumer's journey, turns a mall visit into a sequence of touchpoints — and brand recall into brand dominance in a competitive retail environment.`,
    related: [
      { label: "Mall advertising and 3D screens", href: "/mall-advertising-dar-es-salaam/" },
      { label: "Digital screens across Tanzania", href: "/digital-billboards-tanzania/" },
    ],
    oldSlug: "how-strategic-screen-placement-transforms-consumer-engagement-a-case-study-with-vodacom-tanzania",
  },
  {
    slug: "circle-k-retail-digital-signage",
    client: "Circle K",
    title: "Digital signage for Circle K's first store in Tanzania",
    date: "2024-02-11",
    industry: "Convenience retail",
    formats: ["Retail digital signage"],
    where: "Puma station, Obama Drive, Dar es Salaam",
    summary:
      "Circle K, the global convenience and fuel-station chain, opened its first Tanzanian store at the Puma fuel station on Obama Drive with digital signage designed and run by Ashton Media.",
    challenge:
      "A new-to-market retailer needed its first store to feel like the global brand from day one, with promotions that could change as fast as the offer did.",
    solution:
      "Ashton Media installed and operates a digital signage network inside the store, bringing the same screen technology used on the outdoor network to the retail floor: promotions, products and brand content updated without a reprint.",
    related: [
      { label: "Mall advertising and retail signage", href: "/mall-advertising-dar-es-salaam/" },
    ],
    oldSlug: "transforming-retail-spaces-with-digital-signage-by-ashton-media",
  },
  {
    slug: "kfc-countdown-to-iftar",
    client: "KFC",
    title: "KFC's Countdown to Iftar: data-driven screens through Ramadan",
    date: "2024-03-18",
    industry: "Quick-service restaurants",
    formats: ["Digital screen network"],
    where: "Across the digital network, Dar es Salaam",
    summary:
      "Through Ramadan 2024, KFC turned Ashton Media's digital inventory into live countdown timers to Iftar, the breaking of the fast — an advertisement that was also a service to the community.",
    challenge:
      "Ramadan changes the rhythm of the city. KFC wanted to connect with the community during the holy month in a way that was useful and respectful, not just loud.",
    solution:
      "Every screen in the plan showed a live countdown to Iftar, synchronised across locations and driven by data. As the time approached, the message built anticipation for the meal that follows the fast. The ads were no longer static: they were timely, interactive and relevant to the minute.",
    innovation:
      "Live, data-driven creative across a whole network — the kind of campaign only a digital network can run.",
    related: [
      { label: "Digital screens across Tanzania", href: "/digital-billboards-tanzania/" },
    ],
    oldSlug: "kfc-countdown-to-iftar-using-data-driven-dooh-advertising",
  },
  {
    slug: "chole-junction-dooh-upgrade",
    client: "Ashton Media",
    title: "Chole Junction, Masaki: a flagship screen made larger",
    date: "2024-04-19",
    industry: "Network",
    formats: ["Digital screen"],
    where: "Chole Junction, Masaki, Dar es Salaam",
    summary:
      "In April 2024 the screen at Chole Junction in Masaki — one of the busiest intersections in Dar es Salaam — was upgraded to a larger, more vibrant display and joined the network's Fame collection of flagship sites.",
    challenge:
      "Chole Junction is where Masaki's traffic meets the road to the city. The existing display earned its place; the junction deserved a bigger one.",
    solution:
      "A larger, brighter screen on the same prominent position, now part of the Fame collection — the network's flagship sites. Its presence over the junction turns every stop at the lights into an opportunity to see.",
    related: [
      { label: "Digital screens across Tanzania", href: "/digital-billboards-tanzania/" },
    ],
    oldSlug: "our-latest-dooh-upgrade-at-chole-junction-masaki-dar-es-salaam",
  },
  {
    slug: "pepsi-logo-launch",
    client: "Pepsi",
    title: "Launching the new Pepsi logo on a static-and-digital build",
    date: "2024-07-06",
    industry: "Beverages",
    formats: ["Static billboard", "Digital elements"],
    where: "Dar es Salaam",
    summary:
      "Pepsi's new logo arrived in Tanzania on a billboard that was not just a billboard: a fusion of static and digital elements built by Ashton Media to show the mark in a way the city had not seen before.",
    challenge:
      "A logo change is a brand's biggest visual moment in years. Pepsi wanted its launch in Tanzania to be seen, talked about and remembered — not absorbed into the usual roadside wallpaper.",
    solution:
      "A static structure combined with digital elements, so that the new logo could be presented with motion and light on a site built for the launch. The production pushed the boundary of what an outdoor build can be in Tanzania.",
    innovation: "A combined static and digital structure, built for one launch.",
    related: [
      { label: "Static billboards", href: "/static-billboards-tanzania/" },
      { label: "Digital screens", href: "/digital-billboards-tanzania/" },
    ],
    oldSlug: "pepsi-logo-launch-with-ashton-media",
  },
  {
    slug: "tecno-viral-outdoor-strategy",
    client: "TECNO",
    title: "TECNO's WhatsApp-chat billboard",
    date: "2025-01-27",
    industry: "Mobile devices",
    formats: ["Billboards", "Digital screens"],
    where: "Dar es Salaam",
    summary:
      "In a crowded outdoor market, TECNO stood out with a design everyone recognises instantly: a WhatsApp chat. The campaign turned a familiar screen into a story people stopped to read and share.",
    challenge:
      "With countless billboards and screens competing for attention, a phone brand needed a creative idea that would be understood in a second and remembered for longer.",
    solution:
      "The outdoor creative mimicked the layout of a WhatsApp chat — the interface millions of Tanzanians use every day — so the ad read as a personal conversation rather than an announcement. The simplicity was its strength: something universally recognised, turned into an outdoor campaign that turned heads, sparked curiosity and started conversations offline and online.",
    related: [
      { label: "Static billboards", href: "/static-billboards-tanzania/" },
    ],
    oldSlug: "simple-yet-viral-outdoor-ad-strategy-by-tecno",
  },
];

export function getCaseStudy(slug: string) {
  return work.find((w) => w.slug === slug);
}

export const workByDate = [...work].sort((a, b) => (a.date < b.date ? 1 : -1));
