"use client";

import { motion } from "framer-motion";

const frameworkSteps = [
  { label: "Awareness", sub: "Creates Clarity", color: "#7c3aed" },
  { label: "Clarity", sub: "Creates Confidence", color: "#2563eb" },
  { label: "Confidence", sub: "Improves Communication", color: "#0891b2" },
  { label: "Communication", sub: "Fuels Action", color: "#059669" },
  { label: "Action", sub: "Develops Leadership", color: "#c9962f" },
  { label: "Leadership", sub: "Creates Legacy", color: "#f0654c" },
];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden aurora-hero pt-32 pb-16">
      {/* Floating glow blobs */}
      <div className="glow-blob w-[500px] h-[500px] bg-purple-300/30 -top-40 -left-40" />
      <div className="glow-blob w-[400px] h-[400px] bg-blue-300/25 top-20 -right-20" />
      <div className="glow-blob w-[450px] h-[450px] bg-amber-200/25 bottom-0 left-1/3" />
      <div className="noise-overlay" />

      {/* Main hero content */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 text-center">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-8"
        >
          <span className="inline-flex items-center gap-2 glass-card text-[#555555] text-base tracking-[2px] uppercase font-semibold px-5 py-2.5 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#7c3aed] to-[#2563eb]" />
            The Captanova Framework
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-[#111111] leading-[0.92] mb-7 max-w-5xl font-medium"
          style={{ fontSize: "clamp(2.75rem, 9vw, 6.75rem)" }}
        >
          <span className="block">Stop</span>
          <span className="block italic gradient-text-purple">Overthinking.</span>
          <span className="block">Start Leading</span>
          <span className="block">Your Life.</span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.55 }}
          className="text-[#555555] text-lg md:text-xl font-medium tracking-wide mb-10 max-w-md"
        >
          From Overthinking to Conscious Leadership
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="flex flex-col sm:flex-row gap-3 mb-20"
        >
          <a
            href="#quiz"
            className="group relative bg-gradient-to-r from-[#7c3aed] via-[#6d28d9] to-[#2563eb] text-white font-semibold px-9 py-4 rounded-full text-base tracking-tight transition-all duration-300 hover:shadow-[0_12px_40px_rgba(124,58,237,0.4)] hover:scale-[1.03] active:scale-[0.98]"
          >
            Start Your 21-Day Reset
          </a>
          <a
            href="#about"
            className="glass-card text-[#333333] hover:text-[#111111] px-9 py-4 rounded-full text-base font-semibold tracking-tight transition-all duration-300 hover:scale-[1.02] hover-lift"
          >
            Discover The System
          </a>
        </motion.div>

        {/* Framework Steps — floating glass pills */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="w-full max-w-6xl"
        >
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
            {frameworkSteps.map((step, i) => (
              <motion.div
                key={step.label}
                className="glass-card hover-lift rounded-2xl p-4 flex flex-col items-center text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1 + i * 0.08, duration: 0.5 }}
              >
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center mb-2.5 text-white text-base font-bold"
                  style={{ background: `linear-gradient(135deg, ${step.color}, ${step.color}dd)` }}
                >
                  {i + 1}
                </div>
                <span className="text-[#111111] text-[11px] font-semibold tracking-tight">
                  {step.label}
                </span>
                <span className="text-[#999999] text-[9px] mt-0.5 hidden md:block leading-tight">
                  {step.sub}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="relative z-10 flex justify-center pb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
      >
        <motion.div
          className="w-px h-10 bg-gradient-to-b from-[#7c3aed]/40 to-transparent"
          animate={{ scaleY: [0, 1, 0] }}
          transition={{ duration: 1.8, repeat: Infinity }}
        />
      </motion.div>
    </section>
  );
}
