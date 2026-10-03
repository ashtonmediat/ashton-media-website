import Link from "next/link";
import { Wordmark } from "./Wordmark";
import { WhatsAppLink } from "./WhatsAppLink";
import { site } from "@/content/site";

const cols = [
  {
    heading: "Formats",
    links: [
      { label: "Digital screens", href: "/digital-billboards-tanzania/" },
      { label: "Static billboards", href: "/static-billboards-tanzania/" },
      { label: "Airport advertising", href: "/airport-advertising-tanzania/" },
      { label: "SGR advertising", href: "/sgr-advertising-tanzania/" },
      { label: "Malls and retail", href: "/mall-advertising-tanzania/" },
      { label: "Mobile screens", href: "/mobile-screens-tanzania/" },
    ],
  },
  {
    heading: "Plan",
    links: [
      { label: "Billboards in Tanzania", href: "/billboards-in-tanzania/" },
      { label: "Rates and how to book", href: "/rates-and-booking/" },
      { label: "What a billboard costs", href: "/billboard-advertising-cost-tanzania/" },
      { label: "Entering the Tanzanian market", href: "/advertising-in-tanzania/" },
      { label: "Plan a campaign", href: "/plan-a-campaign/" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About Ashton", href: "/about/" },
      { label: "Awards", href: "/awards/" },
      { label: "Blog", href: "/blog/" },
      { label: "Contact", href: "/contact/" },
      { label: "Privacy", href: "/privacy/" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="on-dark bg-black text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 md:px-8 md:py-16">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <Wordmark dark size="lg" />
            <p className="measure mt-5 text-white/80">
              Award-winning out-of-home advertising: digital screens, static billboards, airport and mall sites across Tanzania.
            </p>
            <address className="mt-6 not-italic text-white/90">
              <div>{site.address.street}</div>
              <div>{site.address.city}, {site.address.country}</div>
              <div className="mt-3">
                <a href={site.phone.tel} data-track="tel" className="font-bold underline underline-offset-4">{site.phone.display}</a>
              </div>
              <div className="mt-1">
                <WhatsAppLink text="Hi Ashton Media, I'd like to talk about advertising in Tanzania." className="inline-flex items-center gap-2 font-bold underline underline-offset-4">
                  WhatsApp us
                </WhatsAppLink>
              </div>
              <div className="mt-1">
                <a href={`mailto:${site.email}`} className="underline underline-offset-4">{site.email}</a>
              </div>
            </address>
            <div className="mt-6 flex flex-wrap gap-4 text-sm font-semibold">
              <a href={site.social.linkedin} rel="noopener" className="underline underline-offset-4">LinkedIn</a>
              <a href={site.social.instagram} rel="noopener" className="underline underline-offset-4">Instagram</a>
              <a href={site.social.facebook} rel="noopener" className="underline underline-offset-4">Facebook</a>
            </div>
          </div>
          {cols.map((c) => (
            <div key={c.heading} className="md:col-span-2">
              <h2 className="text-sm font-bold">{c.heading}</h2>
              <ul className="mt-3 space-y-2 text-sm text-white/85">
                {c.links.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="hover:underline underline-offset-4">{l.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 border-t border-rule-dark pt-6 text-xs text-white/70">
          <p>© {new Date().getFullYear()} {site.legalName}</p>
        </div>
      </div>
    </footer>
  );
}
