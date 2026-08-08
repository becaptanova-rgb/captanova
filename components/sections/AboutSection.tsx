"use client";

import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import { motion } from "framer-motion";

const bioPoints = [
  "Born and raised in Denmark with Indian roots.",
  "Years of personal development work.",
  "Experience coaching and mentoring individuals and leaders.",
  "Deeply influenced by transformational teachings including Bob Proctor's Thinking Into Results program, along with years of personal study, awareness practices, and real-life experience.",
  "Created Captanova to bridge the gap between knowing and doing.",
];

export default function AboutSection() {
  return (
    <section id="about" className="relative bg-white py-24 md:py-32 px-6 overflow-hidden">
      <div className="glow-blob w-96 h-96 bg-sky-100/40 top-20 left-0" />
      <div className="glow-blob w-80 h-80 bg-blue-100/30 bottom-0 right-10" />

      <div className="relative max-w-6xl mx-auto">
        {/* Meet Renu */}
        <div className="grid md:grid-cols-[380px_1fr] lg:grid-cols-[420px_1fr] gap-10 md:gap-14 lg:gap-16 items-center mb-24">
          {/* Photo */}
          <Reveal direction="left">
            <div className="relative w-full max-w-[300px] sm:max-w-[340px] md:max-w-none mx-auto md:mx-0">
              <div className="glass-card rounded-[2.5rem] aspect-[4/5] overflow-hidden relative">
                <Image
                  src="/mentors/renu-guide-portrait.jpg"
                  alt="Renu Sharma, Founder of Captanova"
                  fill
                  sizes="(max-width: 768px) 340px, 420px"
                  className="object-cover object-top"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
              </div>
              {/* Decorative floating accents */}
              <motion.div
                className="absolute -bottom-6 -right-6 w-24 h-24 md:w-28 md:h-28 glass-card rounded-3xl -z-10"
                animate={{ y: [-4, 4, -4] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              <motion.div
                className="absolute -top-6 -left-6 w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br from-[var(--accent-primary)]/20 to-[var(--accent-royal)]/20 -z-10"
                animate={{ y: [4, -4, 4] }}
                transition={{ duration: 5, repeat: Infinity }}
              />
            </div>
          </Reveal>

          {/* Bio */}
          <Reveal direction="right">
            <div>
              <span className="text-[var(--accent-ink)] text-base tracking-[3px] uppercase font-semibold mb-4 block">
                Meet Your Guide
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-semibold mb-2 leading-tight">
                <span className="text-[var(--text-primary)]">Renu </span>
                <span className="gradient-text-champagne italic">Sharma</span>
              </h2>
              <div className="flex items-center gap-3 mb-7">
                <svg width="72" height="14" viewBox="0 0 72 14" fill="none" className="flex-shrink-0" aria-hidden>
                  <path
                    d="M1 10.5C10 2.5 16 2 22 7.5C28 13 34 4 42 4.5C50 5 54 11 62 8C66.5 6.3 69 4.5 71 3"
                    stroke="url(#sig-grad)"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    fill="none"
                  />
                  <defs>
                    <linearGradient id="sig-grad" x1="0" y1="0" x2="72" y2="0">
                      <stop offset="0%" stopColor="var(--accent-gold-deep)" />
                      <stop offset="100%" stopColor="var(--accent-gold-light)" />
                    </linearGradient>
                  </defs>
                </svg>
                <p className="text-[var(--text-tertiary)] text-base font-medium tracking-wide">
                  Founder &amp; Lead Coach, Captanova
                </p>
              </div>
              <ul className="space-y-4 mb-8">
                {bioPoints.map((point, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-[var(--accent-ink)] mt-1 flex-shrink-0 text-base">✦</span>
                    <span className="text-[var(--text-secondary)] text-base leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>

              {/* Mission quote */}
              <div className="glass-card rounded-2xl p-6 border-l-[3px] border-l-[var(--accent-primary)]">
                <p className="text-[var(--text-primary)] text-lg leading-relaxed italic font-display">
                  &quot;My mission is simple: To help you become the captain of your life — through awareness, confidence, communication, action, and leadership.&quot;
                </p>
                <cite className="gradient-text-champagne text-base mt-3 block not-italic font-semibold tracking-[2px]">
                  — RENU SHARMA
                </cite>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Why Captanova split */}
        <Reveal>
          <div className="glass-card hover-lift rounded-[2rem] p-6 sm:p-10 text-center max-w-2xl mx-auto bg-gradient-to-br from-white/90 via-blue-50/30 to-sky-50/30">
            <h3 className="font-display text-[var(--text-primary)] text-2xl font-semibold mb-8">
              Why <span className="gradient-text-purple">Captanova</span>?
            </h3>
            <div className="grid grid-cols-2 gap-4 sm:gap-8 mb-8">
              <div className="min-w-0">
                <div className="text-[var(--accent-ink)] text-sm sm:text-base tracking-[1px] sm:tracking-[2px] uppercase font-semibold mb-3 break-words">
                  Eastern Awareness
                </div>
                <p className="text-[var(--text-tertiary)] text-sm sm:text-base leading-relaxed">
                  Ancient wisdom, mindfulness, Sankalp, conscious presence
                </p>
              </div>
              <div className="min-w-0">
                <div className="text-[var(--accent-royal)] text-sm sm:text-base tracking-[1px] sm:tracking-[2px] uppercase font-semibold mb-3 break-words">
                  Western Implementation
                </div>
                <p className="text-[var(--text-tertiary)] text-sm sm:text-base leading-relaxed">
                  Modern systems, accountability, action frameworks, results
                </p>
              </div>
            </div>
            <div className="text-[var(--text-tertiary)] text-2xl mb-6">+</div>
            <motion.p
              className="text-[var(--text-secondary)] text-base leading-relaxed"
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              Captanova combines the best of both worlds to create real, lasting change.
            </motion.p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
