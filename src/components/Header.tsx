import Link from "next/link";
import { Wordmark } from "./Wordmark";
import { MobileMenu } from "./MobileMenu";

/** Top-level navigation, in the mockup's outlined boxes. The full page list is in the menu and the footer. */
export const navItems = [
  { label: "Network", href: "/billboards-in-tanzania/" },
  { label: "Rates", href: "/rates-and-booking/" },
  { label: "About", href: "/about/" },
  { label: "Blog", href: "/blog/" },
];

export const menuItems = [
  { label: "Network — billboards in Tanzania", href: "/billboards-in-tanzania/" },
  { label: "Digital screens", href: "/digital-billboards-tanzania/" },
  { label: "Static billboards", href: "/static-billboards-tanzania/" },
  { label: "Airport advertising", href: "/airport-advertising-tanzania/" },
  { label: "SGR advertising", href: "/sgr-advertising-tanzania/" },
  { label: "Malls & retail", href: "/mall-advertising-tanzania/" },
  { label: "Mobile screens", href: "/mobile-screens-tanzania/" },
  { label: "Rates and how to book", href: "/rates-and-booking/" },
  { label: "What a billboard costs", href: "/billboard-advertising-cost-tanzania/" },
  { label: "International brands", href: "/advertising-in-tanzania/" },
  { label: "About", href: "/about/" },
  { label: "Awards", href: "/awards/" },
  { label: "Blog", href: "/blog/" },
  { label: "Contact", href: "/contact/" },
];

export function Header() {
  return (
    <header className="on-dark bg-black text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-5 md:px-8 md:py-7">
        <Wordmark dark />
        <nav aria-label="Main" className="hidden items-center gap-3 whitespace-nowrap lg:flex">
          {navItems.map((n) => (
            <Link key={n.href} href={n.href} className="nav-box">
              {n.label}
            </Link>
          ))}
          <Link href="/contact/" className="nav-box nav-box-fill">Contact us</Link>
        </nav>
        <MobileMenu items={menuItems} />
      </div>
    </header>
  );
}
