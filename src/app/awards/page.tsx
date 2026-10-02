import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CtaBand } from "@/components/CtaBand";
import { pageMeta } from "@/lib/seo";
import { awards } from "@/content/site";

export const metadata = pageMeta({
  title: "Awards and Recognition | Ashton Media",
  description:
    "Ashton Media's awards: the DailyDOOH Gala Award in London for the 3D Digital Coke Bottle, and Consumer Choice Awards Africa three years running.",
  path: "/awards/",
});

export default function AwardsPage() {
  return (
    <>
      <section className="border-b-[3px] border-black">
        <div className="mx-auto max-w-7xl px-4 pt-8 pb-10 md:px-8 md:pt-10 md:pb-14">
          <Breadcrumbs items={[{ name: "Awards", path: "/awards/" }]} />
          <h1 className="display mt-6 text-[2.4rem] sm:text-4xl lg:text-5xl">Awards and recognition</h1>
          <p className="measure-wide mt-5 text-lg text-steel">
            Recognised by the digital out-of-home industry internationally, judged in London, and voted for by consumers at home three years running.
          </p>
        </div>
      </section>
      <section className="py-10 md:py-14">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <ol className="grid gap-4">
            {[...awards].reverse().map((a) => (
              <li key={a.year} className="frame grid gap-4 p-5 md:grid-cols-12 md:p-7">
                <div className="num text-4xl md:col-span-2">{a.year}</div>
                <div className="md:col-span-10">
                  <h2 className="display-md text-xl md:text-2xl">{a.body}{a.place ? `, ${a.place}` : ""}</h2>
                  <p className="mt-2 font-bold">{a.category}</p>
                  <p className="measure-wide mt-2 text-steel">{a.detail}</p>
                  {a.source && (
                    <p className="mt-3 text-sm">
                      <a href={a.source} rel="noopener" className="underline underline-offset-4 hover:text-red">Winners list</a>
                    </p>
                  )}
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>
      <CtaBand heading="Put an award-winning network to work" />
    </>
  );
}
