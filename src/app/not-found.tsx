import Link from "next/link";
import { site } from "@/content/site";

export default function NotFound() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <p className="num text-5xl">404</p>
        <h1 className="display mt-4 text-3xl sm:text-4xl">That page isn’t here</h1>
        <p className="measure-wide mt-5 text-lg text-steel">
          The address may have changed when the site was rebuilt. These are the pages people usually want:
        </p>
        <ul className="mt-6 grid gap-2 sm:grid-cols-2">
          {[
            { label: "Billboards in Tanzania", href: "/billboards-in-tanzania/" },
            { label: "Digital screens", href: "/digital-billboards-tanzania/" },
            { label: "Airport advertising", href: "/airport-advertising-tanzania/" },
            { label: "Work", href: "/work/" },
            { label: "Rates and how to book", href: "/rates-and-booking/" },
            { label: "Contact", href: "/contact/" },
          ].map((l) => (
            <li key={l.href}><Link href={l.href} className="font-bold underline underline-offset-4 hover:text-red">{l.label}</Link></li>
          ))}
        </ul>
        <p className="mt-8 text-steel">
          Or WhatsApp <a href={site.whatsapp.url("Hi Ashton Media, I was looking for a page on your website.")} data-track="whatsapp" className="font-bold text-black underline underline-offset-4">{site.phone.display}</a>.
        </p>
      </div>
    </section>
  );
}
