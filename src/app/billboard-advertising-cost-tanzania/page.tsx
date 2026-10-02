import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CtaBand } from "@/components/CtaBand";
import { Faq } from "@/components/Faq";
import { JsonLd } from "@/components/JsonLd";
import { WhatsAppLink } from "@/components/WhatsAppLink";
import { pageMeta, faqLd } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Billboard Advertising Cost in Tanzania | Ashton Media",
  description:
    "What a billboard costs in Tanzania and why: format, location, duration, production, creative. Digital versus static, and how to get a quote in a day.",
  path: "/billboard-advertising-cost-tanzania/",
});

const drivers = [
  { name: "Format", text: "A digital screen sells a share of a loop, so several brands share one prime position and each pays a fraction of it. A static billboard is yours alone for the period. The airport and the 3D screen are priced on their own audiences." },
  { name: "Location", text: "A junction where Dar es Salaam's traffic slows — Selander Bridge, Chole Junction — reaches more people for longer than a quiet road, and is priced accordingly. Upcountry sites cost less and reach a different audience." },
  { name: "Duration", text: "Longer bookings earn lower monthly rates. Most brand campaigns run for three months or more; promotions and launches run for weeks on digital screens." },
  { name: "Production", text: "Static sites need printing and installation, included in our quote. Digital screens need no print, which is why a change of message costs nothing but the creative." },
  { name: "Creative", text: "Artwork you supply costs nothing extra. Design, video and 3D creative are quoted separately, and we will say what each site needs before you commission anything." },
];

const faqs = [
  { q: "How much does a billboard cost in Dar es Salaam?", a: "It depends on the site and the period. A share of a digital screen costs less than owning a static site on the same road, and a three-month booking costs less per month than a one-month booking. Send a brief with your budget and you will get options that fit it." },
  { q: "What is the cheapest way to advertise outdoors in Tanzania?", a: "A share of a digital screen in the place that matters to you. You pay for a fraction of a prime position, with no print, and you can start with one screen." },
  { q: "Are prices quoted in TZS or USD?", a: "Both. Tanzanian advertisers are quoted in shillings; international advertisers can be quoted in dollars." },
  { q: "Is there a minimum spend?", a: "Minimums depend on the format and the site. Tell us your budget — we would rather plan around it than turn it away." },
  { q: "Does the price include printing and installation?", a: "For static sites, yes: our quote covers the site, the print, the installation and a photograph of the posting." },
  { q: "Can I get a rate card?", a: "Yes. Ask on WhatsApp, by email, or send a brief and the rate card comes with the proposal." },
];

export default function CostPage() {
  return (
    <>
      <JsonLd data={faqLd(faqs)} />
      <section className="border-b-[3px] border-black">
        <div className="mx-auto max-w-7xl px-4 pt-8 pb-10 md:px-8 md:pt-10 md:pb-14">
          <Breadcrumbs items={[{ name: "What a billboard costs", path: "/billboard-advertising-cost-tanzania/" }]} />
          <h1 className="display mt-6 text-[2.4rem] sm:text-4xl lg:text-5xl">What billboard advertising costs in Tanzania</h1>
          <p className="measure-wide mt-5 text-lg text-steel">
            Nobody in Tanzania publishes a price list, and the honest answer is that the price depends on five things.
            Here they are, so you can plan a budget before you ask for a quote — and when you ask, you get one the same day.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/plan-a-campaign/" className="btn btn-primary">Get a quote for my budget</Link>
            <WhatsAppLink text="Hi Ashton Media, please send the rate card and let me know what my budget could do." className="btn btn-outline">Ask on WhatsApp</WhatsAppLink>
          </div>
        </div>
      </section>

      <section aria-labelledby="drivers-heading" className="py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <h2 id="drivers-heading" className="display-md text-2xl md:text-3xl">The five things that set the price</h2>
          <ol className="rows mt-8 border-t border-b border-rule">
            {drivers.map((d, i) => (
              <li key={d.name} className="grid gap-2 py-6 md:grid-cols-12">
                <div className="flex items-baseline gap-3 md:col-span-3">
                  <span className="num text-2xl">{i + 1}</span>
                  <h3 className="display-md text-lg">{d.name}</h3>
                </div>
                <p className="measure-wide text-steel md:col-span-9">{d.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section aria-labelledby="compare-heading" className="bg-ash py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <h2 id="compare-heading" className="display-md text-2xl md:text-3xl">Digital or static: the economics</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <div className="frame bg-white p-5 md:p-7">
              <h3 className="display-md text-xl">Digital screen</h3>
              <ul className="mt-4 list-disc space-y-2 pl-5">
                <li>You buy a share of the loop, so prime positions cost a fraction of owning them</li>
                <li>No print; change the message as often as you like</li>
                <li>Day-parting: pay for the hours that matter</li>
                <li>Start with one screen and add more</li>
              </ul>
            </div>
            <div className="frame bg-white p-5 md:p-7">
              <h3 className="display-md text-xl">Static billboard</h3>
              <ul className="mt-4 list-disc space-y-2 pl-5">
                <li>The site is yours alone, every hour of the day</li>
                <li>One print, one installation, included in the quote</li>
                <li>Best value over three months or more</li>
                <li>Pairs with digital screens on the same route</li>
              </ul>
            </div>
          </div>
          <p className="measure-wide mt-6 text-sm text-steel">
            The rate card is a message away.
          </p>
        </div>
      </section>

      <Faq items={faqs} />
      <CtaBand heading="Tell us the budget; we'll show you what it buys" briefLabel="Get a quote for my budget" />
    </>
  );
}
