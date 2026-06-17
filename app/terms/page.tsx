import type { Metadata } from "next";
import LegalLayout, { LegalSection } from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Terms of Service | Singapore Horizon",
  description:
    "Terms of Service for Horizon Global Tours Pte. Ltd. — B2B tourism services in Singapore.",
};

export default function TermsPage() {
  return (
    <LegalLayout title="Terms of Service" lastUpdated="17 June 2026">
      <LegalSection title="1. Introduction">
        <p>
          These Terms of Service (&quot;Terms&quot;) govern your use of the
          website singapore-horizon.com and your engagement with Horizon Global
          Tours Pte. Ltd. (&quot;Company&quot;, &quot;we&quot;, &quot;us&quot;),
          operating as Singapore Horizon. By accessing our website or submitting
          an inquiry, you agree to these Terms.
        </p>
        <p>
          Our services are provided exclusively on a business-to-business (B2B)
          basis to travel agencies, tour operators, corporate clients, and other
          commercial partners. We do not offer services directly to individual
          consumers.
        </p>
      </LegalSection>

      <LegalSection title="2. About Us">
        <p>
          Horizon Global Tours Pte. Ltd. is a company registered in Singapore
          (UEN: 202604703K) providing destination management, MICE, group tours,
          and related tourism services in Singapore and the region.
        </p>
        <address className="not-italic">
          <p>332 Serangoon Avenue 3, #02-263</p>
          <p>Singapore 550332</p>
          <p>
            Email:{" "}
            <a
              href="mailto:office@singapore-horizon.com"
              className="text-teal underline hover:text-teal-light"
            >
              office@singapore-horizon.com
            </a>
          </p>
        </address>
      </LegalSection>

      <LegalSection title="3. Services">
        <p>
          We provide B2B tourism services including but not limited to
          destination management (DMC), MICE and corporate events, group tours
          and FIT packages, VIP experiences, team building programmes, and
          multi-destination itineraries. Specific services, inclusions, and
          pricing are defined in individual proposals and contracts agreed with
          each partner.
        </p>
      </LegalSection>

      <LegalSection title="4. Website Use">
        <p>You agree to use our website only for lawful purposes. You must not:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>Use the website in any way that violates applicable laws or regulations</li>
          <li>Attempt to gain unauthorised access to our systems or data</li>
          <li>Transmit harmful code, spam, or misleading information</li>
          <li>Reproduce, distribute, or commercially exploit website content without permission</li>
        </ul>
      </LegalSection>

      <LegalSection title="5. Partnership Inquiries">
        <p>
          Information submitted through our contact form or other channels
          constitutes a business inquiry only and does not create a binding
          contract. All services are subject to availability, confirmation, and
          execution of a separate written agreement or booking confirmation
          between the Company and the partner.
        </p>
      </LegalSection>

      <LegalSection title="6. Pricing and Payment">
        <p>
          Prices quoted are net B2B rates unless otherwise stated. Payment terms,
          currency, deposits, and settlement schedules are specified in individual
          contracts or booking confirmations. We reserve the right to adjust
          pricing where third-party supplier costs change before confirmation.
        </p>
      </LegalSection>

      <LegalSection title="7. Cancellations and Amendments">
        <p>
          Cancellation and amendment policies vary by service type, supplier
          terms, and contract conditions. Specific terms will be outlined in
          each proposal or agreement. Partners are responsible for communicating
          applicable terms to their end clients.
        </p>
      </LegalSection>

      <LegalSection title="8. Liability">
        <p>
          To the fullest extent permitted by Singapore law, our liability for
          any claim arising from our services is limited to the fees paid for
          the specific service giving rise to the claim. We are not liable for
          indirect, consequential, or special damages, including loss of profit
          or business opportunity.
        </p>
        <p>
          We act as an intermediary with third-party suppliers (hotels,
          attractions, transport providers, etc.). While we exercise reasonable
          care in selecting suppliers, we are not responsible for acts or
          omissions of third parties beyond our direct control.
        </p>
      </LegalSection>

      <LegalSection title="9. Intellectual Property">
        <p>
          All content on this website — including text, images, logos, and
          design — is owned by or licensed to Horizon Global Tours Pte. Ltd.
          and protected by intellectual property laws. Partners may use
          marketing materials we provide solely for promoting our services to
          their clients, unless otherwise agreed in writing.
        </p>
      </LegalSection>

      <LegalSection title="10. Confidentiality">
        <p>
          Both parties agree to treat non-public business information shared
          during the course of a partnership as confidential, unless disclosure
          is required by law or the information is already publicly available.
        </p>
      </LegalSection>

      <LegalSection title="11. Governing Law">
        <p>
          These Terms are governed by the laws of the Republic of Singapore.
          Any disputes arising from or in connection with these Terms shall be
          subject to the exclusive jurisdiction of the courts of Singapore.
        </p>
      </LegalSection>

      <LegalSection title="12. Changes to These Terms">
        <p>
          We may revise these Terms at any time by updating this page. Material
          changes will be indicated by an updated date. Your continued use of
          the website after changes constitutes acceptance of the revised Terms.
        </p>
      </LegalSection>

      <LegalSection title="13. Contact">
        <p>
          For questions about these Terms, please contact us at{" "}
          <a
            href="mailto:office@singapore-horizon.com"
            className="text-teal underline hover:text-teal-light"
          >
            office@singapore-horizon.com
          </a>{" "}
          or call{" "}
          <a
            href="tel:+6588949060"
            className="text-teal underline hover:text-teal-light"
          >
            +65 8894 9060
          </a>
          .
        </p>
      </LegalSection>
    </LegalLayout>
  );
}
