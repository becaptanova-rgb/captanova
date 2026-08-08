"use client";

import { motion } from "framer-motion";
import Reveal from "@/components/ui/Reveal";
import TiltCard from "@/components/ui/TiltCard";
import IconOrb from "@/components/ui/IconOrb";
import { useState, useEffect } from "react";

const testimonials = [
  {
    quote: "The Awareness Journal changed the way I see myself. It was the start of my transformation. I finally stopped overthinking and started actually living.",
    name: "Priya M.",
    role: "Marketing Manager",
    initials: "PM",
    profile: "The Overthinker",
    color: "var(--accent-primary)",
  },
  {
    quote: "I went from overthinking everything to taking action each and every day. Captanova gave me my life back. I feel like the captain of my own story now.",
    name: "Arjun S.",
    role: "Entrepreneur",
    initials: "AS",
    profile: "The Action Seeker",
    color: "var(--accent-royal)",
  },
  {
    quote: "My confidence and communication have improved so much. I'm now leading my team with ease. I only wish I had found Captanova sooner.",
    name: "Neha K.",
    role: "Team Lead",
    initials: "NK",
    profile: "The Hidden Leader",
    color: "var(--accent-ink)",
  },
  {
    quote: "I was always the quiet one in the room. After Communication Mastery, I spoke up in a board meeting and got promoted within 3 months.",
    name: "Rahul D.",
    role: "Senior Analyst",
    initials: "RD",
    profile: "The Silent Voice",
    color: "var(--accent-cyan)",
  },
  {
    quote: "Renu's approach is unlike anything else. It's not just motivation — it's a complete system. The combination of awareness and action is exactly what I needed.",
    name: "Shreya P.",
    role: "Life Coach",
    initials: "SP",
    profile: "The Doubter",
    color: "var(--accent-slate)",
  },
];

export default function TestimonialsSection() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="testimonials" className="relative bg-white py-24 md:py-32 px-6 overflow-hidden">
      <div className="glow-blob w-96 h-96 bg-blue-100/25 top-10 left-0" />
      <div className="glow-blob w-80 h-80 bg-sky-100/25 bottom-0 right-10" />

      <div className="relative max-w-5xl mx-auto">
        <Reveal>
          <h2 className="text-center font-display text-[var(--text-primary)] text-3xl md:text-4xl font-semibold mb-3">
            Transformation <span className="gradient-text-purple italic">Stories</span>
          </h2>
          <p className="text-center text-[var(--text-tertiary)] text-base tracking-widest uppercase font-medium mb-16">
            Real people. Real results.
          </p>
        </Reveal>

        {/* Featured testimonial */}
        <div className="relative min-h-[300px] mb-10">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              className="absolute inset-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: i === active ? 1 : 0, y: i === active ? 0 : 20 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <TiltCard intensity={5} className="glass-card rounded-[2rem]">
                <div className="p-10 md:p-14 text-center flex flex-col justify-center h-full">
                  <div
                    className="text-6xl font-display leading-none mb-6"
                    style={{ color: `color-mix(in srgb, ${t.color} 30%, transparent)` }}
                  >
                    "
                  </div>
                  <p className="text-[var(--text-primary)] text-lg md:text-xl font-display font-medium leading-relaxed mb-8 italic max-w-3xl mx-auto">
                    {t.quote}
                  </p>
                  <div className="flex flex-col items-center gap-2" style={{ transform: "translateZ(22px)" }}>
                    <IconOrb color={t.color} size={52} shape="full" float={false}>
                      <span className="font-bold text-base">{t.initials}</span>
                    </IconOrb>
                    <div>
                      <p className="text-[var(--text-primary)] font-semibold text-base">{t.name}</p>
                      <p className="text-[var(--text-tertiary)] text-base">{t.role}</p>
                      <span
                        className="inline-block mt-1.5 text-[10px] tracking-[1.5px] uppercase font-bold px-3 py-1 rounded-full"
                        style={{ background: `color-mix(in srgb, ${t.color} 12%, transparent)`, color: t.color }}
                      >
                        {t.profile}
                      </span>
                    </div>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === active ? "w-6 bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-royal)]" : "w-2 bg-black/10"
              }`}
            />
          ))}
        </div>

        {/* Mini cards */}
        <div className="grid md:grid-cols-3 gap-5 mt-16">
          {testimonials.slice(0, 3).map((t, i) => (
            <Reveal key={t.name} delay={i * 0.1}>
              <TiltCard intensity={8} className="glass-card rounded-2xl p-5">
                <p className="text-[var(--text-secondary)] text-base leading-relaxed italic mb-4">"{t.quote.slice(0, 100)}…"</p>
                <div className="flex items-center gap-3" style={{ transform: "translateZ(18px)" }}>
                  <IconOrb color={t.color} size={36} shape="full" float={false}>
                    <span className="font-bold text-[13px]">{t.initials}</span>
                  </IconOrb>
                  <div>
                    <p className="text-[var(--text-primary)] text-base font-semibold">{t.name}</p>
                    <p className="text-[var(--text-tertiary)] text-[10px]">{t.role}</p>
                  </div>
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
