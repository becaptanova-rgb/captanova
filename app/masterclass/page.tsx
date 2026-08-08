"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Brain,
  Compass,
  Target,
  Users,
  ShieldCheck,
  Calendar,
  Clock,
  ChevronDown,
  ArrowRight,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import TiltCard from "@/components/ui/TiltCard";
import IconOrb from "@/components/ui/IconOrb";
import CountdownTimer from "@/components/ui/CountdownTimer";
import { MASTERCLASS_DATE_ISO } from "@/lib/data";
import { buildICSDownloadUrl } from "@/lib/utils";
import { trackLead, trackViewContent } from "@/lib/analytics";

const dateObj = new Date(MASTERCLASS_DATE_ISO);
const dateLabel = dateObj.toLocaleDateString("en-IN", {
  weekday: "long",
  day: "numeric",
  month: "long",
  timeZone: "Asia/Kolkata",
});
const timeLabel = dateObj.toLocaleTimeString("en-IN", {
  hour: "numeric",
  minute: "2-digit",
  timeZone: "Asia/Kolkata",
});

const takeaways = [
  {
    icon: Brain,
    color: "var(--accent-primary)",
    title: "Why You Overthink",
    desc: "The real (often surprising) root cause of the overthinking loop — and why willpower alone never fixes it.",
  },
  {
    icon: Compass,
    color: "var(--accent-royal)",
    title: "The Clarity Shift",
    desc: "A simple daily practice that quiets mental noise and helps you hear your own decisions again.",
  },
  {
    icon: Target,
    color: "var(--accent-cyan)",
    title: "Confidence, On Demand",
    desc: "How to act before you feel ready — the exact sequence Renu uses with 1-on-1 clients.",
  },
  {
    icon: Sparkles,
    color: "var(--accent-ink)",
    title: "Your First 3 Steps",
    desc: "Leave with a concrete starting point for the next 21 days, not just inspiration.",
  },
];

const forYou = [
  "You overthink decisions, big and small",
  "You know what to do but rarely follow through",
  "You want more confidence in how you speak and show up",
  "You're ready for a real shift, not another motivational video",
];

const faqs = [
  {
    q: "Is this really free?",
    a: "Yes — completely free, live, and open. There's no hidden fee to attend.",
  },
  {
    q: "What if I can't make it live?",
    a: "Register anyway — you'll get the replay link by email, but the live session includes live Q&A with Renu that the replay won't have.",
  },
  {
    q: "Do I need any prior experience with coaching or self-help?",
    a: "None at all. This is built for complete beginners as well as people who've tried other programs before and want something that actually sticks.",
  },
  {
    q: "Will there be a sales pitch?",
    a: "Renu will mention Captanova's programs briefly at the end for anyone who wants to go deeper — but the masterclass itself is a full, standalone session with real, usable takeaways.",
  },
];

const testimonials = [
  {
    quote:
      "The Awareness Journal changed the way I see myself. It was the start of my transformation. I finally stopped overthinking and started actually living.",
    name: "Priya M.",
    role: "Marketing Manager",
    initials: "PM",
    color: "var(--accent-primary)",
  },
  {
    quote:
      "I went from overthinking everything to taking action each and every day. Captanova gave me my life back.",
    name: "Arjun S.",
    role: "Entrepreneur",
    initials: "AS",
    color: "var(--accent-royal)",
  },
  {
    quote:
      "My confidence and communication have improved so much. I'm now leading my team with ease.",
    name: "Neha K.",
    role: "Team Lead",
    initials: "NK",
    color: "var(--accent-ink)",
  },
];

interface FormState {
  name: string;
  email: string;
  phone: string;
  city: string;
  age: string;
}

const initialForm: FormState = { name: "", email: "", phone: "", city: "", age: "" };

