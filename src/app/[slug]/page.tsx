import Link from "next/link";
import { notFound } from "next/navigation";
import { formats, getFormat } from "@/content/formats";
import { getPost } from "@/content/posts";
import { site } from "@/content/site";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Faq } from "@/components/Faq";
import { CtaBand } from "@/components/CtaBand";
import { JsonLd } from "@/components/JsonLd";
import { WhatsAppLink } from "@/components/WhatsAppLink";
import { PhotoHero } from "@/components/PhotoHero";
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
  const posts = (f.related ?? []).map(getPost).filter(Boolean);

  return (
    <>
      <JsonLd data={[serviceLd({ name: f.h1, description: f.description, path: `/${f.slug}/` }), faqLd(f.faqs)]} />

      <PhotoHero image={f.slug} alt={f.h1}>
        <div className="mx-auto max-w-7xl px-4 pt-8 pb-16 md:px-8 md:pt-10 md:pb-24">
          <Breadcrumbs dark items={[{ name: "Network", path: "/billboards-in-tanzania/" }, { name: f.nav, path: `/${f.slug}/` }]} />
          <div className="mt-10 max-w-3xl md:mt-16">
            <h1 className="display text-[2.4rem] sm:text-5xl lg:text-6xl">{f.h1}</h1>
            <p className="mt-6 text-lg text-white/90 md:text-xl">{f.lead}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/plan-a-campaign/" className="btn btn-outline-white">{f.cta.label}</Link>
              <WhatsAppLink text={f.cta.whatsapp} className="btn btn-outline-white">WhatsApp us</WhatsAppLink>
            </div>
          </div>
        </div>
      </PhotoHero>

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
                <p className="mt-3 text-steel">Photographs, locations and rates for this format, sent the same day.</p>
                <div className="mt-5 grid gap-3">
                  <WhatsAppLink text={f.cta.whatsapp} className="btn btn-black">WhatsApp {site.phone.display}</WhatsAppLink>
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

      {posts.length > 0 && (
        <section aria-labelledby="related-posts" className="bg-ash py-14 md:py-20">
          <div className="mx-auto max-w-7xl px-4 md:px-8">
            <h2 id="related-posts" className="display-md text-2xl md:text-3xl">From the blog</h2>
            <ul className="rows mt-8 border-t border-b border-rule">
              {posts.map((p) => p && (
                <li key={p.slug}>
                  <Link href={`/blog/${p.slug}/`} className="group grid gap-2 py-5 md:grid-cols-12 md:items-baseline">
                    <time dateTime={p.date} className="text-sm text-steel md:col-span-2">{new Date(p.date).toLocaleDateString("en-GB", { month: "short", year: "numeric" })}</time>
                    <span className="display-md text-lg md:col-span-10 group-hover:underline underline-offset-4">{p.title}</span>
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
