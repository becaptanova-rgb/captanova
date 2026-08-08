"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import TiltCard from "@/components/ui/TiltCard";
import IconOrb from "@/components/ui/IconOrb";
import { ChevronRight } from "lucide-react";

const frameworkSteps = [
  { label: "Awareness", sub: "Creates Clarity", color: "var(--accent-primary)" },
  { label: "Clarity", sub: "Creates Confidence", color: "var(--accent-royal)" },
  { label: "Confidence", sub: "Improves Communication", color: "var(--accent-cyan)" },
  { label: "Communication", sub: "Fuels Action", color: "var(--accent-royal)" },
  { label: "Action", sub: "Develops Leadership", color: "var(--accent-ink)" },
  { label: "Leadership", sub: "Creates Legacy", color: "var(--accent-slate)" },
];

export default function HeroSection() {
  // Assume the video is present and show it immediately — this removes the
  // "wait a few seconds for canplay" delay. onError below still catches a
  // genuinely missing/broken file and falls back to the gradient only.
  const [videoFailed, setVideoFailed] = useState(false);

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden aurora-hero pt-32 pb-16">
      {/*
        Background video — file lives at:
          public/videos/hero-background.mp4  (poster at public/videos/hero-poster.jpg)
        If that file is ever removed, onError below hides this layer and the
        section quietly falls back to the aurora-hero gradient underneath.
      */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300"
          style={{ opacity: videoFailed ? 0 : 1 }}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="/videos/hero-poster.jpg"
          onError={() => setVideoFailed(true)}
        >
          <source src="/videos/hero-background.mp4" type="video/mp4" />
        </video>
        {/*
          Tint so white text/glass UI stays readable over the footage.
          MANUAL EDIT GUIDE: to make the video look sharper/more vivid, lower
          these rgba alpha values (the 4th number, 0–1). To make text more
          readable over busy footage, raise them instead. The three stops
          control top / middle / bottom of the hero independently.
        */}
        <div
          className="absolute inset-0 transition-opacity duration-300"
          style={{ opacity: videoFailed ? 0 : 1, background: "linear-gradient(180deg, rgba(255,255,255,0.28) 0%, rgba(255,255,255,0.16) 45%, rgba(255,255,255,0.45) 100%)" }}
        />
      </div>

      {/* Floating glow blobs */}
      <div className="glow-blob w-[500px] h-[500px] bg-blue-300/30 -top-40 -left-40" />
      <div className="glow-blob w-[400px] h-[400px] bg-blue-300/25 top-20 -right-20" />
      <div className="glow-blob w-[450px] h-[450px] bg-sky-200/25 bottom-0 left-1/3" />
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
          <span className="inline-flex items-center gap-2 glass-card text-[var(--text-secondary)] text-base tracking-[2px] uppercase font-semibold px-5 py-2.5 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-royal)]" />
            The Captanova Framework
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-[var(--text-primary)] leading-[0.92] mb-7 max-w-5xl font-medium"
          style={{ fontSize: "clamp(2.75rem, 9vw, 6.75rem)" }}
        >
          <span className="block">Stop</span>
          <span className="block italic gradient-text-purple">Overthinking.</span>
          <span className="block">Start Leading</span>
          <span className="block">Your Life.</span>
        </motion.h1>

        {/* Subheading */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55 }}
          className="mb-10"
        >
          <span className="inline-block glass-card text-[var(--text-secondary)] text-base md:text-xl font-medium tracking-wide px-6 py-3 rounded-full">
            From Overthinking to Conscious Leadership
          </span>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="flex flex-col sm:flex-row gap-3 mb-20"
        >
          <a
            href="#quiz"
            className="group relative bg-gradient-to-r from-[var(--accent-primary)] via-[var(--accent-primary)] to-[var(--accent-royal)] text-white font-semibold px-9 py-4 rounded-full text-base tracking-tight transition-all duration-300 hover:shadow-[0_12px_40px_rgba(29,78,216,0.4)] hover:scale-[1.03] active:scale-[0.98]"
          >
            Start Your 21-Day Reset
          </a>
          <a
            href="#about"
            className="glass-card text-[var(--text-primary)] hover:text-[var(--text-primary)] px-9 py-4 rounded-full text-base font-semibold tracking-tight transition-all duration-300 hover:scale-[1.02] hover-lift"
          >
            Discover The System
          </a>
        </motion.div>

        {/* Framework Steps — a connected, glowing 3D journey */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="w-full max-w-6xl"
        >
          <div className="relative hidden md:grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 md:gap-2">
            {/* Connecting flow line, desktop only — sits behind the orbs */}
            <div className="hidden md:block absolute left-[8.3%] right-[8.3%] top-[26px] h-px overflow-hidden">
              <div
                className="h-full w-full"
                style={{
                  background:
                    "linear-gradient(90deg, var(--accent-primary), var(--accent-royal), var(--accent-cyan), var(--accent-royal), var(--accent-ink), var(--accent-slate))",
                  opacity: 0.35,
                }}
              />
              <motion.div
                className="absolute inset-y-0 left-0 w-1/4"
                style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.9), transparent)" }}
                animate={{ x: ["-100%", "500%"] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "linear", delay: 1.6 }}
              />
            </div>

            {frameworkSteps.map((step, i) => (
              <motion.div
                key={step.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1 + i * 0.08, duration: 0.5 }}
                className="relative"
              >
                <TiltCard intensity={12} className="glass-card rounded-2xl">
                  <div className="relative flex flex-col items-center text-center p-4">
                    <div style={{ transform: "translateZ(22px)" }} className="mb-2.5">
                      <IconOrb color={step.color} size={40} shape="full" delay={i * 0.2}>
                        <span className="font-bold text-sm">{i + 1}</span>
                      </IconOrb>
                    </div>
                    <span className="text-[var(--text-primary)] text-sm font-semibold tracking-tight">
                      {step.label}
                    </span>
                    <span className="text-[var(--text-secondary)] text-[12px] mt-0.5 leading-snug px-0.5">
                      {step.sub}
                    </span>
                  </div>
                </TiltCard>
                {i < frameworkSteps.length - 1 && (
                  <ChevronRight
                    className="hidden md:block absolute top-[18px] -right-[9px] w-4 h-4 text-[var(--text-muted)] z-10"
                    strokeWidth={2.5}
                  />
                )}
              </motion.div>
            ))}
          </div>

          {/* Mobile: same 6 steps, auto-sliding so nothing needs to be tapped/scrolled manually */}
          <div className="relative md:hidden -mx-6">
            <div className="overflow-hidden">
              <div className="marquee-track flex gap-3 w-max px-6" style={{ animationDuration: "22s" }}>
                {[...frameworkSteps, ...frameworkSteps].map((step, i) => (
                  <div key={i} className="glass-card rounded-2xl w-36 flex-shrink-0">
                    <div className="flex flex-col items-center text-center p-4">
                      <IconOrb color={step.color} size={36} shape="full" delay={(i % frameworkSteps.length) * 0.2}>
                        <span className="font-bold text-sm">{(i % frameworkSteps.length) + 1}</span>
                      </IconOrb>
                      <span className="text-[var(--text-primary)] text-sm font-semibold tracking-tight mt-2.5">
                        {step.label}
                      </span>
                      <span className="text-[var(--text-secondary)] text-[12px] mt-0.5 leading-snug">
                        {step.sub}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="pointer-events-none absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-white to-transparent z-10" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-white to-transparent z-10" />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8, duration: 0.6 }}
            className="relative max-w-xl mx-auto mt-6 rounded-[2rem] px-6 py-4 overflow-hidden"
            style={{
              background: "linear-gradient(155deg, #f6f6f8 0%, #d6d9dd 45%, #f0f1f3 100%)",
              boxShadow:
                "0 10px 28px -10px rgba(15,23,42,0.22), inset 0 1.5px 1px rgba(255,255,255,0.95), inset 0 -8px 14px rgba(0,0,0,0.07)",
            }}
          >
            {/* glossy top sheen */}
            <span
              aria-hidden
              className="pointer-events-none absolute inset-x-5 top-1 h-1/2 rounded-full opacity-70"
              style={{ background: "linear-gradient(180deg, rgba(255,255,255,0.95), transparent)" }}
            />
            <p className="relative text-center text-black text-[13px] md:text-sm leading-relaxed">
              Communication &amp; Action are taught together inside the{" "}
              <strong className="font-semibold">Transformation System</strong> — not sold
              separately, because they only stick when built on the mindset work that comes first.
            </p>
          </motion.div>
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
          className="w-px h-10 bg-gradient-to-b from-[var(--accent-primary)]/40 to-transparent"
          animate={{ scaleY: [0, 1, 0] }}
          transition={{ duration: 1.8, repeat: Infinity }}
        />
      </motion.div>
    </section>
  );
}
