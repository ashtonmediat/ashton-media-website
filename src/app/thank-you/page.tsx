import Link from "next/link";
import { pageMeta } from "@/lib/seo";
import { site } from "@/content/site";
import { ConversionPing } from "@/components/ConversionPing";

export const metadata = pageMeta({
  title: "Thanks: we have your message | Ashton Media Tanzania",
  description: "Your message has reached Ashton Media. A real person replies by email or WhatsApp.",
  path: "/thank-you/",
  noindex: true,
});

export default async function ThankYouPage({ searchParams }: { searchParams: Promise<{ type?: string }> }) {
  const { type } = await searchParams;
  const isBrief = type === "brief";
  return (
    <section className="py-16 md:py-24">
      <ConversionPing type={type ?? "general"} />
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <h1 className="display text-[2.4rem] sm:text-4xl lg:text-5xl">{isBrief ? "Your brief is in." : "Your message is in."}</h1>
        <p className="measure-wide mt-6 text-lg text-steel">
          {isBrief
            ? "A planner will come back with sites, photographs and a quote — usually within a few hours on business days, or first thing when the office opens."
            : "A real person replies by email or WhatsApp — usually within a few hours on business days, or first thing when the office opens."}
        </p>
        <p className="measure-wide mt-4 text-steel">
          In a hurry? WhatsApp <a href={site.whatsapp.url("Hi Ashton Media, I just sent a message through the website.")} data-track="whatsapp" className="font-bold text-black underline underline-offset-4">{site.phone.display}</a> and mention the website.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/work/" className="btn btn-outline">See our work while you wait</Link>
          <Link href="/" className="btn btn-outline">Back to the home page</Link>
        </div>
      </div>
    </section>
  );
}
