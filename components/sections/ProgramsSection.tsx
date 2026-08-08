"use client";

import { useState } from "react";
import Reveal from "@/components/ui/Reveal";
import TiltCard from "@/components/ui/TiltCard";
import IconOrb from "@/components/ui/IconOrb";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, Brain, Sparkles, Crown, Rocket, CheckCircle2, XCircle, ArrowRight } from "lucide-react";
import { programs, AMAZON_KDP_URL } from "@/lib/data";
import { trackInitiateCheckout, trackPurchase } from "@/lib/analytics";

const cardAccents = ["var(--accent-primary)", "var(--accent-royal)", "var(--accent-ink)", "var(--accent-slate)"];
const cardIcons = [BookOpen, Brain, Sparkles, Crown];

interface CheckoutModalProps {
  program: (typeof programs)[0];
  onClose: () => void;
}

function CheckoutModal({ program, onClose }: CheckoutModalProps) {
  const [form, setForm] = useState({ name: "", email: "", phone: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handlePay = async () => {
    if (!form.name || !form.email || !form.phone) {
      setError("Please fill in all fields.");
      return;
    }
    setError("");
    setLoading(true);
    trackInitiateCheckout({ value: program.price, currency: "INR", content_name: program.name });

    try {
      const orderRes = await fetch("/api/order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          programId: program.id,
          programName: program.name,
          amount: program.razorpayAmount,
          customerName: form.name,
          customerEmail: form.email,
          customerPhone: form.phone,
        }),
      });

      const order = await orderRes.json();
      if (!order.orderId) throw new Error(order.error || "Order creation failed");

      const rzp = new (window as any).Razorpay({
        key: order.keyId || process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        amount: order.amount,
        currency: order.currency,
        order_id: order.orderId,
        name: "Captanova Academy",
        description: program.name,
        theme: { color: "var(--accent-primary)" },
        prefill: { name: form.name, email: form.email, contact: form.phone },
        handler: async (response: any) => {
          const verifyRes = await fetch("/api/verify", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              ...response,
              customerName: form.name,
              customerEmail: form.email,
              programName: program.name,
            }),
          });
          const verify = await verifyRes.json();
          if (verify.success) {
            trackPurchase({ value: program.price, currency: "INR", content_name: program.name });
            setSuccess(true);
          } else {
            setError("Payment verification failed. Please contact support.");
          }
          setLoading(false);
        },
        modal: { ondismiss: () => setLoading(false) },
      });
      rzp.open();
    } catch (err: any) {
      setError(err.message || "Something went wrong. Please try again.");
      setLoading(false);
    }
  };

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" onClick={onClose} />
      <motion.div
        className="relative w-full max-w-md glass-strong rounded-[2rem] p-8 z-10 shadow-[0_24px_80px_rgba(0,0,0,0.18)]"
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
      >
        {success ? (
          <div className="text-center py-8">
            <div className="text-6xl mb-4">🎉</div>
            <h3 className="font-display text-[var(--text-primary)] text-2xl font-semibold mb-3">You're in!</h3>
            <p className="text-[var(--text-secondary)] text-base leading-relaxed mb-6">
              Your enrollment in <span className="text-[var(--accent-primary)] font-semibold">{program.name}</span> is confirmed. Check your email for next steps.
            </p>
            <button
              onClick={onClose}
              className="bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-royal)] text-white font-semibold px-6 py-3 rounded-full text-base"
            >
              Close
            </button>
          </div>
        ) : (
          <>
            <button
              onClick={onClose}
              className="absolute top-5 right-5 w-8 h-8 flex items-center justify-center rounded-full hover:bg-black/5 text-[var(--text-tertiary)] hover:text-[var(--text-primary)] text-xl transition-colors"
            >
              ✕
            </button>
            <div className="mb-6">
              <p className="text-[var(--accent-primary)] text-base tracking-[2px] uppercase font-semibold mb-1">Enrolling In</p>
              <h3 className="text-[var(--text-primary)] text-xl font-semibold font-display">{program.name}</h3>
              <div className="flex items-baseline gap-2 mt-2">
                <span className="gradient-text-purple text-2xl font-bold">₹{program.price.toLocaleString()}</span>
                {program.originalPrice && (
                  <span className="text-[var(--text-tertiary)] text-base line-through">₹{program.originalPrice.toLocaleString()}</span>
                )}
              </div>
            </div>

            <div className="space-y-3 mb-5">
              {["name", "email", "phone"].map((field) => (
                <input
                  key={field}
                  type={field === "email" ? "email" : field === "phone" ? "tel" : "text"}
                  placeholder={field === "name" ? "Your Full Name" : field === "email" ? "Email Address" : "Phone Number"}
                  aria-label={field === "name" ? "Your Full Name" : field === "email" ? "Email Address" : "Phone Number"}
                  value={form[field as keyof typeof form]}
                  onChange={(e) => setForm({ ...form, [field]: e.target.value })}
                  className="w-full bg-white/70 border border-black/[0.08] focus:border-[var(--accent-primary)]/40 focus:bg-white rounded-xl px-4 py-3 text-[var(--text-primary)] text-base placeholder-[var(--text-muted)] outline-none transition-all"
                />
              ))}
            </div>

            {error && <p className="text-[var(--accent-slate)] text-base mb-4">{error}</p>}

            <button
              onClick={handlePay}
              disabled={loading}
              className="w-full bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-royal)] hover:shadow-[0_12px_32px_rgba(29,78,216,0.35)] disabled:opacity-60 text-white font-semibold py-4 rounded-full text-base tracking-tight transition-all duration-300 hover:scale-[1.01]"
            >
              {loading ? "Processing…" : `Pay ₹${program.price.toLocaleString()} Securely`}
            </button>
            <p className="text-[var(--text-tertiary)] text-base text-center mt-3">
              🔒 Secured by Razorpay · SSL Encrypted
            </p>
          </>
        )}
      </motion.div>
    </motion.div>
  );
}

