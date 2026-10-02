// Format and service pages. Each entry renders through the same template.
// Facts only: no specifications, counts or prices appear until they are confirmed.

export type Faq = { q: string; a: string };

export type FormatPage = {
  slug: string;
  nav: string;
  title: string; // <title>, ≤ 60 characters
  description: string; // meta description, ≤ 155 characters
  h1: string;
  lead: string;
  sections: { heading: string; body: string[] }[];
  facts?: { label: string; value: string }[];
  caseStudies?: string[]; // work slugs
  faqs: Faq[];
  cta: { label: string; whatsapp: string };
};

export const formats: FormatPage[] = [
  {
    slug: "digital-billboards-tanzania",
    nav: "Digital screens",
    title: "Digital Billboards in Tanzania | Ashton Media Tanzania",
    description:
      "Tanzania's largest digital screen network: 50+ LED screens in Dar es Salaam, Zanzibar, Dodoma, Mwanza and Namanga. Day-parting, live data and fast changes. Talk to us.",
    h1: "Digital billboards and LED screens across Tanzania",
    lead:
      "ADN — Ashton Digital Network — is the country's largest digital out-of-home network: more than 50 screens, from Selander Bridge and Chole Junction in Dar es Salaam to Zanzibar, Dodoma, Mwanza and the Namanga border. One booking puts a brand on all of them, or on the three that matter.",
    sections: [
      {
        heading: "What a digital screen does that a poster cannot",
        body: [
          "Creative changes without a reprint. A promotion can run for a weekend, a price can change on Monday, and a launch can go live on every screen at the same minute.",
          "Day-parting puts the right message at the right hour: breakfast on the morning commute, a different offer in the evening rush.",
          "Live data drives the message. KFC's Countdown to Iftar ran a live timer to the breaking of the fast on every screen through Ramadan — a service to the audience and a reason to look up.",
          "Motion earns attention at junctions where traffic slows. Still frames work too; the screen suits both.",
        ],
      },
      {
        heading: "Where the screens are",
        body: [
          "The network is concentrated where Dar es Salaam's traffic is: Selander Bridge, Chole Junction in Masaki, Mlimani City, and the main roads between them. Upcountry screens in Dodoma, Mwanza and Zanzibar carry national campaigns beyond the city, and the Namanga screen meets traffic crossing from Kenya.",
          "Each site page on this site will carry photographs, the exact location and the screen's audience data as they are published. Until then, ask and we will send the current site list with photos.",
        ],
      },
      {
        heading: "How a digital campaign is booked",
        body: [
          "Tell us the objective, the cities and the dates. We propose a screen mix and a loop share, quote it, check your artwork against the screen specifications, schedule it and send proof of play.",
          "Creative can be a still or a short video. We will send the specifications for every screen in the plan; if you need the creative made, we design it.",
        ],
      },
    ],
    facts: [
      { label: "Network", value: "50+ screens across Tanzania" },
      { label: "Cities", value: "Dar es Salaam, Zanzibar, Dodoma, Mwanza, Namanga" },
      { label: "Flagships", value: "Selander Bridge · Chole Junction · Mlimani City (3D)" },
      { label: "Scheduling", value: "Day-parting, live data, same-day changes" },
    ],
    caseStudies: ["kfc-countdown-to-iftar", "chole-junction-dooh-upgrade", "vodacom-screen-placement"],
    faqs: [
      { q: "How many digital screens does Ashton Media have in Tanzania?", a: "More than 50, across Dar es Salaam, Zanzibar, Dodoma, Mwanza and the Namanga border. It is the largest digital out-of-home network in the country, and it is still growing." },
      { q: "Can I book a single screen?", a: "Yes. Many campaigns start with one flagship screen — Selander Bridge or Chole Junction, for example — and add screens as they grow." },
      { q: "What creative do I need to supply?", a: "A still image or a short video made to each screen's specifications. We send the specifications with the quote, and we can design the creative if you need it." },
      { q: "How quickly can a digital campaign go live?", a: "Once the artwork is approved, scheduling is quick — usually a matter of days, and faster when a launch date is fixed in advance. Tell us the date and we plan backwards from it." },
      { q: "Can the message change during the campaign?", a: "Yes. Creative can be swapped, day-parted or driven by live data such as a countdown, a score or the weather, without a reprint." },
      { q: "Do you provide proof that the ad ran?", a: "Yes. Digital campaigns come with proof of play from the scheduling system; static campaigns come with photographs of the posted site." },
    ],
    cta: { label: "Plan a digital campaign", whatsapp: "Hi Ashton Media, I'm interested in digital screens in Tanzania. Please send the current site list and rates." },
  },
  {
    slug: "static-billboards-tanzania",
    nav: "Static billboards",
    title: "Static Billboards in Tanzania | Ashton Media Tanzania",
    description:
      "Static billboards and large-format sites in Dar es Salaam and upcountry Tanzania, with print, installation and posting handled by one team. Request the site list.",
    h1: "Static billboards in Dar es Salaam and across Tanzania",
    lead:
      "A static billboard is still the simplest way to own a road. Ashton Media's static sites sit on the routes Dar es Salaam drives every day, and the same team handles the print, the installation and the posting, so one quote covers the whole job.",
    sections: [
      {
        heading: "When static is the right choice",
        body: [
          "Launches and always-on brand campaigns suit a static site: the message is there every hour of the day, lit at night, with no loop to share.",
          "Static and digital work well together. Pepsi's logo launch combined a static build with digital elements on the same structure — the kind of production the team enjoys.",
          "Large formats carry a brand across a junction; smaller formats repeat it along a route. The plan depends on the objective, and we will say which we would choose.",
        ],
      },
      {
        heading: "What is included",
        body: [
          "Site rental for the booked period, printing to the site's specification, installation, and a photograph of the posted site. If the creative needs adapting to the site's proportions, we do that too.",
          "Every static site page will show the road, the facing, the size and photographs as they are published. In the meantime, ask for the current static site list.",
        ],
      },
    ],
    facts: [
      { label: "Where", value: "Dar es Salaam main roads and upcountry" },
      { label: "Included", value: "Site, print, installation, posting photo" },
      { label: "Pairs with", value: "Digital screens on the same route" },
    ],
    caseStudies: ["pepsi-logo-launch", "tecno-viral-outdoor-strategy"],
    faqs: [
      { q: "Where are your static billboards?", a: "On the main roads of Dar es Salaam and in upcountry towns. Ask for the current site list and we will send it with photographs and locations." },
      { q: "Is printing included in the price?", a: "We quote the whole job — site, print, installation and posting — so you see one number. Tell us if you already have print and we will quote the site alone." },
      { q: "What is the minimum booking period?", a: "It depends on the site. Tell us your dates and we will say what is possible." },
      { q: "Can I combine static billboards with digital screens?", a: "Yes, and most brand campaigns do. A static site holds the message all day; the digital screens on the same route add motion, timing and change." },
      { q: "Do you handle permits and installation?", a: "Yes. Our team in Dar es Salaam handles the site, the production and the installation end to end." },
    ],
    cta: { label: "Request the static site list", whatsapp: "Hi Ashton Media, please send the static billboard site list and rates." },
  },
  {
    slug: "airport-advertising-tanzania",
    nav: "Airport",
    title: "Airport Advertising at JNIA Terminal 3 | Ashton Media",
    description:
      "Exclusive advertising at Julius Nyerere International Airport Terminal 3, Dar es Salaam: the escalator screen, digital network, pillar wraps and baggage-claim sites.",
    h1: "Airport advertising at JNIA Terminal 3, Dar es Salaam",
    lead:
      "Ashton Media holds the exclusive advertising rights at Terminal 3 of Julius Nyerere International Airport. Every international arrival into Dar es Salaam walks past the escalator screen, through the digital network and the pillar wraps, and waits at baggage claim in front of our sites.",
    sections: [
      {
        heading: "Placements at Terminal 3",
        body: [
          "The escalator screen: a large digital screen viewed by arriving passengers as they descend towards immigration — the first brand message in Tanzania for a visitor.",
          "The digital network through the terminal, pillar wraps and back-lit boards along the route, and the baggage-claim area, where passengers stand still for the longest.",
          "Together they let one brand own the arrival, or several brands share it by zone.",
        ],
      },
      {
        heading: "Who you reach",
        body: [
          "International business travellers, tourists, returning Tanzanians and the people meeting them. Banks, telcos, hotels, airlines and tourism brands use the terminal to greet customers at the moment of arrival.",
          "Passenger figures and the detailed placement map are available on request with the quote.",
        ],
      },
    ],
    facts: [
      { label: "Airport", value: "Julius Nyerere International, Terminal 3" },
      { label: "Rights", value: "Exclusive to Ashton Media" },
      { label: "Placements", value: "Escalator screen · digital network · pillar wraps · back-lit boards · baggage claim" },
    ],
    faqs: [
      { q: "Who sells advertising at Dar es Salaam airport?", a: "Ashton Media holds the exclusive advertising rights at Julius Nyerere International Airport Terminal 3, the international terminal." },
      { q: "What formats are available at JNIA?", a: "A large digital screen at the arrivals escalators, a digital screen network through the terminal, pillar wraps, back-lit boards and sites in the baggage-claim area." },
      { q: "Can one brand take the whole arrivals route?", a: "Yes. A single brand can own the arrival experience from the escalators to the exit, or the route can be shared by zone." },
      { q: "How do I get passenger numbers and a placement map?", a: "Ask for them with your brief. We send the placement map, the formats and the current passenger figures with the quote." },
    ],
    cta: { label: "Ask about Terminal 3", whatsapp: "Hi Ashton Media, I'm interested in advertising at JNIA Terminal 3. Please send the placement map and rates." },
  },
  {
    slug: "mall-advertising-dar-es-salaam",
    nav: "Malls & 3D",
    title: "Mall Advertising in Dar es Salaam & 3D Screens | Ashton Media",
    description:
      "Tanzania's first 3D screen at the entrance of Mlimani City, four UHD screens inside the mall, and retail digital signage. Reach shoppers at the moment of decision.",
    h1: "Mall advertising at Mlimani City and Tanzania's first 3D screen",
    lead:
      "In January 2024 Ashton Media switched on Tanzania's first 3D-ready screen at the main entrance of Mlimani City, Dar es Salaam's busiest mall, with four Ultra-HD screens placed through the mall itself. It is the only place in the country where a brand can greet shoppers in 3D at the door and follow them to the shop.",
    sections: [
      {
        heading: "The Mlimani City network",
        body: [
          "The 3D screen at the main entrance is the first thing a visitor sees. Creative made for it appears to leave the surface of the screen — the same technique that won Ashton Media the DailyDOOH award in London for the 3D Digital Coke Bottle.",
          "Inside, four UHD screens in the highest-traffic positions continue the message. Vodacom Tanzania's device-financing campaign used the whole network to carry one story from the entrance to the point of purchase.",
        ],
      },
      {
        heading: "Retail digital signage",
        body: [
          "Beyond the mall, Ashton Media installs and runs digital signage inside retail spaces. Circle K's first Tanzanian store, at the Puma station on Obama Drive, opened with Ashton Media screens.",
          "If you own a retail space and want a screen network in it, or you are a brand that wants to be on one, talk to us.",
        ],
      },
    ],
    facts: [
      { label: "Mall", value: "Mlimani City, Dar es Salaam" },
      { label: "Screens", value: "3D screen at the main entrance + 4 UHD screens inside" },
      { label: "First", value: "Tanzania's first 3D screen, January 2024" },
      { label: "Retail", value: "Circle K, Obama Drive" },
    ],
    caseStudies: ["tanzanias-first-3d-screen", "vodacom-screen-placement", "circle-k-retail-digital-signage"],
    faqs: [
      { q: "Where is Tanzania's 3D billboard?", a: "At the main entrance of Mlimani City mall in Dar es Salaam. Ashton Media launched it in January 2024 as the first 3D screen in Tanzania." },
      { q: "Do I need special creative for the 3D screen?", a: "Yes. 3D creative is built for the screen's geometry so the image appears to come out of the frame. We work with you or your agency on it, and we have done it before — the 3D Digital Coke Bottle won an international award in 2018." },
      { q: "Can I advertise inside Mlimani City without the 3D screen?", a: "Yes. The four UHD screens inside the mall can be booked on their own." },
      { q: "Do you install screens in shops and petrol stations?", a: "Yes. Ashton Media designs, installs and runs digital signage in retail spaces, such as Circle K at the Puma station on Obama Drive." },
    ],
    cta: { label: "Ask about Mlimani City", whatsapp: "Hi Ashton Media, I'm interested in the Mlimani City screens. Please send details and rates." },
  },
];

export function getFormat(slug: string) {
  return formats.find((f) => f.slug === slug);
}
