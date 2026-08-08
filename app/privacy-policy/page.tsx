import type { Metadata } from "next";
import LegalPageShell from "@/components/legal/LegalPageShell";

export const metadata: Metadata = {
  title: "Privacy Policy | Captanova Academy",
  description: "How Captanova Academy collects, uses, and protects your personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPageShell title="Privacy Policy" lastUpdated="26 July 2026">
      <h2>1. Who We Are</h2>
      <p>
        This Privacy Policy explains how <span className="placeholder">[Registered Business Name / Entity Type — e.g. Captanova Academy, a sole proprietorship / Pvt. Ltd. company]</span>{" "}
        (&quot;Captanova&quot;, &quot;we&quot;, &quot;us&quot;, &quot;our&quot;) collects, uses, discloses,
        and protects the personal information of visitors to captanovaacademy.com and users of our
        coaching programs, masterclasses, and related digital products (collectively, the
        &quot;Services&quot;). This policy is drafted in line with India&apos;s Information Technology
        Act, 2000, the Information Technology (Reasonable Security Practices and Procedures and
        Sensitive Personal Data or Information) Rules, 2011, and the Digital Personal Data
        Protection Act, 2023.
      </p>

      <h2>2. Information We Collect</h2>
      <h3>2.1 Information you give us directly</h3>
      <ul>
        <li>Name, email address, and phone number when you register for our free masterclass, take our self-assessment quiz, sign up for our free daily reset, or enrol in a paid program.</li>
        <li>City and age range, when you register for the free masterclass.</li>
        <li>Payment-related details (such as billing name and email) when you purchase a program — we do <strong>not</strong> collect or store your card, UPI, or bank details ourselves; these are handled entirely by our payment processor, Razorpay.</li>
        <li>Any information you voluntarily share with us over email, WhatsApp, or in coaching sessions.</li>
      </ul>
      <h3>2.2 Information collected automatically</h3>
      <ul>
        <li>Usage data such as pages visited, time spent, and referring URLs, via Google Analytics.</li>
        <li>Advertising and conversion data via Meta Pixel, used to measure and improve our ad campaigns.</li>
        <li>Standard technical data (IP address, browser type, device type) collected by our hosting provider for security and performance purposes.</li>
      </ul>

      <h2>3. How We Use Your Information</h2>
      <ul>
        <li>To create and deliver your Captanova Growth Profile™, program access, and masterclass registration.</li>
        <li>To process payments and send purchase confirmations and receipts.</li>
        <li>To send you programme-related emails, reminders, and (if you&apos;ve opted in) marketing communications — you can unsubscribe at any time.</li>
        <li>To respond to your enquiries via email or WhatsApp.</li>
        <li>To improve our Services, content, and marketing based on aggregated, anonymised usage patterns.</li>
        <li>To comply with legal obligations, including tax and accounting record-keeping.</li>
      </ul>

      <h2>4. Who We Share Your Information With</h2>
      <p>We do not sell your personal information. We share limited data with the following third-party service providers, solely to operate the Services:</p>
      <ul>
        <li><strong>Razorpay</strong> — payment processing for paid programs.</li>
        <li><strong>Resend</strong> — transactional emails (confirmations, welcome emails, reminders).</li>
        <li><strong>Google Sheets / Google Apps Script</strong> — internal record-keeping of leads, registrations, and purchases.</li>
        <li><strong>Meta (Facebook/Instagram) Pixel</strong> and <strong>Google Analytics</strong> — website analytics and advertising measurement.</li>
        <li><strong>WhatsApp Business</strong> — if you choose to contact us or opt in to WhatsApp reminders.</li>
        <li><strong>Amazon</strong> — if you purchase &quot;The Awareness Journal&quot;, that transaction is completed entirely on Amazon&apos;s platform and governed by Amazon&apos;s own privacy policy, not this one.</li>
      </ul>
      <p>Each of these providers processes data under their own privacy and security policies. We choose providers that maintain industry-standard security practices.</p>

      <h2>5. Cookies &amp; Tracking</h2>
      <p>
        We use cookies and similar technologies (via Google Analytics and Meta Pixel) to understand
        how visitors use our site and to measure the effectiveness of our marketing. You can disable
        cookies in your browser settings, though some site features may not function as intended if
        you do.
      </p>

      <h2>6. Data Retention</h2>
      <p>
        We retain personal information for as long as necessary to provide the Services, comply with
        our legal and tax obligations (typically <span className="placeholder">[X years, per applicable tax law]</span>),
        resolve disputes, and enforce our agreements. You may request deletion of your data at any
        time as described in Section 8, subject to our legal retention obligations.
      </p>

      <h2>7. Data Security</h2>
      <p>
        We implement reasonable technical and organisational measures — including encrypted
        connections (HTTPS), signature-verified payment confirmation via Razorpay, and restricted
        access to stored data — to protect your personal information. However, no method of
        transmission or storage over the internet is 100% secure, and we cannot guarantee absolute
        security.
      </p>

      <h2>8. Your Rights</h2>
      <p>You have the right to:</p>
      <ul>
        <li>Access the personal information we hold about you.</li>
        <li>Request correction of inaccurate or incomplete information.</li>
        <li>Request deletion of your personal information, subject to legal retention requirements.</li>
        <li>Withdraw consent to marketing communications at any time.</li>
        <li>Lodge a complaint with our Grievance Officer (Section 11) if you believe your data has been mishandled.</li>
      </ul>
      <p>
        To exercise any of these rights, email us at{" "}
        <span className="placeholder">[privacy@captanova.com]</span>.
      </p>

      <h2>9. Children&apos;s Privacy</h2>
      <p>
        Our Services are intended for individuals aged 18 and above. We do not knowingly collect
        personal information from anyone under 18 without verifiable parental or guardian consent.
        If you believe a minor has provided us with personal information, please contact us so we
        can remove it.
      </p>

      <h2>10. International Visitors</h2>
      <p>
        Our Services are primarily operated for users in India and our servers/service providers may
        be located in India or other countries. By using our Services, you consent to the transfer
        and processing of your information in accordance with this policy, wherever our service
        providers are located.
      </p>

      <h2>11. Grievance Officer</h2>
      <p>
        In accordance with the Information Technology Act, 2000 and the rules made thereunder, the
        contact details of our Grievance Officer are:
      </p>
      <ul>
        <li>Name: <span className="placeholder">[Grievance Officer Name]</span></li>
        <li>Email: <span className="placeholder">[grievance@captanova.com]</span></li>
        <li>Address: <span className="placeholder">[Registered Business Address]</span></li>
      </ul>
      <p>We aim to acknowledge complaints within 24 hours and resolve them within 15 days, as required by law.</p>

      <h2>12. Changes to This Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. Material changes will be reflected by
        an updated &quot;Last updated&quot; date at the top of this page. Continued use of our
        Services after changes constitutes acceptance of the revised policy.
      </p>

      <h2>13. Contact Us</h2>
      <p>
        For any questions about this Privacy Policy, contact us at{" "}
        <span className="placeholder">[privacy@captanova.com]</span> or write to us at{" "}
        <span className="placeholder">[Registered Business Address]</span>.
      </p>
    </LegalPageShell>
  );
}
