"use client";

import { motion } from "framer-motion";

const footerLinks = {
  Programs: [
    { label: "Awareness Journal", href: "#programs" },
    { label: "Mindset Mastery", href: "#programs" },
    { label: "Transformation System™", href: "#programs" },
    { label: "Leadership Mentorship", href: "#programs" },
  ],
  Explore: [
    { label: "Take The Assessment", href: "#quiz" },
    { label: "About Renu Sharma", href: "#about" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "The Awareness Journal", href: "#journal" },
  ],
  Connect: [
    { label: "WhatsApp", href: `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "+4571587709"}` },
    { label: "Instagram", href: "#" },
    { label: "LinkedIn", href: "#" },
    { label: "YouTube", href: "#" },
  ],
};

const stepColors = ["#7c3aed", "#2563eb", "#0891b2", "#059669", "#c9962f", "#f0654c"];

export default function Footer() {
  return (
    <footer className="relative bg-white border-t border-black/[0.06] py-16 px-6 overflow-hidden">
      <div className="glow-blob w-80 h-80 bg-purple-50 top-0 left-1/4" />
      <div className="relative max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="mb-5">
              <h2 className="font-display gradient-text-purple text-xl tracking-[3px] uppercase font-semibold">
                Captanova
              </h2>
              <p className="text-[#999999] text-[8px] tracking-[2px] uppercase mt-1 font-medium">
                Be The Captain Of Your Life
              </p>
            </div>
            <p className="text-[#888888] text-base leading-relaxed mb-6">
              The Academy for Mindset, Communication & Self-Leadership. Where awareness becomes implementation.
            </p>
            <motion.a
              href="#quiz"
              className="inline-block glass-card hover:bg-white text-[#7c3aed] text-base font-bold px-5 py-2.5 rounded-full tracking-tight transition-all duration-200"
              whileHover={{ scale: 1.03 }}
            >
              Take The Assessment →
            </motion.a>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <p className="text-[#bbbbbb] text-[10px] tracking-[2px] uppercase font-bold mb-5">
                {category}
              </p>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-[#777777] hover:text-[#7c3aed] text-base font-medium transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Framework reminder */}
        <div className="border-t border-black/[0.06] pt-10 mb-10">
          <div className="flex flex-wrap justify-center gap-x-3 gap-y-2 text-center">
            {["Awareness", "Clarity", "Confidence", "Communication", "Action", "Leadership"].map(
              (step, i, arr) => (
                <span key={step} className="flex items-center gap-3">
                  <span
                    className="text-base font-semibold tracking-wide"
                    style={{ color: stepColors[i] }}
                  >
                    {step}
                  </span>
                  {i < arr.length - 1 && <span className="text-[#cccccc] text-base">→</span>}
                </span>
              )
            )}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-black/[0.06] pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#aaaaaa] text-base">
            © {new Date().getFullYear()} Captanova Academy. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Service", "Refund Policy"].map((item) => (
              <a key={item} href="#" className="text-[#aaaaaa] hover:text-[#555555] text-base transition-colors">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
