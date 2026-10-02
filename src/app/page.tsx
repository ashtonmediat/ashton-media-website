import Link from "next/link";
import Image from "next/image";
import { PhotoHero } from "@/components/PhotoHero";
import { CtaBand } from "@/components/CtaBand";
import { JsonLd } from "@/components/JsonLd";
import { WhatsAppLink } from "@/components/WhatsAppLink";
import { pageMeta } from "@/lib/seo";
import { site } from "@/content/site";

export const metadata = pageMeta({
  title: "Billboard Advertising in Tanzania | Ashton Media",
  description:
    "Award-winning out-of-home advertising in Tanzania: the largest digital screen network, static billboards, airport, mobile and mall advertising. Advertise now.",
  path: "/",
});

const network = [
  { label: "Static", href: "/static-billboards-tanzania/", image: "/images/tile-static.jpg", alt: "A static billboard above a busy market street in Dar es Salaam" },
  { label: "Digital", href: "/digital-billboards-tanzania/", image: "/images/tile-digital.jpg", alt: "A digital LED screen on a main road at dusk" },
  { label: "Airport", href: "/airport-advertising-tanzania/", image: "/images/tile-airport.jpg", alt: "A digital totem screen in the airport baggage hall" },
  { label: "Mobile", href: "/mobile-screens-tanzania/", image: "/images/tile-mobile.jpg", alt: "A mobile LED screen mounted on a truck" },
];

const work = [
  { src: "/images/work-1.jpg", alt: "A billboard campaign on a misty morning outside Dar es Salaam" },
  { src: "/images/work-2.jpg", alt: "A Pepsi billboard between palm trees on a main road in Dar es Salaam" },
  { src: "/images/work-3.jpg", alt: "A Coca-Cola billboard beside a flyover" },
  { src: "/images/work-4.jpg", alt: "A digital totem in the airport baggage hall" },
  { src: "/images/work-5.jpg", alt: "A digital screen above the airport escalators" },
  { src: "/images/work-6.jpg", alt: "A back-lit board in the airport terminal" },
];

export default function HomePage() {
  return (
    <>
      <JsonLd data={{ "@context": "https://schema.org", "@type": "WebSite", name: site.name, url: site.url }} />

      {/* Hero — the mockup's full-bleed photograph, one word, one button */}
      <PhotoHero image="home" alt="A Pepsi billboard between palm trees on a main road in Dar es Salaam">
        <div className="mx-auto flex min-h-[82svh] max-w-7xl flex-col items-center justify-center px-4 py-20 text-center md:px-8 md:py-28">
          <p className="display text-[5.5rem] leading-none sm:text-[7rem] lg:text-[9rem]">Iconic</p>
          <div className="mt-2 h-px w-48 bg-white sm:w-72" aria-hidden />
          <h1 className="display-md mt-8 max-w-3xl text-xl text-white/95 sm:text-2xl md:text-3xl">
            Billboards and digital screens across Tanzania
          </h1>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link href="/plan-a-campaign/" className="btn btn-outline-white px-8 text-lg">Advertise now</Link>
            <WhatsAppLink text="Hi Ashton Media, I'd like to talk about advertising in Tanzania." className="btn btn-outline-white px-6 text-lg">
              WhatsApp
            </WhatsAppLink>
          </div>
        </div>
      </PhotoHero>

      {/* Our network */}
      <section aria-labelledby="network-heading" className="on-dark bg-black text-white">
        <div className="mx-auto max-w-7xl px-4 pt-16 pb-6 text-center md:px-8 md:pt-24 md:pb-10">
          <h2 id="network-heading" className="display rule-heading text-[2.6rem] md:text-6xl">Our network</h2>
        </div>
        <ul className="grid grid-cols-2 gap-px bg-black lg:grid-cols-4">
          {network.map((n) => (
            <li key={n.href} className="relative aspect-[3/4] lg:aspect-[9/13]">
              <Link href={n.href} className="group absolute inset-0 block overflow-hidden">
                <Image src={n.image} alt={n.alt} fill sizes="(min-width: 1024px) 25vw, 50vw" className="object-cover transition-transform duration-500 group-hover:scale-[1.03]" />
                <span className="absolute inset-x-0 bottom-0 flex justify-center pb-6 md:pb-8">
                  <span className="box-label">{n.label}</span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
        <div className="mx-auto max-w-7xl px-4 py-8 text-center md:px-8 md:py-10">
          <p className="text-white/80">Also on the network:</p>
          <div className="mt-4 flex flex-wrap justify-center gap-3">
            <Link href="/mall-advertising-dar-es-salaam/" className="nav-box">Malls &amp; retail</Link>
            <Link href="/sgr-advertising-tanzania/" className="nav-box">SGR</Link>
            <Link href="/billboards-in-tanzania/" className="nav-box nav-box-fill">The whole network</Link>
          </div>
        </div>
      </section>

      {/* Why us */}
      <section aria-labelledby="why-heading" className="on-dark bg-charcoal text-white">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24">
          <div className="text-center">
            <h2 id="why-heading" className="display rule-heading text-[2.6rem] md:text-6xl">Why us?</h2>
          </div>
          <div className="mt-12 grid gap-10 md:mt-16 md:grid-cols-12 md:items-center">
            <div className="md:col-span-5">
              <p className="display-light text-5xl md:text-6xl lg:text-7xl">To put it<br />simple</p>
              <p className="display mt-6 text-5xl md:text-6xl lg:text-7xl">We<br />deliver!</p>
            </div>
            <div className="md:col-span-7 lg:col-span-6 lg:col-start-7">
              <div className="space-y-5 text-lg leading-relaxed text-white/95">
                <p>We dedicate all of our effort and expertise to getting you and your brand noticed while delivering a return on investment.</p>
                <p>Our experienced advertising agency and team are committed to working in partnership with you to create effective campaigns that meet your objectives, provide the bang for the money you spend and drive sales and traffic to your door.</p>
                <p>Basically, a big part of our story is driving results for businesses, big or small. Whether you’re a first-time advertiser or an established business, Ashton Media can help you engage your desired audience – both online and offline.</p>
              </div>
              <p className="mt-6 text-sm text-white/70">
                Award-winning — recognised by the industry internationally and voted for at home. <Link href="/awards/" className="underline underline-offset-4">The awards</Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our work */}
      <section aria-labelledby="work-heading" className="on-dark bg-black text-white">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24">
          <div className="text-center">
            <h2 id="work-heading" className="display rule-heading text-[2.6rem] md:text-6xl">Our work</h2>
          </div>
          <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 md:mt-16">
            {work.map((w) => (
              <li key={w.src} className="relative aspect-[16/9] overflow-hidden">
                <Image src={w.src} alt={w.alt} fill sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" className="object-cover" />
              </li>
            ))}
          </ul>
          <div className="mt-10 text-center">
            <Link href="/blog/" className="nav-box">Campaign stories on the blog</Link>
          </div>
        </div>
      </section>

      <CtaBand heading="Advertise now" text="Tell us where you want to be seen and when. A real person replies with sites, photographs and a quote — usually within a few hours on business days." briefLabel="Advertise now" />
    </>
  );
}
