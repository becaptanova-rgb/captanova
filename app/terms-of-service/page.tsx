import type { Metadata } from "next";
import LegalPageShell from "@/components/legal/LegalPageShell";

export const metadata: Metadata = {
  title: "Terms of Service | Captanova Academy",
  description: "The terms governing your use of Captanova Academy's programs, masterclasses, and website.",
};

export default function TermsOfServicePage() {
  return (
    <LegalPageShell title="Terms of Service" lastUpdated="26 July 2026">
      <h2>1. Agreement to Terms</h2>
      <p>
        These Terms of Service (&quot;Terms&quot;) govern your access to and use of
        captanovaacademy.com and all coaching programs, masterclasses, journals, and related
        digital products offered by <span className="placeholder">[Registered Business Name / Entity Type]</span>{" "}
        (&quot;Captanova&quot;, &quot;we&quot;, &quot;us&quot;). By registering for a masterclass,
        purchasing a program, or otherwise using our Services, you agree to be bound by these Terms.
        If you do not agree, please do not use our Services.
      </p>

      <h2>2. Eligibility</h2>
      <p>
        Our Services are intended for individuals aged 18 and above. If you are under 18, you may
        only use our Services with the involvement and consent of a parent or legal guardian.
      </p>

      <h2>3. Our Services</h2>
      <p>Captanova offers, among other things:</p>
      <ul>
        <li>Free live masterclasses and self-assessment quizzes.</li>
        <li>Paid coaching programs, including but not limited to Mindset Mastery, the Captanova Transformation System™, and Leadership Mentorship.</li>
        <li>&quot;The Awareness Journal&quot; — a physical/Kindle book sold via Amazon, subject to Amazon&apos;s own terms and policies, not these Terms.</li>
      </ul>
      <p>
        Program formats, curricula, session counts, and delivery methods (live, recorded, group, or
        1:1) are as described on the relevant program page at the time of your purchase and may be
        updated by us from time to time for future cohorts.
      </p>

      <h2>4. Payments &amp; Pricing</h2>
      <ul>
        <li>All prices are listed in Indian Rupees (₹) and are inclusive/exclusive of applicable taxes as stated at checkout.</li>
        <li>Payments are processed securely through Razorpay. We do not store your card, UPI, or banking details.</li>
        <li>Access to paid programs is granted only after successful payment verification.</li>
        <li>Refunds, where applicable, are governed by our separate <a href="/refund-policy">Refund Policy</a>.</li>
      </ul>

      <h2>5. Intellectual Property</h2>
      <p>
        All content provided as part of our Services — including but not limited to session
        recordings, worksheets, frameworks, the Captanova Growth Profile™ methodology, and written
        materials — is the intellectual property of Captanova and is licensed to you for personal,
        non-commercial use only. You may not copy, reproduce, distribute, resell, or publicly share
        this content without our prior written consent.
      </p>

      <h2>6. Not Medical, Psychological, or Financial Advice</h2>
      <p>
        Captanova&apos;s coaching, masterclasses, and content are for educational and personal
        development purposes only. They are <strong>not</strong> a substitute for professional
        medical, psychiatric, psychological, legal, or financial advice. Coaching is not therapy or
        mental health treatment. If you are experiencing a mental health crisis, please seek help
        from a licensed professional or a crisis helpline immediately. Nothing in our Services
        should be relied upon as medical or clinical guidance.
      </p>

      <h2>7. No Guaranteed Results</h2>
      <p>
        Testimonials, case studies, and results shared on our website and marketing materials
        reflect individual experiences and are not guarantees of similar results for every
        participant. Your outcomes depend on factors including your effort, consistency, and
        personal circumstances. We make no promise that any program will achieve a specific
        financial, career, relationship, or personal outcome.
      </p>

      <h2>8. User Conduct</h2>
      <p>By participating in our Services, you agree not to:</p>
      <ul>
        <li>Share your program access, login credentials, or recorded materials with anyone who has not purchased the program.</li>
        <li>Record, redistribute, or publicly share live session content without our written permission.</li>
        <li>Engage in disruptive, abusive, or harassing behaviour toward Captanova staff, coaches, or other participants.</li>
        <li>Use our Services for any unlawful purpose.</li>
      </ul>
      <p>We reserve the right to remove any participant from a program, without refund, for serious or repeated violation of this section.</p>

      <h2>9. Limitation of Liability</h2>
      <p>
        To the maximum extent permitted by law, Captanova and its founders, employees, and
        affiliates shall not be liable for any indirect, incidental, special, or consequential
        damages arising from your use of, or inability to use, our Services. Our total liability for
        any claim arising out of your purchase shall not exceed the amount you paid for the specific
        program giving rise to the claim.
      </p>

      <h2>10. Termination</h2>
      <p>
        We may suspend or terminate your access to a program if you violate these Terms. You may
        stop using our free Services at any time. Termination of paid program access due to a Terms
        violation does not entitle you to a refund.
      </p>

      <h2>11. Governing Law &amp; Dispute Resolution</h2>
      <p>
        These Terms are governed by the laws of India. Any disputes arising out of or relating to
        these Terms or our Services shall be subject to the exclusive jurisdiction of the courts in{" "}
        <span className="placeholder">[Jurisdiction City, e.g. Indore, Madhya Pradesh]</span>, India.
      </p>

      <h2>12. Changes to These Terms</h2>
      <p>
        We may revise these Terms from time to time. The updated version will be indicated by a
        revised &quot;Last updated&quot; date. Continued use of our Services after changes become
        effective constitutes your acceptance of the revised Terms.
      </p>

      <h2>13. Contact Us</h2>
      <p>
        Questions about these Terms can be sent to{" "}
        <span className="placeholder">[hello@captanova.com]</span>.
      </p>
    </LegalPageShell>
  );
}