export default function ProgramsSection() {
  const [selected, setSelected] = useState<(typeof programs)[0] | null>(null);

  return (
    <section id="programs" className="relative bg-[var(--bg-soft)] py-24 md:py-32 px-6 overflow-hidden">
      <div className="glow-blob w-96 h-96 bg-blue-100/30 top-0 left-1/3" />
      <div className="glow-blob w-80 h-80 bg-blue-100/25 bottom-10 right-0" />

      <div className="relative max-w-6xl mx-auto">
        <Reveal>
          <h2 className="text-center font-display text-[var(--text-primary)] text-3xl md:text-4xl font-semibold mb-3">
            Choose Your <span className="gradient-text-purple italic">Starting Point</span>
          </h2>
          <p className="text-center text-[var(--text-tertiary)] text-base tracking-widest uppercase font-medium mb-16">
            A complete ecosystem designed for your transformation
          </p>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((program, i) => {
            const accent = cardAccents[i % cardAccents.length];
            const Icon = cardIcons[i % cardIcons.length];
            return (
              <Reveal key={program.id} delay={i * 0.1}>
                <TiltCard
                  intensity={9}
                  className={`glass-card rounded-3xl p-7 flex flex-col ${
                    program.highlight ? "ring-2 ring-[var(--accent-primary)]/30" : ""
                  }`}
                >
                  {/* Ambient depth glow, clipped to the card's own layer so it never bleeds out or clips the badge */}
                  <div aria-hidden className="pointer-events-none absolute inset-0 rounded-3xl overflow-hidden">
                    <div
                      className="absolute -top-16 -right-16 w-40 h-40 rounded-full opacity-[0.14] blur-2xl"
                      style={{ background: accent }}
                    />
                  </div>

                  {program.highlight && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-20">
                      <span className="bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-royal)] text-white text-[10px] font-bold tracking-widest px-4 py-1.5 rounded-full uppercase shadow-[0_4px_16px_rgba(29,78,216,0.4)]">
                        Most Popular
                      </span>
                    </div>
                  )}

                  <div style={{ transform: "translateZ(28px)" }} className="mb-5">
                    <IconOrb color={accent} size={52} shape="2xl">
                      <Icon className="w-6 h-6" strokeWidth={2} />
                    </IconOrb>
                  </div>

                  <div className="mb-5" style={{ transform: "translateZ(16px)" }}>
                    <h3 className="text-[var(--text-primary)] font-semibold text-base mb-1">{program.name}</h3>
                    <p className="text-[var(--text-tertiary)] text-base italic">{program.tagline}</p>
                  </div>

                  <div className="flex items-baseline gap-2 mb-6">
                    <span className="text-3xl font-bold font-display" style={{ color: accent }}>₹{program.price.toLocaleString()}</span>
                    {program.originalPrice && (
                      <span className="text-[var(--text-tertiary)] text-base line-through">₹{program.originalPrice.toLocaleString()}</span>
                    )}
                  </div>

                  <ul className="space-y-2.5 flex-1 mb-7">
                    {program.features.map((feat) => (
                      <li key={feat} className="flex items-start gap-2">
                        <span style={{ color: accent }} className="text-base mt-0.5 flex-shrink-0">✓</span>
                        <span className="text-[var(--text-secondary)] text-base leading-relaxed">{feat}</span>
                      </li>
                    ))}
                  </ul>

                  {program.id === "awareness-journal" ? (
                    <a
                      href={AMAZON_KDP_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={
                        !program.highlight
                          ? {
                              background: `linear-gradient(135deg, color-mix(in srgb, ${accent} 85%, white), ${accent})`,
                              boxShadow: `0 10px 26px -8px color-mix(in srgb, ${accent} 55%, transparent)`,
                              transform: "translateZ(20px)",
                            }
                          : { transform: "translateZ(20px)" }
                      }
                      className="group/btn relative w-full py-3.5 rounded-full text-base font-semibold tracking-tight overflow-hidden transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] text-white hover:brightness-110 inline-flex items-center justify-center"
                    >
                      {/* shine sweep on hover */}
                      <span
                        aria-hidden
                        className="pointer-events-none absolute inset-0 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700 ease-out"
                        style={{ background: "linear-gradient(115deg, transparent 40%, rgba(255,255,255,0.35) 50%, transparent 60%)" }}
                      />
                      <span className="relative inline-flex items-center justify-center gap-1.5">
                        Get It On Amazon
                        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" strokeWidth={2.5} />
                      </span>
                    </a>
                  ) : (
                    <button
                      onClick={() => setSelected(program)}
                      style={
                        !program.highlight
                          ? {
                              background: `linear-gradient(135deg, color-mix(in srgb, ${accent} 85%, white), ${accent})`,
                              boxShadow: `0 10px 26px -8px color-mix(in srgb, ${accent} 55%, transparent)`,
                              transform: "translateZ(20px)",
                            }
                          : { transform: "translateZ(20px)" }
                      }
                      className={`group/btn relative w-full py-3.5 rounded-full text-base font-semibold tracking-tight overflow-hidden transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] ${
                        program.highlight
                          ? "bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-royal)] text-white hover:shadow-[0_14px_32px_rgba(29,78,216,0.4)]"
                          : "text-white hover:brightness-110"
                      }`}
                    >
                      {/* shine sweep on hover */}
                      <span
                        aria-hidden
                        className="pointer-events-none absolute inset-0 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700 ease-out"
                        style={{ background: "linear-gradient(115deg, transparent 40%, rgba(255,255,255,0.35) 50%, transparent 60%)" }}
                      />
                      <span className="relative inline-flex items-center justify-center gap-1.5">
                        Enroll Now
                        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" strokeWidth={2.5} />
                      </span>
                    </button>
                  )}
                </TiltCard>
              </Reveal>
            );
          })}
        </div>

        {/* Who it's for / not for */}
        <div className="grid md:grid-cols-3 gap-6 mt-20">
          <Reveal>
            <TiltCard intensity={6} className="glass-card rounded-3xl p-7">
              <div style={{ transform: "translateZ(22px)" }} className="mb-4">
                <IconOrb color="var(--accent-ink)" size={44} shape="2xl" float={false}>
                  <Rocket className="w-5 h-5" strokeWidth={2} />
                </IconOrb>
              </div>
              <p className="text-[var(--accent-ink)] text-base tracking-[2px] uppercase font-bold mb-4">
                New to Captanova? Start Here.
              </p>
              <p className="text-[var(--text-secondary)] text-base leading-relaxed mb-5">
                The Awareness Journal is the foundation of the Captanova journey. This is the place to start. Most people don't need another course. <span className="text-[var(--text-primary)] font-medium">They need a place to start.</span>
              </p>
              <a
                href={AMAZON_KDP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gradient-to-r from-[var(--accent-ink)] to-[var(--accent-royal-light)] text-white font-semibold text-base px-5 py-2.5 rounded-full tracking-tight hover:shadow-[0_8px_24px_rgba(15,23,42,0.35)] transition-all duration-300"
              >
                Start Your 21-Day Journey →
              </a>
            </TiltCard>
          </Reveal>

          <Reveal delay={0.1}>
            <TiltCard intensity={6} className="glass-card rounded-3xl p-7 bg-gradient-to-br from-white/85 to-cyan-50/30">
              <div style={{ transform: "translateZ(22px)" }} className="mb-4">
                <IconOrb color="var(--accent-royal)" size={44} shape="2xl" float={false}>
                  <CheckCircle2 className="w-5 h-5" strokeWidth={2} />
                </IconOrb>
              </div>
              <p className="text-[var(--accent-royal)] text-base tracking-[2px] uppercase font-bold mb-4">
                Captanova Is For You If:
              </p>
              <ul className="space-y-2.5">
                {[
                  "You overthink",
                  "You struggle with confidence",
                  "You want stronger communication skills",
                  "You know you're capable of more",
                  "You want to stop procrastinating",
                  "You are ready to take action",
                  "You want personal growth that creates real-life results",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-[var(--accent-royal)] text-base mt-0.5">✓</span>
                    <span className="text-[var(--text-secondary)] text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </TiltCard>
          </Reveal>

          <Reveal delay={0.2}>
            <TiltCard intensity={6} className="glass-card rounded-3xl p-7">
              <div style={{ transform: "translateZ(22px)" }} className="mb-4">
                <IconOrb color="var(--accent-slate)" size={44} shape="2xl" float={false}>
                  <XCircle className="w-5 h-5" strokeWidth={2} />
                </IconOrb>
              </div>
              <p className="text-[var(--accent-slate)] text-base tracking-[2px] uppercase font-bold mb-4">
                Captanova Is Not For You If:
              </p>
              <ul className="space-y-2.5">
                {[
                  "You want a quick fix",
                  "You want motivation without action",
                  "You are unwilling to take responsibility for your growth",
                  "You expect change without commitment",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-[var(--accent-slate)]/70 text-base mt-0.5">✗</span>
                    <span className="text-[var(--text-muted)] text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </TiltCard>
          </Reveal>
        </div>
      </div>

      <AnimatePresence>
        {selected && <CheckoutModal program={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>
    </section>
  );
}
