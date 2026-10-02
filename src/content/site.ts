// Company facts used across the site. Every value here was verified against a
// live page, the company's own posts, or the project brief before being used.
// Change a fact here and it changes everywhere (footer, schema, contact pages).

export const site = {
  name: "Ashton Media",
  brand: "Ashton",
  legalName: "Ashton Media Limited",
  tagline: "Billboards and digital screens across Tanzania",
  url: "https://www.ashtonmedia.net",
  founded: 2005,
  phone: {
    display: "+255 758 880 088",
    local: "0758 880 088",
    e164: "+255758880088",
    tel: "tel:+255758880088",
  },
  whatsapp: {
    number: "255758880088",
    url: (text?: string) =>
      `https://wa.me/255758880088${text ? `?text=${encodeURIComponent(text)}` : ""}`,
  },
  email: "contact@ashtonmedia.net",
  address: {
    street: "Plot No. 4, New Bagamoyo Road",
    city: "Dar es Salaam",
    country: "Tanzania",
    countryCode: "TZ",
    full: "Plot No. 4, New Bagamoyo Road, Dar es Salaam, Tanzania",
    mapsQuery: "Plot No. 4 New Bagamoyo Road, Dar es Salaam, Tanzania",
  },
  social: {
    linkedin: "https://www.linkedin.com/company/ashtondigitalnetwork",
    instagram: "https://www.instagram.com/ashton.digital.network/",
    facebook: "https://www.facebook.com/ashtonmedia/",
  },
  networkName: "ADN — Ashton Digital Network",
} as const;

export type City = {
  name: string;
  slug: string;
  note: string;
};

// Only places with confirmed inventory are listed.
export const cities: City[] = [
  { name: "Dar es Salaam", slug: "dar-es-salaam", note: "Head office, the largest share of the network, the international airport and Mlimani City" },
  { name: "Zanzibar", slug: "zanzibar", note: "Digital screens" },
  { name: "Dodoma", slug: "dodoma", note: "Digital screens in the capital" },
  { name: "Mwanza", slug: "mwanza", note: "Digital screens on the lake" },
];

export const clients = [
  "Coca-Cola",
  "Vodacom Tanzania",
  "KFC",
  "Pepsi",
  "TECNO",
  "Circle K",
] as const;

export type Award = {
  year: number;
  body: string;
  category: string;
  place?: string;
  detail: string;
  source?: string;
};

export const awards: Award[] = [
  {
    year: 2018,
    body: "DailyDOOH Gala Awards",
    place: "London",
    category: "Most Innovative Use of Technology",
    detail:
      "Won in London against international entries for the 3D Digital Coke Bottle in Tanzania — the industry's own award for digital out-of-home.",
    source: "https://2018.dailydoohgalaawards.com/winners",
  },
  {
    year: 2023,
    body: "Consumer Choice Awards Africa",
    category: "Most Creative and Convenient Digital Advertising (Billboard) Company in Tanzania",
    detail: "Voted by consumers across Tanzania.",
  },
  {
    year: 2024,
    body: "Consumer Choice Awards Africa",
    category: "Most Creative and Convenient Digital Advertising Company in Tanzania",
    detail: "Second consecutive year.",
  },
  {
    year: 2025,
    body: "Consumer Choice Awards Africa",
    category: "Most Creative and Convenient Digital Advertising Company in Tanzania",
    detail: "Third consecutive year.",
  },
];

export const timeline = [
  { when: "2005", what: "Ashton Media founded in Dar es Salaam." },
  { when: "2018", what: "DailyDOOH Gala Award, London — Most Innovative Use of Technology, for the 3D Digital Coke Bottle." },
  { when: "2023", what: "Consumer Choice Awards Africa — Most Creative and Convenient Digital Advertising (Billboard) Company in Tanzania." },
  { when: "January 2024", what: "Tanzania's first 3D screen goes live at the main entrance of Mlimani City, with four UHD screens inside the mall." },
  { when: "February 2024", what: "Digital signage for Circle K's first Tanzanian store, at the Puma station on Obama Drive." },
  { when: "March 2024", what: "KFC's Countdown to Iftar: live, data-driven countdowns across the digital network during Ramadan." },
  { when: "April 2024", what: "Chole Junction, Masaki, upgraded to a larger screen." },
  { when: "July 2024", what: "Pepsi's new logo launched on a combined static and digital build." },
  { when: "2024", what: "Consumer Choice Awards Africa — second consecutive year." },
  { when: "January 2025", what: "TECNO's WhatsApp-chat billboard campaign." },
  { when: "2025", what: "Consumer Choice Awards Africa — third consecutive year." },
] as const;

export const bookingSteps = [
  { name: "Brief", text: "Tell us the objective, where you want to be seen, when, and roughly what you want to spend. Two minutes on a phone is enough." },
  { name: "Plan", text: "We come back with the sites and screens that fit, with photos and locations, and a recommendation." },
  { name: "Quote", text: "One quote for the whole campaign. If you need print, installation or creative, it is in the same quote." },
  { name: "Artwork", text: "You send artwork, or we design it. We check it against each site's specifications before it goes up." },
  { name: "Live", text: "Static sites are posted and digital creative is scheduled. You get confirmation when the campaign is live." },
  { name: "Report", text: "Proof of posting and, for digital, proof of play. Then we talk about what comes next." },
] as const;
