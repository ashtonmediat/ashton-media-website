import Link from "next/link";
import { NetworkMap } from "@/components/NetworkMap";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Faq } from "@/components/Faq";
import { CtaBand } from "@/components/CtaBand";
import { JsonLd } from "@/components/JsonLd";
import { pageMeta, faqLd } from "@/lib/seo";
import { site, cities, flagshipSites, clients, awards } from "@/content/site";
import { formats } from "@/content/formats";

export const metadata = pageMeta({
  title: "Billboards in Tanzania | Ashton Media Tanzania",
  description:
    "Billboards in Tanzania from the country's most awarded out-of-home media owner: 50+ digital screens, static sites, JNIA airport and Mlimani City, in Dar es Salaam and upcountry.",
  path: "/billboards-in-tanzania/",
});

const faqs = [
  { q: "Who are the billboard companies in Tanzania?", a: "Ashton Media is Tanzania's most awarded out-of-home media owner, with the country's largest digital screen network, static billboards, exclusive rights at JNIA Terminal 3 and the screens at Mlimani City. We have operated in Dar es Salaam since 2005." },
  { q: "How much does a billboard cost in Tanzania?", a: "It depends on the format, the location and the length of the booking. A digital screen slot in Dar es Salaam, a static billboard on a main road and the airport are priced differently. Send a brief and you'll have a quote with options, or read what drives the price on our cost guide." },
  { q: "Which cities do you cover?", a: "Dar es Salaam, Zanzibar, Dodoma, Mwanza and the Namanga border. The largest share of the network is on the main roads of Dar es Salaam." },
  { q: "Do you offer digital billboards?", a: "Yes. ADN — Ashton Digital Network — is Tanzania's largest digital out-of-home network, with more than 50 screens including Selander Bridge, Chole Junction and the 3D screen at Mlimani City." },
  { q: "Can you handle printing and installation?", a: "Yes. For static sites we quote the whole job: site, print, installation and a photograph of the posting." },
  { q: "How do I book a billboard?", a: "Send a two-minute brief on this site, WhatsApp us, or call +255 758 880 088. We reply with the sites that fit, photographs and a quote." },
  { q: "Do you work with international brands and agencies?", a: "Yes. International brands enter Tanzania through us because one team handles sites, production, permits and installation. Coca-Cola, Pepsi, KFC, TECNO and Vodacom have run campaigns on the network." },
  { q: "Can I see photographs of the sites before booking?", a: "Yes. Every proposal comes with photographs and locations. Site pages with photographs, maps and audience data are being published on this site." },
];

export default function HubPage() {
  return (
    <>
      <JsonLd data={faqLd(faqs)} />
      <section className="on-dark bg-black text-white">
        <div className="mx-auto max-w-7xl px-4 pt-8 pb-12 md:px-8 md:pt-10 md:pb-16">
          <Breadcrumbs dark items={[{ name: "Billboards in Tanzania", path: "/billboards-in-tanzania/" }]} />
          <div className="mt-6 grid gap-10 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <h1 className="display text-[2.4rem] sm:text-4xl lg:text-5xl">Billboards in Tanzania</h1>
              <p className="measure-wide mt-6 text-lg text-white/85">
                Ashton Media is Tanzania’s most awarded out-of-home media owner and runs its largest digital screen network: more than 50 screens,
                static billboards on the main roads of Dar es Salaam and upcountry, the exclusive advertising at
                Julius Nyerere International Airport Terminal 3, and the screens — including the country’s first
                3D screen — at Mlimani City. One team plans, produces, installs and reports.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/plan-a-campaign/" className="btn btn-red">Plan a campaign</Link>
                <a href={site.whatsapp.url("Hi Ashton Media, please send the current site list with photos and rates.")} data-track="whatsapp" className="btn btn-outline-white">Get the site list</a>
              </div>
            </div>
            <div className="lg:col-span-5">
              <NetworkMap className="mx-auto w-full max-w-sm lg:max-w-none" />
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="cities-heading" className="py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <h2 id="cities-heading" className="display-md text-2xl md:text-3xl">Where we are</h2>
          <dl className="rows mt-8 border-t border-b border-rule">
            {cities.map((c) => (
              <div key={c.slug} className="grid gap-1 py-4 md:grid-cols-12">
                <dt className="display-md text-lg md:col-span-3">{c.name}</dt>
                <dd className="text-steel md:col-span-9">{c.note}</dd>
              </div>
            ))}
          </dl>
          <p className="measure mt-6 text-sm text-steel">
            Arusha and other towns are quoted on request. City pages with the full site list for each place are being published.
          </p>
        </div>
      </section>

      <section aria-labelledby="formats-heading" className="bg-ash py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <h2 id="formats-heading" className="display-md text-2xl md:text-3xl">Formats</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {formats.map((f) => (
              <Link key={f.slug} href={`/${f.slug}/`} className="frame group flex flex-col bg-white p-5 md:p-7 hover:bg-black hover:text-white transition-colors">
                <span className="display-md text-xl">{f.h1}</span>
                <span className="measure mt-3 text-steel group-hover:text-white/80">{f.lead.split(". ")[0]}.</span>
                <span className="mt-5 text-sm font-bold underline underline-offset-4">See {f.nav.toLowerCase()}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="sites-heading" className="py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <h2 id="sites-heading" className="display-md text-2xl md:text-3xl">Flagship sites</h2>
              <table className="mt-8 w-full border-t-[3px] border-black text-left">
                <thead>
                  <tr className="text-sm text-steel">
                    <th scope="col" className="py-3 pr-4 font-semibold">Site</th>
                    <th scope="col" className="py-3 pr-4 font-semibold">Place</th>
                    <th scope="col" className="py-3 font-semibold">Format</th>
                  </tr>
                </thead>
                <tbody className="rows">
                  {flagshipSites.map((s) => (
                    <tr key={s.name}>
                      <td className="py-3 pr-4 font-bold">{s.name}</td>
                      <td className="py-3 pr-4 text-steel">{s.place}</td>
                      <td className="py-3">{s.format}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="measure mt-5 text-sm text-steel">
                The full list — every site with its road, size, photographs and audience data — is sent with every proposal, and is being published here site by site.
              </p>
            </div>
            <div className="lg:col-span-5">
              <div className="frame p-5 md:p-6">
                <h2 className="display-md text-lg">Why brands book with Ashton Media</h2>
                <ul className="mt-4 space-y-3">
                  <li><strong>Since 2005.</strong> Twenty years of sites, permits, production and installation in Tanzania.</li>
                  <li><strong>The largest digital network.</strong> 50+ screens, with day-parting and live data.</li>
                  <li><strong>Exclusive airport.</strong> Every international arrival at JNIA Terminal 3.</li>
                  <li><strong>Firsts.</strong> Tanzania’s first 3D screen; the DailyDOOH award in London.</li>
                  <li><strong>Proof.</strong> {clients.join(", ")}.</li>
                  <li><strong>Awards.</strong> {awards.length} between 2018 and 2025.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Faq items={faqs} />
      <CtaBand />
    </>
  );
}
