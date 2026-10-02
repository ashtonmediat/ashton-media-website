import Link from "next/link";
import Image from "next/image";
import { existsSync } from "node:fs";
import { join } from "node:path";

const LOGO_LIGHT = "/brand/ashton-logo.png"; // black mark, for white backgrounds
const LOGO_DARK = "/brand/ashton-logo-white.png"; // white mark, for black backgrounds
const hasLogo = existsSync(join(process.cwd(), "public", LOGO_LIGHT));
const hasDarkLogo = existsSync(join(process.cwd(), "public", LOGO_DARK));

/**
 * The ASHTON wordmark. Uses the artwork in /public/brand (currently cut from the
 * design mockup; replace with the vector logo when it arrives — same file names).
 */
export function Wordmark({ dark = false, size = "md" }: { dark?: boolean; size?: "md" | "lg" }) {
  const h = size === "lg" ? 30 : 24;
  const src = dark ? (hasDarkLogo ? LOGO_DARK : null) : hasLogo ? LOGO_LIGHT : null;
  return (
    <Link href="/" aria-label="Ashton — home" className="inline-flex items-center whitespace-nowrap">
      {src ? (
        <Image src={src} alt="Ashton" height={h} width={Math.round(h * 4.18)} priority style={{ height: h, width: "auto" }} />
      ) : (
        <span className={`wordmark ${size === "lg" ? "text-2xl" : "text-xl"} ${dark ? "text-white" : "text-black"}`}>Ashton</span>
      )}
    </Link>
  );
}
