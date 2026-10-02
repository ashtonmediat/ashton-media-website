import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CtaBand } from "@/components/CtaBand";
import { Faq } from "@/components/Faq";
import { JsonLd } from "@/components/JsonLd";
import { NetworkMap } from "@/components/NetworkMap";
import { pageMeta, faqLd } from "@/lib/seo";
import { site, clients, awards } from "@/content/site";
import { workByDate } from "@/content/work";

export const metadata = pageMeta({
  title: "Advertising in Tanzania for International Brands | Ashton Media",
  description:
    "Entering Tanzania? One partner for billboards, digital screens, JNIA airport and malls — sites, production, permits and installation handled in Dar es Salaam since 2005.",
  path: "/advertising-in-tanzania/",
});

const faqs = [
  { q: "How do I advertise in Tanzania from abroad?", a: "Send us a brief with the objective, the cities and the dates. We propose sites with photographs and a quote, handle production, permits and installation locally, and send proof when the campaign is live. Many international brands have launched this way." },
  { q: "Which cities should a national campaign cover?", a: "Dar es Salaam carries the largest audience and most decision makers. Dodoma is the capital, Mwanza the second city, Zanzibar the tourism economy, and Namanga the road border with Kenya. We will recommend a mix for the budget." },
  { q: "Can you quote in US dollars?", a: "Yes." },
  { q: "Do you handle permits and local regulations?", a: "Yes. Ashton Media has operated in Tanzania since 2005 and handles permits, production and installation as part of the job." },
  { q: "Can one brand own the arrivals at Dar es Salaam airport?", a: "Yes. Ashton Media holds the exclusive rights at JNIA Terminal 3, and a single brand can take the whole arrivals route." },
  { q: "What time zone are you in?", a: "East Africa Time, UTC+3. Send a brief at any hour and it is answered when the office opens; WhatsApp is the fastest route." },
];

export default function InternationalPage() {
  const launches = workByDate.filter((w) => ["pepsi-logo-launch", "tecno-viral-outdoor-strategy", "circle-k-retail-digital-signage"].includes(w.slug));
  return (
    <>
      <JsonLd data={faqLd(faqs)} />
      <section className="on-dark bg-black text-white">
        <div className="mx-auto max-w-7xl px-4 pt-8 pb-12 md:px-8 md:pt-10 md:pb-16">
          <Breadcrumbs dark items={[{ name: "Advertising in Tanzania", path: "/advertising-in-tanzania/" }]} />
          <div className="mt-6 grid gap-10 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <h1 className="display text-[2.4rem] sm:text-4xl lg:text-5xl">Advertising in Tanzania, handled by one partner</h1>
              <p className="measure-wide mt-6 text-lg text-white/85">
                For brands and agencies entering Tanzania, Ashton Media is the media owner that does the whole job:
                the sites, the production, the permits, the installation and the reporting. The largest digital screen
                network in the country, static billboards, the exclusive airport terminal, the busiest mall — since {site.founded}.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/plan-a-campaign/" className="btn btn-red">Brief us</Link>
                <a href={site.whatsapp.url("Hello Ashton Media, we are planning a campaign in Tanzania from abroad. Please send the site list and rates.")} data-track="whatsapp" className="btn btn-outline-white">WhatsApp us</a>
              </div>
            </div>
            <div className="lg:col-span-5">
              <NetworkMap className="mx-auto w-full max-w-sm lg:max-w-none" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <h2 className="display-md text-2xl md:text-3xl">What you get from one brief</h2>
              <div className="mt-6 space-y-4">
                <p className="measure-wide">A plan with the sites that fit — photographs, locations, formats — and one quote for the whole campaign, in dollars if you prefer. Production and installation are done by our own team in Dar es Salaam, permits included.</p>
                <p className="measure-wide">A launch can own the arrivals at JNIA Terminal 3, the main junctions of Dar es Salaam and the entrance of Mlimani City in the same week, then carry on upcountry on the digital network.</p>
                <p className="measure-wide">Proof when it is live: photographs of every static posting and proof of play for every screen.</p>
              </div>
              <h2 className="display-md mt-12 text-2xl md:text-3xl">Brands that have launched with us</h2>
              <p className="measure-wide mt-4 text-steel">{clients.join(", ")}.</p>
              <ul className="rows mt-6 border-t border-b border-rule">
                {launches.map((w) => (
                  <li key={w.slug}>
                    <Link href={`/work/${w.slug}/`} className="group grid gap-2 py-5 md:grid-cols-12 md:items-baseline">
                      <span className="text-sm font-bold md:col-span-2">{w.client}</span>
                      <span className="display-md text-lg md:col-span-10 group-hover:underline underline-offset-4">{w.title}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <aside className="lg:col-span-4">
              <div className="frame p-5 md:p-6">
                <h2 className="display-md text-lg">Credentials</h2>
                <ul className="mt-4 space-y-3 text-sm">
                  <li><strong>Since {site.founded}</strong> in Dar es Salaam</li>
                  <li><strong>50+ digital screens</strong> — the largest network in Tanzania</li>
                  <li><strong>Exclusive</strong> at JNIA Terminal 3</li>
                  <li><strong>Tanzania’s first 3D screen</strong>, Mlimani City</li>
                  <li><strong>{awards.length} awards</strong>, including DailyDOOH, London, 2018</li>
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
