import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CtaBand } from "@/components/CtaBand";
import { pageMeta } from "@/lib/seo";
import { postsByDate } from "@/content/posts";

export const metadata = pageMeta({
  title: "Insights on Out-of-Home Advertising in Tanzania | Ashton Media",
  description:
    "Articles from Ashton Media on billboard and digital out-of-home advertising in Tanzania: frequency, location, creative, QR codes, airport audiences and more.",
  path: "/insights/",
});

export default function InsightsIndex() {
  return (
    <>
      <section className="border-b-[3px] border-black">
        <div className="mx-auto max-w-7xl px-4 pt-8 pb-10 md:px-8 md:pt-10 md:pb-14">
          <Breadcrumbs items={[{ name: "Insights", path: "/insights/" }]} />
          <h1 className="display mt-6 text-[2.4rem] sm:text-4xl lg:text-5xl">Insights</h1>
          <p className="measure-wide mt-5 text-lg text-steel">
            What we have learned about out-of-home advertising in Tanzania, written for the people who plan it.
            Campaign stories live under <Link href="/work/" className="underline underline-offset-4">Work</Link>.
          </p>
        </div>
      </section>
      <section className="py-10 md:py-14">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <ul className="rows border-t border-b border-rule">
            {postsByDate.map((p) => (
              <li key={p.slug}>
                <Link href={`/insights/${p.slug}/`} className="group grid gap-2 py-6 md:grid-cols-12">
                  <time dateTime={p.date} className="text-sm text-steel md:col-span-2">
                    {new Date(p.date).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" })}
                  </time>
                  <span className="md:col-span-10">
                    <span className="display-md block text-xl group-hover:underline underline-offset-4">{p.title}</span>
                    <span className="measure-wide mt-2 block text-steel">{p.excerpt}</span>
                  </span>
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
