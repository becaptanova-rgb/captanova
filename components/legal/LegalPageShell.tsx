import Link from "next/link";
import { AlertTriangle } from "lucide-react";

interface LegalPageShellProps {
  title: string;
  lastUpdated: string;
  children: React.ReactNode;
}

export default function LegalPageShell({ title, lastUpdated, children }: LegalPageShellProps) {
  return (
    <main className="bg-white min-h-screen">
      {/* Minimal header — scoped to legal pages, no homepage anchor links */}
      <div className="sticky top-0 z-50 glass-strong border-b border-black/[0.06]">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="font-display gradient-text-purple text-base tracking-[2px] uppercase font-semibold">
            Captanova
          </Link>
          <Link href="/" className="text-[var(--text-tertiary)] hover:text-[var(--accent-primary)] text-sm font-medium transition-colors">
            ← Back to Home
          </Link>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
        <p className="text-[var(--accent-primary)] text-base tracking-[3px] uppercase font-bold mb-3">
          Legal
        </p>
        <h1 className="font-display text-3xl md:text-4xl font-semibold text-[var(--text-primary)] mb-2">
          {title}
        </h1>
        <p className="text-[var(--text-tertiary)] text-base mb-10">Last updated: {lastUpdated}</p>

        {/* Draft/template disclaimer — remove this block once a lawyer has reviewed and finalized the page */}
        <div className="glass-card rounded-2xl p-5 mb-10 flex gap-3 border-l-[3px] border-l-amber-500/60">
          <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" strokeWidth={2} />
          <p className="text-[var(--text-secondary)] text-[15px] leading-relaxed">
            <strong className="text-[var(--text-primary)]">Draft template — review before publishing.</strong>{" "}
            This document was generated as a starting point based on common practice for Indian
            online-coaching/ed-tech businesses (IT Act 2000, IT Rules 2021, Consumer Protection
            (E-Commerce) Rules 2020, and the Digital Personal Data Protection Act 2023). It is not
            legal advice. Fields marked <span className="placeholder">like this</span> are
            placeholders you must fill in, and a qualified lawyer should review the final wording
            before this page goes live for real customers.
          </p>
        </div>

        <div className="legal-prose">{children}</div>
      </div>

      <footer className="border-t border-black/[0.06] py-10 px-6">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[var(--text-tertiary)] text-sm">
            © {new Date().getFullYear()} Captanova Academy. All rights reserved.
          </p>
          <div className="flex gap-5">
            <Link href="/privacy-policy" className="text-[var(--text-tertiary)] hover:text-[var(--accent-primary)] text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="text-[var(--text-tertiary)] hover:text-[var(--accent-primary)] text-sm transition-colors">
              Terms of Service
            </Link>
            <Link href="/refund-policy" className="text-[var(--text-tertiary)] hover:text-[var(--accent-primary)] text-sm transition-colors">
              Refund Policy
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
