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
  const t = p.title.length > 44 ? p.title.slice(0, 44).replace(/\s+\S*$/, "") : p.title;
  return pageMeta({
    title: `${t} | Ashton Media`,
    description: p.excerpt.slice(0, 155),
    path: `/blog/${p.slug}/`,
    type: "article",
    publishedTime: p.date,
  });
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = getPost(slug);
  if (!p) notFound();
  const more = postsByDate.filter((o) => o.slug !== p.slug).slice(0, 3);

  return (
    <>
      <JsonLd data={articleLd({ title: p.title, description: p.excerpt, path: `/blog/${p.slug}/`, date: p.date })} />
      <article>
        <header className="border-b-[3px] border-black">
          <div className="mx-auto max-w-7xl px-4 pt-8 pb-10 md:px-8 md:pt-10 md:pb-14">
            <Breadcrumbs items={[{ name: "Blog", path: "/blog/" }, { name: p.title, path: `/blog/${p.slug}/` }]} />
            <h1 className="display mt-6 text-[2.2rem] sm:text-4xl lg:text-5xl">{p.title}</h1>
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
      <section aria-labelledby="more-posts" className="bg-ash py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <h2 id="more-posts" className="display-md text-2xl md:text-3xl">More from the blog</h2>
          <ul className="rows mt-8 border-t border-b border-rule">
            {more.map((o) => (
              <li key={o.slug}>
                <Link href={`/blog/${o.slug}/`} className="group block py-5">
                  <span className="display-md text-lg group-hover:underline underline-offset-4">{o.title}</span>
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
