import type { Faq as FaqItem } from "@/content/formats";

export function Faq({ items, heading = "Questions we are asked" }: { items: FaqItem[]; heading?: string }) {
  return (
    <section aria-labelledby="faq-heading" className="py-14 md:py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <h2 id="faq-heading" className="display-md text-2xl md:text-3xl">{heading}</h2>
        <div className="rows mt-8 border-t border-b border-rule">
          {items.map((f) => (
            <details key={f.q} className="group py-4 md:py-5">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-6 text-lg font-bold leading-snug [&::-webkit-details-marker]:hidden">
                <span>{f.q}</span>
                <span aria-hidden className="mt-1 flex-none text-steel group-open:rotate-45 transition-transform text-2xl leading-none">+</span>
              </summary>
              <p className="measure mt-3 text-steel">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
