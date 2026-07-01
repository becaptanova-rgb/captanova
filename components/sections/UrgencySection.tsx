"use client";

import Reveal from "@/components/ui/Reveal";
import { motion } from "framer-motion";

export default function UrgencySection() {
  return (
    <section className="relative bg-[#fafafa] py-24 md:py-32 px-6 overflow-hidden">
      <div className="glow-blob w-96 h-96 bg-purple-100/30 top-10 right-1/4" />
      <div className="glow-blob w-80 h-80 bg-coral-100/20 bottom-0 left-0" />

      <div className="relative max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-6">
          {/* Cost of waiting */}
          <Reveal direction="left">
            <div className="glass-card hover-lift rounded-[2rem] p-10 h-full">
              <h3 className="font-display text-[#111111] text-xl font-semibold mb-6">The Cost of Waiting</h3>
              <p className="text-[#666666] text-base leading-relaxed mb-5">
                Imagine carrying the same challenges. One year from now. Still overthinking. Still doubting yourself. Still delaying important decisions. Still waiting for confidence to appear.
              </p>
              <p className="text-[#333333] text-base leading-relaxed font-medium mb-8">
                The cost of waiting is often greater than the cost of starting.
              </p>
              <div className="border-t border-black/[0.06] pt-6">
                <p className="text-[#f0654c] text-base font-semibold tracking-tight">
                  Every transformation begins with one decision.
                </p>
              </div>
            </div>
          </Reveal>

          {/* One year from now */}
          <Reveal direction="right">
            <div className="glass-card hover-lift rounded-[2rem] p-10 h-full flex flex-col justify-between bg-gradient-to-br from-white/90 via-purple-50/40 to-blue-50/30">
              <div>
                <p className="text-[#7c3aed] text-base tracking-[3px] uppercase font-bold mb-3">Imagine This</p>
                <h3 className="font-display text-[#111111] text-2xl md:text-3xl font-semibold leading-tight mb-6">
                  One Year From Now,{" "}
                  <span className="gradient-text-purple italic">You'll Wish You Started Today.</span>
                </h3>
                <p className="text-[#666666] text-base leading-relaxed mb-6">
                  Your future is created by the decisions you make today, not tomorrow.
                </p>
              </div>

              <div className="space-y-3">
                <motion.a
                  href="#quiz"
                  className="block w-full bg-gradient-to-r from-[#7c3aed] to-[#2563eb] hover:shadow-[0_16px_40px_rgba(124,58,237,0.4)] text-white font-semibold text-center py-4 rounded-full text-base tracking-tight transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Start Your 21-Day Reset
                </motion.a>
                <p className="text-center text-[#bbbbbb] text-base">
                  Be The Captain Of Your Life
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
