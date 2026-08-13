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
  Award,
  Zap,
  Play,
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
    color: "#FF6B35",
    title: "Rewire Your Mind",
    desc: "Break the overthinking cycle in 3 simple steps",
  },
  {
    icon: Compass,
    color: "#6366F1",
    title: "Find Clarity",
    desc: "Make decisions with confidence, not confusion",
  },
  {
    icon: Target,
    color: "#06B6D4",
    title: "Take Action",
    desc: "Move from thinking to doing, starting today",
  },
  {
    icon: Sparkles,
    color: "#F59E0B",
    title: "Build Momentum",
    desc: "Create lasting habits that stick",
  },
];

const hostStats = [
  { label: "Years Coaching", value: "12+", icon: Award },
  { label: "Lives Changed", value: "3000+", icon: Users },
  { label: "Success Rate", value: "94%", icon: CheckCircle2 },
  { label: "Rating", value: "4.9★", icon: Sparkles },
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
  const [showVideo, setShowVideo] = useState(false);

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
        durationMinutes: 90,
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
    <main className="w-full bg-white text-gray-900 overflow-x-hidden">
      {/* ── STICKY HEADER ── */}
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 w-full z-50 backdrop-blur-xl bg-white/80 border-b border-gray-200/50 shadow-sm"
      >
        <div className="max-w-full mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between gap-3 sm:gap-6">
          <Link href="/" className="font-bold text-lg sm:text-xl bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent flex-shrink-0">
            Captanova
          </Link>

          <div className="hidden sm:flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-gradient-to-r from-red-50 to-orange-50 border border-red-200/50">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse flex-shrink-0" />
            <span className="text-xs font-bold text-gray-600 uppercase tracking-wider">In</span>
            <CountdownTimer targetDate={MASTERCLASS_DATE_ISO} compact />
          </div>

          <button
            onClick={scrollToForm}
            className="bg-black hover:bg-gray-900 text-white text-xs sm:text-sm font-bold py-2.5 sm:py-3 px-4 sm:px-6 rounded-lg transition-all shadow-lg hover:shadow-xl flex-shrink-0"
          >
            Reserve Now
          </button>
        </div>
      </motion.div>

      {/* ── MOBILE HERO: HOST IMAGE FIRST ── */}
      <section className="md:hidden w-full pt-20 pb-8 px-4 bg-gradient-to-b from-slate-50 via-white to-white min-h-screen flex flex-col items-center justify-center">
        {/* Top decorative line */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent" />

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-xs"
        >
          {/* Main Image Card */}
          <div className="relative mb-12">
            <div className="absolute inset-0 bg-gradient-to-br from-red-400/30 to-orange-400/20 rounded-3xl blur-2xl" />

            <div className="relative rounded-3xl overflow-hidden aspect-[3/4] shadow-2xl ring-8 ring-white">
              <Image
                src="/mentors/renu-speaking-stage.jpg"
                alt="Renu Sharma"
                fill
                priority
                className="object-cover"
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>

            {/* Premium Badge - Repositioned for better mobile view */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="absolute -bottom-8 left-4 right-4 bg-gradient-to-r from-red-500 via-red-600 to-orange-500 rounded-2xl px-6 py-4 shadow-2xl border-4 border-white"
            >
              <p className="text-white font-black text-lg">Renu Sharma</p>
              <p className="text-white/90 font-bold text-sm">Transformational Coach</p>
              <div className="flex items-center gap-2 mt-1.5">
                <Zap className="w-3.5 h-3.5 text-white/80" fill="white" />
                <span className="text-xs font-bold text-white/80">12+ Years • 3000+ Lives Changed</span>
              </div>
            </motion.div>
          </div>

          {/* Content Below Image */}
          <div className="pt-12 text-center">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <p className="text-red-600 text-xs font-black uppercase tracking-widest mb-4">
                📅 {dateLabel} · {timeLabel}
              </p>

              <h1 className="text-4xl font-black leading-tight text-gray-900 mb-4">
                Stop Overthinking.
                <br />
                <span className="bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent italic">
                  Start Living.
                </span>
              </h1>

              <p className="text-gray-600 text-base leading-relaxed mb-8 font-medium">
                A free live masterclass on breaking free from overthinking and building real, lasting confidence.
              </p>

              <div className="p-4 rounded-2xl bg-red-50 border-2 border-red-200 mb-8">
                <p className="text-xs font-black text-gray-700 uppercase mb-2">⏰ Seats Closing In</p>
                <div className="flex items-center justify-center gap-2">
                  <CountdownTimer targetDate={MASTERCLASS_DATE_ISO} />
                </div>
              </div>

              <button
                onClick={scrollToForm}
                className="w-full bg-black hover:bg-gray-900 text-white font-black text-lg py-4 px-6 rounded-2xl shadow-2xl hover:shadow-3xl transition-all flex items-center justify-center gap-3 mb-3"
              >
                Reserve My Free Seat
                <ArrowRight className="w-5 h-5" />
              </button>

              <p className="text-xs text-gray-500 font-bold">✓ 100% free · ✓ No card · ✓ 30 seconds</p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* ── DESKTOP HERO ── */}
      <section className="hidden md:block relative pt-32 pb-24 px-6 overflow-hidden min-h-screen flex items-center">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-red-200/40 to-transparent rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-red-50 border-2 border-red-200 rounded-full px-5 py-3 mb-8">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse" />
              <span className="text-xs font-black uppercase tracking-wider text-red-600">Free Live Masterclass</span>
            </div>

            <h1 className="text-6xl lg:text-7xl font-black leading-[1.1] mb-8 text-gray-900">
              Stop Overthinking.
              <br />
              <span className="bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent italic">
                Start Living.
              </span>
            </h1>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed font-medium max-w-xl">
              Join Renu Sharma for a transformational masterclass on breaking the overthinking cycle and building lasting confidence.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <div className="flex items-center gap-3 px-5 py-4 rounded-xl bg-gradient-to-r from-red-50 to-orange-50 border-2 border-red-200">
                <Calendar className="w-5 h-5 text-red-600" />
                <div>
                  <p className="text-xs font-bold text-gray-600 uppercase">Date & Time</p>
                  <p className="font-bold text-gray-900">{dateLabel}, {timeLabel} IST</p>
                </div>
              </div>
              <div className="flex items-center gap-3 px-5 py-4 rounded-xl bg-gradient-to-r from-blue-50 to-purple-50 border-2 border-blue-200">
                <Users className="w-5 h-5 text-blue-600" />
                <div>
                  <p className="text-xs font-bold text-gray-600 uppercase">Format</p>
                  <p className="font-bold text-gray-900">Live Online · 90 mins</p>
                </div>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              onClick={scrollToForm}
              className="bg-black hover:bg-gray-900 text-white text-lg font-black py-5 px-8 rounded-2xl shadow-2xl hover:shadow-3xl transition-all inline-flex items-center gap-3 mb-6"
            >
              Reserve My Free Seat
              <ArrowRight className="w-6 h-6" />
            </motion.button>

            <p className="text-sm text-gray-600 font-bold">✓ Completely free · ✓ No credit card · ✓ 30 seconds to register</p>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-red-400/30 to-orange-400/20 rounded-3xl blur-3xl" />

            <div className="relative rounded-3xl overflow-hidden aspect-[3/4] shadow-2xl ring-8 ring-white">
              <Image
                src="/mentors/renu-speaking-stage.jpg"
                alt="Renu Sharma"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 90vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="absolute bottom-6 left-6 right-6 bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl px-6 py-4 shadow-2xl border-4 border-white"
              >
                <p className="text-white font-black text-lg">Renu Sharma</p>
                <p className="text-white/90 font-bold text-sm">Transformational Coach & Founder</p>
                <div className="flex items-center gap-2 mt-2">
                  <Award className="w-4 h-4 text-white" />
                  <span className="text-xs font-bold text-white/90">12+ Years • 3000+ Transformations</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── WHAT YOU'LL LEARN ── */}
      <section className="w-full py-16 md:py-24 px-4 sm:px-6 bg-gradient-to-b from-white via-slate-50 to-white">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="text-center mb-12 md:mb-16">
              <p className="text-red-600 text-xs md:text-sm font-black uppercase tracking-widest mb-4">In This Masterclass</p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black leading-tight text-gray-900 mb-4">
                4 Game-Changing Insights
              </h2>
              <p className="text-gray-600 text-base md:text-lg font-medium max-w-2xl mx-auto">
                You'll leave with concrete frameworks you can use starting today.
              </p>
            </div>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {takeaways.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -8 }}
                  className="group bg-white rounded-2xl p-6 sm:p-7 border-2 border-gray-200 hover:border-red-300 shadow-md hover:shadow-xl transition-all cursor-pointer"
                >
                  <div className="mb-6 inline-block p-3 rounded-xl bg-gradient-to-br from-red-100 to-orange-100 group-hover:from-red-200 group-hover:to-orange-200 transition-all">
                    <item.icon className="w-6 h-6" style={{ color: item.color }} strokeWidth={2} />
                  </div>
                  <h3 className="text-gray-900 font-black text-lg sm:text-xl mb-3">{item.title}</h3>
                  <p className="text-gray-600 text-base leading-relaxed">{item.desc}</p>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── DYNAMIC HOST SECTION ── */}
      <section className="w-full py-16 md:py-28 px-4 sm:px-6 bg-gradient-to-b from-slate-900 via-slate-800 to-black text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left Side - Stats & Story */}
            <Reveal direction="left">
              <div>
                <p className="text-red-500 text-xs md:text-sm font-black uppercase tracking-widest mb-4">Meet Your Coach</p>
                <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
                  Renu Sharma
                </h2>

                <div className="grid grid-cols-2 gap-6 mb-8 py-8 border-y border-white/20">
                  {hostStats.map((stat, i) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <p className="text-4xl md:text-5xl font-black bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
                        {stat.value}
                      </p>
                      <p className="text-gray-400 text-xs font-bold uppercase tracking-wider mt-2">{stat.label}</p>
                    </motion.div>
                  ))}
                </div>

                <p className="text-gray-300 text-lg leading-relaxed mb-6 font-medium">
                  For over a decade, Renu has been helping high-achievers break free from overthinking and step into their power. She's directly coached thousands of individuals who wanted clarity, confidence, and the ability to actually take action on what they know.
                </p>

                <p className="text-white italic text-lg font-bold">
                  &quot;My mission is simple: help you become the captain of your life, not a passenger.&quot;
                </p>
              </div>
            </Reveal>

            {/* Right Side - Image */}
            <Reveal direction="right">
              <motion.div whileHover={{ scale: 1.03 }} className="rounded-3xl overflow-hidden shadow-2xl ring-4 ring-white/20">
                <Image
                  src="/mentors/renu-speaking-stage.jpg"
                  alt="Renu Sharma"
                  width={500}
                  height={600}
                  className="w-full h-auto object-cover"
                />
              </motion.div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── WHO IT'S FOR ── */}
      <section className="w-full py-16 md:py-24 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-black text-center mb-12 text-gray-900">
              Is This Masterclass For You?
            </h2>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            <Reveal direction="left">
              <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-8 border-2 border-red-200">
                <div className="flex items-center gap-3 mb-6">
                  <CheckCircle2 className="w-7 h-7 text-red-600 flex-shrink-0" strokeWidth={2.5} />
                  <h3 className="text-2xl font-black text-gray-900">Perfect If You:</h3>
                </div>
                <ul className="space-y-4">
                  {[
                    "Overthink decisions (big and small)",
                    "Know what to do but struggle to act",
                    "Want to feel more confident",
                    "Are ready for real change, not just inspiration",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-600 mt-2 flex-shrink-0" />
                      <span className="text-gray-700 font-medium text-base">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal direction="right">
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 border-2 border-blue-200">
                <div className="flex items-center gap-3 mb-6">
                  <Award className="w-7 h-7 text-blue-600 flex-shrink-0" strokeWidth={2.5} />
                  <h3 className="text-2xl font-black text-gray-900">You'll Get:</h3>
                </div>
                <ul className="space-y-4">
                  {[
                    "90 minutes of live coaching",
                    "Exclusive frameworks & strategies",
                    "Live Q&A with Renu",
                    "Lifetime replay access + resources",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 flex-shrink-0" />
                      <span className="text-gray-700 font-medium text-base">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── REGISTRATION FORM ── */}
      <section id="register" className="w-full py-16 md:py-24 px-4 sm:px-6 bg-gradient-to-b from-slate-50 via-white to-slate-50 scroll-mt-24">
        <div className="max-w-md mx-auto">
          <Reveal>
            <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-2xl border-2 border-gray-200">
              <AnimatePresence mode="wait">
                {registered ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-8"
                  >
                    <div className="w-16 h-16 bg-gradient-to-br from-red-100 to-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 className="w-8 h-8 text-red-600" strokeWidth={2} />
                    </div>

                    <h3 className="text-3xl font-black text-gray-900 mb-3">
                      You're In! 🎉
                    </h3>

                    <p className="text-gray-600 text-base leading-relaxed mb-8 font-medium">
                      Your seat is reserved for <span className="font-bold">{dateLabel}</span> at <span className="font-bold">{timeLabel} IST</span>. Check your email for the confirmation.
                    </p>

                    <div className="space-y-3">
                      {icsUrl && (
                        <a
                          href={icsUrl}
                          download="captanova-masterclass.ics"
                          className="w-full block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-xl transition-all text-center"
                        >
                          📅 Add To Calendar
                        </a>
                      )}
                      <a
                        href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "919876543210"}?text=${encodeURIComponent(
                          "Hi! I just registered for the free masterclass 🎉"
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full block bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-xl transition-all text-center"
                      >
                        💬 Get Reminders on WhatsApp
                      </a>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                    <p className="text-red-600 text-xs font-black uppercase tracking-widest mb-2 text-center">Secure Your Spot</p>
                    <h3 className="text-3xl font-black text-gray-900 text-center mb-8">
                      Register Now
                    </h3>

                    <form onSubmit={handleSubmit} className="space-y-4">
                      <input
                        type="text"
                        placeholder="Full Name"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full bg-gray-50 border-2 border-gray-300 hover:border-red-300 focus:border-red-500 focus:bg-white rounded-xl px-4 py-3.5 text-gray-900 text-base placeholder-gray-500 outline-none transition-all font-medium"
                      />

                      <input
                        type="email"
                        placeholder="Email Address"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full bg-gray-50 border-2 border-gray-300 hover:border-red-300 focus:border-red-500 focus:bg-white rounded-xl px-4 py-3.5 text-gray-900 text-base placeholder-gray-500 outline-none transition-all font-medium"
                      />

                      <input
                        type="tel"
                        placeholder="Phone Number"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className="w-full bg-gray-50 border-2 border-gray-300 hover:border-red-300 focus:border-red-500 focus:bg-white rounded-xl px-4 py-3.5 text-gray-900 text-base placeholder-gray-500 outline-none transition-all font-medium"
                      />

                      <input
                        type="text"
                        placeholder="City"
                        value={form.city}
                        onChange={(e) => setForm({ ...form, city: e.target.value })}
                        className="w-full bg-gray-50 border-2 border-gray-300 hover:border-red-300 focus:border-red-500 focus:bg-white rounded-xl px-4 py-3.5 text-gray-900 text-base placeholder-gray-500 outline-none transition-all font-medium"
                      />

                      <select
                        value={form.age}
                        onChange={(e) => setForm({ ...form, age: e.target.value })}
                        className="w-full bg-gray-50 border-2 border-gray-300 hover:border-red-300 focus:border-red-500 focus:bg-white rounded-xl px-4 py-3.5 text-gray-900 text-base outline-none transition-all appearance-none font-medium"
                      >
                        <option value="">Select Age Range</option>
                        <option value="Under 18">Under 18</option>
                        <option value="18-24">18–24</option>
                        <option value="25-34">25–34</option>
                        <option value="35-44">35–44</option>
                        <option value="45-54">45–54</option>
                        <option value="55+">55+</option>
                      </select>

                      {error && <p className="text-red-600 text-sm font-bold text-center">{error}</p>}

                      <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-black hover:bg-gray-900 disabled:opacity-50 text-white font-black text-lg py-4 px-6 rounded-xl shadow-xl hover:shadow-2xl transition-all flex items-center justify-center gap-2"
                      >
                        {loading ? (
                          <>
                            <span className="inline-block w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            Reserving…
                          </>
                        ) : (
                          <>
                            Reserve My Free Seat
                            <ArrowRight className="w-5 h-5" />
                          </>
                        )}
                      </button>
                    </form>

                    <p className="text-xs text-gray-500 mt-6 text-center font-bold">
                      Your privacy is protected. We respect your inbox.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="w-full bg-black text-white py-8 px-4 sm:px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto text-center">
          <Link href="/" className="font-bold text-xl mb-4 inline-block">
            Captanova
          </Link>
          <p className="text-gray-400 text-sm mb-6">Building confident, decisive leaders.</p>
          <div className="flex items-center justify-center gap-6 text-sm text-gray-400 mb-8">
            <Link href="/privacy-policy" className="hover:text-white transition-colors font-medium">
              Privacy
            </Link>
            <span>•</span>
            <Link href="/refund-policy" className="hover:text-white transition-colors font-medium">
              Refunds
            </Link>
          </div>
          <p className="text-gray-600 text-xs">
            © {new Date().getFullYear()} Captanova Academy. All rights reserved.
          </p>
        </div>
      </footer>

      {/* ── MOBILE STICKY CTA ── */}
      {!registered && (
        <div className="md:hidden fixed bottom-0 inset-x-0 z-40 bg-white border-t-2 border-gray-200 shadow-2xl px-4 py-3 flex items-center justify-between gap-3">
          <div className="text-center flex-1">
            <p className="text-xs font-bold text-gray-600 uppercase">Starts In</p>
            <CountdownTimer targetDate={MASTERCLASS_DATE_ISO} compact />
          </div>
          <button onClick={scrollToForm} className="bg-black hover:bg-gray-900 text-white text-sm font-black py-3 px-6 rounded-lg flex-shrink-0 shadow-lg">
            Reserve
          </button>
        </div>
      )}
    </main>
  );
}