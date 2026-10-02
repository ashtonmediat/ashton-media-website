import Link from "next/link";
import { site } from "@/content/site";

/** Persistent contact bar on phones: call, WhatsApp, brief. */
export function MobileBar() {
  return (
    <div className="mobile-bar on-dark fixed inset-x-0 bottom-0 z-40 grid grid-cols-3 bg-black text-white md:hidden" role="region" aria-label="Contact Ashton Media">
      <a href={site.phone.tel} data-track="tel" className="flex min-h-14 items-center justify-center text-sm font-bold">
        Call
      </a>
      <a
        href={site.whatsapp.url("Hi Ashton Media, I'd like to talk about advertising in Tanzania.")}
        data-track="whatsapp"
        className="flex min-h-14 items-center justify-center border-x border-rule-dark text-sm font-bold"
      >
        WhatsApp
      </a>
      <Link href="/plan-a-campaign/" className="flex min-h-14 items-center justify-center bg-red text-sm font-bold">
        Plan a campaign
      </Link>
    </div>
  );
}
