import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CtaBand } from "@/components/CtaBand";
import { pageMeta } from "@/lib/seo";
import { postsByDate } from "@/content/posts";

export const metadata = pageMeta({
  title: "Blog: Outdoor Advertising in Tanzania | Ashton Media",
  description:
    "News and ideas from Ashton: campaign stories, new screens, and how to get more from billboards and digital screens in Tanzania.",
  path: "/blog/",
});

export default function BlogIndex() {
  return (
    <>
      <section className="border-b-[3px] border-black">
        <div className="mx-auto max-w-7xl px-4 pt-8 pb-10 md:px-8 md:pt-10 md:pb-14">
          <Breadcrumbs items={[{ name: "Blog", path: "/blog/" }]} />
          <h1 className="display mt-6 text-[2.4rem] sm:text-4xl lg:text-5xl">Blog</h1>
          <p className="measure-wide mt-5 text-lg text-steel">
            Campaign stories, new screens, and what we have learned about out-of-home advertising in Tanzania.
          </p>
        </div>
      </section>
      <section className="py-10 md:py-14">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <ul className="rows border-t border-b border-rule">
            {postsByDate.map((p) => (
              <li key={p.slug}>
                <Link href={`/blog/${p.slug}/`} className="group block py-6">
                  <span className="display-md block text-xl group-hover:underline underline-offset-4">{p.title}</span>
                  <span className="measure-wide mt-2 block text-steel">{p.excerpt}</span>
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
