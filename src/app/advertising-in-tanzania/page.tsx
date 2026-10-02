import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CtaBand } from "@/components/CtaBand";
import { Faq } from "@/components/Faq";
import { JsonLd } from "@/components/JsonLd";
import { WhatsAppLink } from "@/components/WhatsAppLink";
import { PhotoHero } from "@/components/PhotoHero";
import { pageMeta, faqLd } from "@/lib/seo";
import { clients } from "@/content/site";
import { getPost } from "@/content/posts";

export const metadata = pageMeta({
  title: "Advertising in Tanzania for International Brands | Ashton",
  description:
    "Entering Tanzania? One partner for billboards, digital screens, airport and malls: sites, production, permits and installation handled in Dar es Salaam.",
  path: "/advertising-in-tanzania/",
});

const faqs = [
  { q: "How do I advertise in Tanzania from abroad?", a: "Send us a brief with the objective, the cities and the dates. We propose sites with photographs and a quote, handle production, permits and installation locally, and send proof when the campaign is live. Many international brands have launched this way." },
  { q: "Which cities should a national campaign cover?", a: "Dar es Salaam carries the largest audience and most decision makers. Dodoma is the capital, Mwanza the second city and Zanzibar the tourism economy. We will recommend a mix for the budget." },
  { q: "Can you quote in US dollars?", a: "Yes." },
  { q: "Do you handle permits and local regulations?", a: "Yes. Ashton Media handles permits, production and installation as part of the job." },
  { q: "Can one brand own the arrivals at the airport?", a: "Yes. A single brand can take the whole arrivals route at Julius Nyerere International Airport, or the route can be shared by zone." },
  { q: "What time zone are you in?", a: "East Africa Time, UTC+3. Send a brief at any hour and it is answered when the office opens; WhatsApp is the fastest route." },
];

export default function InternationalPage() {
  const launches = ["pepsi-logo-launch-with-ashton-media", "simple-yet-viral-outdoor-ad-strategy-by-tecno", "transforming-retail-spaces-with-digital-signage-by-ashton-media"].map(getPost).filter(Boolean);
  return (
    <>
      <JsonLd data={faqLd(faqs)} />
      <PhotoHero image="advertising-in-tanzania" alt="A digital screen over a junction in Dar es Salaam at night">
        <div className="mx-auto max-w-7xl px-4 pt-8 pb-16 md:px-8 md:pt-10 md:pb-24">
          <Breadcrumbs dark items={[{ name: "Advertising in Tanzania", path: "/advertising-in-tanzania/" }]} />
          <div className="mt-10 grid gap-10 md:mt-16 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-8">
              <h1 className="display text-[2.4rem] sm:text-5xl lg:text-6xl">Advertising in Tanzania, handled by one partner</h1>
              <p className="measure-wide mt-6 text-lg text-white/85">
                For brands and agencies entering Tanzania, Ashton is the media owner that does the whole job:
                the sites, the production, the permits, the installation and the reporting. The largest digital screen
                network in the country, static billboards, the international airport and the busiest mall.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/plan-a-campaign/" className="btn btn-outline-white">Brief us</Link>
                <WhatsAppLink text="Hello Ashton Media, we are planning a campaign in Tanzania from abroad. Please send the site list and rates." className="btn btn-outline-white">WhatsApp us</WhatsAppLink>
              </div>
            </div>
          </div>
        </div>
      </PhotoHero>

      <section className="py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <h2 className="display-md text-2xl md:text-3xl">What you get from one brief</h2>
              <div className="mt-6 space-y-4">
                <p className="measure-wide">A plan with the sites that fit — photographs, locations, formats — and one quote for the whole campaign, in dollars if you prefer. Production and installation are done by our own team in Dar es Salaam, permits included.</p>
                <p className="measure-wide">A launch can own the arrivals at the international airport, the main junctions of Dar es Salaam and the entrance of Mlimani City in the same week, then carry on upcountry on the digital network.</p>
                <p className="measure-wide">Proof when it is live: photographs of every static posting and proof of play for every screen.</p>
              </div>
              <h2 className="display-md mt-12 text-2xl md:text-3xl">Brands that have launched with us</h2>
              <p className="measure-wide mt-4 text-steel">{clients.join(", ")}.</p>
              <ul className="rows mt-6 border-t border-b border-rule">
                {launches.map((p) => p && (
                  <li key={p.slug}>
                    <Link href={`/blog/${p.slug}/`} className="group grid gap-2 py-5 md:grid-cols-12 md:items-baseline">
                      <time dateTime={p.date} className="text-sm text-steel md:col-span-2">{new Date(p.date).getFullYear()}</time>
                      <span className="display-md text-lg md:col-span-10 group-hover:underline underline-offset-4">{p.title}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <aside className="lg:col-span-4">
              <div className="frame p-5 md:p-6">
                <h2 className="display-md text-lg">Credentials</h2>
                <ul className="mt-4 space-y-3 text-sm">
                  <li><strong>Award-winning</strong> — including the DailyDOOH award in London</li>
                  <li><strong>The largest digital screen network</strong> in Tanzania</li>
                  <li><strong>Airport advertising</strong> at Dar es Salaam’s international airport</li>
                  <li><strong>Tanzania’s first 3D screen</strong>, Mlimani City</li>
                  <li><strong>Permits, production and installation</strong> by our own team</li>
                </ul>
                <div className="mt-5 grid gap-3">
                  <Link href="/awards/" className="btn btn-outline">See the awards</Link>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <Faq items={faqs} />
      <CtaBand heading="Brief us from anywhere; the plan comes back from Dar es Salaam" briefLabel="Brief us" whatsappText="Hello Ashton Media, we are planning a campaign in Tanzania from abroad." />
    </>
  );
}
