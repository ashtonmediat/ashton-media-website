// Insights: the twelve editorial posts from the previous site, kept at their
// original slugs under /insights/. Bodies are Markdown. Posts marked
// `partial: true` carry what was recovered before the old site went offline;
// the full text is restored from the Internet Archive copy.

export type Post = {
  slug: string;
  title: string;
  date: string; // ISO
  excerpt: string;
  body: string;
  partial?: boolean;
  related?: { label: string; href: string }[];
};

export const posts: Post[] = [
  {
    slug: "ooh-is-unskipable",
    title: "OOH is unskippable",
    date: "2025-05-22",
    excerpt:
      "In a world where everything can be skipped — videos, pop-ups, even entire apps — one kind of ad is impossible to ignore.",
    body: `In a world where everything can be skipped — videos, pop-ups, even entire apps — there's one type of ad that's impossible to ignore: out-of-home (OOH) advertising. No matter how fast you scroll or how many blockers you install, you can't scroll past a billboard. You can't mute a screen on the side of the road. And you definitely can't "skip" a message standing 12 metres tall at a traffic junction.

**OOH is the true unskippable medium.**

## Online digital ads are evasive, not persuasive

Over 65% of people skip video ads the moment the "Skip Ad" button appears. Outdoor advertising doesn't try to interrupt your feed. It exists in your physical environment, commanding attention naturally and persistently.

## Four reasons OOH matters

1. **OOH ads can't be skipped.** The message is in the environment, not in a feed.
2. **OOH advertising builds real-world credibility.** A brand on a landmark site is a brand that is here to stay.
3. **Outdoor advertising reaches captive audiences.** Commuters, shoppers and travellers see the same message again and again.
4. **OOH complements digital campaigns.** Studies show that pairing out-of-home with online can lift engagement by up to 54%.

OOH doesn't beg for attention. It earns it by showing up where your audience already is.`,
    related: [
      { label: "Digital screens across Tanzania", href: "/digital-billboards-tanzania/" },
      { label: "Static billboards", href: "/static-billboards-tanzania/" },
    ],
  },
  {
    slug: "the-6-biggest-myths-and-misconceptions-about-out-of-home-advertising",
    title: "The six biggest myths about out-of-home advertising",
    date: "2024-09-03",
    excerpt:
      "Out-of-home still holds a crucial place in the media mix. Several myths persist about it; here are the six biggest, and the truth behind each.",
    body: `In the evolving landscape of advertising, out-of-home (OOH) continues to hold a crucial place. Despite its effectiveness, several myths and misconceptions persist about the medium. Here are the six biggest, and the truths that make OOH an indispensable part of any marketing strategy.

## Myth 1: OOH advertising is outdated

Modern campaigns run on digital billboards and interactive displays, which allow for dynamic and engaging content. The medium has changed more in the last five years than in the fifty before.

## Myth 2: OOH advertising is only for big brands

Businesses of any size can tailor their campaigns to fit their budget and target local audiences effectively. One well-placed site near your own door can be the whole plan.

## Myth 3: OOH advertising lacks targeting capabilities

Advertisers reach the audiences they want by selecting strategic locations based on demographics and traffic patterns — and on digital screens, by choosing the hours of the day.

## Myth 4: OOH advertising is not measurable

Geo-fencing, mobile data tracking and audience analytics provide detailed insights into campaign performance. Digital screens add proof of play.

## Myth 5: OOH advertising is too expensive

OOH often provides a high return on investment because of its broad reach and lasting impressions. Cost per thousand people reached is among the lowest of any medium.

## Myth 6: OOH advertising doesn't drive online engagement

Integrating QR codes, hashtags and URLs into OOH ads bridges offline and online interactions. The billboard is where the search begins.`,
    related: [{ label: "How billboard pricing works in Tanzania", href: "/billboard-advertising-cost-tanzania/" }],
  },
  {
    slug: "why-tanzanian-advertisers-have-increased-their-visibility-on-digital-out-of-home-advertising-in-2024",
    title: "Why Tanzanian advertisers moved to digital out-of-home in 2024",
    date: "2024-07-31",
    excerpt:
      "Past the halfway mark of 2024, Tanzania's advertising landscape is shifting to digital out-of-home. Here is what is driving it.",
    body: `As we pass the halfway mark of 2024, the advertising landscape in Tanzania is witnessing a transformative shift with the rise of digital out-of-home (DOOH) advertising. This approach is redefining how brands reach and engage their audiences. With digital billboards, advertisers can create captivating campaigns that grab attention and enhance audience interaction. Digital billboards can display real-time media feeds, weather updates or other time-sensitive, data-driven ads, making the advertisement more engaging and memorable.

## Real-time updates

One of the most significant advantages of digital outdoor advertising is its flexibility. Digital ads can be updated in real time, allowing advertisers to respond swiftly to market changes, promotional opportunities or current events. Advertisers can launch a time-sensitive campaign with promotions that change hourly, or adjust their message based on real-time data. This agility ensures that your advertising remains relevant and impactful.

## Targeted advertising

DOOH provides sophisticated targeting capabilities that enhance the precision of your campaigns. By leveraging data analytics, advertisers can tailor their messages to specific demographics, locations and even times of day. A digital screen in a busy shopping district can display ads for fashion brands during peak shopping hours and switch to restaurant promotions at meal times. This targeted approach maximises the relevance and effectiveness of your advertising.

## Measurable results

With advanced tracking and analytics, digital out-of-home allows accurate measurement of campaign performance. Metrics such as audience impressions, engagement rates and conversion data provide valuable insight into the effectiveness of your ads. This data-driven approach lets advertisers refine their strategies, optimise their campaigns and achieve better returns on investment.

## Cost-effectiveness

The ability to update content without incurring additional printing costs, combined with the enhanced targeting and engagement capabilities, leads to a higher return on investment. The flexibility to run multiple campaigns on a single digital screen further amplifies cost efficiency.

## Growing digital infrastructure

Ashton Media's digital network is expanding rapidly, with over 50 screens across Tanzania, making DOOH a more viable option than ever. The proliferation of digital screens in urban areas offers advertisers more opportunities to reach their target audiences effectively. This network supports the seamless integration of digital outdoor advertising into broader marketing strategies, providing a comprehensive approach to brand visibility and engagement.

Digital out-of-home advertising is revolutionising the advertising landscape in Tanzania. Its enhanced engagement, flexibility, targeting capabilities, measurable results and cost-effectiveness make it a powerful tool for advertisers looking to stay ahead. By embracing DOOH, Tanzanian brands can create impactful campaigns that resonate with their audiences and drive business success.`,
    related: [{ label: "Digital screens across Tanzania", href: "/digital-billboards-tanzania/" }],
  },
  {
    slug: "the-rule-of-7-the-power-of-high-frequency",
    title: "The rule of 7: the power of high frequency",
    date: "2024-02-27",
    excerpt:
      "It takes an average of seven exposures to an advertisement for it to register. How Ashton Media uses frequency and multi-location placement in digital out-of-home.",
    body: `In the fast-paced realm of outdoor advertising, where attention spans are fleeting and impressions must be made swiftly, mastering the art of effective messaging is paramount. Enter the rule of 7 — a cornerstone principle in marketing, famously championed by Jeremy Lant, suggesting that it takes an average of seven exposures to an advertisement for it to register in a consumer's mind.

This is how Ashton Media leverages high frequency and strategic multi-location placements in digital out-of-home (DOOH) rollouts to create campaigns that resonate with audiences.

## Frequency is built into the medium

A commuter passes the same junction twice a day, five days a week. A screen on that junction delivers ten exposures in a working week without the brand doing anything else. Add the screens on the rest of the route and the number multiplies.

## Multi-location placement

Rather than one screen seen once, a campaign across Selander Bridge, Chole Junction and the roads between them reaches the same people in different places, at different times of day, with the same message. Recognition builds faster, and the message is recalled when it matters — at the shop, at the showroom, at the point of decision.`,
    partial: true,
    related: [{ label: "Digital screens across Tanzania", href: "/digital-billboards-tanzania/" }],
  },
  {
    slug: "the-power-of-qr-codes-in-creative-marketing-campaigns",
    title: "The power of QR codes in creative outdoor campaigns",
    date: "2023-06-21",
    excerpt:
      "A QR code on a billboard turns a glance into a visit: tailored landing pages, offers and content, with every scan measured.",
    body: `QR codes bridge offline and online advertising. A passer-by scans the code on a billboard or screen with a smartphone and lands on a tailored page, a promotional offer or exclusive content — the moment of attention becomes a moment of action.

## Enhanced interaction and engagement

A code invites the audience to do something: enter a competition, claim an offer, watch the full story. The billboard starts the conversation and the phone continues it.

## Seamless integration with digital devices

Every modern phone camera reads a QR code without an app. There is nothing to type and nothing to remember, which is what makes it work at a junction or on a platform.

## Trackable performance and analytics

Each scan is counted, timed and located. For the first time, an outdoor site reports how many people acted on it, which creative pulled best, and at what hour.

Used well — large enough to scan, placed where people stand still, pointing at a page worth visiting — a QR code makes an outdoor campaign measurable from end to end.`,
    partial: true,
  },
  {
    slug: "win-the-engaging-ability-of-gen-z-with-digital-advertising",
    title: "Winning Gen Z with digital out-of-home",
    date: "2023-06-13",
    excerpt:
      "Gen Z is the first generation truly immersed in the digital age. They are digital natives — and they still value real-world experiences.",
    body: `Gen Z is the first generation to be truly immersed in the digital age. While they are digital natives, they still value real-world experiences — and that is where digital out-of-home meets them.

A screen at a junction, a mall entrance or an airport is part of the physical world they move through, and it speaks their language: motion, timing, relevance and a link to the phone in their hand. Campaigns that combine a bold screen creative with something to do next — a scan, a hashtag, a short video — turn a generation that skips online ads into one that stops and looks.`,
    partial: true,
  },
  {
    slug: "how-to-maximize-advertising-impact-with-the-digital-advertising-revolution-ashton-media-leads-the-way",
    title: "How to maximise impact with the digital advertising revolution",
    date: "2023-06-08",
    excerpt:
      "Digitisation lets brands bring video, animation and interactivity to the roadside, giving customers a more engaging and memorable experience.",
    body: `Digitalisation allows businesses to use video, animations and interactive elements in their advertising, giving customers a more engaging and memorable experience than a printed poster can.

On a digital screen the creative can move, change by the hour and respond to what is happening — the weather, the score, the time to the next prayer. For the advertiser it means one booking that can carry a launch, a promotion and a reminder in the same week. For the audience it means a message that is worth looking at.

Ashton Media's network brings this to the roads, malls and airport of Tanzania.`,
    partial: true,
    related: [{ label: "Digital screens across Tanzania", href: "/digital-billboards-tanzania/" }],
  },
  {
    slug: "use-location-intelligently-how-well-located-billboard-advertising-can-transform-your-business",
    title: "Use location intelligently: how a well-placed billboard transforms a business",
    date: "2023-05-29",
    excerpt:
      "Choosing the right location can make or break a campaign, whether it is static or digital. Four things to weigh before you book.",
    body: `Choosing the right location may make or break the success of your campaign, whether you're conducting an OOH or DOOH campaign. Placing ads in high-traffic areas increases their visibility and impact — but traffic is only the first consideration.

## Relevance

The site should be where your customers already are: near the showroom, on the route to the market, at the airport for a brand that greets visitors.

## Traffic and opportunity to see

A junction where traffic slows gives a message more time than a highway where it flies past. Count the people, then count the seconds.

## Seasonal and geographic factors

Routes change with the season — school terms, holidays, Ramadan, the rains. A campaign planned around them lands better than one planned against them.

## Audience demographics

Who passes the site, and when? A business district at eight in the morning is a different audience from the same road at eight at night. Match the message and the day-part to the people.`,
    partial: true,
    related: [{ label: "Billboards in Tanzania", href: "/billboards-in-tanzania/" }],
  },
  {
    slug: "target-engage-and-convert-win-thousands-of-airport-travelers",
    title: "Target, engage and convert: reaching airport travellers at JNIA",
    date: "2023-05-16",
    excerpt:
      "Terminal 3 of Julius Nyerere International Airport gives Ashton Media exclusive digital advertising rights to reach every day's arriving passengers.",
    body: `Terminal 3 of Julius Nyerere International Airport grants Ashton Media exclusive digital advertising rights to reach the passengers who arrive in Dar es Salaam every day.

An airport audience is unlike any other: travellers with time to look, money to spend and decisions to make — which network, which bank, which hotel, which car. The escalator screen greets them as they descend to immigration; the digital network and pillar wraps follow them through the terminal; the baggage-claim sites hold them while they wait.

For a brand that wants to be the first thing a visitor sees in Tanzania, there is one place to be.`,
    partial: true,
    related: [{ label: "Airport advertising at JNIA Terminal 3", href: "/airport-advertising-tanzania/" }],
  },
  {
    slug: "how-to-manage-your-brand-reputation-with-out-of-home-ooh-advertising",
    title: "Managing brand reputation with out-of-home advertising",
    date: "2023-05-15",
    excerpt:
      "A positive reputation makes a company stand out, draws in new customers and keeps old ones coming back. Out-of-home builds it in public.",
    body: `A positive reputation may make a company stand out from competitors, draw in new customers and keep old ones coming back. Out-of-home advertising builds that reputation in public, on the roads and in the places a city shares.

A brand on a landmark site signals permanence and confidence; a brand seen consistently across a city signals scale. Used over time, with a message that stays true, outdoor advertising is reputation made visible.`,
    partial: true,
  },
  {
    slug: "tell-your-brand-message-in-just-10-seconds",
    title: "Tell your brand message in ten seconds",
    date: "2023-05-12",
    excerpt:
      "Ten seconds looks short. It is enough to tell a campaign message to a large audience, repeatedly — if the creative is built for it.",
    body: `Are you looking for a high-frequency campaign reach that can take your brand to the peaks of business growth? Ten seconds may look like a short period, but you can tell your campaign message and reach a large number of people in a repeated and short period.

Out-of-home marketing targets customers while they are driving, shopping, relaxing or commuting. Research shows that the average human attention span starts from 3 to 8.25 seconds, and can last up to 10 seconds. The creative has to work inside that window.

## Go granular

Target a specific niche with a specific message rather than everyone with a general one.

## Add memorable copy and a call to action

Use simple, short, direct and relevant copy, and one call to action.

## Use impressive photos

Relevant, high-quality photography carries a message faster than words.

Integrate the campaign with your digital channels — social media, website SEO, landing pages — so the ten seconds on the road continue on the phone.`,
    partial: true,
  },
];

export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug);
}

export const postsByDate = [...posts].sort((a, b) => (a.date < b.date ? 1 : -1));
