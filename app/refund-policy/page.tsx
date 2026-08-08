import type { Metadata } from "next";
import LegalPageShell from "@/components/legal/LegalPageShell";

export const metadata: Metadata = {
  title: "Refund Policy | Captanova Academy",
  description: "Our refund and cancellation policy for coaching programs and masterclasses.",
};

export default function RefundPolicyPage() {
  return (
    <LegalPageShell title="Refund & Cancellation Policy" lastUpdated="26 July 2026">
      <h2>1. Overview</h2>
      <p>
        We want you to feel confident about investing in your growth with Captanova. This policy
        explains when refunds are available, how to request one, and how long processing takes.
        This policy is provided in line with the Consumer Protection (E-Commerce) Rules, 2020.
      </p>

      <h2>2. Free Masterclasses &amp; Assessments</h2>
      <p>
        Our masterclasses and self-assessment quiz are free of charge, so no payment is collected
        and no refund is applicable. If you registered and can no longer attend, no action is
        required — a replay link (where available) will be sent to your registered email.
      </p>

      <h2>3. Digital Coaching Programs</h2>
      <p>
        This section applies to paid, digital coaching programs purchased directly on
        captanovaacademy.com (e.g. Mindset Mastery, the Captanova Transformation System™, and
        Leadership Mentorship).
      </p>
      <ul>
        <li>
          You may request a full refund within{" "}
          <span className="placeholder">[X days — e.g. 7 days]</span> of your purchase date,
          provided you have <strong>not</strong> accessed more than{" "}
          <span className="placeholder">[X% — e.g. 20%]</span> of the program content and/or
          attended more than <span className="placeholder">[X — e.g. 1]</span> live session
          (whichever is more restrictive for the relevant program).
        </li>
        <li>
          Once the refund window has passed, or the usage threshold above has been exceeded,
          purchases are <strong>non-refundable</strong>, as digital access and coach time have
          already been delivered.
        </li>
        <li>
          For mentorship or 1:1 programs already in progress, no refund is available for sessions
          already completed; a pro-rated refund for genuinely unused, future sessions may be
          considered at our discretion in exceptional circumstances (e.g. serious medical
          emergency), evaluated case by case.
        </li>
      </ul>

      <h2>4. &quot;The Awareness Journal&quot;</h2>
      <p>
        The Awareness Journal is sold via Amazon (paperback and Kindle), not directly by Captanova.
        Any return, refund, or exchange for this product is governed entirely by{" "}
        <a href="https://www.amazon.in/gp/help/customer/display.html" target="_blank" rel="noopener noreferrer">
          Amazon&apos;s own return policy
        </a>{" "}
        for the applicable format. Please contact Amazon customer service directly for any issue
        with this purchase.
      </p>

      <h2>5. Non-Refundable Circumstances</h2>
      <p>We do not offer refunds in the following situations:</p>
      <ul>
        <li>Change of mind after the applicable refund window (Section 3) has passed.</li>
        <li>Failure to attend live sessions or complete the program at your own pace, where content remains accessible to you.</li>
        <li>Removal from a program for violating our <a href="/terms-of-service">Terms of Service</a>.</li>
        <li>Dissatisfaction with personal results, where the program was delivered as described (see &quot;No Guaranteed Results&quot; in our Terms of Service).</li>
      </ul>

      <h2>6. How to Request a Refund</h2>
      <p>To request a refund, email us at <span className="placeholder">[refunds@captanova.com]</span> with:</p>
      <ul>
        <li>Your full name and the email address used at checkout.</li>
        <li>Your Razorpay order ID or payment ID (found in your purchase confirmation email).</li>
        <li>The program name and reason for your request.</li>
      </ul>
      <p>
        We aim to respond to all refund requests within{" "}
        <span className="placeholder">[X business days — e.g. 3 business days]</span>.
      </p>

      <h2>7. Refund Processing Time</h2>
      <p>
        Approved refunds are processed back to your original payment method via Razorpay. Once
        initiated, funds typically reflect in your account within{" "}
        <span className="placeholder">[X–Y business days — e.g. 7–10 business days]</span>,
        depending on your bank or card issuer&apos;s own processing timelines, which are outside our
        control.
      </p>

      <h2>8. Disputes &amp; Chargebacks</h2>
      <p>
        If you have a concern about a charge, please contact us first at{" "}
        <span className="placeholder">[refunds@captanova.com]</span> so we can try to resolve it
        directly. Initiating a chargeback with your bank without first contacting us may delay
        resolution and can result in suspension of your program access while the dispute is
        investigated.
      </p>

      <h2>9. Changes to This Policy</h2>
      <p>
        We may update this Refund &amp; Cancellation Policy from time to time. The refund terms in
        effect at the time of your purchase will apply to that purchase, regardless of later
        updates to this page.
      </p>

      <h2>10. Contact Us</h2>
      <p>
        For any refund-related question, reach us at{" "}
        <span className="placeholder">[refunds@captanova.com]</span>.
      </p>
    </LegalPageShell>
  );
}
