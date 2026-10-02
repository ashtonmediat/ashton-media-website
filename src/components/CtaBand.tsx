import Link from "next/link";
import { site } from "@/content/site";
import { WhatsAppLink } from "./WhatsAppLink";

export function CtaBand({
  heading = "Tell us what you want to achieve",
  text = "A real person replies — usually within a few hours on business days. Say where you want to be seen and when, and we'll come back with sites, photos and a quote.",
  whatsappText = "Hi Ashton Media, I'd like to plan a campaign in Tanzania.",
  briefLabel = "Advertise now",
}: {
  heading?: string;
  text?: string;
  whatsappText?: string;
  briefLabel?: string;
}) {
  return (
    <section className="on-dark bg-black text-white">
      <div className="mx-auto max-w-7xl px-4 py-14 md:px-8 md:py-20">
        <div className="grid gap-8 md:grid-cols-12 md:items-end">
          <div className="md:col-span-7">
            <h2 className="display text-3xl md:text-4xl">{heading}</h2>
            <p className="measure mt-5 text-white/85">{text}</p>
          </div>
          <div className="md:col-span-5 md:justify-self-end">
            <div className="flex flex-wrap gap-3">
              <Link href="/plan-a-campaign/" className="btn btn-primary">{briefLabel}</Link>
              <WhatsAppLink text={whatsappText} className="btn btn-white">WhatsApp us</WhatsAppLink>
            </div>
            <p className="mt-4 text-sm text-white/80">
              Or call <a href={site.phone.tel} data-track="tel" className="font-bold text-white underline underline-offset-4">{site.phone.display}</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
