"use client";

import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import TiltCard from "@/components/ui/TiltCard";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Globe2,
  Users,
  Award,
  GraduationCap,
  Sparkles,
  Quote,
  ArrowUpRight,
} from "lucide-react";

const trustBadges = [
  { icon: ShieldCheck, label: "Certified Coach" },
  { icon: Globe2, label: "International Standards" },
  { icon: Users, label: "Thousands of Students" },
  { icon: Award, label: "Real Workshop Experience" },
  { icon: GraduationCap, label: "Evidence-Based Training" },
  { icon: Sparkles, label: "Hands-On Learning" },
];

const credentials = [
  "Trained in Thinking Into Results™ and other global personal-development methodologies.",
  "Active member of international leadership masterminds across the US and Europe.",
  "Years of real, hands-on coaching experience — not theory read from a book.",
  "Trusted by students across the Awareness, Mindset, Communication and Leadership journey.",
];

const gallery = [
  {
    src: "/mentors/mastermind-diamond-rich.jpg",
    title: "Diamond Rich Club",
    sub: "International leadership mastermind",
  },
  {
    src: "/mentors/mastermind-coffee-charts.jpg",
    title: "Global Mastermind Circles",
    sub: "Learning alongside industry experts",
  },
  {
    src: "/mentors/leadership-mastermind.jpg",
    title: "Leadership Mastermind",
    sub: "Immersive leadership retreats",
  },
  {
    src: "/mentors/women-empower-women.jpg",
    title: "Women Empower Women",
    sub: "A global sisterhood of leaders",
  },
  {
    src: "/mentors/renu-portrait-flowers.jpg",
    title: "Celebrating Every Win",
    sub: "A community that shows up for you",
  },
];

