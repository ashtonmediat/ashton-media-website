import { Breadcrumbs } from "@/components/Breadcrumbs";
import { pageMeta } from "@/lib/seo";
import { site } from "@/content/site";

export const metadata = pageMeta({
  title: "Privacy Notice | Ashton Media Tanzania",
  description: "How Ashton Media uses the information you send through this website, and the analytics it runs.",
  path: "/privacy/",
});

export default function PrivacyPage() {
  return (
    <>
      <section className="border-b-[3px] border-black">
        <div className="mx-auto max-w-7xl px-4 pt-8 pb-10 md:px-8 md:pt-10 md:pb-14">
          <Breadcrumbs items={[{ name: "Privacy", path: "/privacy/" }]} />
          <h1 className="display mt-6 text-[2.4rem] sm:text-4xl lg:text-5xl">Privacy notice</h1>
          <p className="measure-wide mt-5 text-lg text-steel">What we collect on this website, why, and how to reach us about it.</p>
        </div>
      </section>
      <section className="py-12 md:py-16">
        <div className="prose-ashton mx-auto max-w-7xl px-4 md:px-8">
          <h2>Who we are</h2>
          <p>{site.legalName}, {site.address.full}. Email {site.email}; telephone {site.phone.display}. We are the controller of the personal information collected through this website.</p>
          <h2>What we collect and why</h2>
          <p><strong>Enquiries and briefs.</strong> When you send a message or a campaign brief, we receive the details you enter — your name, company, contact details, country and what you tell us about your campaign. We use them to reply to you and to prepare a proposal. They are sent to our team by email and kept in our customer records for as long as we are in contact with you about advertising.</p>
          <p><strong>WhatsApp and calls.</strong> If you contact us on WhatsApp or by phone, that conversation is handled under WhatsApp’s or your telephone provider’s terms as well as ours.</p>
          <p><strong>Analytics.</strong> We use Google Analytics, through Google Tag Manager, to understand which pages are read and which contact routes are used. This records your device’s interaction with the site, not your identity. You can block it with your browser’s settings or an ad blocker; the site works the same without it.</p>
          <p><strong>Map.</strong> The contact page embeds a Google Map, which loads from Google and is subject to Google’s privacy policy.</p>
          <h2>Legal basis</h2>
          <p>We process enquiry details to take steps you have asked for before entering a contract, and analytics on the basis of our legitimate interest in running the website well. The Personal Data Protection Act, 2022 of Tanzania applies to our handling of personal data.</p>
          <h2>Sharing</h2>
          <p>Enquiries are delivered through an email service provider and stored by our customer-records and email providers. We do not sell personal information and we do not share it with other advertisers.</p>
          <h2>Your rights</h2>
          <p>You can ask what we hold about you, ask for it to be corrected or deleted, or object to its use, by writing to {site.email}. We reply within a month.</p>
          <h2>Changes</h2>
          <p>This notice was last updated on 2 October 2026. Changes are published on this page.</p>
        </div>
      </section>
    </>
  );
}
