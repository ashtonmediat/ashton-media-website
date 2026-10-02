import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Faq } from "@/components/Faq";
import { CtaBand } from "@/components/CtaBand";
import { JsonLd } from "@/components/JsonLd";
import { WhatsAppLink } from "@/components/WhatsAppLink";
import { PhotoHero } from "@/components/PhotoHero";
import { pageMeta, faqLd } from "@/lib/seo";
import { cities, clients } from "@/content/site";
import { formats } from "@/content/formats";

export const metadata = pageMeta({
  title: "Billboards in Tanzania | Ashton Media",
  description:
    "Billboards in Tanzania from an award-winning media owner: the largest digital screen network, static sites, airport and mall advertising. Get the site list.",
  path: "/billboards-in-tanzania/",
});

const faqs = [
  { q: "Who are the billboard companies in Tanzania?", a: "Ashton Media is an award-winning out-of-home media owner based in Dar es Salaam, with the country's largest digital screen network, static billboards, airport advertising and the screens at Mlimani City." },
  { q: "How much does a billboard cost in Tanzania?", a: "It depends on the format, the location and the length of the booking. A digital screen slot in Dar es Salaam, a static billboard on a main road and the airport are priced differently. Send a brief and you'll have a quote with options, or read what drives the price on our cost guide." },
  { q: "Which cities do you cover?", a: "Dar es Salaam, Zanzibar, Dodoma and Mwanza, with the largest share of the network on the main roads of Dar es Salaam. Other towns are quoted on request." },
  { q: "Do you offer digital billboards?", a: "Yes. ADN — Ashton Digital Network — is Tanzania's largest digital out-of-home network, including Selander Bridge, Chole Junction and the 3D screen at Mlimani City." },
  { q: "Can you handle printing and installation?", a: "Yes. For static sites we quote the whole job: site, print, installation and a photograph of the posting." },
  { q: "How do I book a billboard?", a: "Send a two-minute brief on this site, WhatsApp us, or call +255 758 880 088. We reply with the sites that fit, photographs and a quote." },
  { q: "Do you work with international brands and agencies?", a: "Yes. International brands enter Tanzania through us because one team handles sites, production, permits and installation. Coca-Cola, Pepsi, KFC, TECNO and Vodacom have run campaigns on the network." },
  { q: "Can I see photographs of the sites before booking?", a: "Yes. Every proposal comes with photographs and locations." },
];

export default function HubPage() {
  return (
    <>
      <JsonLd data={faqLd(faqs)} />
      <PhotoHero image="billboards-in-tanzania" alt="Ashton billboards above a busy junction in Dar es Salaam">
        <div className="mx-auto max-w-7xl px-4 pt-8 pb-16 md:px-8 md:pt-10 md:pb-24">
          <Breadcrumbs dark items={[{ name: "Network", path: "/billboards-in-tanzania/" }]} />
          <div className="mt-10 grid gap-10 md:mt-16 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-8">
              <h1 className="display text-[2.4rem] sm:text-5xl lg:text-6xl">Billboards in Tanzania</h1>
              <p className="measure-wide mt-6 text-lg text-white/85">
                Ashton is an award-winning out-of-home media owner with the country’s largest digital screen
                network, static billboards on the main roads of Dar es Salaam and upcountry, airport advertising,
                and the screens — including Tanzania’s first 3D screen — at Mlimani City. One team plans, produces,
                installs and reports.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/plan-a-campaign/" className="btn btn-outline-white">Advertise now</Link>
                <WhatsAppLink text="Hi Ashton Media, please send the current site list with photos and rates." className="btn btn-outline-white">Get the site list</WhatsAppLink>
              </div>
            </div>
          </div>
        </div>
      </PhotoHero>

      <section aria-labelledby="formats-heading" className="py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <h2 id="formats-heading" className="display-md text-2xl md:text-3xl">Formats</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {formats.map((f) => (
              <Link key={f.slug} href={`/${f.slug}/`} className="frame group flex flex-col p-5 md:p-7 hover:bg-black hover:text-white transition-colors">
                <span className="display-md text-xl">{f.nav}</span>
                <span className="mt-3 text-steel group-hover:text-white/80">{f.short}</span>
                <span className="mt-5 text-sm font-bold underline underline-offset-4">See {f.nav.toLowerCase()}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="cities-heading" className="bg-ash py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <h2 id="cities-heading" className="display-md text-2xl md:text-3xl">Where we are</h2>
              <dl className="rows mt-8 border-t border-b border-rule">
                {cities.map((c) => (
                  <div key={c.slug} className="grid gap-1 py-4 md:grid-cols-12">
                    <dt className="display-md text-lg md:col-span-4">{c.name}</dt>
                    <dd className="text-steel md:col-span-8">{c.note}</dd>
                  </div>
                ))}
              </dl>
              <p className="measure mt-6 text-sm text-steel">
                Other towns are quoted on request. The full site list — every site with its road, size and photographs — is sent with every proposal.
              </p>
            </div>
            <div className="lg:col-span-5">
              <div className="frame bg-white p-5 md:p-6">
                <h2 className="display-md text-lg">Why brands book with Ashton</h2>
                <ul className="mt-4 space-y-3">
                  <li><strong>Award-winning.</strong> Recognised by the industry internationally and voted for at home.</li>
                  <li><strong>The largest digital network</strong> in Tanzania, with day-parting and live data.</li>
                  <li><strong>Every format</strong> — digital, static, airport, malls, retail and 3D — from one team.</li>
                  <li><strong>Firsts.</strong> Tanzania’s first 3D screen.</li>
                  <li><strong>Proof.</strong> {clients.join(", ")}.</li>
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
