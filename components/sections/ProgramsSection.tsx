"use client";

import { useState } from "react";
import Reveal from "@/components/ui/Reveal";
import { motion, AnimatePresence } from "framer-motion";
import { programs } from "@/lib/data";
import { trackInitiateCheckout, trackPurchase } from "@/lib/analytics";

const cardAccents = ["#7c3aed", "#2563eb", "#c9962f", "#f0654c"];

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
        theme: { color: "#7c3aed" },
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
            <h3 className="font-display text-[#111111] text-2xl font-semibold mb-3">You're in!</h3>
            <p className="text-[#666666] text-base leading-relaxed mb-6">
              Your enrollment in <span className="text-[#7c3aed] font-semibold">{program.name}</span> is confirmed. Check your email for next steps.
            </p>
            <button
              onClick={onClose}
              className="bg-gradient-to-r from-[#7c3aed] to-[#2563eb] text-white font-semibold px-6 py-3 rounded-full text-base"
            >
              Close
            </button>
          </div>
        ) : (
          <>
            <button
              onClick={onClose}
              className="absolute top-5 right-5 w-8 h-8 flex items-center justify-center rounded-full hover:bg-black/5 text-[#999999] hover:text-[#111111] text-xl transition-colors"
            >
              ✕
            </button>
            <div className="mb-6">
              <p className="text-[#7c3aed] text-base tracking-[2px] uppercase font-semibold mb-1">Enrolling In</p>
              <h3 className="text-[#111111] text-xl font-semibold font-display">{program.name}</h3>
              <div className="flex items-baseline gap-2 mt-2">
                <span className="gradient-text-purple text-2xl font-bold">₹{program.price.toLocaleString()}</span>
                {program.originalPrice && (
                  <span className="text-[#bbbbbb] text-base line-through">₹{program.originalPrice.toLocaleString()}</span>
                )}
              </div>
            </div>

            <div className="space-y-3 mb-5">
              {["name", "email", "phone"].map((field) => (
                <input
                  key={field}
                  type={field === "email" ? "email" : field === "phone" ? "tel" : "text"}
                  placeholder={field === "name" ? "Your Full Name" : field === "email" ? "Email Address" : "Phone Number"}
                  value={form[field as keyof typeof form]}
                  onChange={(e) => setForm({ ...form, [field]: e.target.value })}
                  className="w-full bg-white/70 border border-black/[0.08] focus:border-[#7c3aed]/40 focus:bg-white rounded-xl px-4 py-3 text-[#111111] text-base placeholder-[#999999] outline-none transition-all"
                />
              ))}
            </div>

            {error && <p className="text-[#f0654c] text-base mb-4">{error}</p>}

            <button
              onClick={handlePay}
              disabled={loading}
              className="w-full bg-gradient-to-r from-[#7c3aed] to-[#2563eb] hover:shadow-[0_12px_32px_rgba(124,58,237,0.35)] disabled:opacity-60 text-white font-semibold py-4 rounded-full text-base tracking-tight transition-all duration-300 hover:scale-[1.01]"
            >
              {loading ? "Processing…" : `Pay ₹${program.price.toLocaleString()} Securely`}
            </button>
            <p className="text-[#aaaaaa] text-base text-center mt-3">
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
    <section id="programs" className="relative bg-[#fafafa] py-24 md:py-32 px-6 overflow-hidden">
      <div className="glow-blob w-96 h-96 bg-purple-100/30 top-0 left-1/3" />
      <div className="glow-blob w-80 h-80 bg-blue-100/25 bottom-10 right-0" />

      <div className="relative max-w-6xl mx-auto">
        <Reveal>
          <h2 className="text-center font-display text-[#111111] text-3xl md:text-4xl font-semibold mb-3">
            Choose Your <span className="gradient-text-purple italic">Starting Point</span>
          </h2>
          <p className="text-center text-[#999999] text-base tracking-widest uppercase font-medium mb-16">
            A complete ecosystem designed for your transformation
          </p>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((program, i) => {
            const accent = cardAccents[i % cardAccents.length];
            return (
              <Reveal key={program.id} delay={i * 0.1}>
                <motion.div
                  className={`relative glass-card hover-lift rounded-3xl p-7 flex flex-col h-full ${
                    program.highlight ? "ring-2 ring-[#7c3aed]/30" : ""
                  }`}
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                >
                  {program.highlight && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                      <span className="bg-gradient-to-r from-[#7c3aed] to-[#2563eb] text-white text-[10px] font-bold tracking-widest px-4 py-1.5 rounded-full uppercase shadow-[0_4px_16px_rgba(124,58,237,0.4)]">
                        Most Popular
                      </span>
                    </div>
                  )}

                  <div
                    className="w-10 h-10 rounded-xl mb-5 flex items-center justify-center"
                    style={{ background: `linear-gradient(135deg, ${accent}18, ${accent}08)` }}
                  >
                    <span className="w-2.5 h-2.5 rounded-full" style={{ background: accent }} />
                  </div>

                  <div className="mb-5">
                    <h3 className="text-[#111111] font-semibold text-base mb-1">{program.name}</h3>
                    <p className="text-[#999999] text-base italic">{program.tagline}</p>
                  </div>

                  <div className="flex items-baseline gap-2 mb-6">
                    <span className="text-3xl font-bold font-display" style={{ color: accent }}>₹{program.price.toLocaleString()}</span>
                    {program.originalPrice && (
                      <span className="text-[#cccccc] text-base line-through">₹{program.originalPrice.toLocaleString()}</span>
                    )}
                  </div>

                  <ul className="space-y-2.5 flex-1 mb-7">
                    {program.features.map((feat) => (
                      <li key={feat} className="flex items-start gap-2">
                        <span style={{ color: accent }} className="text-base mt-0.5 flex-shrink-0">✓</span>
                        <span className="text-[#666666] text-base leading-relaxed">{feat}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={() => setSelected(program)}
                    className={`w-full py-3.5 rounded-full text-base font-semibold tracking-tight transition-all duration-300 hover:scale-[1.02] ${
                      program.highlight
                        ? "bg-gradient-to-r from-[#7c3aed] to-[#2563eb] text-white hover:shadow-[0_12px_28px_rgba(124,58,237,0.35)]"
                        : "text-white hover:shadow-[0_8px_20px_rgba(0,0,0,0.15)]"
                    }`}
                    style={!program.highlight ? { background: `linear-gradient(135deg, ${accent}, ${accent}dd)` } : {}}
                  >
                    Enroll Now
                  </button>
                </motion.div>
              </Reveal>
            );
          })}
        </div>

        {/* Who it's for / not for */}
        <div className="grid md:grid-cols-3 gap-6 mt-20">
          <Reveal>
            <div className="glass-card hover-lift rounded-3xl p-7">
              <p className="text-[#c9962f] text-base tracking-[2px] uppercase font-bold mb-4">
                New to Captanova? Start Here.
              </p>
              <p className="text-[#666666] text-base leading-relaxed mb-5">
                The Awareness Journal is the foundation of the Captanova journey. This is the place to start. Most people don't need another course. <span className="text-[#333333] font-medium">They need a place to start.</span>
              </p>
              <a
                href="#"
                onClick={(e) => { e.preventDefault(); setSelected(programs[0]); }}
                className="inline-block bg-gradient-to-r from-[#c9962f] to-[#e8c373] text-white font-semibold text-base px-5 py-2.5 rounded-full tracking-tight hover:shadow-[0_8px_24px_rgba(201,150,47,0.35)] transition-all duration-300"
              >
                Start Your 21-Day Journey →
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="glass-card hover-lift rounded-3xl p-7 bg-gradient-to-br from-white/85 to-emerald-50/30">
              <p className="text-[#059669] text-base tracking-[2px] uppercase font-bold mb-4">
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
                    <span className="text-[#059669] text-base mt-0.5">✓</span>
                    <span className="text-[#666666] text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="glass-card hover-lift rounded-3xl p-7">
              <p className="text-[#f0654c] text-base tracking-[2px] uppercase font-bold mb-4">
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
                    <span className="text-[#f0654c]/70 text-base mt-0.5">✗</span>
                    <span className="text-[#888888] text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>

      <AnimatePresence>
        {selected && <CheckoutModal program={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>
    </section>
  );
}
