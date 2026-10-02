import Link from "next/link";
import { notFound } from "next/navigation";
import { work, getCaseStudy } from "@/content/work";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CtaBand } from "@/components/CtaBand";
import { Markdown } from "@/components/Markdown";
import { JsonLd } from "@/components/JsonLd";
import { pageMeta, articleLd } from "@/lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return work.map((w) => ({ slug: w.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const w = getCaseStudy(slug);
  if (!w) return {};
  return pageMeta({
    title: `${w.client}: ${w.title}`.slice(0, 60),
    description: w.summary.slice(0, 155),
    path: `/work/${w.slug}/`,
    type: "article",
    publishedTime: w.date,
  });
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const w = getCaseStudy(slug);
  if (!w) notFound();
  const others = work.filter((o) => o.slug !== w.slug).slice(0, 3);
  const date = new Date(w.date).toLocaleDateString("en-GB", { month: "long", year: "numeric" });

  return (
    <>
      <JsonLd data={articleLd({ title: w.title, description: w.summary, path: `/work/${w.slug}/`, date: w.date })} />
      <article>
        <header className="border-b-[3px] border-black">
          <div className="mx-auto max-w-7xl px-4 pt-8 pb-10 md:px-8 md:pt-10 md:pb-14">
            <Breadcrumbs items={[{ name: "Work", path: "/work/" }, { name: w.client, path: `/work/${w.slug}/` }]} />
            <p className="mt-6 text-sm font-bold">{w.client} · {date}</p>
            <h1 className="display mt-3 text-[2.2rem] sm:text-4xl lg:text-5xl">{w.title}</h1>
            <p className="measure-wide mt-5 text-lg text-steel">{w.summary}</p>
            <dl className="mt-8 grid gap-4 border-t border-rule pt-6 sm:grid-cols-3">
              <div><dt className="text-sm text-steel">Industry</dt><dd className="font-bold">{w.industry}</dd></div>
              <div><dt className="text-sm text-steel">Formats</dt><dd className="font-bold">{w.formats.join(", ")}</dd></div>
              <div><dt className="text-sm text-steel">Where</dt><dd className="font-bold">{w.where}</dd></div>
            </dl>
          </div>
        </header>

        <div className="mx-auto max-w-7xl px-4 py-12 md:px-8 md:py-16">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="prose-ashton lg:col-span-8">
              <h2>The brief</h2>
              <p>{w.challenge}</p>
              <h2>What was built</h2>
              <p>{w.solution}</p>
              {w.innovation && (
                <>
                  <h2>What was new</h2>
                  <p>{w.innovation}</p>
                </>
              )}
              {w.body && <Markdown source={w.body} className="contents" />}
            </div>
            <aside className="lg:col-span-4">
              <div className="frame p-5 md:p-6">
                <h2 className="display-md text-lg">Run something like this</h2>
                <p className="mt-3 text-steel">Tell us the brand and the objective; we’ll propose the sites and the build.</p>
                <div className="mt-5 grid gap-3">
                  <Link href="/plan-a-campaign/" className="btn btn-red">Plan a campaign</Link>
                </div>
              </div>
              {w.related.length > 0 && (
                <div className="mt-6 text-sm">
                  <h3 className="font-bold">Related</h3>
                  <ul className="mt-2 space-y-1">
                    {w.related.map((r) => (
                      <li key={r.href}><Link href={r.href} className="underline underline-offset-4 hover:text-red">{r.label}</Link></li>
                    ))}
                  </ul>
                </div>
              )}
            </aside>
          </div>
        </div>
      </article>

      <section aria-labelledby="more-work" className="bg-ash py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <h2 id="more-work" className="display-md text-2xl md:text-3xl">More work</h2>
          <ul className="rows mt-8 border-t border-b border-rule">
            {others.map((o) => (
              <li key={o.slug}>
                <Link href={`/work/${o.slug}/`} className="group grid gap-2 py-5 md:grid-cols-12 md:items-baseline">
                  <span className="text-sm font-bold md:col-span-2">{o.client}</span>
                  <span className="display-md text-lg md:col-span-7 group-hover:underline underline-offset-4">{o.title}</span>
                  <span className="text-sm text-steel md:col-span-3 md:text-right">{o.where}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
