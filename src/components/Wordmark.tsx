import Link from "next/link";

/**
 * Typographic rendering of the ASHTON wordmark until the logo artwork is restored.
 * Swap the inner markup for an <Image> of the SVG when it arrives; keep the link and label.
 */
export function Wordmark({ dark = false, size = "md" }: { dark?: boolean; size?: "md" | "lg" }) {
  const main = size === "lg" ? "text-2xl" : "text-lg";
  const sub = size === "lg" ? "text-xs" : "text-[0.6rem]";
  return (
    <Link href="/" aria-label="Ashton Media Tanzania — home" className="inline-flex flex-col leading-none whitespace-nowrap">
      <span className={`wordmark ${main} ${dark ? "text-white" : "text-black"}`}>Ashton</span>
      <span className={`wordmark-sub ${sub} ${dark ? "text-white/80" : "text-steel"} mt-1`}>Media Tanzania</span>
    </Link>
  );
}
