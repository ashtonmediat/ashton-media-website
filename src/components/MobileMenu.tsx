"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { site } from "@/content/site";
import { WhatsAppLink } from "./WhatsAppLink";

export function MobileMenu({ items }: { items: { label: string; href: string }[] }) {
  const ref = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    const d = ref.current;
    if (!d) return;
    const onClick = (e: MouseEvent) => {
      if (e.target === d) d.close();
    };
    d.addEventListener("click", onClick);
    return () => d.removeEventListener("click", onClick);
  }, []);
  return (
    <div className="lg:hidden">
      <button
        type="button"
        className="nav-box"
        aria-haspopup="dialog"
        onClick={() => ref.current?.showModal()}
      >
        Menu
      </button>
      <dialog
        ref={ref}
        aria-label="Site menu"
        className="on-dark m-0 h-full max-h-none w-full max-w-none bg-black p-0 text-white backdrop:bg-black/60"
      >
        <div className="flex min-h-full flex-col">
          <div className="flex items-center justify-between border-b border-rule-dark px-4 py-5">
            <span className="wordmark text-xl text-white">Ashton</span>
            <button type="button" className="nav-box" onClick={() => ref.current?.close()}>
              Close
            </button>
          </div>
          <nav aria-label="Main" className="rows-dark flex-1 px-4">
            {items.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                onClick={() => ref.current?.close()}
                className="block py-4 text-lg font-bold"
              >
                {n.label}
              </Link>
            ))}
          </nav>
          <div className="grid gap-3 border-t border-rule-dark p-4">
            <Link href="/plan-a-campaign/" className="btn btn-primary" onClick={() => ref.current?.close()}>
              Advertise now
            </Link>
            <WhatsAppLink text="Hi Ashton Media, I'd like to talk about advertising in Tanzania." className="btn btn-outline-white">
              WhatsApp us
            </WhatsAppLink>
            <a href={site.phone.tel} className="btn btn-outline-white" data-track="tel">
              Call {site.phone.display}
            </a>
          </div>
        </div>
      </dialog>
    </div>
  );
}
