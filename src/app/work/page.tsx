import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CtaBand } from "@/components/CtaBand";
import { pageMeta } from "@/lib/seo";
import { workByDate } from "@/content/work";
import { clients } from "@/content/site";

export const metadata = pageMeta({
  title: "Our Work: Outdoor Campaigns in Tanzania | Ashton Media",
  description:
    "Case studies from Ashton Media's network: Vodacom at Mlimani City, KFC's Countdown to Iftar, Pepsi's logo launch, TECNO, Circle K and Tanzania's first 3D screen.",
  path: "/work/",
});

export default function WorkIndex() {
  return (
    <>
      <section className="border-b-[3px] border-black">
        <div className="mx-auto max-w-7xl px-4 pt-8 pb-10 md:px-8 md:pt-10 md:pb-14">
          <Breadcrumbs items={[{ name: "Work", path: "/work/" }]} />
          <h1 className="display mt-6 text-[2.4rem] sm:text-4xl lg:text-5xl">Work</h1>
          <p className="measure-wide mt-5 text-lg text-steel">
            Campaigns from the network, for {clients.slice(0, -1).join(", ")} and {clients[clients.length - 1]}.
            Each page says what the brief was, what was built, and what was new about it.
          </p>
        </div>
      </section>
      <section className="py-10 md:py-14">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <ul className="grid gap-4 md:grid-cols-2">
            {workByDate.map((w) => (
              <li key={w.slug}>
                <Link href={`/work/${w.slug}/`} className="frame group flex h-full flex-col p-5 md:p-7 hover:bg-black hover:text-white transition-colors">
                  <span className="text-sm font-bold">{w.client} · {new Date(w.date).getFullYear()}</span>
                  <span className="display-md mt-3 text-xl md:text-2xl">{w.title}</span>
                  <span className="measure mt-3 text-steel group-hover:text-white/80">{w.summary}</span>
                  <span className="mt-auto pt-5 text-sm text-steel group-hover:text-white/80">{w.formats.join(" · ")} — {w.where}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <CtaBand heading="Your campaign, next on this page" />
    </>
  );
}
