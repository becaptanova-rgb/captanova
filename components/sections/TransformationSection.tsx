"use client";

import Reveal from "@/components/ui/Reveal";
import TiltCard from "@/components/ui/TiltCard";
import IconOrb from "@/components/ui/IconOrb";
import { motion } from "framer-motion";
import { XCircle, CheckCircle2, ArrowRight } from "lucide-react";

const before = [
  "Overthinking every decision",
  "Lack of confidence",
  "Fear of speaking up",
  "Procrastination",
  "Self-doubt",
  "Lack of direction",
  "Consuming content without change",
];

const after = [
  "Mental clarity",
  "Stronger confidence",
  "Better communication",
  "Consistent action",
  "Better decisions",
  "Greater self-awareness",
  "Self-leadership",
];

export default function TransformationSection() {
  return (
    <section className="relative aurora-coral py-24 md:py-32 px-6 overflow-hidden">
      <div className="glow-blob w-96 h-96 bg-slate-200/30 top-0 right-1/4" />
      <div className="glow-blob w-80 h-80 bg-cyan-100/30 bottom-10 left-10" />

      <div className="relative max-w-6xl mx-auto">
        <Reveal>
          <h2 className="text-center font-display text-[var(--text-primary)] text-3xl md:text-4xl font-semibold mb-3">
            Results <span className="text-[var(--accent-slate)] italic">Transformation</span>
          </h2>
          <p className="text-center text-[var(--text-tertiary)] text-base tracking-widest uppercase font-medium mb-16">
            What changes when you commit
          </p>
        </Reveal>

        <div className="grid md:grid-cols-[1fr_auto_1fr] gap-8 items-stretch">
          {/* Before */}
          <Reveal direction="left">
            <TiltCard intensity={6} className="glass-card rounded-3xl p-8 border-l-[3px] border-l-[var(--accent-slate)]/40">
              <div className="flex items-center gap-3 mb-6" style={{ transform: "translateZ(18px)" }}>
                <IconOrb color="var(--accent-slate)" size={38} shape="full" float={false}>
                  <XCircle className="w-4 h-4" strokeWidth={2.5} />
                </IconOrb>
                <h3 className="text-[var(--text-tertiary)] text-base tracking-[2px] uppercase font-bold">
                  Before Captanova
                </h3>
              </div>
              <ul className="space-y-3.5">
                {before.map((item, i) => (
                  <motion.li
                    key={item}
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.07 }}
                    viewport={{ once: true }}
                  >
                    <span className="text-[var(--accent-slate)]/60 text-base flex-shrink-0">✗</span>
                    <span className="text-[var(--text-muted)] text-base">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </TiltCard>
          </Reveal>

          {/* Arrow */}
          <Reveal>
            <div className="flex items-center justify-center">
              <motion.div
                className="relative flex items-center justify-center"
                animate={{ scale: [1, 1.08, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <IconOrb color="var(--accent-primary)" size={64} shape="full" float={false}>
                  <ArrowRight className="w-7 h-7" strokeWidth={2.5} />
                </IconOrb>
              </motion.div>
            </div>
          </Reveal>

          {/* After */}
          <Reveal direction="right">
            <TiltCard intensity={6} className="glass-card rounded-3xl p-8 border-l-[3px] border-l-[var(--accent-royal)]/50 bg-gradient-to-br from-white/85 to-cyan-50/40">
              <div className="flex items-center gap-3 mb-6" style={{ transform: "translateZ(18px)" }}>
                <IconOrb color="var(--accent-royal)" size={38} shape="full" float={false}>
                  <CheckCircle2 className="w-4 h-4" strokeWidth={2.5} />
                </IconOrb>
                <h3 className="text-[var(--accent-royal)] text-base tracking-[2px] uppercase font-bold">
                  After Captanova
                </h3>
              </div>
              <ul className="space-y-3.5">
                {after.map((item, i) => (
                  <motion.li
                    key={item}
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: 15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.07 }}
                    viewport={{ once: true }}
                  >
                    <span className="text-[var(--accent-royal)] text-base flex-shrink-0">✓</span>
                    <span className="text-[var(--text-primary)] text-base font-medium">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </TiltCard>
          </Reveal>
        </div>

        {/* Big quote */}
        <Reveal delay={0.2}>
          <div className="text-center mt-16">
            <p className="text-[var(--text-tertiary)] text-base tracking-widest uppercase font-medium mb-4">The Captanova Promise</p>
            <p className="font-display text-[var(--text-primary)] text-2xl md:text-3xl font-medium leading-relaxed max-w-3xl mx-auto">
              You don't become a different person.{" "}
              <span className="gradient-text-purple italic">
                You become more of who you were always capable of being.
              </span>
            </p>
            <a
              href="#programs"
              className="inline-block mt-10 bg-gradient-to-r from-[var(--accent-slate)] to-[var(--accent-slate-light)] hover:shadow-[0_12px_32px_rgba(71,85,105,0.35)] text-white font-semibold px-8 py-4 rounded-full text-base tracking-tight transition-all duration-300 hover:scale-[1.03]"
            >
              Start Your Transformation
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
