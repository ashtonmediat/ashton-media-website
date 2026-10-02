import Link from "next/link";
import { notFound } from "next/navigation";
import { formats, getFormat } from "@/content/formats";
import { getCaseStudy } from "@/content/work";
import { site } from "@/content/site";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Faq } from "@/components/Faq";
import { CtaBand } from "@/components/CtaBand";
import { JsonLd } from "@/components/JsonLd";
import { pageMeta, faqLd, serviceLd } from "@/lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return formats.map((f) => ({ slug: f.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const f = getFormat(slug);
  if (!f) return {};
  return pageMeta({ title: f.title, description: f.description, path: `/${f.slug}/` });
}

export default async function FormatPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const f = getFormat(slug);
  if (!f) notFound();
  const studies = (f.caseStudies ?? []).map(getCaseStudy).filter(Boolean);

  return (
    <>
      <JsonLd data={[serviceLd({ name: f.h1, description: f.description, path: `/${f.slug}/` }), faqLd(f.faqs)]} />

      <section className="on-dark bg-black text-white">
        <div className="mx-auto max-w-7xl px-4 pt-8 pb-12 md:px-8 md:pt-10 md:pb-16">
          <Breadcrumbs dark items={[{ name: "Billboards in Tanzania", path: "/billboards-in-tanzania/" }, { name: f.nav, path: `/${f.slug}/` }]} />
          <h1 className="display mt-6 text-[2.2rem] sm:text-4xl lg:text-5xl">{f.h1}</h1>
          <p className="measure-wide mt-6 text-lg text-white/85">{f.lead}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/plan-a-campaign/" className="btn btn-red">{f.cta.label}</Link>
            <a href={site.whatsapp.url(f.cta.whatsapp)} data-track="whatsapp" className="btn btn-outline-white">WhatsApp us</a>
          </div>
        </div>
        {f.facts && (
          <div className="border-t border-rule-dark">
            <dl className="mx-auto grid max-w-7xl sm:grid-cols-2 lg:grid-cols-4">
              {f.facts.map((x, i) => (
                <div key={x.label} className={`px-4 py-5 md:px-8 ${i > 0 ? "border-t border-rule-dark sm:border-t-0 sm:border-l" : ""}`}>
                  <dt className="text-sm text-white/70">{x.label}</dt>
                  <dd className="mt-1 font-bold">{x.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        )}
      </section>

      <section className="py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-8">
              {f.sections.map((s) => (
                <div key={s.heading} className="mb-12 last:mb-0">
                  <h2 className="display-md text-xl md:text-2xl">{s.heading}</h2>
                  <div className="mt-4 space-y-4">
                    {s.body.map((p, i) => <p key={i} className="measure-wide">{p}</p>)}
                  </div>
                </div>
              ))}
            </div>
            <aside className="lg:col-span-4">
              <div className="frame p-5 md:p-6">
                <h2 className="display-md text-lg">Get the current site list</h2>
                <p className="mt-3 text-steel">Photographs, locations and rates for the sites in this format, sent the same day.</p>
                <div className="mt-5 grid gap-3">
                  <a href={site.whatsapp.url(f.cta.whatsapp)} data-track="whatsapp" className="btn btn-black">WhatsApp {site.phone.display}</a>
                  <a href={site.phone.tel} data-track="tel" className="btn btn-outline">Call us</a>
                  <Link href="/plan-a-campaign/" className="btn btn-outline">Send a brief</Link>
                </div>
              </div>
              <div className="mt-6 text-sm">
                <h3 className="font-bold">Other formats</h3>
                <ul className="mt-2 space-y-1">
                  {formats.filter((o) => o.slug !== f.slug).map((o) => (
                    <li key={o.slug}><Link href={`/${o.slug}/`} className="underline underline-offset-4 hover:text-red">{o.nav}</Link></li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {studies.length > 0 && (
        <section aria-labelledby="related-work" className="bg-ash py-14 md:py-20">
          <div className="mx-auto max-w-7xl px-4 md:px-8">
            <h2 id="related-work" className="display-md text-2xl md:text-3xl">Work in this format</h2>
            <ul className="rows mt-8 border-t border-b border-rule">
              {studies.map((w) => w && (
                <li key={w.slug}>
                  <Link href={`/work/${w.slug}/`} className="group grid gap-2 py-5 md:grid-cols-12 md:items-baseline">
                    <span className="text-sm font-bold md:col-span-2">{w.client}</span>
                    <span className="display-md text-lg md:col-span-7 group-hover:underline underline-offset-4">{w.title}</span>
                    <span className="text-sm text-steel md:col-span-3 md:text-right">{w.where}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      <Faq items={f.faqs} />
      <CtaBand whatsappText={f.cta.whatsapp} briefLabel={f.cta.label} />
    </>
  );
}
