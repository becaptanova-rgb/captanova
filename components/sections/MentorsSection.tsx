"use client";

import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef, type ReactNode } from "react";
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

/** Desktop-only mouse-parallax tilt wrapper. Touch devices never fire mousemove, so this is a no-op on mobile. */
function TiltCard({ children, className }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [7, -7]), { stiffness: 150, damping: 22 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-7, 7]), { stiffness: 150, damping: 22 });
  const scale = useSpring(1, { stiffness: 150, damping: 22 });

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  }
  function handleEnter() {
    scale.set(1.02);
  }
  function handleLeave() {
    x.set(0);
    y.set(0);
    scale.set(1);
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      style={{ rotateX, rotateY, scale, transformStyle: "preserve-3d" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function MentorsSection() {
  const marqueeItems = [...gallery, ...gallery];

  return (
    <section id="mentors" className="relative aurora-gold py-24 md:py-32 overflow-hidden">
      <div className="glow-blob w-[28rem] h-[28rem] bg-purple-100/30 -top-20 -left-20" />
      <div className="glow-blob w-96 h-96 bg-amber-100/35 bottom-0 right-0" />
      <div className="noise-overlay" />

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Header */}
        <Reveal>
          <div className="text-center mb-16 md:mb-20">
            <span className="inline-flex items-center gap-2 glass-card text-[#555555] text-base tracking-[2px] uppercase font-semibold px-5 py-2.5 rounded-full mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#c9962f] to-[#7c3aed]" />
              The Experience Behind Captanova
            </span>
            <h2 className="font-display text-[#111111] text-4xl md:text-5xl font-semibold leading-tight mb-5">
              Guided By Real Experience.
              <br className="hidden md:block" />
              Backed By <span className="gradient-text-purple italic">Global Standards.</span>
            </h2>
            <p className="text-[#777777] text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
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
              <div style={{ perspective: 1200 }}>
                <TiltCard className="relative rounded-[2.5rem] overflow-hidden aspect-[4/5] glass-card">
                  <Image
                    src="/mentors/renu-speaking-stage.jpg"
                    alt="Renu Sharma coaching a live session on stage"
                    fill
                    sizes="(max-width: 1024px) 90vw, 40vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/0 to-black/0" />
                  <div className="absolute top-5 left-5 right-20 sm:right-24 glass-strong rounded-2xl px-5 py-4 inline-block">
                    <p className="text-white text-lg font-display font-semibold">Renu Sharma</p>
                    <p className="text-white/80 text-base">Founder &amp; Lead Coach, Captanova</p>
                  </div>
                </TiltCard>
              </div>

              {/* Floating mentorship proof card */}
              <motion.div
                className="absolute -bottom-10 -left-6 sm:-left-12 w-36 sm:w-44 md:w-48 glass-strong rounded-3xl p-2.5 shadow-2xl z-20"
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
                <p className="text-[#333333] text-[11px] font-semibold text-center mt-2 leading-tight px-1">
                  Trained Under World-Class Mentors
                </p>
              </motion.div>

              {/* Floating certified badge */}
              <motion.div
                className="absolute -top-6 -right-4 md:-right-8 glass-strong rounded-2xl px-4 py-3 shadow-xl hidden sm:block z-20"
                animate={{ y: [4, -4, 4] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#059669]" />
                  <span className="text-[#333333] text-[11px] font-semibold tracking-wide whitespace-nowrap">
                    Certified Coach
                  </span>
                </div>
              </motion.div>
            </div>
          </Reveal>

          {/* Content */}
          <Reveal direction="right">
            <div>
              <div className="glass-card rounded-2xl p-6 mb-8 border-l-[3px] border-l-[#c9962f]">
                <Quote className="w-6 h-6 text-[#c9962f]/50 mb-3" />
                <p className="text-[#333333] text-lg leading-relaxed italic font-display">
                  Real growth doesn&apos;t happen in a classroom alone. It happens in rooms full
                  of people who refuse to stay the same. I&apos;ve sat in those rooms — and now I
                  bring that experience home to you.
                </p>
                <cite className="text-[#c9962f] text-base mt-3 block not-italic font-semibold tracking-wide">
                  — RENU SHARMA
                </cite>
              </div>

              <ul className="space-y-4 mb-9">
                {credentials.map((c, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-gradient-to-br from-[#7c3aed]/15 to-[#2563eb]/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#7c3aed]" />
                    </span>
                    <span className="text-[#555555] text-base leading-relaxed">{c}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#programs"
                className="group inline-flex items-center gap-2 bg-gradient-to-r from-[#7c3aed] via-[#6d28d9] to-[#2563eb] text-white font-semibold px-8 py-3.5 rounded-full text-base tracking-tight transition-all duration-300 hover:shadow-[0_12px_40px_rgba(124,58,237,0.4)] hover:scale-[1.03] active:scale-[0.98]"
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
                <b.icon className="w-4 h-4 text-[#7c3aed]" />
                <span className="text-[#333333] text-base font-semibold tracking-tight">
                  {b.label}
                </span>
              </motion.div>
            ))}
          </div>
        </Reveal>

        {/* Culture heading */}
        <Reveal>
          <div className="text-center mb-10">
            <span className="text-[#c9962f] text-base tracking-[3px] uppercase font-semibold mb-3 block">
              Academy Culture
            </span>
            <h3 className="font-display text-[#111111] text-3xl md:text-4xl font-semibold">
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
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#fafafa] to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#fafafa] to-transparent z-10" />
      </div>

      {/* Mobile / tablet: natural swipe with momentum + snap */}
      <div className="md:hidden mt-4 px-6">
        <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory no-scrollbar pb-2 -mx-6 px-6">
          {gallery.map((g, i) => (
            <div
              key={i}
              className="relative w-[78vw] max-w-xs aspect-[4/3] rounded-3xl overflow-hidden glass-card flex-shrink-0 snap-center"
            >
              <Image src={g.src} alt={g.title} fill sizes="78vw" className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-white font-semibold text-base leading-tight">{g.title}</p>
                <p className="text-white/75 text-[13px] mt-0.5">{g.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
