import Link from "next/link";
import { site } from "@/content/site";
import { WhatsAppLink } from "./WhatsAppLink";

/** Persistent contact bar on phones: call, WhatsApp, brief. */
export function MobileBar() {
  return (
    <div className="mobile-bar on-dark fixed inset-x-0 bottom-0 z-40 grid grid-cols-3 bg-black text-white md:hidden" role="region" aria-label="Contact Ashton">
      <a href={site.phone.tel} data-track="tel" className="flex min-h-14 items-center justify-center text-sm font-bold">
        Call
      </a>
      <WhatsAppLink
        text="Hi Ashton Media, I'd like to talk about advertising in Tanzania."
        className="flex min-h-14 items-center justify-center gap-2 border-x border-rule-dark text-sm font-bold"
      >
        WhatsApp
      </WhatsAppLink>
      <Link href="/plan-a-campaign/" className="flex min-h-14 items-center justify-center bg-white text-sm font-bold text-black">
        Advertise now
      </Link>
    </div>
  );
}
