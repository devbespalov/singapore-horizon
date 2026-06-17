import type { Metadata } from "next";
import LegalLayout, { LegalSection } from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Privacy Policy | Singapore Horizon",
  description:
    "Privacy Policy for Horizon Global Tours Pte. Ltd. — how we collect, use, and protect your personal data.",
};

export default function PrivacyPage() {
  return (
    <LegalLayout title="Privacy Policy" lastUpdated="17 June 2026">
      <LegalSection title="1. Introduction">
        <p>
          Horizon Global Tours Pte. Ltd. (&quot;we&quot;, &quot;us&quot;, or
          &quot;our&quot;), operating as Singapore Horizon, is committed to
          protecting your personal data. This Privacy Policy explains how we
          collect, use, disclose, and safeguard information when you visit our
          website at singapore-horizon.com or contact us regarding our B2B
          tourism services.
        </p>
        <p>
          We comply with the Personal Data Protection Act 2012 (PDPA) of
          Singapore and handle personal data in accordance with applicable laws.
        </p>
      </LegalSection>

      <LegalSection title="2. Information We Collect">
        <p>We may collect the following types of information:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <strong className="text-navy">Contact information</strong> — name,
            company name, email address, phone number, and any details you
            provide through our contact form.
          </li>
          <li>
            <strong className="text-navy">Business information</strong> — service
            interests, project requirements, group sizes, travel dates, and
            other details relevant to partnership inquiries.
          </li>
          <li>
            <strong className="text-navy">Technical information</strong> — IP
            address, browser type, device information, and pages visited, collected
            automatically through standard web server logs and analytics tools.
          </li>
        </ul>
      </LegalSection>

      <LegalSection title="3. How We Use Your Information">
        <p>We use the information we collect to:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>Respond to partnership and service inquiries</li>
          <li>Prepare proposals and quotations for B2B clients</li>
          <li>Communicate with travel agencies, tour operators, and corporate clients</li>
          <li>Improve our website and services</li>
          <li>Comply with legal and regulatory obligations</li>
        </ul>
      </LegalSection>

      <LegalSection title="4. Legal Basis for Processing">
        <p>
          Under the PDPA, we process personal data based on your consent (when
          you submit our contact form), our legitimate business interests (to
          respond to inquiries and operate our B2B services), and compliance with
          legal obligations.
        </p>
      </LegalSection>

      <LegalSection title="5. Disclosure of Information">
        <p>
          We do not sell your personal data. We may share information with:
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            Service providers who assist us in operating our website and
            communications (e.g., form submission and email delivery services)
          </li>
          <li>
            Professional advisers, regulators, or authorities when required by law
          </li>
          <li>
            Business partners involved in delivering tourism services, only as
            necessary to fulfil a confirmed booking or contract
          </li>
        </ul>
      </LegalSection>

      <LegalSection title="6. Data Retention">
        <p>
          We retain personal data only for as long as necessary to fulfil the
          purposes for which it was collected, including to satisfy legal,
          accounting, or reporting requirements. Inquiry data is typically
          retained for up to three years unless a longer period is required.
        </p>
      </LegalSection>

      <LegalSection title="7. Your Rights">
        <p>
          Under the PDPA, you have the right to access and request correction of
          your personal data, withdraw consent where applicable, and inquire about
          how your data is being used. To exercise these rights, contact us using
          the details below.
        </p>
      </LegalSection>

      <LegalSection title="8. Cookies">
        <p>
          Our website may use essential cookies to ensure proper functionality.
          We do not currently use advertising or tracking cookies. You can
          configure your browser to refuse cookies, though some features may not
          work correctly.
        </p>
      </LegalSection>

      <LegalSection title="9. Third-Party Services">
        <p>
          Our contact form uses Web3Forms to process submissions and deliver
          messages to our email address. Data submitted through the form is
          transmitted to Web3Forms in accordance with their privacy policy. We
          recommend reviewing their terms at{" "}
          <a
            href="https://web3forms.com/privacy"
            className="text-teal underline hover:text-teal-light"
            target="_blank"
            rel="noopener noreferrer"
          >
            web3forms.com/privacy
          </a>
          .
        </p>
      </LegalSection>

      <LegalSection title="10. Data Security">
        <p>
          We implement reasonable administrative, technical, and physical
          safeguards to protect personal data against unauthorised access,
          alteration, disclosure, or destruction. However, no method of
          transmission over the internet is completely secure.
        </p>
      </LegalSection>

      <LegalSection title="11. Changes to This Policy">
        <p>
          We may update this Privacy Policy from time to time. Changes will be
          posted on this page with an updated revision date. Continued use of
          our website after changes constitutes acceptance of the revised policy.
        </p>
      </LegalSection>

      <LegalSection title="12. Contact Us">
        <p>
          For privacy-related questions or requests, please contact:
        </p>
        <address className="not-italic">
          <p className="font-medium text-navy">Horizon Global Tours Pte. Ltd.</p>
          <p>332 Serangoon Avenue 3, #02-263</p>
          <p>Singapore 550332</p>
          <p>UEN: 202604703K</p>
          <p>
            Email:{" "}
            <a
              href="mailto:office@singapore-horizon.com"
              className="text-teal underline hover:text-teal-light"
            >
              office@singapore-horizon.com
            </a>
          </p>
          <p>
            Tel:{" "}
            <a
              href="tel:+6588949060"
              className="text-teal underline hover:text-teal-light"
            >
              +65 8894 9060
            </a>
          </p>
        </address>
      </LegalSection>
    </LegalLayout>
  );
}
