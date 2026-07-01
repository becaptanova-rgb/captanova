"use client";

import Reveal from "@/components/ui/Reveal";
import { motion } from "framer-motion";

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
      <div className="glow-blob w-96 h-96 bg-orange-200/30 top-0 right-1/4" />
      <div className="glow-blob w-80 h-80 bg-emerald-100/30 bottom-10 left-10" />

      <div className="relative max-w-6xl mx-auto">
        <Reveal>
          <h2 className="text-center font-display text-[#111111] text-3xl md:text-4xl font-semibold mb-3">
            Results <span className="text-[#f0654c] italic">Transformation</span>
          </h2>
          <p className="text-center text-[#999999] text-base tracking-widest uppercase font-medium mb-16">
            What changes when you commit
          </p>
        </Reveal>

        <div className="grid md:grid-cols-[1fr_auto_1fr] gap-8 items-stretch">
          {/* Before */}
          <Reveal direction="left">
            <div className="glass-card rounded-3xl p-8 h-full border-l-[3px] border-l-[#f0654c]/40">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-9 h-9 rounded-full bg-[#f0654c]/10 flex items-center justify-center">
                  <span className="text-[#f0654c] text-base font-bold">✗</span>
                </div>
                <h3 className="text-[#777777] text-base tracking-[2px] uppercase font-bold">
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
                    <span className="text-[#f0654c]/60 text-base flex-shrink-0">✗</span>
                    <span className="text-[#888888] text-base">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* Arrow */}
          <Reveal>
            <div className="flex items-center justify-center">
              <motion.div
                className="w-16 h-16 rounded-full glass-card flex items-center justify-center text-[#7c3aed] text-2xl"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                →
              </motion.div>
            </div>
          </Reveal>

          {/* After */}
          <Reveal direction="right">
            <div className="glass-card rounded-3xl p-8 h-full border-l-[3px] border-l-[#059669]/50 bg-gradient-to-br from-white/85 to-emerald-50/40">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-9 h-9 rounded-full bg-[#059669]/10 flex items-center justify-center">
                  <span className="text-[#059669] text-base font-bold">✓</span>
                </div>
                <h3 className="text-[#059669] text-base tracking-[2px] uppercase font-bold">
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
                    <span className="text-[#059669] text-base flex-shrink-0">✓</span>
                    <span className="text-[#333333] text-base font-medium">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        {/* Big quote */}
        <Reveal delay={0.2}>
          <div className="text-center mt-16">
            <p className="text-[#999999] text-base tracking-widest uppercase font-medium mb-4">The Captanova Promise</p>
            <p className="font-display text-[#111111] text-2xl md:text-3xl font-medium leading-relaxed max-w-3xl mx-auto">
              You don't become a different person.{" "}
              <span className="gradient-text-purple italic">
                You become more of who you were always capable of being.
              </span>
            </p>
            <a
              href="#programs"
              className="inline-block mt-10 bg-gradient-to-r from-[#f0654c] to-[#fb9382] hover:shadow-[0_12px_32px_rgba(240,101,76,0.35)] text-white font-semibold px-8 py-4 rounded-full text-base tracking-tight transition-all duration-300 hover:scale-[1.03]"
            >
              Start Your Transformation
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
