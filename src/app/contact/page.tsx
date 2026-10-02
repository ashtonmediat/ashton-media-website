import { Breadcrumbs } from "@/components/Breadcrumbs";
import { EnquiryForm } from "@/components/EnquiryForm";
import { pageMeta } from "@/lib/seo";
import { site } from "@/content/site";

export const metadata = pageMeta({
  title: "Contact Ashton Media Tanzania | Call, WhatsApp or Brief",
  description:
    "Call +255 758 880 088, WhatsApp, or send a message. Ashton Media, Plot No. 4 New Bagamoyo Road, Dar es Salaam. Billboards, digital screens, airport and mall advertising.",
  path: "/contact/",
});

export default function ContactPage() {
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(site.address.mapsQuery)}&output=embed`;
  return (
    <>
      <section className="border-b-[3px] border-black">
        <div className="mx-auto max-w-7xl px-4 pt-8 pb-10 md:px-8 md:pt-10 md:pb-14">
          <Breadcrumbs items={[{ name: "Contact", path: "/contact/" }]} />
          <h1 className="display mt-6 text-[2.4rem] sm:text-4xl lg:text-5xl">Contact</h1>
          <p className="measure-wide mt-5 text-lg text-steel">
            The fastest route is WhatsApp or a call. If you would rather write, the form reaches the same team.
          </p>
        </div>
      </section>
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <div className="grid gap-3">
                <a href={site.whatsapp.url("Hi Ashton Media, I'd like to talk about advertising in Tanzania.")} data-track="whatsapp" className="btn btn-red justify-start">WhatsApp {site.phone.display}</a>
                <a href={site.phone.tel} data-track="tel" className="btn btn-outline justify-start">Call {site.phone.display}</a>
                <a href={`mailto:${site.email}`} data-track="email" className="btn btn-outline justify-start">Email {site.email}</a>
              </div>
              <address className="mt-8 not-italic">
                <h2 className="display-md text-lg">Head office</h2>
                <div className="mt-2">{site.address.street}</div>
                <div>{site.address.city}, {site.address.country}</div>
              </address>
              <div className="frame mt-6 aspect-[4/3] overflow-hidden bg-ash">
                <iframe
                  src={mapSrc}
                  title="Map: Ashton Media head office, New Bagamoyo Road, Dar es Salaam"
                  className="h-full w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
              <div className="mt-6 text-sm">
                <h2 className="font-bold">Follow</h2>
                <p className="mt-1 flex flex-wrap gap-4">
                  <a href={site.social.linkedin} rel="noopener" className="underline underline-offset-4">LinkedIn</a>
                  <a href={site.social.instagram} rel="noopener" className="underline underline-offset-4">Instagram</a>
                  <a href={site.social.facebook} rel="noopener" className="underline underline-offset-4">Facebook</a>
                </p>
              </div>
            </div>
            <div className="lg:col-span-7">
              <h2 className="display-md text-xl">Send a message</h2>
              <div className="mt-5">
                <EnquiryForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
