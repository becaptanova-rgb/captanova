"use client";

import { useState } from "react";
import Reveal from "@/components/ui/Reveal";
import TiltCard from "@/components/ui/TiltCard";
import IconOrb from "@/components/ui/IconOrb";
import { motion } from "framer-motion";
import { Gift } from "lucide-react";
import { trackLead } from "@/lib/analytics";

export default function LeadMagnetSection() {
  const [form, setForm] = useState({ name: "", email: "" });
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async () => {
    if (!form.name || !form.email) {
      setError("Please enter your name and email.");
      return;
    }
    setError("");
    setLoading(true);
    try {
      await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, source: "free-reset" }),
      });
      trackLead({ content_name: "Free Daily Reset" });
      setDone(true);
    } catch {
      setError("Something went wrong. Please try again.");
    }
    setLoading(false);
  };

  return (
    <section className="relative aurora-emerald py-24 md:py-32 px-6 overflow-hidden">
      <div className="glow-blob w-80 h-80 bg-cyan-200/30 top-0 left-1/4" />
      <div className="relative max-w-xl mx-auto text-center">
        <Reveal>
          <TiltCard intensity={6} className="glass-card rounded-[2rem] p-10">
            <div className="mx-auto mb-5 w-fit" style={{ transform: "translateZ(26px)" }}>
              <IconOrb color="var(--accent-royal)" size={56} shape="2xl">
                <Gift className="w-6 h-6" strokeWidth={2} />
              </IconOrb>
            </div>
            <p className="text-[var(--accent-royal)] text-base tracking-[3px] uppercase font-bold mb-3">Free Daily Reset</p>
            <h2 className="font-display text-[var(--text-primary)] text-2xl font-semibold mb-3">
              A Simple 3-Minute Awareness Practice
            </h2>
            <p className="text-[var(--text-tertiary)] text-base leading-relaxed mb-8">
              Designed to help you clear mental noise and reconnect with clarity. Enter your email to receive instant access.
            </p>

            {done ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-4"
              >
                <div className="text-4xl mb-3">✨</div>
                <p className="text-[var(--accent-royal)] font-semibold mb-1">Check your inbox!</p>
                <p className="text-[var(--text-muted)] text-base">Your Free Daily Reset is on its way.</p>
              </motion.div>
            ) : (
              <div className="space-y-3">
                <input
                  type="text"
                  placeholder="Your Name"
                  aria-label="Your Name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full bg-white/70 border border-black/[0.08] focus:border-[var(--accent-royal)]/40 focus:bg-white rounded-xl px-4 py-3 text-[var(--text-primary)] text-base placeholder-[var(--text-muted)] outline-none transition-all text-center"
                />
                <input
                  type="email"
                  placeholder="Your Email Address"
                  aria-label="Your Email Address"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full bg-white/70 border border-black/[0.08] focus:border-[var(--accent-royal)]/40 focus:bg-white rounded-xl px-4 py-3 text-[var(--text-primary)] text-base placeholder-[var(--text-muted)] outline-none transition-all text-center"
                />
                {error && <p className="text-[var(--accent-slate)] text-base">{error}</p>}
                <button
                  onClick={handleSubmit}
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-[var(--accent-royal)] to-[var(--accent-cyan)] hover:shadow-[0_12px_28px_rgba(37,99,235,0.3)] disabled:opacity-60 text-white font-semibold py-3.5 rounded-full text-base tracking-tight transition-all duration-300 hover:scale-[1.01]"
                >
                  {loading ? "Sending…" : "GET FREE ACCESS"}
                </button>
              </div>
            )}
          </TiltCard>
        </Reveal>
      </div>
    </section>
  );
}
