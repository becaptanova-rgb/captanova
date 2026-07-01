"use client";

import Reveal from "@/components/ui/Reveal";
import { motion } from "framer-motion";

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
  return (
    <section id="journal" className="relative aurora-gold py-24 md:py-32 px-6 overflow-hidden">
      <div className="glow-blob w-96 h-96 bg-amber-200/30 top-10 right-0" />
      <div className="glow-blob w-80 h-80 bg-blue-100/25 bottom-0 left-0" />

      <div className="relative max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Journal visual */}
          <Reveal direction="left">
            <div className="relative">
              <motion.div
                className="glass-card rounded-[2.5rem] aspect-[3/4] max-w-sm mx-auto flex flex-col items-center justify-center p-10 relative overflow-hidden"
                animate={{ y: [-8, 8, -8] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-amber-50/60 via-white/40 to-purple-50/40" />
                <div className="relative z-10 flex flex-col items-center">
                  <div className="w-16 h-px bg-gradient-to-r from-transparent via-[#c9962f] to-transparent mb-6" />
                  <div className="text-3xl mb-4 gradient-text-gold">∞</div>
                  <h3 className="text-[#111111] font-display text-2xl font-medium tracking-[3px] uppercase text-center mb-1">
                    The Awareness
                  </h3>
                  <h3 className="gradient-text-gold font-display text-3xl font-semibold tracking-[3px] uppercase text-center mb-6">
                    Journal
                  </h3>
                  <p className="text-[#999999] text-base tracking-[1.5px] uppercase text-center leading-relaxed font-medium">
                    The Most Important Meeting Is With Yourself
                  </p>
                  <div className="w-16 h-px bg-gradient-to-r from-transparent via-[#c9962f] to-transparent mt-6" />
                </div>
              </motion.div>
              <div className="absolute inset-0 bg-amber-200/15 rounded-[2.5rem] blur-3xl -z-10 max-w-sm mx-auto" />
            </div>
          </Reveal>

          {/* Journal info */}
          <Reveal direction="right">
            <div>
              <span className="text-[#c9962f] text-base tracking-[3px] uppercase font-semibold mb-3 block">
                Start Here
              </span>
              <h2 className="font-display text-[#111111] text-4xl md:text-5xl font-semibold mb-3 leading-tight">
                The Awareness Journal
              </h2>
              <p className="gradient-text-gold text-base tracking-widest uppercase font-bold mb-6">
                The Most Important Meeting Is With Yourself
              </p>
              <p className="text-[#555555] text-base leading-relaxed mb-4">
                A guided 21-day self-discovery and transformation journey.
              </p>
              <p className="text-[#777777] text-base leading-relaxed mb-8">
                Most people spend their lives meeting everyone except themselves. The Awareness Journal helps you reconnect with yourself through reflection, gratitude, Sankalp, awareness, and conscious action.
              </p>

              {/* Includes */}
              <h4 className="text-[#999999] text-base tracking-[2px] uppercase font-semibold mb-4">
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
                    <span className="text-[#c9962f] text-base flex-shrink-0">✓</span>
                    <span className="text-[#555555] text-base">{item}</span>
                  </motion.div>
                ))}
              </div>

              {/* Quote */}
              <div className="glass-card rounded-2xl p-5 mb-8 border-l-[3px] border-l-[#c9962f]">
                <p className="text-[#444444] text-base italic leading-relaxed font-display">
                  "When you switch on the light of awareness, you cannot unsee the truth."
                </p>
              </div>

              <a
                href="#programs"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-[#c9962f] to-[#e8c373] hover:shadow-[0_12px_32px_rgba(201,150,47,0.4)] text-white font-semibold px-7 py-3.5 rounded-full text-base tracking-tight transition-all duration-300 hover:scale-[1.03]"
              >
                Start Your 21-Day Journey →
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
