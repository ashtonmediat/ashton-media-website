import { siWhatsapp } from "simple-icons";
import { site } from "@/content/site";

/** The WhatsApp glyph (Simple Icons, CC0). Inherits the text colour unless `brand` is set. */
export function WhatsAppIcon({ brand = false, className = "" }: { brand?: boolean; className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
      className={`wa-icon ${className}`}
      fill={brand ? `#${siWhatsapp.hex}` : "currentColor"}
    >
      <path d={siWhatsapp.path} />
    </svg>
  );
}

/**
 * A link that opens a WhatsApp chat with the hotline, pre-filled with `text`.
 * Always carries the icon so people recognise it at a glance.
 */
export function WhatsAppLink({
  text,
  children,
  className = "",
  brand = false,
}: {
  text: string;
  children: React.ReactNode;
  className?: string;
  brand?: boolean;
}) {
  return (
    <a href={site.whatsapp.url(text)} data-track="whatsapp" className={className} rel="noopener">
      <WhatsAppIcon brand={brand} />
      <span>{children}</span>
    </a>
  );
}
