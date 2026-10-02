import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CtaBand } from "@/components/CtaBand";
import { PhotoHero } from "@/components/PhotoHero";
import { pageMeta } from "@/lib/seo";
import { site, timeline, awards, clients } from "@/content/site";

export const metadata = pageMeta({
  title: "About Ashton Media | Out-of-Home Advertising in Tanzania",
  description:
    "Ashton Media is an award-winning out-of-home media owner in Dar es Salaam: the largest digital screen network in Tanzania, static billboards, airport and mall advertising.",
  path: "/about/",
  image: "/og/about.jpg",
});

export default function AboutPage() {
  return (
    <>
      <PhotoHero image="about" alt="An Ashton billboard in the centre of Dar es Salaam">
        <div className="mx-auto max-w-7xl px-4 pt-8 pb-16 md:px-8 md:pt-10 md:pb-24">
          <Breadcrumbs dark items={[{ name: "About", path: "/about/" }]} />
          <div className="mt-10 grid gap-10 md:mt-16 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-8">
              <h1 className="display text-[2.4rem] sm:text-5xl lg:text-6xl">Putting brands in front of Tanzania</h1>
              <p className="measure-wide mt-6 text-lg text-white/85">
                Ashton Media Limited is an award-winning out-of-home media owner based in Dar es Salaam. It runs the
                country’s largest digital screen network alongside static billboards,
                airport advertising, and the screens at Mlimani City. One team handles sites, permits, production,
                installation and reporting.
              </p>
            </div>
          </div>
        </div>
      </PhotoHero>

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
                <h2 className="display-md text-lg">Who we work for</h2>
                <p className="mt-3 text-steel">
                  {clients.join(", ")} and many more — along with the Tanzanian banks, telcos, retailers and agencies that plan on the network every month.
                </p>
                <p className="mt-3">
                  <Link href="/blog/" className="font-bold underline underline-offset-4">Campaign stories on the blog</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="about-awards" className="bg-ash py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 id="about-awards" className="display-md text-2xl md:text-3xl">Award-winning</h2>
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
                Journalists can use the same address.
              </p>
            </div>
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
