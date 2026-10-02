import Link from "next/link";
import { JsonLd } from "./JsonLd";
import { breadcrumbLd } from "@/lib/seo";

export function Breadcrumbs({ items, dark = false }: { items: { name: string; path: string }[]; dark?: boolean }) {
  const all = [{ name: "Home", path: "/" }, ...items];
  return (
    <nav aria-label="Breadcrumb" className={`text-sm ${dark ? "text-white/75" : "text-steel"}`}>
      <JsonLd data={breadcrumbLd(all)} />
      <ol className="flex flex-wrap items-center gap-x-2">
        {all.map((it, i) => (
          <li key={it.path} className="flex items-center gap-x-2">
            {i < all.length - 1 ? (
              <>
                <Link href={it.path} className="hover:underline underline-offset-4">{it.name}</Link>
                <span aria-hidden>/</span>
              </>
            ) : (
              <span aria-current="page" className={dark ? "text-white" : "text-black"}>{it.name}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
