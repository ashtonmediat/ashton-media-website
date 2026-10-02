"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { site } from "@/content/site";

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
    <div className="xl:hidden">
      <button
        type="button"
        className="btn btn-outline"
        aria-haspopup="dialog"
        onClick={() => ref.current?.showModal()}
      >
        Menu
      </button>
      <dialog
        ref={ref}
        aria-label="Site menu"
        className="m-0 h-full max-h-none w-full max-w-none bg-white p-0 backdrop:bg-black/60"
      >
        <div className="flex min-h-full flex-col">
          <div className="flex items-center justify-between border-b-[3px] border-black px-4 py-3">
            <span className="wordmark text-lg">Ashton</span>
            <button type="button" className="btn btn-outline" onClick={() => ref.current?.close()}>
              Close
            </button>
          </div>
          <nav aria-label="Main" className="rows flex-1 px-4">
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
          <div className="grid gap-3 border-t-[3px] border-black p-4">
            <Link href="/plan-a-campaign/" className="btn btn-red" onClick={() => ref.current?.close()}>
              Plan a campaign
            </Link>
            <a href={site.whatsapp.url("Hi Ashton Media, I'd like to talk about advertising in Tanzania.")} className="btn btn-outline" data-track="whatsapp">
              WhatsApp us
            </a>
            <a href={site.phone.tel} className="btn btn-outline" data-track="tel">
              Call {site.phone.display}
            </a>
          </div>
        </div>
      </dialog>
    </div>
  );
}