export default function MasterclassPage() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [registered, setRegistered] = useState(false);
  const [icsUrl, setIcsUrl] = useState<string | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  useEffect(() => {
    trackViewContent({ content_name: "Free Masterclass Landing Page" });
  }, []);

  useEffect(() => {
    return () => {
      if (icsUrl) URL.revokeObjectURL(icsUrl);
    };
  }, [icsUrl]);

  function scrollToForm() {
    document.getElementById("register")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    if (!form.name.trim() || !form.email.trim() || !form.phone.trim() || !form.city.trim() || !form.age) {
      setError("Please fill in every field so we can confirm your seat.");
      return;
    }
    if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          type: "masterclass",
          source: "masterclass-landing",
        }),
      });
      if (!res.ok) throw new Error("Registration failed");

      trackLead({ content_name: "Free Masterclass" });

      const url = buildICSDownloadUrl({
        title: "Free Masterclass: Stop Overthinking, Start Living — Captanova",
        description:
          "Live masterclass with Renu Sharma. Join link will be emailed to you before the session.",
        startISO: MASTERCLASS_DATE_ISO,
        durationMinutes: 75,
      });
      setIcsUrl(url);
      setRegistered(true);
    } catch {
      setError("Something went wrong — please try again in a moment.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="bg-white text-[var(--text-primary)] overflow-x-hidden">
      {/* Sticky top bar: logo + live countdown + CTA */}
      <div className="fixed top-0 inset-x-0 z-50 glass-strong border-b border-black/[0.06]">
        <div className="max-w-6xl mx-auto px-5 py-3 flex items-center justify-between gap-3">
          <Link href="/" className="font-display gradient-text-purple text-base md:text-lg tracking-[2px] uppercase font-semibold flex-shrink-0">
            Captanova
          </Link>
          <div className="hidden sm:flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse flex-shrink-0" />
            <span className="text-[10px] md:text-[11px] uppercase tracking-wider text-[var(--text-tertiary)] font-semibold whitespace-nowrap">
              Starts In
            </span>
            <CountdownTimer targetDate={MASTERCLASS_DATE_ISO} compact />
          </div>
          <button
            onClick={scrollToForm}
            className="btn-gold text-[12px] md:text-sm py-2 px-4 md:px-6 flex-shrink-0"
          >
            Reserve Seat
          </button>
        </div>
      </div>

      {/* ── Hero ── */}
      <section className="relative aurora-hero pt-32 pb-20 px-6 overflow-hidden">
        <div className="glow-blob w-[500px] h-[500px] bg-blue-300/30 -top-40 -left-40" />
        <div className="glow-blob w-[400px] h-[400px] bg-blue-300/25 top-20 -right-20" />
        <div className="noise-overlay" />

        <div className="relative max-w-6xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 glass-strong rounded-full px-4 py-2 mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
              <span className="text-[11px] uppercase tracking-[2px] font-bold text-[var(--accent-primary)]">
                Free Live Masterclass · Limited Seats
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-4xl md:text-6xl font-semibold leading-[1.08] mb-6"
            >
              Stop Overthinking.
              <br />
              <span className="gradient-text-purple italic">Start Living.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-[var(--text-secondary)] text-lg leading-relaxed mb-8 max-w-lg"
            >
              A free live session with Renu Sharma on breaking the overthinking cycle and building
              real, lasting confidence — so you finally act on what you already know.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex items-center gap-3 mb-4 text-[var(--text-tertiary)] text-base"
            >
              <Calendar className="w-4 h-4 flex-shrink-0" />
              <span>{dateLabel}</span>
              <span className="text-[var(--text-muted)]">·</span>
              <Clock className="w-4 h-4 flex-shrink-0" />
              <span>{timeLabel} IST</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <p className="text-[10px] uppercase tracking-[2px] text-[var(--text-muted)] font-semibold mb-2.5">
                Seats close in
              </p>
              <CountdownTimer targetDate={MASTERCLASS_DATE_ISO} className="mb-7" />

              <button
                onClick={scrollToForm}
                className="group/hero btn-primary text-base py-4 px-8 w-full sm:w-auto"
              >
                Reserve My Free Seat
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/hero:translate-x-1" />
              </button>
              <p className="text-[var(--text-muted)] text-xs mt-3">
                100% free · No card required · Takes 30 seconds
              </p>
            </motion.div>
          </div>

          {/* Host photo */}
          <Reveal direction="right">
            <div className="relative max-w-sm mx-auto lg:max-w-none">
              <TiltCard intensity={7} className="rounded-[2.5rem] overflow-hidden aspect-[4/5] glass-card">
                <Image
                  src="/mentors/renu-speaking-stage.jpg"
                  alt="Renu Sharma — host of the free masterclass"
                  fill
                  sizes="(max-width: 1024px) 90vw, 40vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/0 to-black/0" />
<div className="absolute bottom-5 left-5 right-5 bg-gradient-to-r from-[var(--accent-gold)] to-amber-300 rounded-2xl px-5 py-4 shadow-lg">
  <p className="text-black text-lg font-display font-semibold">Renu Sharma</p>
  <p className="text-black/80 text-base font-medium">Founder &amp; Lead Coach, Captanova</p>
</div>
              </TiltCard>
              <div className="absolute inset-0 bg-blue-200/15 rounded-[2.5rem] blur-3xl -z-10" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── What you'll learn ── */}
      <section className="relative py-20 md:py-28 px-6">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-[var(--accent-primary)] text-base tracking-[3px] uppercase font-bold mb-3">
              In This Free Session
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-semibold leading-tight">
              You&apos;ll Walk Away Knowing How To
            </h2>
          </div>
        </Reveal>

        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {takeaways.map((t, i) => (
            <Reveal key={t.title} delay={i * 0.1}>
              <TiltCard intensity={9} className="glass-card rounded-3xl p-6 flex flex-col">
                <div style={{ transform: "translateZ(24px)" }} className="mb-4">
                  <IconOrb color={t.color} size={48} shape="2xl" delay={i * 0.15}>
                    <t.icon className="w-5 h-5" strokeWidth={2} />
                  </IconOrb>
                </div>
                <h3 className="text-[var(--text-primary)] font-semibold text-base mb-2">{t.title}</h3>
                <p className="text-[var(--text-tertiary)] text-base leading-relaxed">{t.desc}</p>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── Who it's for + host credibility ── */}
      <section className="relative aurora-gold py-20 md:py-28 px-6 overflow-hidden">
        <div className="glow-blob w-96 h-96 bg-sky-200/30 top-10 right-0" />
        <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          <Reveal direction="left">
            <TiltCard intensity={6} className="glass-card rounded-3xl p-8">
              <div style={{ transform: "translateZ(20px)" }} className="mb-5">
                <IconOrb color="var(--accent-royal)" size={44} shape="2xl" float={false}>
                  <Users className="w-5 h-5" strokeWidth={2} />
                </IconOrb>
              </div>
              <h3 className="text-[var(--text-primary)] font-display font-semibold text-xl mb-6">
                This Masterclass Is For You If
              </h3>
              <ul className="space-y-3.5">
                {forYou.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[var(--accent-royal)] mt-0.5 flex-shrink-0" strokeWidth={2} />
                    <span className="text-[var(--text-secondary)] text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </TiltCard>
          </Reveal>

          <Reveal direction="right">
            <TiltCard intensity={6} className="glass-card rounded-3xl p-8">
              <div style={{ transform: "translateZ(20px)" }} className="mb-5">
                <IconOrb color="var(--accent-ink)" size={44} shape="2xl" float={false}>
                  <ShieldCheck className="w-5 h-5" strokeWidth={2} />
                </IconOrb>
              </div>
              <h3 className="text-[var(--text-primary)] font-display font-semibold text-xl mb-4">
                Meet Your Host
              </h3>
              <p className="text-[var(--text-secondary)] text-base leading-relaxed mb-4">
                Renu Sharma is the founder of Captanova Academy — The Academy for Mindset,
                Communication &amp; Self-Leadership. She&apos;s helped hundreds of people move from
                overthinking and self-doubt into clarity, confidence, and consistent action.
              </p>
              <p className="text-[var(--text-primary)] text-base leading-relaxed font-medium italic font-display">
                &quot;My mission is simple: to help you become the captain of your life.&quot;
              </p>
            </TiltCard>
          </Reveal>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="relative py-20 md:py-28 px-6">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-[var(--accent-primary)] text-base tracking-[3px] uppercase font-bold mb-3">
              Real Results
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-semibold leading-tight">
              People Who&apos;ve Made The Shift
            </h2>
          </div>
        </Reveal>
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.1}>
              <TiltCard intensity={8} className="glass-card rounded-2xl p-6">
                <p className="text-[var(--text-secondary)] text-base leading-relaxed italic mb-5">
                  &quot;{t.quote}&quot;
                </p>
                <div className="flex items-center gap-3">
                  <IconOrb color={t.color} size={38} shape="full" float={false}>
                    <span className="font-bold text-[13px]">{t.initials}</span>
                  </IconOrb>
                  <div>
                    <p className="text-[var(--text-primary)] text-base font-semibold">{t.name}</p>
                    <p className="text-[var(--text-tertiary)] text-[11px]">{t.role}</p>
                  </div>
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="relative py-20 md:py-28 px-6 bg-[var(--bg-soft)]">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-semibold leading-tight">
              Frequently Asked Questions
            </h2>
          </div>
        </Reveal>
        <div className="max-w-2xl mx-auto space-y-3">
          {faqs.map((f, i) => (
            <Reveal key={f.q} delay={i * 0.06}>
              <div className="glass-card rounded-2xl overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="text-[var(--text-primary)] font-semibold text-base">{f.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-[var(--text-tertiary)] flex-shrink-0 transition-transform duration-300 ${
                      openFaq === i ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-5 text-[var(--text-secondary)] text-base leading-relaxed">{f.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── Registration form ── */}
      <section id="register" className="relative aurora-hero py-24 md:py-32 px-6 overflow-hidden scroll-mt-20">
        <div className="glow-blob w-[450px] h-[450px] bg-blue-300/25 top-0 right-0" />
        <div className="relative max-w-lg mx-auto">
          <Reveal>
            <TiltCard intensity={4} className="glass-card rounded-[2rem] p-8 md:p-10">
              <AnimatePresence mode="wait">
                {registered ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-4"
                  >
                    <div style={{ transform: "translateZ(20px)" }} className="mx-auto mb-5 w-fit">
                      <IconOrb color="var(--accent-royal)" size={56} shape="full">
                        <CheckCircle2 className="w-7 h-7" strokeWidth={2} />
                      </IconOrb>
                    </div>
                    <h3 className="font-display text-2xl font-semibold text-[var(--text-primary)] mb-2">
                      You&apos;re In, {form.name.split(" ")[0]}!
                    </h3>
                    <p className="text-[var(--text-tertiary)] text-base leading-relaxed mb-6">
                      Your seat is confirmed for {dateLabel} at {timeLabel} IST. We&apos;ve sent a
                      confirmation to {form.email} — the live join link will follow closer to the date.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3">
                      {icsUrl && (
                        <a
                          href={icsUrl}
                          download="captanova-masterclass.ics"
                          className="btn-outline flex-1 text-sm justify-center"
                        >
                          <Calendar className="w-4 h-4" />
                          Add To Calendar
                        </a>
                      )}
                      <a
                        href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "919876543210"}?text=${encodeURIComponent(
                          "Hi! I just registered for the free masterclass 🙌"
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary flex-1 text-sm justify-center"
                      >
                        Get Reminders On WhatsApp
                      </a>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                    <p className="text-[var(--accent-primary)] text-base tracking-[3px] uppercase font-bold mb-2 text-center">
                      Reserve Your Free Seat
                    </p>
                    <h3 className="font-display text-2xl font-semibold text-[var(--text-primary)] mb-1 text-center">
                      {dateLabel}
                    </h3>
                    <p className="text-[var(--text-tertiary)] text-base text-center mb-7">
                      {timeLabel} IST · Live Online · 100% Free
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-3">
                      <input
                        type="text"
                        placeholder="Full Name"
                        aria-label="Full Name"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full bg-white/70 border border-black/[0.08] focus:border-[var(--accent-primary)]/40 focus:bg-white rounded-xl px-4 py-3 text-[var(--text-primary)] text-base placeholder-[var(--text-muted)] outline-none transition-all"
                      />
                      <input
                        type="email"
                        placeholder="Email Address"
                        aria-label="Email Address"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full bg-white/70 border border-black/[0.08] focus:border-[var(--accent-primary)]/40 focus:bg-white rounded-xl px-4 py-3 text-[var(--text-primary)] text-base placeholder-[var(--text-muted)] outline-none transition-all"
                      />
                      <input
                        type="tel"
                        placeholder="Phone Number"
                        aria-label="Phone Number"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className="w-full bg-white/70 border border-black/[0.08] focus:border-[var(--accent-primary)]/40 focus:bg-white rounded-xl px-4 py-3 text-[var(--text-primary)] text-base placeholder-[var(--text-muted)] outline-none transition-all"
                      />
                      <div className="grid grid-cols-2 gap-3">
                        <input
                          type="text"
                          placeholder="City"
                          aria-label="City"
                          value={form.city}
                          onChange={(e) => setForm({ ...form, city: e.target.value })}
                          className="w-full bg-white/70 border border-black/[0.08] focus:border-[var(--accent-primary)]/40 focus:bg-white rounded-xl px-4 py-3 text-[var(--text-primary)] text-base placeholder-[var(--text-muted)] outline-none transition-all"
                        />
                        <select
                          value={form.age}
                          aria-label="Age Range"
                          onChange={(e) => setForm({ ...form, age: e.target.value })}
                          className="w-full bg-white/70 border border-black/[0.08] focus:border-[var(--accent-primary)]/40 focus:bg-white rounded-xl px-4 py-3 text-[var(--text-primary)] text-base outline-none transition-all appearance-none"
                        >
                          <option value="">Age Range</option>
                          <option value="Under 18">Under 18</option>
                          <option value="18-24">18–24</option>
                          <option value="25-34">25–34</option>
                          <option value="35-44">35–44</option>
                          <option value="45-54">45–54</option>
                          <option value="55+">55+</option>
                        </select>
                      </div>

                      {error && <p className="text-[var(--accent-slate)] text-base">{error}</p>}

                      <button
                        type="submit"
                        disabled={loading}
                        className="btn-primary w-full justify-center text-base py-3.5 disabled:opacity-60"
                      >
                        {loading ? "Reserving Your Seat…" : "Reserve My Free Seat"}
                      </button>
                    </form>
                    <p className="text-[var(--text-muted)] text-xs mt-4 text-center">
                      We respect your inbox — no spam, ever. Unsubscribe anytime.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </TiltCard>
          </Reveal>
        </div>
      </section>

      {/* ── Minimal footer (scoped to this landing page — no cross-page anchor links) ── */}
      <footer className="relative bg-white border-t border-black/[0.06] py-10 px-6">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link href="/" className="font-display gradient-text-purple text-base tracking-[2px] uppercase font-semibold">
            Captanova
          </Link>
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
            <p className="text-[var(--text-tertiary)] text-sm">
              © {new Date().getFullYear()} Captanova Academy. All rights reserved.
            </p>
            <Link href="/privacy-policy" className="text-[var(--text-tertiary)] hover:text-[var(--accent-primary)] text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link href="/refund-policy" className="text-[var(--text-tertiary)] hover:text-[var(--accent-primary)] text-sm transition-colors">
              Refund Policy
            </Link>
          </div>
          <Link href="/" className="text-[var(--text-tertiary)] hover:text-[var(--accent-primary)] text-sm font-medium transition-colors">
            ← Back to Captanova Academy
          </Link>
        </div>
      </footer>

      {/* ── Sticky mobile CTA bar ── */}
      {!registered && (
        <div className="md:hidden fixed bottom-0 inset-x-0 z-50 glass-strong border-t border-black/[0.08] px-4 py-3 flex items-center justify-between gap-3">
          <div className="flex flex-col">
            <span className="text-[9px] uppercase tracking-wider text-[var(--text-tertiary)] font-semibold">Starts In</span>
            <CountdownTimer targetDate={MASTERCLASS_DATE_ISO} compact />
          </div>
          <button onClick={scrollToForm} className="btn-gold text-sm py-2.5 px-5 flex-shrink-0">
            Reserve Seat
          </button>
        </div>
      )}
    </main>
  );
}
