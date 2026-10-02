import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileBar } from "@/components/MobileBar";
import { Analytics } from "@/components/Analytics";
import { JsonLd } from "@/components/JsonLd";
import { organizationLd, SITE_URL } from "@/lib/seo";
import { site } from "@/content/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `Billboard Advertising in Tanzania | ${site.name}`,
    template: `%s | ${site.shortName}`,
  },
  description:
    "Tanzania's largest digital screen network, static billboards, exclusive advertising at JNIA Terminal 3 and Mlimani City. Since 2005. Plan a campaign today.",
  applicationName: site.name,
  robots: { index: true, follow: true },
  openGraph: { siteName: site.name, locale: "en_TZ", type: "website" },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#000000",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full">
      <body className="flex min-h-full flex-col pb-14 md:pb-0">
        <a href="#main" className="skip">Skip to content</a>
        <JsonLd data={organizationLd} />
        <Header />
        <main id="main" className="flex-1">{children}</main>
        <Footer />
        <MobileBar />
        <Analytics />
      </body>
    </html>
  );
}
