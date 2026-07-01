"use client";

import Reveal from "@/components/ui/Reveal";
import { motion } from "framer-motion";

const pathSteps = [
  { icon: "🔦", label: "Awareness", sub: "Start with you.", desc: "Reconnect with yourself through reflection, gratitude, Sankalp and deep self-awareness.", color: "#7c3aed" },
  { icon: "🧠", label: "Mindset Mastery", sub: "Think differently.", desc: "Break free from overthinking. Build empowering beliefs and make better decisions faster.", color: "#2563eb" },
  { icon: "🎤", label: "Communication Mastery", sub: "Express yourself.", desc: "Speak with confidence. Handle difficult conversations. Develop an executive presence.", color: "#0891b2" },
  { icon: "🎯", label: "Action Mastery", sub: "Execute consistently.", desc: "Stop procrastinating. Build unbreakable habits and follow through on everything.", color: "#059669" },
  { icon: "👑", label: "Leadership Mentorship", sub: "Lead yourself & others.", desc: "Identity transformation. Purpose, vision and conscious leadership for lasting impact.", color: "#c9962f" },
];

const whatYouLearn = [
  { number: "1", title: "Mindset Mastery", outcome: "Think Differently.", color: "#7c3aed", features: ["Stop overthinking", "Build confidence", "Overcome self-doubt", "Make better decisions", "Develop empowering beliefs"] },
  { number: "2", title: "Communication Mastery", outcome: "Express Yourself.", color: "#2563eb", features: ["Speak confidently", "Communicate at work", "Improve relationships", "Handle difficult conversations", "Develop leadership presence"] },
  { number: "3", title: "Action Mastery", outcome: "Execute Consistently.", color: "#0891b2", features: ["Stop procrastinating", "Build discipline", "Stay focused", "Build habits", "Follow through consistently"] },
  { number: "4", title: "Leadership Mentorship", outcome: "Lead Yourself & Others.", color: "#c9962f", features: ["Identity transformation", "Purpose and vision", "Leadership mindset", "High-performance habits", "Conscious leadership"] },
];

export default function PathSection() {
  return (
    <section className="relative aurora-cyan py-24 md:py-32 px-6 overflow-hidden">
      <div className="glow-blob w-96 h-96 bg-cyan-200/25 top-0 left-1/4" />
      <div className="glow-blob w-80 h-80 bg-purple-200/20 bottom-20 right-0" />

      <div className="relative max-w-6xl mx-auto">
        {/* The Captanova Path */}
        <Reveal>
          <div className="text-center mb-16">
            <span className="text-[#0891b2] text-base tracking-[3px] uppercase font-semibold mb-3 block">
              A Proven Path
            </span>
            <h2 className="font-display text-[#111111] text-3xl md:text-4xl font-semibold">
              The Captanova <span className="gradient-text-purple italic">Path</span>
            </h2>
          </div>
        </Reveal>

        <div className="overflow-x-auto pb-4 mb-24 -mx-6 px-6">
          <div className="flex items-stretch gap-4 min-w-max md:min-w-0 md:grid md:grid-cols-5">
            {pathSteps.map((step, i) => (
              <Reveal key={step.label} delay={i * 0.1}>
                <div className="glass-card hover-lift rounded-3xl p-6 w-52 md:w-full h-full flex flex-col items-center text-center">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-4"
                    style={{ background: `linear-gradient(135deg, ${step.color}1a, ${step.color}0a)` }}
                  >
                    {step.icon}
                  </div>
                  <p className="text-[#111111] text-base font-semibold mb-1">{step.label}</p>
                  <p className="text-[#999999] text-base italic mb-3">{step.sub}</p>
                  <p className="text-[#777777] text-[11px] leading-relaxed">{step.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* What You Can Learn Here */}
        <Reveal>
          <h2 className="text-center font-display text-[#111111] text-3xl md:text-4xl font-semibold mb-3">
            What You Can <span className="gradient-text-purple italic">Learn Here</span>
          </h2>
          <p className="text-center text-[#999999] text-base tracking-widest uppercase font-medium mb-16">
            A complete ecosystem for your transformation
          </p>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {whatYouLearn.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.1}>
              <motion.div
                className="glass-card hover-lift rounded-3xl p-7 h-full flex flex-col"
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center font-bold text-base mb-5 text-white"
                  style={{ background: `linear-gradient(135deg, ${item.color}, ${item.color}cc)` }}
                >
                  {item.number}
                </div>
                <h3 className="text-[#111111] font-semibold text-base mb-1">{item.title}</h3>
                <ul className="space-y-2.5 flex-1 mt-4">
                  {item.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-2">
                      <span style={{ color: item.color }} className="text-base mt-0.5 flex-shrink-0">✓</span>
                      <span className="text-[#666666] text-base leading-relaxed">{feat}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 pt-5 border-t border-black/[0.06]">
                  <p className="text-[10px] tracking-[2px] uppercase font-bold" style={{ color: item.color }}>
                    OUTCOME
                  </p>
                  <p className="text-[#333333] text-base italic font-display mt-1">{item.outcome}</p>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
