"use client";

import { motion } from "framer-motion";
import Reveal from "@/components/ui/Reveal";

const painPoints = [
  "You overthink everything.",
  "You lack confidence.",
  "You struggle to express yourself.",
  "You procrastinate and feel stuck.",
  "You feel lost and unsure about your purpose.",
  "You know you're meant for more.",
];

const helpCategories = [
  { icon: "🧠", label: "Overthinking", color: "#7c3aed" },
  { icon: "💪", label: "Confidence", color: "#2563eb" },
  { icon: "🎤", label: "Communication", color: "#0891b2" },
  { icon: "⏰", label: "Procrastination", color: "#059669" },
  { icon: "🧭", label: "Feeling Lost", color: "#c9962f" },
  { icon: "👑", label: "Leadership", color: "#f0654c" },
];

export default function PainPointsSection() {
  return (
    <section className="relative aurora-emerald py-24 md:py-32 px-6 overflow-hidden">
      <div className="glow-blob w-96 h-96 bg-emerald-200/30 top-10 right-0" />
      <div className="glow-blob w-80 h-80 bg-cyan-200/25 bottom-10 left-0" />

      <div className="relative max-w-5xl mx-auto mb-24">
        <Reveal>
          <h2 className="text-center text-[#999999] text-base tracking-[4px] uppercase font-semibold mb-12">
            What Do You Need Help With?
          </h2>
        </Reveal>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
          {helpCategories.map((cat, i) => (
            <Reveal key={cat.label} delay={i * 0.08}>
              <a
                href="#quiz"
                className="glass-card hover-lift rounded-2xl p-5 flex flex-col items-center gap-2.5 group cursor-pointer text-center"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-xl transition-transform duration-300 group-hover:scale-110"
                  style={{ background: `linear-gradient(135deg, ${cat.color}18, ${cat.color}08)` }}
                >
                  {cat.icon}
                </div>
                <span className="text-[#333333] group-hover:text-[#111111] text-[11px] font-semibold tracking-tight">
                  {cat.label}
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Three column layout */}
      <div className="relative max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
        {/* Does this sound like you */}
        <Reveal direction="left">
          <div className="glass-card hover-lift rounded-3xl p-8 h-full">
            <h3 className="text-[#111111] font-display font-semibold text-xl mb-6">
              Does This Sound Like You?
            </h3>
            <ul className="space-y-3.5">
              {painPoints.map((point, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-[#059669] mt-0.5 flex-shrink-0 text-base">✓</span>
                  <span className="text-[#555555] text-base leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>
            <p className="text-[#059669] text-base font-semibold mt-6">You're not alone.</p>
          </div>
        </Reveal>

        {/* The Truth Is */}
        <Reveal delay={0.15}>
          <div className="glass-card hover-lift rounded-3xl p-8 h-full flex flex-col justify-center bg-gradient-to-br from-white/80 to-purple-50/40">
            <h3 className="text-[#111111] font-display font-semibold text-xl mb-6">The Truth Is…</h3>
            <p className="text-[#555555] text-base mb-2">You are not broken.</p>
            <p className="text-[#555555] text-base mb-6">The issue is not lack of knowledge.</p>
            <p className="text-[#555555] text-base mb-3">The issue is lack of</p>
            <div className="space-y-1">
              <motion.span
                className="block text-4xl font-display font-semibold text-[#111111] tracking-tight"
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                Clarity
              </motion.span>
              <span className="text-2xl font-display text-[#999999]">&</span>
              <span className="block text-4xl font-display font-semibold gradient-text-purple tracking-tight">
                Implementation.
              </span>
            </div>
            <p className="text-[#777777] text-base mt-8 leading-relaxed">
              That's what <span className="text-[#7c3aed] font-semibold">Captanova</span> is here to change.
            </p>
          </div>
        </Reveal>

        {/* Why I Created Captanova */}
        <Reveal direction="right">
          <div className="glass-card hover-lift rounded-3xl p-8 h-full">
            <h3 className="text-[#111111] font-display font-semibold text-xl mb-6">
              Why I Created Captanova
            </h3>
            <p className="text-[#555555] text-base leading-relaxed mb-4">
              For years I searched for answers through personal development, awareness practices, coaching, books, courses, and life experience.
            </p>
            <p className="text-[#555555] text-base leading-relaxed mb-4">
              What I discovered was simple: Most people don't need more information. They need clarity. They need confidence. They need communication skills.
            </p>
            <p className="text-[#333333] text-base leading-relaxed font-medium">
              <span className="text-[#c9962f] font-semibold">Captanova</span> was created to bridge that gap. A place where awareness becomes implementation.
            </p>
            <p className="text-[#c9962f] text-base font-bold mt-5 italic font-display">
              Because learning alone does not change your life. Action does.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
