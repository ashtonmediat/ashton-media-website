import Link from "next/link";
import { NetworkMap } from "@/components/NetworkMap";
import { CtaBand } from "@/components/CtaBand";
import { JsonLd } from "@/components/JsonLd";
import { pageMeta } from "@/lib/seo";
import { site, proof, cities, flagshipSites, clients, awards, bookingSteps } from "@/content/site";
import { formats } from "@/content/formats";
import { workByDate } from "@/content/work";

export const metadata = pageMeta({
  title: "Billboard Advertising in Tanzania | Ashton Media Tanzania",
  description:
    "Tanzania's largest digital screen network, static billboards, exclusive advertising at JNIA Terminal 3 and Mlimani City. Since 2005. Plan a campaign.",
  path: "/",
});

export default function HomePage() {
  const featured = workByDate.slice(0, 4);
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: site.name,
          url: site.url,
        }}
      />

      {/* Hero */}
      <section className="on-dark bg-black text-white">
        <div className="mx-auto max-w-7xl px-4 pt-12 pb-10 md:px-8 md:pt-20 md:pb-16">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <h1 className="display text-[2.6rem] sm:text-5xl lg:text-[4.75rem]">
                Billboards and digital screens across Tanzania
              </h1>
              <p className="measure-wide mt-7 text-base text-white/85 md:text-xl">
                Ashton Media owns and operates the country’s largest digital screen network, static
                billboards in Dar es Salaam and upcountry, the exclusive advertising at JNIA Terminal 3,
                and the screens at Mlimani City — including Tanzania’s first 3D screen. Since 2005.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/plan-a-campaign/" className="btn btn-red">Plan a campaign</Link>
                <Link href="/billboards-in-tanzania/" className="btn btn-outline-white">See the network</Link>
              </div>
              <p className="mt-5 text-sm text-white/75">
                Or call <a href={site.phone.tel} data-track="tel" className="font-bold text-white underline underline-offset-4">{site.phone.display}</a>
                {" "}· <a href={site.whatsapp.url("Hi Ashton Media, I'd like to talk about advertising in Tanzania.")} data-track="whatsapp" className="font-bold text-white underline underline-offset-4">WhatsApp</a>
              </p>
            </div>
            <div className="lg:col-span-5">
              <NetworkMap className="mx-auto w-full max-w-md lg:max-w-none" />
            </div>
          </div>
        </div>
        <div className="border-t border-rule-dark">
          <dl className="mx-auto grid max-w-7xl grid-cols-2 md:grid-cols-4">
            {proof.map((p, i) => (
              <div key={p.label} className={`px-4 py-6 md:px-8 md:py-8 ${i % 2 === 1 ? "border-l border-rule-dark" : ""} ${i >= 2 ? "border-t border-rule-dark md:border-t-0" : ""} ${i >= 1 ? "md:border-l" : ""}`}>
                <dd className="num text-3xl md:text-4xl">{p.value}</dd>
                <dt className="mt-2 text-sm text-white/75">{p.label}</dt>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Formats */}
      <section aria-labelledby="formats-heading" className="py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <h2 id="formats-heading" className="display-md text-2xl md:text-3xl">Four ways to be seen</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {formats.map((f) => (
              <Link key={f.slug} href={`/${f.slug}/`} className="frame group flex flex-col p-5 md:p-7 hover:bg-black hover:text-white transition-colors">
                <span className="display-md text-xl md:text-2xl">{f.nav}</span>
                <span className="measure mt-3 text-steel group-hover:text-white/80">{f.description.split(". ")[0]}.</span>
                <span className="mt-5 text-sm font-bold underline underline-offset-4">See {f.nav.toLowerCase()}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Where */}
      <section aria-labelledby="where-heading" className="bg-ash py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <h2 id="where-heading" className="display-md text-2xl md:text-3xl">Where the network is</h2>
              <p className="measure mt-4 text-steel">
                Screens and sites in five places, with the largest share on the main roads of Dar es Salaam.
                City pages with the full site list are being published; until then, ask for the current list with photographs.
              </p>
              <dl className="rows mt-8 border-t border-b border-rule">
                {cities.map((c) => (
                  <div key={c.slug} className="grid gap-1 py-4 sm:grid-cols-[11rem_1fr]">
                    <dt className="font-bold">{c.name}</dt>
                    <dd className="text-steel">{c.note}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <div className="lg:col-span-7">
              <div className="frame bg-white p-5 md:p-7">
                <h3 className="display-md text-xl">Flagship sites</h3>
                <ul className="rows mt-4">
                  {flagshipSites.map((s) => (
                    <li key={s.name} className="flex items-baseline justify-between gap-4 py-3">
                      <span>
                        <span className="font-bold">{s.name}</span>
                        <span className="text-steel"> — {s.place}</span>
                      </span>
                      <span className="flex-none text-sm font-semibold">{s.format}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6">
                  <a href={site.whatsapp.url("Hi Ashton Media, please send the current site list with photos and rates.")} data-track="whatsapp" className="btn btn-outline">
                    Get the site list on WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Work */}
      <section aria-labelledby="work-heading" className="py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 id="work-heading" className="display-md text-2xl md:text-3xl">Work</h2>
            <Link href="/work/" className="text-sm font-bold underline underline-offset-4">All case studies</Link>
          </div>
          <p className="measure mt-4 text-steel">
            Trusted by {clients.slice(0, -1).join(", ")} and {clients[clients.length - 1]}.
          </p>
          <ul className="rows mt-8 border-t border-b border-rule">
            {featured.map((w) => (
              <li key={w.slug}>
                <Link href={`/work/${w.slug}/`} className="group grid gap-2 py-5 md:grid-cols-12 md:items-baseline">
                  <span className="text-sm font-bold md:col-span-2">{w.client}</span>
                  <span className="display-md text-lg md:col-span-7 group-hover:underline underline-offset-4">{w.title}</span>
                  <span className="text-sm text-steel md:col-span-3 md:text-right">{w.formats.join(" · ")}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Awards */}
      <section aria-labelledby="awards-heading" className="on-dark bg-black text-white">
        <div className="mx-auto max-w-7xl px-4 py-14 md:px-8 md:py-20">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 id="awards-heading" className="display-md text-2xl md:text-3xl">Four awards, including the industry’s own</h2>
            <Link href="/awards/" className="text-sm font-bold underline underline-offset-4">About the awards</Link>
          </div>
          <ol className="mt-8 grid gap-px bg-rule-dark sm:grid-cols-2 lg:grid-cols-4">
            {awards.map((a) => (
              <li key={a.year} className="bg-black p-5 md:p-6">
                <div className="num text-3xl">{a.year}</div>
                <div className="mt-3 font-bold">{a.body}{a.place ? `, ${a.place}` : ""}</div>
                <div className="mt-1 text-sm text-white/75">{a.category}</div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* How booking works */}
      <section aria-labelledby="how-heading" className="py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <h2 id="how-heading" className="display-md text-2xl md:text-3xl">How a campaign is booked</h2>
          <ol className="mt-8 grid gap-6 md:grid-cols-3">
            {bookingSteps.map((s, i) => (
              <li key={s.name} className="border-t-[3px] border-black pt-4">
                <div className="flex items-baseline gap-3">
                  <span className="num text-2xl">{i + 1}</span>
                  <h3 className="display-md text-lg">{s.name}</h3>
                </div>
                <p className="mt-2 text-steel">{s.text}</p>
              </li>
            ))}
          </ol>
          <div className="mt-8">
            <Link href="/rates-and-booking/" className="btn btn-outline">Rates and how to book</Link>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
