"use client";

import { useState } from "react";
import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import TiltCard from "@/components/ui/TiltCard";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { AMAZON_KDP_URL } from "@/lib/data";

const journalIncludes = [
  "Future Letter To Myself",
  "21-Day Sankalp Journey",
  "Gratitude Practice",
  "Awareness Exercises",
  "Reflection Prompts",
  "Weekly Check-ins",
  "Vision & Conscious Creation",
  "Alignment & Action Pages",
];

export default function JournalSection() {
  const [coverLoaded, setCoverLoaded] = useState(true);

  return (
    <section id="journal" className="relative aurora-gold py-24 md:py-32 px-6 overflow-hidden">
      <div className="glow-blob w-96 h-96 bg-sky-200/30 top-10 right-0" />
      <div className="glow-blob w-80 h-80 bg-blue-100/25 bottom-0 left-0" />

      <div className="relative max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Journal visual — 3D book mockup with cover image (drop your cover at
              public/journal/awareness-journal-cover.jpg — falls back to a styled
              placeholder automatically if that file isn't there yet) */}
          <Reveal direction="left">
            <div className="relative max-w-sm mx-auto">
              <motion.div
                animate={{ y: [-8, 8, -8] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              >
                <TiltCard intensity={10} className="aspect-[3/4]">
                  <div className="relative w-full h-full rounded-r-2xl rounded-l-md overflow-hidden shadow-[0_30px_60px_-15px_rgba(11,18,36,0.35)]">
                    {/* Spine shadow — reads as a real book edge */}
                    <div className="absolute inset-y-0 left-0 w-4 z-20 bg-gradient-to-r from-black/40 via-black/10 to-transparent" />
                    {/* Page-edge highlight on the right */}
                    <div className="absolute inset-y-1 right-0 w-1.5 z-20 bg-gradient-to-l from-white/70 to-transparent" />

                    {coverLoaded ? (
                      <Image
                        src="/journal/awareness-journal-cover.jpg"
                        alt="The Awareness Journal — cover"
                        fill
                        sizes="(max-width: 768px) 90vw, 40vw"
                        className="object-cover"
                        onError={() => setCoverLoaded(false)}
                      />
                    ) : (
                      <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a2e] via-[#0d1b2a] to-[#0a1628] flex flex-col items-center justify-center p-10 text-center">
                        <div className="w-16 h-px bg-gradient-to-r from-transparent via-[var(--accent-gold-light)] to-transparent mb-6" />
                        <div className="text-3xl mb-4 gradient-text-champagne">∞</div>
                        <h3 className="text-white/90 font-display text-2xl font-medium tracking-[3px] uppercase mb-1">
                          The Awareness
                        </h3>
                        <h3 className="gradient-text-champagne font-display text-3xl font-semibold tracking-[3px] uppercase mb-6">
                          Journal
                        </h3>
                        <p className="text-white/50 text-base tracking-[1.5px] uppercase leading-relaxed font-medium">
                          The Most Important Meeting Is With Yourself
                        </p>
                        <div className="w-16 h-px bg-gradient-to-r from-transparent via-[var(--accent-gold-light)] to-transparent mt-6" />
                      </div>
                    )}

                    {/* Subtle top sheen for a glossy cover finish */}
                    <div className="absolute inset-0 z-10 bg-gradient-to-br from-white/15 via-transparent to-black/20 pointer-events-none" />
                  </div>
                </TiltCard>
              </motion.div>
              <div className="absolute inset-0 bg-sky-200/15 rounded-[2.5rem] blur-3xl -z-10" />

              {/* Enroll-style CTA sitting right beside the cover — placeholder link,
                  swap AMAZON_KDP_URL in lib/data.ts once the book is live */}
              <a
                href={AMAZON_KDP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group/amz relative mt-8 w-full flex items-center justify-center gap-2 overflow-hidden rounded-full py-3.5 text-base font-semibold tracking-tight text-white transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                style={{
                  background: "linear-gradient(135deg, var(--accent-gold-deep), var(--accent-gold))",
                  boxShadow: "0 12px 28px -8px color-mix(in srgb, var(--accent-gold) 55%, transparent)",
                }}
              >
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-0 -translate-x-full group-hover/amz:translate-x-full transition-transform duration-700 ease-out"
                  style={{ background: "linear-gradient(115deg, transparent 40%, rgba(255,255,255,0.4) 50%, transparent 60%)" }}
                />
                <span className="relative inline-flex items-center gap-2">
                  Get It On Amazon
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/amz:translate-x-1" strokeWidth={2.5} />
                </span>
              </a>
              <p className="text-[var(--text-muted)] text-xs mt-2.5 text-center">
                Available in paperback &amp; Kindle
              </p>
            </div>
          </Reveal>

          {/* Journal info */}
          <Reveal direction="right">
            <div>
              <span className="text-[var(--accent-ink)] text-base tracking-[3px] uppercase font-semibold mb-3 block">
                Start Here
              </span>
              <h2 className="font-display text-[var(--text-primary)] text-4xl md:text-5xl font-semibold mb-3 leading-tight">
                The Awareness Journal
              </h2>
              <p className="gradient-text-gold text-base tracking-widest uppercase font-bold mb-6">
                The Most Important Meeting Is With Yourself
              </p>
              <p className="text-[var(--text-secondary)] text-base leading-relaxed mb-4">
                A guided 21-day self-discovery and transformation journey.
              </p>
              <p className="text-[var(--text-tertiary)] text-base leading-relaxed mb-8">
                Most people spend their lives meeting everyone except themselves. The Awareness Journal helps you reconnect with yourself through reflection, gratitude, Sankalp, awareness, and conscious action.
              </p>

              {/* Includes */}
              <h4 className="text-[var(--text-tertiary)] text-base tracking-[2px] uppercase font-semibold mb-4">
                Journal Includes
              </h4>
              <div className="grid grid-cols-2 gap-y-3 gap-x-4 mb-8">
                {journalIncludes.map((item, i) => (
                  <motion.div
                    key={item}
                    className="flex items-center gap-2"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06 }}
                    viewport={{ once: true }}
                  >
                    <span className="text-[var(--accent-ink)] text-base flex-shrink-0">✓</span>
                    <span className="text-[var(--text-secondary)] text-base">{item}</span>
                  </motion.div>
                ))}
              </div>

              {/* Quote */}
              <div className="glass-card rounded-2xl p-5 mb-8 border-l-[3px] border-l-[var(--accent-ink)]">
                <p className="text-[var(--text-secondary)] text-base italic leading-relaxed font-display">
                  &ldquo;When you switch on the light of awareness, you cannot unsee the truth.&rdquo;
                </p>
              </div>

              {/* Rating row */}
              <div className="flex items-center gap-2 mb-6">
                <div className="flex gap-0.5 text-[var(--accent-gold)] text-lg leading-none">
                  {"★★★★★"}
                </div>
                <span className="text-[var(--text-tertiary)] text-sm font-medium">
                  Available in paperback &amp; Kindle
                </span>
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <a
                  href={AMAZON_KDP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold text-base"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path d="M3 15.5C6.5 18 17.5 18 21 15.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                    <path d="M18.5 13c1.2 0 2 1.2 1.4 2.3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                    <rect x="7" y="4" width="10" height="12" rx="1.2" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M9.5 7.5h5M9.5 10h5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
                  </svg>
                  Get It On Amazon
                </a>
                <a
                  href="#programs"
                  className="text-[var(--accent-ink)] font-semibold text-base underline underline-offset-4 decoration-[var(--accent-gold)]/50 hover:decoration-[var(--accent-gold)] transition-colors"
                >
                  Or start a guided program →
                </a>
              </div>
              <p className="text-[var(--text-muted)] text-xs mt-4">
                Published independently via Amazon KDP. You&apos;ll be redirected to the book&apos;s Amazon page.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
