"use client";

import { motion } from "framer-motion";
import Reveal from "@/components/ui/Reveal";
import TiltCard from "@/components/ui/TiltCard";
import IconOrb from "@/components/ui/IconOrb";
import { Compass, Lightbulb, Sparkles as SparklesIcon } from "lucide-react";

const painPoints = [
  "You overthink everything.",
  "You lack confidence.",
  "You struggle to express yourself.",
  "You procrastinate and feel stuck.",
  "You feel lost and unsure about your purpose.",
  "You know you're meant for more.",
];

const helpCategories = [
  { icon: "🧠", label: "Overthinking", color: "var(--accent-primary)" },
  { icon: "💪", label: "Confidence", color: "var(--accent-royal)" },
  { icon: "🎤", label: "Communication", color: "var(--accent-cyan)" },
  { icon: "⏰", label: "Procrastination", color: "var(--accent-royal)" },
  { icon: "🧭", label: "Feeling Lost", color: "var(--accent-ink)" },
  { icon: "👑", label: "Leadership", color: "var(--accent-slate)" },
];

export default function PainPointsSection() {
  return (
    <section className="relative aurora-emerald py-24 md:py-32 px-6 overflow-hidden">
      <div className="glow-blob w-96 h-96 bg-cyan-200/30 top-10 right-0" />
      <div className="glow-blob w-80 h-80 bg-cyan-200/25 bottom-10 left-0" />

      <div className="relative max-w-5xl mx-auto mb-24">
        <Reveal>
          <h2 className="text-center text-[var(--text-tertiary)] text-base tracking-[4px] uppercase font-semibold mb-12">
            What Do You Need Help With?
          </h2>
        </Reveal>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
          {helpCategories.map((cat, i) => (
            <Reveal key={cat.label} delay={i * 0.08}>
              <TiltCard intensity={10} className="glass-card rounded-2xl">
                <a
                  href="#quiz"
                  className="flex flex-col items-center gap-2.5 group cursor-pointer text-center p-5 h-full"
                >
                  <div style={{ transform: "translateZ(24px)" }}>
                    <IconOrb color={cat.color} size={48} shape="2xl" delay={i * 0.15}>
                      <span className="text-xl">{cat.icon}</span>
                    </IconOrb>
                  </div>
                  <span className="text-[var(--text-primary)] group-hover:text-[var(--text-primary)] text-[11px] font-semibold tracking-tight">
                    {cat.label}
                  </span>
                </a>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Three column layout */}
      <div className="relative max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
        {/* Does this sound like you */}
        <Reveal direction="left">
          <TiltCard intensity={6} className="glass-card rounded-3xl p-8">
            <div style={{ transform: "translateZ(20px)" }} className="mb-5">
              <IconOrb color="var(--accent-royal)" size={44} shape="2xl" float={false}>
                <Compass className="w-5 h-5" strokeWidth={2} />
              </IconOrb>
            </div>
            <h3 className="text-[var(--text-primary)] font-display font-semibold text-xl mb-6">
              Does This Sound Like You?
            </h3>
            <ul className="space-y-3.5">
              {painPoints.map((point, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-[var(--accent-royal)] mt-0.5 flex-shrink-0 text-base">✓</span>
                  <span className="text-[var(--text-secondary)] text-base leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>
            <p className="text-[var(--accent-royal)] text-base font-semibold mt-6">You're not alone.</p>
          </TiltCard>
        </Reveal>

        {/* The Truth Is */}
        <Reveal delay={0.15}>
          <TiltCard intensity={6} className="glass-card rounded-3xl p-8 flex flex-col justify-center bg-gradient-to-br from-white/80 to-blue-50/40">
            <div style={{ transform: "translateZ(20px)" }} className="mb-5">
              <IconOrb color="var(--accent-primary)" size={44} shape="2xl" float={false}>
                <Lightbulb className="w-5 h-5" strokeWidth={2} />
              </IconOrb>
            </div>
            <h3 className="text-[var(--text-primary)] font-display font-semibold text-xl mb-6">The Truth Is…</h3>
            <p className="text-[var(--text-secondary)] text-base mb-2">You are not broken.</p>
            <p className="text-[var(--text-secondary)] text-base mb-6">The issue is not lack of knowledge.</p>
            <p className="text-[var(--text-secondary)] text-base mb-3">The issue is lack of</p>
            <div className="space-y-1">
              <motion.span
                className="block text-4xl font-display font-semibold text-[var(--text-primary)] tracking-tight"
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                Clarity
              </motion.span>
              <span className="text-2xl font-display text-[var(--text-tertiary)]">&</span>
              <span className="block text-4xl font-display font-semibold gradient-text-purple tracking-tight">
                Implementation.
              </span>
            </div>
            <p className="text-[var(--text-tertiary)] text-base mt-8 leading-relaxed">
              That's what <span className="text-[var(--accent-primary)] font-semibold">Captanova</span> is here to change.
            </p>
          </TiltCard>
        </Reveal>

        {/* Why I Created Captanova */}
        <Reveal direction="right">
          <TiltCard intensity={6} className="glass-card rounded-3xl p-8">
            <div style={{ transform: "translateZ(20px)" }} className="mb-5">
              <IconOrb color="var(--accent-ink)" size={44} shape="2xl" float={false}>
                <SparklesIcon className="w-5 h-5" strokeWidth={2} />
              </IconOrb>
            </div>
            <h3 className="text-[var(--text-primary)] font-display font-semibold text-xl mb-6">
              Why I Created Captanova
            </h3>
            <p className="text-[var(--text-secondary)] text-base leading-relaxed mb-4">
              For years I searched for answers through personal development, awareness practices, coaching, books, courses, and life experience.
            </p>
            <p className="text-[var(--text-secondary)] text-base leading-relaxed mb-4">
              What I discovered was simple: Most people don't need more information. They need clarity. They need confidence. They need communication skills.
            </p>
            <p className="text-[var(--text-primary)] text-base leading-relaxed font-medium">
              <span className="text-[var(--accent-ink)] font-semibold">Captanova</span> was created to bridge that gap. A place where awareness becomes implementation.
            </p>
            <p className="text-[var(--accent-ink)] text-base font-bold mt-5 italic font-display">
              Because learning alone does not change your life. Action does.
            </p>
          </TiltCard>
        </Reveal>
      </div>
    </section>
  );
}
