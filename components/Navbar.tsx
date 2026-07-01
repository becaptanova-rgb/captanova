"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Programs", href: "#programs" },
  { label: "Journal", href: "#journal" },
  { label: "About", href: "#about" },
  { label: "Mentors", href: "#mentors" },
  { label: "Testimonials", href: "#testimonials" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 px-4 md:px-6 pt-4"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <div
        className={`max-w-6xl mx-auto rounded-2xl transition-all duration-500 ${
          scrolled
            ? "glass-strong shadow-[0_8px_32px_rgba(0,0,0,0.06)] py-3 px-5"
            : "bg-transparent py-4 px-5"
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex flex-col leading-none group">
            <span className="font-display text-[#111111] text-xl tracking-[3px] uppercase font-medium group-hover:tracking-[4px] transition-all duration-300">
              Captanova
            </span>
            <span className="text-[#999999] text-[8px] tracking-[2.5px] uppercase mt-0.5 font-medium">
              Be The Captain Of Your Life
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative text-[#555555] hover:text-[#111111] text-base font-medium px-4 py-2 rounded-full transition-colors duration-200 hover:bg-black/[0.03]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#quiz"
              className="relative bg-gradient-to-r from-[#7c3aed] to-[#2563eb] text-white text-base font-semibold px-5 py-2.5 rounded-full tracking-tight transition-all duration-300 hover:shadow-[0_8px_24px_rgba(124,58,237,0.35)] hover:scale-[1.03] active:scale-[0.98]"
            >
              Take The Assessment
            </a>
          </div>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden text-[#111111] w-9 h-9 flex items-center justify-center rounded-full hover:bg-black/5"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden overflow-hidden"
            >
              <nav className="flex flex-col gap-1 pt-4 pb-2 border-t border-black/5 mt-4">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="text-[#555555] hover:text-[#111111] text-base font-medium px-3 py-3 rounded-xl hover:bg-black/[0.03] transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
                <a
                  href="#quiz"
                  onClick={() => setMenuOpen(false)}
                  className="bg-gradient-to-r from-[#7c3aed] to-[#2563eb] text-white font-semibold text-base px-5 py-3 rounded-full text-center mt-2"
                >
                  Take The Assessment
                </a>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
