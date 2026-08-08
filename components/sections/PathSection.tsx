"use client";

import Reveal from "@/components/ui/Reveal";
import TiltCard from "@/components/ui/TiltCard";
import IconOrb from "@/components/ui/IconOrb";

const pathSteps = [
  { icon: "🔦", label: "Awareness", sub: "Start with you.", desc: "Reconnect with yourself through reflection, gratitude, Sankalp and deep self-awareness.", color: "var(--accent-primary)" },
  { icon: "🧠", label: "Mindset Mastery", sub: "Think differently.", desc: "Break free from overthinking. Build empowering beliefs and make better decisions faster.", color: "var(--accent-royal)" },
  { icon: "🎤", label: "Communication Mastery", sub: "Express yourself.", desc: "Speak with confidence. Handle difficult conversations. Develop an executive presence.", color: "var(--accent-cyan)" },
  { icon: "🎯", label: "Action Mastery", sub: "Execute consistently.", desc: "Stop procrastinating. Build unbreakable habits and follow through on everything.", color: "var(--accent-royal)" },
  { icon: "👑", label: "Leadership Mentorship", sub: "Lead yourself & others.", desc: "Identity transformation. Purpose, vision and conscious leadership for lasting impact.", color: "var(--accent-ink)" },
];

const whatYouLearn = [
  { number: "1", title: "Mindset Mastery", outcome: "Think Differently.", color: "var(--accent-primary)", features: ["Stop overthinking", "Build confidence", "Overcome self-doubt", "Make better decisions", "Develop empowering beliefs"] },
  { number: "2", title: "Communication Mastery", outcome: "Express Yourself.", color: "var(--accent-royal)", features: ["Speak confidently", "Communicate at work", "Improve relationships", "Handle difficult conversations", "Develop leadership presence"] },
  { number: "3", title: "Action Mastery", outcome: "Execute Consistently.", color: "var(--accent-cyan)", features: ["Stop procrastinating", "Build discipline", "Stay focused", "Build habits", "Follow through consistently"] },
  { number: "4", title: "Leadership Mentorship", outcome: "Lead Yourself & Others.", color: "var(--accent-ink)", features: ["Identity transformation", "Purpose and vision", "Leadership mindset", "High-performance habits", "Conscious leadership"] },
];

export default function PathSection() {
  return (
    <section className="relative aurora-cyan py-24 md:py-32 px-6 overflow-hidden">
      <div className="glow-blob w-96 h-96 bg-cyan-200/25 top-0 left-1/4" />
      <div className="glow-blob w-80 h-80 bg-blue-200/20 bottom-20 right-0" />

      <div className="relative max-w-6xl mx-auto">
        {/* The Captanova Path */}
        <Reveal>
          <div className="text-center mb-16">
            <span className="text-[var(--accent-cyan)] text-base tracking-[3px] uppercase font-semibold mb-3 block">
              A Proven Path
            </span>
            <h2 className="font-display text-[var(--text-primary)] text-3xl md:text-4xl font-semibold">
              The Captanova <span className="gradient-text-purple italic">Path</span>
            </h2>
          </div>
        </Reveal>

        <div className="overflow-x-auto pb-4 mb-24 -mx-6 px-6">
          <div className="flex items-stretch gap-4 min-w-max md:min-w-0 md:grid md:grid-cols-5">
            {pathSteps.map((step, i) => (
              <Reveal key={step.label} delay={i * 0.1}>
                <TiltCard intensity={8} className="glass-card rounded-3xl w-52 md:w-full">
                  <div className="p-6 flex flex-col items-center text-center h-full">
                    <div style={{ transform: "translateZ(26px)" }} className="mb-4">
                      <IconOrb color={step.color} size={56} shape="2xl" delay={i * 0.2}>
                        <span className="text-2xl">{step.icon}</span>
                      </IconOrb>
                    </div>
                    <p className="text-[var(--text-primary)] text-base font-semibold mb-1">{step.label}</p>
                    <p className="text-[var(--text-tertiary)] text-base italic mb-3">{step.sub}</p>
                    <p className="text-[var(--text-tertiary)] text-[11px] leading-relaxed">{step.desc}</p>
                  </div>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </div>

        {/* What You Can Learn Here */}
        <Reveal>
          <h2 className="text-center font-display text-[var(--text-primary)] text-3xl md:text-4xl font-semibold mb-3">
            What You Can <span className="gradient-text-purple italic">Learn Here</span>
          </h2>
          <p className="text-center text-[var(--text-tertiary)] text-base tracking-widest uppercase font-medium mb-16">
            A complete ecosystem for your transformation
          </p>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {whatYouLearn.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.1}>
              <TiltCard intensity={9} className="glass-card rounded-3xl p-7 flex flex-col">
                <div style={{ transform: "translateZ(24px)" }} className="mb-5">
                  <IconOrb color={item.color} size={44} shape="2xl" delay={i * 0.15}>
                    <span className="font-bold text-base">{item.number}</span>
                  </IconOrb>
                </div>
                <h3 className="text-[var(--text-primary)] font-semibold text-base mb-1">{item.title}</h3>
                <ul className="space-y-2.5 flex-1 mt-4">
                  {item.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-2">
                      <span style={{ color: item.color }} className="text-base mt-0.5 flex-shrink-0">✓</span>
                      <span className="text-[var(--text-secondary)] text-base leading-relaxed">{feat}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 pt-5 border-t border-black/[0.06]">
                  <p className="text-[10px] tracking-[2px] uppercase font-bold" style={{ color: item.color }}>
                    OUTCOME
                  </p>
                  <p className="text-[var(--text-primary)] text-base italic font-display mt-1">{item.outcome}</p>
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
