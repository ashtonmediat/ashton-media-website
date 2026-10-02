import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CtaBand } from "@/components/CtaBand";
import { Faq } from "@/components/Faq";
import { JsonLd } from "@/components/JsonLd";
import { WhatsAppLink } from "@/components/WhatsAppLink";
import { pageMeta, faqLd } from "@/lib/seo";
import { bookingSteps } from "@/content/site";

export const metadata = pageMeta({
  title: "Billboard Rates & How to Book in Tanzania | Ashton Media",
  description:
    "How to book a billboard or digital screen in Tanzania: brief, plan, quote, artwork, live, report. Request the Ashton Media rate card today.",
  path: "/rates-and-booking/",
});

const faqs = [
  { q: "How do I get the rate card?", a: "Ask for it on WhatsApp or by email, or send a brief and it comes with the proposal. It covers digital screens, static billboards, the airport and Mlimani City." },
  { q: "What does a quote include?", a: "Everything the campaign needs from us: the sites or screens for the period, and for static sites the print, installation and posting photograph. Creative design is quoted separately if you need it." },
  { q: "How far ahead should I book?", a: "Landmark sites and the airport are booked ahead by regular advertisers, so the earlier the better. Digital screens can go live quickly once artwork is approved. Tell us the date and we plan backwards." },
  { q: "Do you work with media agencies?", a: "Yes — most national campaigns on the network are planned by agencies. Ask for agency terms, the site list and specifications." },
  { q: "Can I pay in US dollars from outside Tanzania?", a: "Tell us where you are and we will quote in the currency that works for you." },
  { q: "What artwork specifications do I need?", a: "Each site and screen has its own. We send the specifications with the quote and check your files before anything goes up." },
];

export default function RatesPage() {
  return (
    <>
      <JsonLd data={faqLd(faqs)} />
      <section className="border-b-[3px] border-black">
        <div className="mx-auto max-w-7xl px-4 pt-8 pb-10 md:px-8 md:pt-10 md:pb-14">
          <Breadcrumbs items={[{ name: "Rates and booking", path: "/rates-and-booking/" }]} />
          <h1 className="display mt-6 text-[2.4rem] sm:text-4xl lg:text-5xl">Rates and how to book</h1>
          <p className="measure-wide mt-5 text-lg text-steel">
            Six steps from a two-minute brief to a campaign that is live and reported. The rate card is sent with
            every proposal, or on request.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <WhatsAppLink text="Hi Ashton Media, please send the current rate card." className="btn btn-primary">Request the rate card</WhatsAppLink>
            <Link href="/plan-a-campaign/" className="btn btn-outline">Send a brief</Link>
          </div>
        </div>
      </section>

      <section aria-labelledby="steps-heading" className="py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <h2 id="steps-heading" className="display-md text-2xl md:text-3xl">How it works</h2>
          <ol className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {bookingSteps.map((s, i) => (
              <li key={s.name} className="border-t-[3px] border-black pt-4">
                <div className="flex items-baseline gap-3">
                  <span className="num text-2xl">{i + 1}</span>
                  <h3 className="display-md text-lg">{s.name}</h3>
                </div>
                <p className="mt-2 text-steel">{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section aria-labelledby="included-heading" className="bg-ash py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="frame bg-white p-5 md:p-7">
              <h2 id="included-heading" className="display-md text-xl">What a static booking includes</h2>
              <ul className="mt-4 list-disc space-y-2 pl-5">
                <li>The site for the booked period</li>
                <li>Printing to the site’s specification</li>
                <li>Installation and posting</li>
                <li>A photograph of the posted site</li>
              </ul>
            </div>
            <div className="frame bg-white p-5 md:p-7">
              <h2 className="display-md text-xl">What a digital booking includes</h2>
              <ul className="mt-4 list-disc space-y-2 pl-5">
                <li>Your share of the loop on each screen for the period</li>
                <li>Scheduling, including day-parting if you want it</li>
                <li>Creative changes during the campaign</li>
                <li>Proof of play from the scheduling system</li>
              </ul>
            </div>
          </div>
          <p className="measure-wide mt-6 text-sm text-steel">
            Creative design, 3D creative and special builds are quoted separately. Agency terms are available on request.
          </p>
        </div>
      </section>

      <Faq items={faqs} />
      <CtaBand heading="Get the rate card today" whatsappText="Hi Ashton Media, please send the current rate card." />
    </>
  );
}
