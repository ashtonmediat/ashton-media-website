import Link from "next/link";
import { notFound } from "next/navigation";
import { posts, getPost, postsByDate } from "@/content/posts";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CtaBand } from "@/components/CtaBand";
import { Markdown } from "@/components/Markdown";
import { JsonLd } from "@/components/JsonLd";
import { pageMeta, articleLd } from "@/lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = getPost(slug);
  if (!p) return {};
  return pageMeta({
    title: p.title.length > 52 ? p.title.slice(0, 52).replace(/\s+\S*$/, "") : p.title,
    description: p.excerpt.slice(0, 155),
    path: `/insights/${p.slug}/`,
    type: "article",
    publishedTime: p.date,
  });
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = getPost(slug);
  if (!p) notFound();
  const more = postsByDate.filter((o) => o.slug !== p.slug).slice(0, 3);
  const date = new Date(p.date).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });

  return (
    <>
      <JsonLd data={articleLd({ title: p.title, description: p.excerpt, path: `/insights/${p.slug}/`, date: p.date })} />
      <article>
        <header className="border-b-[3px] border-black">
          <div className="mx-auto max-w-7xl px-4 pt-8 pb-10 md:px-8 md:pt-10 md:pb-14">
            <Breadcrumbs items={[{ name: "Insights", path: "/insights/" }, { name: p.title, path: `/insights/${p.slug}/` }]} />
            <time dateTime={p.date} className="mt-6 block text-sm text-steel">{date}</time>
            <h1 className="display mt-3 text-[2.2rem] sm:text-4xl lg:text-5xl">{p.title}</h1>
            <p className="measure-wide mt-5 text-lg text-steel">{p.excerpt}</p>
          </div>
        </header>
        <div className="mx-auto max-w-7xl px-4 py-12 md:px-8 md:py-16">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <Markdown source={p.body} />
            </div>
            <aside className="lg:col-span-4">
              {p.related && p.related.length > 0 && (
                <div className="frame p-5 md:p-6">
                  <h2 className="display-md text-lg">Read next</h2>
                  <ul className="mt-3 space-y-2">
                    {p.related.map((r) => (
                      <li key={r.href}><Link href={r.href} className="underline underline-offset-4 hover:text-red">{r.label}</Link></li>
                    ))}
                  </ul>
                </div>
              )}
            </aside>
          </div>
        </div>
      </article>
      <section aria-labelledby="more-insights" className="bg-ash py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <h2 id="more-insights" className="display-md text-2xl md:text-3xl">More insights</h2>
          <ul className="rows mt-8 border-t border-b border-rule">
            {more.map((o) => (
              <li key={o.slug}>
                <Link href={`/insights/${o.slug}/`} className="group grid gap-2 py-5 md:grid-cols-12">
                  <time dateTime={o.date} className="text-sm text-steel md:col-span-2">{new Date(o.date).getFullYear()}</time>
                  <span className="display-md text-lg md:col-span-10 group-hover:underline underline-offset-4">{o.title}</span>
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
