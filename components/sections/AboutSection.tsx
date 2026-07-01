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
      <div className="glow-blob w-96 h-96 bg-amber-100/40 top-20 left-0" />
      <div className="glow-blob w-80 h-80 bg-purple-100/30 bottom-0 right-10" />

      <div className="relative max-w-6xl mx-auto">
        {/* Meet Renu */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
          {/* Photo */}
          <Reveal direction="left">
            <div className="relative max-w-[280px] sm:max-w-[320px] md:max-w-[300px] lg:max-w-[340px] mx-auto md:mx-0">
              <div className="glass-card rounded-[2.5rem] aspect-[4/5] overflow-hidden relative">
                <Image
                  src="/mentors/renu-guide-portrait.jpg"
                  alt="Renu Sharma, Founder of Captanova"
                  fill
                  sizes="(max-width: 640px) 280px, 340px"
                  className="object-cover object-top"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
              </div>
              {/* Decorative floating accents */}
              <motion.div
                className="absolute -bottom-6 -right-6 w-28 h-28 glass-card rounded-3xl -z-10"
                animate={{ y: [-4, 4, -4] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              <motion.div
                className="absolute -top-6 -left-6 w-16 h-16 rounded-2xl bg-gradient-to-br from-[#7c3aed]/20 to-[#2563eb]/20 -z-10"
                animate={{ y: [4, -4, 4] }}
                transition={{ duration: 5, repeat: Infinity }}
              />
            </div>
          </Reveal>

          {/* Bio */}
          <Reveal direction="right">
            <div>
              <span className="text-[#c9962f] text-base tracking-[3px] uppercase font-semibold mb-4 block">
                Meet Your Guide
              </span>
              <h2 className="font-display text-[#111111] text-4xl md:text-5xl font-semibold mb-6 leading-tight">
                Renu Sharma
              </h2>
              <ul className="space-y-4 mb-8">
                {bioPoints.map((point, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-[#c9962f] mt-1 flex-shrink-0 text-base">✦</span>
                    <span className="text-[#555555] text-base leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>

              {/* Mission quote */}
              <div className="glass-card rounded-2xl p-6 border-l-[3px] border-l-[#7c3aed]">
                <p className="text-[#333333] text-lg leading-relaxed italic font-display">
                  &quot;My mission is simple: To help you become the captain of your life — through awareness, confidence, communication, action, and leadership.&quot;
                </p>
                <cite className="text-[#7c3aed] text-base mt-3 block not-italic font-semibold tracking-wide">
                  — RENU SHARMA
                </cite>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Why Captanova split */}
        <Reveal>
          <div className="glass-card hover-lift rounded-[2rem] p-10 text-center max-w-2xl mx-auto bg-gradient-to-br from-white/90 via-purple-50/30 to-amber-50/30">
            <h3 className="font-display text-[#111111] text-2xl font-semibold mb-8">
              Why <span className="gradient-text-purple">Captanova</span>?
            </h3>
            <div className="grid grid-cols-2 gap-8 mb-8">
              <div>
                <div className="text-[#c9962f] text-base tracking-[2px] uppercase font-semibold mb-3">
                  Eastern Awareness
                </div>
                <p className="text-[#777777] text-base leading-relaxed">
                  Ancient wisdom, mindfulness, Sankalp, conscious presence
                </p>
              </div>
              <div>
                <div className="text-[#2563eb] text-base tracking-[2px] uppercase font-semibold mb-3">
                  Western Implementation
                </div>
                <p className="text-[#777777] text-base leading-relaxed">
                  Modern systems, accountability, action frameworks, results
                </p>
              </div>
            </div>
            <div className="text-[#999999] text-2xl mb-6">+</div>
            <motion.p
              className="text-[#555555] text-base leading-relaxed"
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
