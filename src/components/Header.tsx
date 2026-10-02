import Link from "next/link";
import { Wordmark } from "./Wordmark";
import { MobileMenu } from "./MobileMenu";
import { site } from "@/content/site";

export const navItems = [
  { label: "Billboards in Tanzania", href: "/billboards-in-tanzania/" },
  { label: "Digital screens", href: "/digital-billboards-tanzania/" },
  { label: "Static billboards", href: "/static-billboards-tanzania/" },
  { label: "Airport", href: "/airport-advertising-tanzania/" },
  { label: "Malls & 3D", href: "/mall-advertising-dar-es-salaam/" },
  { label: "Work", href: "/work/" },
  { label: "Rates", href: "/rates-and-booking/" },
  { label: "About", href: "/about/" },
  { label: "Insights", href: "/insights/" },
  { label: "Contact", href: "/contact/" },
];

export function Header() {
  return (
    <header className="border-b-[3px] border-black bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-3 md:px-8 md:py-4">
        <Wordmark />
        <nav aria-label="Main" className="hidden items-center gap-4 whitespace-nowrap xl:flex">
          {navItems.map((n) => (
            <Link key={n.href} href={n.href} className="text-[0.85rem] font-semibold hover:text-red">
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-3 md:flex">
          <a href={site.phone.tel} data-track="tel" className="hidden whitespace-nowrap text-sm font-bold 2xl:inline">
            {site.phone.display}
          </a>
          <Link href="/plan-a-campaign/" className="btn btn-red whitespace-nowrap">
            Plan a campaign
          </Link>
        </div>
        <MobileMenu items={navItems} />
      </div>
    </header>
  );
}