export default function MentorsSection() {
  const marqueeItems = [...gallery, ...gallery];

  return (
    <section id="mentors" className="relative aurora-gold py-24 md:py-32 overflow-hidden">
      <div className="glow-blob w-[28rem] h-[28rem] bg-blue-100/30 -top-20 -left-20" />
      <div className="glow-blob w-96 h-96 bg-sky-100/35 bottom-0 right-0" />
      <div className="noise-overlay" />

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Header */}
        <Reveal>
          <div className="text-center mb-16 md:mb-20">
            <span className="inline-flex items-center gap-2 glass-card text-[var(--text-secondary)] text-base tracking-[2px] uppercase font-semibold px-5 py-2.5 rounded-full mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[var(--accent-ink)] to-[var(--accent-primary)]" />
              The Experience Behind Captanova
            </span>
            <h2 className="font-display text-[var(--text-primary)] text-4xl md:text-5xl font-semibold leading-tight mb-5">
              Guided By Real Experience.
              <br className="hidden md:block" />
              Backed By <span className="gradient-text-purple italic">Global Standards.</span>
            </h2>
            <p className="text-[var(--text-tertiary)] text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              You&apos;re not learning from theory in a book. You&apos;re learning from someone who has
              sat in the world&apos;s leading rooms of leadership, mindset and mastery — and
              brought that experience home to you.
            </p>
          </div>
        </Reveal>

        {/* Spotlight */}
        <div className="grid lg:grid-cols-[1.05fr_1fr] gap-20 lg:gap-16 items-center mb-28 md:mb-32">
          {/* Layered image composition */}
          <Reveal direction="left">
            <div className="relative max-w-sm sm:max-w-md mx-auto lg:max-w-none lg:mr-6">
              <TiltCard intensity={7} perspective={1200} className="rounded-[2.5rem] overflow-hidden aspect-[4/5] glass-card">
                <Image
                  src="/mentors/renu-speaking-stage.jpg"
                  alt="Renu Sharma coaching a live session on stage"
                  fill
                  sizes="(max-width: 1024px) 90vw, 40vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/0 to-black/0 sm:bg-gradient-to-b sm:from-black/60 sm:via-black/0 sm:to-black/0" />
             <div className="absolute bottom-5 left-5 right-5 sm:top-5 sm:bottom-auto sm:right-24 bg-gradient-to-r from-[var(--accent-gold)] to-amber-300 rounded-2xl px-5 py-4 inline-block shadow-lg">
  <p className="text-black text-lg font-display font-semibold">Renu Sharma</p>
  <p className="text-black/80 text-base font-medium">Founder &amp; Lead Coach, Captanova</p>
</div>
              </TiltCard>

              {/* Floating mentorship proof card — sm+ only, overlaps the photo by design */}
              <motion.div
                className="hidden sm:block absolute -bottom-10 -left-12 w-44 md:w-48 glass-strong rounded-3xl p-2.5 shadow-2xl z-20"
                animate={{ y: [-6, 6, -6] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="relative rounded-2xl overflow-hidden aspect-square">
                  <Image
                    src="/mentors/renu-mentor-1.jpg"
                    alt="Learning directly from world-class mentors"
                    fill
                    sizes="200px"
                    className="object-cover"
                  />
                </div>
                <p className="text-[var(--text-primary)] text-[11px] font-semibold text-center mt-2 leading-tight px-1">
                  Trained Under World-Class Mentors
                </p>
              </motion.div>

              {/* Floating certified badge — sm+ only, overlaps the photo by design */}
              <motion.div
  className="hidden sm:block absolute -top-6 -right-4 md:-right-8 bg-gradient-to-r from-[var(--accent-gold)] to-amber-300 rounded-2xl px-4 py-3 shadow-xl z-20"
  animate={{ y: [4, -4, 4] }}
  transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
>
  <div className="flex items-center gap-2">
    <ShieldCheck className="w-4 h-4 text-black" />
    <span className="text-black text-[11px] font-semibold tracking-wide whitespace-nowrap">
      Certified Coach
    </span>
  </div>
</motion.div>

              {/* Mobile: same two proof points, but placed in-flow below the photo instead of
                  overlapping it — nothing gets hidden and nothing covers the image. */}
              <div className="sm:hidden flex gap-3 mt-5">
                <div className="flex-1 glass-strong rounded-2xl p-2.5 shadow-lg">
                  <div className="relative rounded-xl overflow-hidden aspect-square">
                    <Image
                      src="/mentors/renu-mentor-1.jpg"
                      alt="Learning directly from world-class mentors"
                      fill
                      sizes="150px"
                      className="object-cover"
                    />
                  </div>
                  <p className="text-[var(--text-primary)] text-[10px] font-semibold text-center mt-2 leading-tight px-1">
                    Trained Under World-Class Mentors
                  </p>
                </div>
                <div className="flex-1 bg-gradient-to-r from-[var(--accent-gold)] to-amber-300 rounded-2xl px-3 py-4 shadow-lg flex flex-col items-center justify-center gap-2 text-center">
  <ShieldCheck className="w-5 h-5 text-black" />
  <span className="text-black text-[11px] font-semibold tracking-wide">
    Certified Coach
  </span>
</div>
              </div>
            </div>
          </Reveal>

          {/* Content */}
          <Reveal direction="right">
            <div>
              <div className="glass-card rounded-2xl p-6 mb-8 border-l-[3px] border-l-[var(--accent-ink)]">
                <Quote className="w-6 h-6 text-[var(--accent-ink)]/50 mb-3" />
                <p className="text-[var(--text-primary)] text-lg leading-relaxed italic font-display">
                  Real growth doesn&apos;t happen in a classroom alone. It happens in rooms full
                  of people who refuse to stay the same. I&apos;ve sat in those rooms — and now I
                  bring that experience home to you.
                </p>
                <cite className="gradient-text-champagne text-lg mt-4 block not-italic font-display font-semibold tracking-[2px] relative w-fit">
                  — RENU SHARMA
                  <span className="absolute -bottom-1.5 left-0 h-px w-full bg-gradient-to-r from-[var(--accent-gold-deep)] via-[var(--accent-gold)] to-transparent" />
                </cite>
              </div>

              <ul className="space-y-4 mb-9">
                {credentials.map((c, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-gradient-to-br from-[var(--accent-primary)]/15 to-[var(--accent-royal)]/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-primary)]" />
                    </span>
                    <span className="text-[var(--text-secondary)] text-base leading-relaxed">{c}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#programs"
                className="group inline-flex items-center gap-2 bg-gradient-to-r from-[var(--accent-primary)] via-[var(--accent-primary)] to-[var(--accent-royal)] text-white font-semibold px-8 py-3.5 rounded-full text-base tracking-tight transition-all duration-300 hover:shadow-[0_12px_40px_rgba(29,78,216,0.4)] hover:scale-[1.03] active:scale-[0.98]"
              >
                Learn With Renu
                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </Reveal>
        </div>

        {/* Trust badges */}
        <Reveal>
          <div className="flex flex-wrap justify-center gap-3 mb-20 md:mb-24">
            {trustBadges.map((b, i) => (
              <motion.div
                key={b.label}
                className="glass-card hover-lift inline-flex items-center gap-2 px-5 py-3 rounded-full"
                animate={{ y: [0, i % 2 === 0 ? -5 : 5, 0] }}
                transition={{
                  duration: 4 + (i % 3),
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.15,
                }}
              >
                <b.icon className="w-4 h-4 text-[var(--accent-primary)]" />
                <span className="text-[var(--text-primary)] text-base font-semibold tracking-tight">
                  {b.label}
                </span>
              </motion.div>
            ))}
          </div>
        </Reveal>

        {/* Culture heading */}
        <Reveal>
          <div className="text-center mb-10">
            <span className="text-[var(--accent-ink)] text-base tracking-[3px] uppercase font-semibold mb-3 block">
              Academy Culture
            </span>
            <h3 className="font-display text-[var(--text-primary)] text-3xl md:text-4xl font-semibold">
              Real Rooms. <span className="gradient-text-purple italic">Real Growth.</span>
            </h3>
          </div>
        </Reveal>
      </div>

      {/* Desktop: infinite auto-scrolling marquee (pauses on hover) */}
      <div className="relative hidden md:block mt-4">
        <div className="overflow-hidden">
          <div className="marquee-track flex gap-6 w-max" style={{ animationDuration: "38s" }}>
            {marqueeItems.map((g, i) => (
              <div
                key={i}
                className="hover-lift group relative w-80 aspect-[4/3] rounded-3xl overflow-hidden glass-card flex-shrink-0"
              >
                <Image
                  src={g.src}
                  alt={g.title}
                  fill
                  sizes="320px"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white font-semibold text-base leading-tight">{g.title}</p>
                  <p className="text-white/75 text-[13px] mt-0.5">{g.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Edge fades to blend into the aurora-gold background */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[var(--bg-soft)] to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[var(--bg-soft)] to-transparent z-10" />
      </div>

      {/* Mobile / tablet: same infinite auto-slide as desktop, just smaller cards */}
      <div className="relative md:hidden mt-4">
        <div className="overflow-hidden">
          <div className="marquee-track flex gap-4 w-max" style={{ animationDuration: "26s" }}>
            {marqueeItems.map((g, i) => (
              <div
                key={i}
                className="relative w-64 aspect-[4/3] rounded-3xl overflow-hidden glass-card flex-shrink-0"
              >
                <Image src={g.src} alt={g.title} fill sizes="256px" className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white font-semibold text-base leading-tight">{g.title}</p>
                  <p className="text-white/75 text-[13px] mt-0.5">{g.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Edge fades to blend into the aurora-gold background */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-[var(--bg-soft)] to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-[var(--bg-soft)] to-transparent z-10" />
      </div>
    </section>
  );
}
