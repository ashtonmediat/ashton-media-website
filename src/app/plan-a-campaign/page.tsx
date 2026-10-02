import { Breadcrumbs } from "@/components/Breadcrumbs";
import { BriefForm } from "@/components/BriefForm";
import { WhatsAppLink } from "@/components/WhatsAppLink";
import { pageMeta } from "@/lib/seo";
import { site } from "@/content/site";

export const metadata = pageMeta({
  title: "Plan a Campaign: Two-Minute Brief | Ashton Media",
  description:
    "Tell us what you want to achieve, where, when and roughly what you want to spend. You get a plan with sites, photographs and a quote from Ashton Media.",
  path: "/plan-a-campaign/",
});

export default async function PlanPage({ searchParams }: { searchParams: Promise<{ site?: string }> }) {
  const { site: siteName } = await searchParams;
  return (
    <>
      <section className="border-b-[3px] border-black">
        <div className="mx-auto max-w-7xl px-4 pt-8 pb-10 md:px-8 md:pt-10 md:pb-14">
          <Breadcrumbs items={[{ name: "Plan a campaign", path: "/plan-a-campaign/" }]} />
          <h1 className="display mt-6 text-[2.4rem] sm:text-4xl lg:text-5xl">Plan a campaign</h1>
          <p className="measure-wide mt-5 text-lg text-steel">
            Two minutes, three questions. You get back a plan with the sites that fit, photographs of each, and one quote.
            Nothing here commits you to anything.
          </p>
        </div>
      </section>
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <BriefForm site={siteName} />
            </div>
            <aside className="lg:col-span-4">
              <div className="frame p-5 md:p-6">
                <h2 className="display-md text-lg">Rather talk?</h2>
                <div className="mt-4 grid gap-3">
                  <WhatsAppLink text="Hi Ashton Media, I'd like to plan a campaign in Tanzania." className="btn btn-black">WhatsApp us</WhatsAppLink>
                  <a href={site.phone.tel} data-track="tel" className="btn btn-outline">Call {site.phone.display}</a>
                </div>
                <p className="mt-4 text-sm text-steel">Office hours are East Africa Time (UTC+3). Briefs sent overnight are answered when the office opens.</p>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
