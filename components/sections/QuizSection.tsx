"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { quizQuestions, profiles } from "@/lib/data";
import { ProfileType } from "@/types";
import { trackLead, trackQuizComplete } from "@/lib/analytics";

function getProfile(answers: string[]): ProfileType {
  const counts: Record<string, number> = {};
  answers.forEach((a) => { counts[a] = (counts[a] || 0) + 1; });
  return (Object.entries(counts).sort((a, b) => b[1] - a[1])[0][0] as ProfileType);
}

export default function QuizSection() {
  const [step, setStep] = useState<"intro" | "quiz" | "capture" | "result">("intro");
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [selected, setSelected] = useState<string | null>(null);
  const [profile, setProfile] = useState<ProfileType | null>(null);
  const [form, setForm] = useState({ name: "", email: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const progress = ((current) / quizQuestions.length) * 100;

  const handleAnswer = (profileKey: string) => {
    setSelected(profileKey);
    setTimeout(() => {
      const newAnswers = [...answers, profileKey];
      setAnswers(newAnswers);
      setSelected(null);
      if (current + 1 < quizQuestions.length) {
        setCurrent(current + 1);
      } else {
        const result = getProfile(newAnswers);
        setProfile(result);
        setStep("capture");
      }
    }, 400);
  };

  const handleCapture = async () => {
    if (!form.name || !form.email) { setError("Please enter your name and email."); return; }
    setError("");
    setLoading(true);
    try {
      await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, source: "quiz", quizProfile: profile }),
      });
      trackLead({ content_name: `Quiz Lead: ${profile}` });
      trackQuizComplete(profile!);
      setStep("result");
    } catch { setError("Something went wrong. Please try again."); }
    setLoading(false);
  };

  const p = profile ? profiles[profile] : null;

  return (
    <section id="quiz" className="relative aurora-hero py-24 md:py-32 px-6 overflow-hidden">
      <div className="glow-blob w-96 h-96 bg-purple-200/25 top-0 right-1/4" />
      <div className="glow-blob w-80 h-80 bg-blue-200/20 bottom-10 left-0" />

      <div className="relative max-w-2xl mx-auto">
        <AnimatePresence mode="wait">
          {/* ── INTRO ── */}
          {step === "intro" && (
            <motion.div
              key="intro"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <span className="inline-flex items-center gap-2 glass-card text-[#7c3aed] text-base tracking-[2px] uppercase font-bold px-5 py-2.5 rounded-full mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#7c3aed] to-[#2563eb]" />
                Captanova Clarity Assessment™
              </span>
              <h2 className="font-display text-[#111111] text-4xl md:text-5xl font-semibold mb-6 leading-tight">
                Discover What's Really{" "}
                <span className="gradient-text-purple italic">Holding You Back</span>
              </h2>
              <p className="text-[#666666] text-base leading-relaxed mb-4 max-w-lg mx-auto">
                Most people are not stuck because they lack potential.
              </p>
              <p className="text-[#666666] text-base leading-relaxed mb-4 max-w-lg mx-auto">
                They are stuck because one hidden pattern keeps showing up in different areas of life.
              </p>
              <p className="text-[#444444] text-base leading-relaxed mb-10 max-w-lg mx-auto">
                Take this <span className="text-[#7c3aed] font-semibold">3-minute assessment</span> to discover your personal{" "}
                <span className="text-[#7c3aed] font-semibold">Captanova Growth Profile™</span>.
              </p>

              <div className="grid grid-cols-3 gap-4 mb-10 max-w-sm mx-auto text-center">
                {[["10", "Questions"], ["3 min", "Duration"], ["5", "Profiles"]].map(([num, label]) => (
                  <div key={label} className="glass-card rounded-2xl py-4">
                    <p className="gradient-text-purple text-xl font-bold font-display">{num}</p>
                    <p className="text-[#999999] text-base mt-1 font-medium">{label}</p>
                  </div>
                ))}
              </div>

              <motion.button
                onClick={() => setStep("quiz")}
                className="bg-gradient-to-r from-[#7c3aed] to-[#2563eb] text-white font-semibold px-10 py-4 rounded-full text-base tracking-tight transition-all duration-300 hover:shadow-[0_12px_40px_rgba(124,58,237,0.4)]"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                Discover My Growth Profile →
              </motion.button>
            </motion.div>
          )}

          {/* ── QUIZ ── */}
          {step === "quiz" && (
            <motion.div
              key={`quiz-${current}`}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.4 }}
              className="glass-card rounded-[2rem] p-8 md:p-10"
            >
              {/* Progress */}
              <div className="mb-10">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-[#999999] text-base tracking-widest uppercase font-medium">
                    Question {current + 1} of {quizQuestions.length}
                  </span>
                  <span className="text-[#7c3aed] text-base font-bold">
                    {Math.round(((current) / quizQuestions.length) * 100)}%
                  </span>
                </div>
                <div className="w-full h-1.5 bg-black/[0.06] rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-[#7c3aed] to-[#2563eb] rounded-full"
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.4 }}
                  />
                </div>
              </div>

              {/* Question */}
              <h3 className="font-display text-[#111111] text-xl md:text-2xl font-medium mb-8 leading-snug text-center">
                {quizQuestions[current].question}
              </h3>

              {/* Options */}
              <div className="space-y-3">
                {quizQuestions[current].options.map((opt, i) => (
                  <motion.button
                    key={i}
                    onClick={() => handleAnswer(opt.profile)}
                    disabled={selected !== null}
                    className={`w-full text-left px-6 py-4 rounded-2xl border transition-all duration-200 group ${
                      selected === opt.profile
                        ? "border-[#7c3aed]/40 bg-gradient-to-r from-[#7c3aed]/10 to-[#2563eb]/10 text-[#111111]"
                        : "border-black/[0.06] bg-white/50 text-[#555555] hover:border-[#7c3aed]/30 hover:text-[#111111] hover:bg-white/80"
                    }`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.06 }}
                    whileHover={{ x: 4 }}
                  >
                    <div className="flex items-center gap-4">
                      <span className={`w-7 h-7 rounded-full border flex-shrink-0 flex items-center justify-center text-base font-bold transition-all duration-200 ${
                        selected === opt.profile
                          ? "border-[#7c3aed] bg-gradient-to-br from-[#7c3aed] to-[#2563eb] text-white"
                          : "border-black/10 text-[#999999] group-hover:border-[#7c3aed]/40 group-hover:text-[#7c3aed]"
                      }`}>
                        {String.fromCharCode(65 + i)}
                      </span>
                      <span className="text-base leading-relaxed">{opt.text}</span>
                    </div>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}

          {/* ── EMAIL CAPTURE ── */}
          {step === "capture" && (
            <motion.div
              key="capture"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <div className="text-5xl mb-6">✨</div>
              <p className="text-[#7c3aed] text-base tracking-[3px] uppercase font-bold mb-3">Assessment Complete</p>
              <h2 className="font-display text-[#111111] text-3xl md:text-4xl font-semibold mb-4">
                Your Growth Profile™ is Ready
              </h2>
              <p className="text-[#666666] text-base leading-relaxed mb-10 max-w-md mx-auto">
                Enter your details to receive your personalized Captanova Growth Profile™, your natural gift, what's holding you back, and your 7-Day Challenge.
              </p>

              <div className="glass-card rounded-3xl p-8 text-left max-w-md mx-auto mb-6">
                <div className="flex flex-col gap-3 text-base">
                  {["✓ Your Captanova Growth Profile™", "✓ Your Natural Gift", "✓ What's Holding You Back", "✓ Your Personal Growth Focus", "✓ Your 7-Day Captanova Challenge"].map((item) => (
                    <span key={item} className="text-[#555555]">{item}</span>
                  ))}
                </div>
              </div>

              <div className="space-y-3 max-w-md mx-auto">
                <input
                  type="text"
                  placeholder="Your Name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full bg-white/70 border border-black/[0.08] focus:border-[#7c3aed]/40 focus:bg-white rounded-xl px-5 py-3.5 text-[#111111] text-base placeholder-[#999999] outline-none transition-all text-center"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full bg-white/70 border border-black/[0.08] focus:border-[#7c3aed]/40 focus:bg-white rounded-xl px-5 py-3.5 text-[#111111] text-base placeholder-[#999999] outline-none transition-all text-center"
                />
                {error && <p className="text-[#f0654c] text-base">{error}</p>}
                <motion.button
                  onClick={handleCapture}
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-[#7c3aed] to-[#2563eb] hover:shadow-[0_12px_32px_rgba(124,58,237,0.35)] disabled:opacity-60 text-white font-semibold py-4 rounded-full text-base tracking-tight transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {loading ? "Unlocking…" : "SHOW MY RESULTS →"}
                </motion.button>
                <p className="text-[#bbbbbb] text-base text-center">No spam. Pure value. Unsubscribe anytime.</p>
              </div>
            </motion.div>
          )}

          {/* ── RESULT ── */}
          {step === "result" && p && (
            <motion.div
              key="result"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Profile header */}
              <div className="text-center mb-10">
                <motion.div
                  className="text-6xl mb-4"
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  {p.emoji}
                </motion.div>
                <span className="text-[#7c3aed] text-base tracking-[3px] uppercase font-bold mb-3 block">
                  Your Captanova Growth Profile™
                </span>
                <h2 className="font-display text-[#111111] text-4xl md:text-5xl font-semibold mb-3">{p.title}</h2>
                <p className="text-[#7c3aed] text-base italic font-medium mb-2">{p.tagline}</p>
              </div>

              {/* Profile cards */}
              <div className="space-y-4 mb-10">
                {[
                  { label: "Your Natural Gift", content: p.gift, icon: "🌟" },
                  { label: "What's Holding You Back", content: p.holding, icon: "🔑" },
                  { label: "Your Growth Focus", content: p.focus.join(" · "), icon: "🎯" },
                ].map((card, i) => (
                  <motion.div
                    key={card.label}
                    className="glass-card rounded-2xl p-6"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.15 }}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-xl">{card.icon}</span>
                      <p className="text-[#7c3aed] text-base tracking-[2px] uppercase font-bold">{card.label}</p>
                    </div>
                    <p className="text-[#555555] text-base leading-relaxed">{card.content}</p>
                  </motion.div>
                ))}

                {/* Insight */}
                <motion.div
                  className="glass-card rounded-2xl p-6 text-center bg-gradient-to-br from-white/85 to-purple-50/40"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  <p className="text-[#7c3aed] text-base tracking-[2px] uppercase font-bold mb-3">Captanova Insight</p>
                  <p className="font-display text-[#111111] text-lg font-medium italic leading-relaxed">"{p.insight}"</p>
                </motion.div>

                {/* 7-Day Challenge */}
                <motion.div
                  className="glass-card rounded-2xl p-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  <p className="text-[#c9962f] text-base tracking-[2px] uppercase font-bold mb-3">⚡ Your 7-Day Challenge</p>
                  <p className="text-[#555555] text-base leading-relaxed">{p.challenge}</p>
                </motion.div>
              </div>

              {/* CTAs */}
              <motion.div
                className="flex flex-col gap-3 text-center"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                <a
                  href="#programs"
                  className="block bg-gradient-to-r from-[#7c3aed] to-[#2563eb] hover:shadow-[0_16px_40px_rgba(124,58,237,0.4)] text-white font-semibold py-4 rounded-full text-base tracking-tight transition-all duration-300"
                >
                  {p.cta} →
                </a>
                <button
                  onClick={() => { setStep("intro"); setCurrent(0); setAnswers([]); setProfile(null); setForm({ name: "", email: "" }); }}
                  className="text-[#999999] hover:text-[#555555] text-base transition-colors py-2"
                >
                  Retake Assessment
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
