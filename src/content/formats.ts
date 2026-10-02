// Format and service pages. Each entry renders through the same template.
// Facts only: no specifications, counts or prices appear until they are confirmed.

export type Faq = { q: string; a: string };

export type FormatPage = {
  slug: string;
  nav: string;
  short: string; // one line for cards
  title: string; // <title>, ≤ 60 characters
  description: string; // meta description, ≤ 155 characters
  h1: string;
  lead: string;
  sections: { heading: string; body: string[] }[];
  related?: string[]; // blog slugs
  faqs: Faq[];
  cta: { label: string; whatsapp: string };
};

export const formats: FormatPage[] = [
  {
    slug: "digital-billboards-tanzania",
    nav: "Digital screens",
    short: "The largest digital screen network in Tanzania: junctions, main roads and landmarks, with creative that changes by the hour.",
    title: "Digital Billboards in Tanzania | Ashton Media",
    description:
      "Tanzania's largest digital screen network: LED screens in Dar es Salaam, Zanzibar, Dodoma and Mwanza. Day-parting, live data and same-day changes. Talk to us.",
    h1: "Digital billboards and LED screens across Tanzania",
    lead:
      "ADN — Ashton Digital Network — is the country's largest digital out-of-home network, from Selander Bridge and Chole Junction in Dar es Salaam to Zanzibar, Dodoma and Mwanza. One booking puts a brand on all of it, or on the three screens that matter.",
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
          "The network is concentrated where Dar es Salaam's traffic is: Selander Bridge, Chole Junction in Masaki, Mlimani City, and the main roads between them. Screens in Dodoma, Mwanza and Zanzibar carry national campaigns beyond the city.",
          "Ask and we will send the current site list with photographs and locations.",
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
    related: ["kfc-countdown-to-iftar-using-data-driven-dooh-advertising", "our-latest-dooh-upgrade-at-chole-junction-masaki-dar-es-salaam", "why-tanzanian-advertisers-have-increased-their-visibility-on-digital-out-of-home-advertising-in-2024"],
    faqs: [
      { q: "Where are Ashton Media's digital screens?", a: "Across Dar es Salaam — Selander Bridge, Chole Junction, Mlimani City and the main roads between them — and in Zanzibar, Dodoma and Mwanza. It is the largest digital out-of-home network in the country, and it is still growing." },
      { q: "Can I book a single screen?", a: "Yes. Many campaigns start with one landmark screen — Selander Bridge or Chole Junction, for example — and add screens as they grow." },
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
    short: "Own a road, every hour of the day. Sites on the main roads of Dar es Salaam and upcountry, with print and installation included.",
    title: "Static Billboards in Tanzania | Ashton Media",
    description:
      "Static billboards and large-format sites in Dar es Salaam and upcountry Tanzania. Print, installation and posting by one team. Request the site list.",
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
          "Ask for the current static site list and it comes with photographs and locations.",
        ],
      },
    ],
    related: ["pepsi-logo-launch-with-ashton-media", "simple-yet-viral-outdoor-ad-strategy-by-tecno", "use-location-intelligently-how-well-located-billboard-advertising-can-transform-your-business"],
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
    short: "Reach travellers from the moment they land: arrivals, baggage halls and departures, on screens, pillar wraps and back-lit boards.",
    title: "Airport Advertising in Tanzania | Ashton Media",
    description:
      "Airport advertising in Tanzania: digital screens, pillar wraps, back-lit boards and baggage-hall sites that reach travellers from the moment they land.",
    h1: "Airport advertising",
    lead:
      "An airport audience is unlike any other: travellers with time to look, money to spend and decisions to make — which network, which bank, which hotel, which car. Ashton Media's airport advertising puts a brand in front of them from the moment they land, through the terminal and out to the city.",
    sections: [
      {
        heading: "Placements through the terminal",
        body: [
          "A large digital screen seen by arriving passengers as they come down to immigration — the first brand message a visitor sees in the country.",
          "A digital screen network through the terminal, pillar wraps and back-lit boards along the route, and sites in the baggage-claim area, where passengers stand still for the longest.",
          "Together they let one brand own the arrival, or several brands share it by zone.",
        ],
      },
      {
        heading: "Who you reach",
        body: [
          "International business travellers, tourists, returning residents and the people meeting them. Banks, telcos, hotels, airlines and tourism brands use the airport to greet customers at the moment of arrival.",
          "Ashton Media's airport inventory today is at Julius Nyerere International Airport in Dar es Salaam. Passenger figures and the placement map are sent with the quote.",
        ],
      },
    ],
    related: ["target-engage-and-convert-win-thousands-of-airport-travelers"],
    faqs: [
      { q: "Where can I advertise at the airport in Tanzania?", a: "Ashton Media sells advertising at Julius Nyerere International Airport in Dar es Salaam: a large screen at the arrivals escalators, a screen network through the terminal, pillar wraps, back-lit boards and baggage-claim sites." },
      { q: "Can one brand take the whole arrivals route?", a: "Yes. A single brand can own the arrival experience from the escalators to the exit, or the route can be shared by zone." },
      { q: "How do I get passenger numbers and a placement map?", a: "Ask for them with your brief. We send the placement map, the formats and the current passenger figures with the quote." },
      { q: "What creative is needed for airport sites?", a: "Digital screens take a still or a short video; pillar wraps and back-lit boards are printed to each site's specification. We send the specifications with the quote and can design the creative if you need it." },
    ],
    cta: { label: "Ask about airport advertising", whatsapp: "Hi Ashton Media, I'm interested in airport advertising. Please send the placement map and rates." },
  },
  {
    slug: "mobile-screens-tanzania",
    nav: "Mobile screens",
    short: "An LED screen on wheels: take the message to the market, the stadium, the launch — wherever the audience is that day.",
    title: "Mobile LED Screen Advertising in Tanzania | Ashton Media",
    description:
      "Mobile LED screen trucks from Ashton: a digital billboard that goes where the audience is — events, markets, launches and roadshows across Tanzania.",
    h1: "Mobile LED screens",
    lead:
      "Some audiences don't pass a fixed site. A mobile LED screen on a truck takes a full digital billboard to them — the market on market day, the stadium on match day, the roadshow as it moves from town to town — and parks where a brand needs to be seen.",
    sections: [
      {
        heading: "What a mobile screen is for",
        body: [
          "Launches and activations, where the screen becomes the stage. Events, where it carries the sponsor's message to the crowd. Promotions that move: a route through the city over a day, or a roadshow upcountry over a week.",
          "The screen runs the same creative as the fixed network — stills or video — so a campaign can start on the roads and arrive at the event on the same screen.",
        ],
      },
      {
        heading: "How it is booked",
        body: [
          "Tell us the dates, the places and the hours. We plan the route, handle the permits and the crew, and send photographs from each stop.",
        ],
      },
    ],
    faqs: [
      { q: "Where can the mobile screen go?", a: "Anywhere a truck can park: markets, stadiums, event venues, shopping streets and towns upcountry. Tell us the places and the dates and we plan the route." },
      { q: "Can it run video?", a: "Yes. The screen runs stills or video, with sound where the venue allows it." },
      { q: "Can I combine it with fixed sites?", a: "Yes — the same creative can run on the digital network and arrive at your event on the mobile screen." },
    ],
    cta: { label: "Ask about the mobile screen", whatsapp: "Hi Ashton Media, I'm interested in the mobile LED screen. Please send details and rates." },
  },
  {
    slug: "mall-advertising-dar-es-salaam",
    nav: "Malls & retail",
    short: "Screens at the entrance and through the mall, and digital signage inside stores. Reach shoppers at the moment of decision.",
    title: "Mall Advertising in Dar es Salaam | Ashton Media",
    description:
      "Mall and retail advertising in Dar es Salaam: screens at the entrance of Mlimani City and through the mall, and digital signage inside stores such as Circle K.",
    h1: "Mall and retail advertising in Dar es Salaam",
    lead:
      "A mall is where people arrive ready to buy. Ashton Media's screens at Mlimani City — Dar es Salaam's busiest mall — greet shoppers at the door and follow them to the shop, and its retail digital signage carries a brand right onto the shop floor.",
    sections: [
      {
        heading: "The Mlimani City network",
        body: [
          "A screen at the main entrance is the first thing a visitor sees — it is also Tanzania's first 3D screen. Inside, four Ultra-HD screens in the highest-traffic positions continue the message.",
          "Vodacom Tanzania's device-financing campaign used the whole network to carry one story from the entrance to the point of purchase.",
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
    related: ["how-strategic-screen-placement-transforms-consumer-engagement-a-case-study-with-vodacom-tanzania", "transforming-retail-spaces-with-digital-signage-by-ashton-media"],
    faqs: [
      { q: "Which malls can I advertise in?", a: "Mlimani City in Dar es Salaam, with a screen at the main entrance and four UHD screens inside. Ask about other locations — the network grows." },
      { q: "Can I advertise inside Mlimani City without the entrance screen?", a: "Yes. The four UHD screens inside the mall can be booked on their own." },
      { q: "Do you install screens in shops and petrol stations?", a: "Yes. Ashton Media designs, installs and runs digital signage in retail spaces, such as Circle K at the Puma station on Obama Drive." },
      { q: "What creative do mall screens take?", a: "A still or a short video to the screen's specification. The entrance screen can also run 3D creative — see the 3D screens page." },
    ],
    cta: { label: "Ask about mall advertising", whatsapp: "Hi Ashton Media, I'm interested in mall and retail screens. Please send details and rates." },
  },
  {
    slug: "3d-billboard-tanzania",
    nav: "3D screens",
    short: "Creative that appears to leave the screen. Tanzania's first 3D screen, from the team that won an international award for it.",
    title: "3D Billboard Advertising in Tanzania | Ashton Media",
    description:
      "3D screen advertising in Tanzania: creative that appears to come out of the screen, on the country's first 3D billboard at Mlimani City — from an award-winning team.",
    h1: "3D screen advertising",
    lead:
      "A 3D screen makes people stop. Creative built for the screen's geometry appears to leave the surface — a bottle pours, a phone turns in the air, a car drives out over the crowd. Ashton Media switched on Tanzania's first 3D screen at the entrance of Mlimani City in January 2024, and won an international award for 3D creative years before that.",
    sections: [
      {
        heading: "How 3D works outdoors",
        body: [
          "The illusion comes from creative made for one screen and one viewing position: the content is rendered with a frame and a perspective that make objects seem to break out of it. Seen from the main approach, the effect is immediate; seen elsewhere, it still reads as a striking screen.",
          "It suits launches, reveals and anything with a hero product. A few seconds of 3D inside a longer loop is enough to be the thing people film and share.",
        ],
      },
      {
        heading: "Where and how to book it",
        body: [
          "The 3D screen stands at the main entrance of Mlimani City, Dar es Salaam's busiest mall, with four UHD screens inside the mall to carry the message on.",
          "We work with you or your agency on the 3D creative, and we have done it before: the 3D Digital Coke Bottle won the DailyDOOH award in London for the most innovative use of technology.",
        ],
      },
    ],
    related: ["unveiling-the-extra-dimension-introducing-tanzanias-first-3d-screen", "how-strategic-screen-placement-transforms-consumer-engagement-a-case-study-with-vodacom-tanzania"],
    faqs: [
      { q: "Where is Tanzania's 3D billboard?", a: "At the main entrance of Mlimani City mall in Dar es Salaam. Ashton Media launched it in January 2024 as the first 3D screen in the country." },
      { q: "Do I need special creative for the 3D screen?", a: "Yes. 3D creative is built for the screen's geometry so the image appears to come out of the frame. We work with you or your agency on it, and can produce it." },
      { q: "How long does 3D creative take to make?", a: "Longer than a still — it is a short piece of 3D animation. Tell us the launch date and we plan the production backwards from it." },
      { q: "Can 3D run alongside a normal campaign?", a: "Yes. A short 3D piece can sit inside the loop with your standard creative, and the UHD screens inside the mall carry the campaign on." },
    ],
    cta: { label: "Ask about the 3D screen", whatsapp: "Hi Ashton Media, I'm interested in the 3D screen at Mlimani City. Please send details and rates." },
  },
];

export function getFormat(slug: string) {
  return formats.find((f) => f.slug === slug);
}
