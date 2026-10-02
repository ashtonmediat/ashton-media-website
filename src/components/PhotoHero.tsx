import Image from "next/image";
import { existsSync, readdirSync } from "node:fs";
import { join } from "node:path";

function findImage(name: string) {
  const dir = join(process.cwd(), "public", "images");
  if (!existsSync(dir)) return null;
  const file = readdirSync(dir).find((f) => /\.(jpe?g|png|webp|avif)$/i.test(f) && f.replace(/\.[^.]+$/, "") === name);
  return file ? `/images/${file}` : null;
}

/**
 * Full-bleed photograph with a dark overlay and content on top, as in the mockup.
 * Falls back to a plain black band when the photograph isn't in /public/images yet.
 */
export function PhotoHero({
  image,
  alt,
  children,
  className = "",
  priority = true,
}: {
  image: string;
  alt: string;
  children: React.ReactNode;
  className?: string;
  priority?: boolean;
}) {
  const src = findImage(image);
  return (
    <section className={`photo-hero on-dark bg-black text-white ${className}`}>
      {src && <Image src={src} alt={alt} fill priority={priority} sizes="100vw" />}
      {children}
    </section>
  );
}
