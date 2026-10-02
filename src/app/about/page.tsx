import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CtaBand } from "@/components/CtaBand";
import { NetworkMap } from "@/components/NetworkMap";
import { pageMeta } from "@/lib/seo";
import { site, timeline, awards, clients, proof } from "@/content/site";

export const metadata = pageMeta({
  title: "About Ashton Media Tanzania: OOH Since 2005 | Ashton Media",
  description:
    "Ashton Media has sold outdoor advertising in Tanzania since 2005: the largest digital screen network, static billboards, JNIA Terminal 3 and Mlimani City. Four awards, 2018–2025.",
  path: "/about/",
});

export default function AboutPage() {
  return (
    <>
      <section className="on-dark bg-black text-white">
        <div className="mx-auto max-w-7xl px-4 pt-8 pb-12 md:px-8 md:pt-10 md:pb-16">
          <Breadcrumbs dark items={[{ name: "About", path: "/about/" }]} />
          <div className="mt-6 grid gap-10 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <h1 className="display text-[2.4rem] sm:text-4xl lg:text-5xl">Twenty years of putting brands in front of Tanzania</h1>
              <p className="measure-wide mt-6 text-lg text-white/85">
                Ashton Media Limited was founded in Dar es Salaam in {site.founded}. Today it runs the country’s
                largest digital screen network — ADN, the Ashton Digital Network — alongside static billboards,
                the exclusive advertising at Julius Nyerere International Airport Terminal 3, and the screens at
                Mlimani City. One Tanzanian team handles sites, permits, production, installation and reporting.
              </p>
            </div>
            <div className="lg:col-span-5">
              <NetworkMap className="mx-auto w-full max-w-sm lg:max-w-none" />
            </div>
          </div>
        </div>
        <div className="border-t border-rule-dark">
          <dl className="mx-auto grid max-w-7xl grid-cols-2 md:grid-cols-4">
            {proof.map((p, i) => (
              <div key={p.label} className={`px-4 py-6 md:px-8 ${i % 2 === 1 ? "border-l border-rule-dark" : ""} ${i >= 2 ? "border-t border-rule-dark md:border-t-0" : ""} ${i >= 1 ? "md:border-l" : ""}`}>
                <dd className="num text-3xl">{p.value}</dd>
                <dt className="mt-2 text-sm text-white/75">{p.label}</dt>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section aria-labelledby="timeline-heading" className="py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <h2 id="timeline-heading" className="display-md text-2xl md:text-3xl">Milestones</h2>
              <ol className="rows mt-8 border-t border-b border-rule">
                {timeline.map((t, i) => (
                  <li key={i} className="grid gap-1 py-4 sm:grid-cols-[9rem_1fr]">
                    <span className="num text-lg">{t.when}</span>
                    <span>{t.what}</span>
                  </li>
                ))}
              </ol>
            </div>
            <div className="lg:col-span-5">
              <div className="frame p-5 md:p-6">
                <h2 className="display-md text-lg">Two names, one company</h2>
                <p className="mt-3 text-steel">
                  Ashton Media is the company. ADN — Ashton Digital Network — is the name of its digital screen network,
                  which is why our Instagram and Facebook carry the ADN name. Static billboards, the airport and the malls are Ashton Media.
                </p>
              </div>
              <div className="frame mt-6 p-5 md:p-6">
                <h2 className="display-md text-lg">Who we work for</h2>
                <p className="mt-3 text-steel">
                  {clients.join(", ")}, and the Tanzanian banks, telcos, retailers and agencies that plan on the network every month.
                </p>
                <p className="mt-3">
                  <Link href="/work/" className="font-bold underline underline-offset-4">See the work</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="about-awards" className="bg-ash py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 id="about-awards" className="display-md text-2xl md:text-3xl">Awards</h2>
            <Link href="/awards/" className="text-sm font-bold underline underline-offset-4">Each award in detail</Link>
          </div>
          <ol className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {awards.map((a) => (
              <li key={a.year} className="frame bg-white p-5">
                <div className="num text-3xl">{a.year}</div>
                <div className="mt-3 font-bold">{a.body}{a.place ? `, ${a.place}` : ""}</div>
                <div className="mt-1 text-sm text-steel">{a.category}</div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <h2 className="display-md text-2xl">Head office</h2>
              <address className="mt-4 not-italic">
                <div>{site.address.street}</div>
                <div>{site.address.city}, {site.address.country}</div>
                <div className="mt-3"><a href={site.phone.tel} data-track="tel" className="font-bold underline underline-offset-4">{site.phone.display}</a></div>
                <div><a href={`mailto:${site.email}`} className="underline underline-offset-4">{site.email}</a></div>
              </address>
            </div>
            <div>
              <h2 className="display-md text-2xl">Careers and press</h2>
              <p className="mt-4 measure text-steel">
                To work with us, email <a href={`mailto:${site.email}`} className="underline underline-offset-4 text-black">{site.email}</a> with the role you are interested in.
                Journalists can use the same address; we reply the same business day.
              </p>
            </div>
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
