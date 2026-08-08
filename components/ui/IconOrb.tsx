"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface IconOrbProps {
  children: ReactNode;
  /** Base CSS color (hex, var(), etc.) — gradient + glow are derived from it. */
  color?: string;
  /** Size in px. */
  size?: number;
  /** Corner radius — "full" for a sphere, "2xl"/"3xl" for a rounded tile. */
  shape?: "full" | "2xl" | "3xl";
  /** Gentle ambient float animation. */
  float?: boolean;
  delay?: number;
  className?: string;
}

/**
 * A glossy, lit, "physical" badge: layered gradient body + top glare +
 * bottom ambient occlusion + drop shadow tinted to the accent color.
 * Reads as a rendered 3D object rather than a flat emoji tile.
 */
export default function IconOrb({
  children,
  color = "var(--accent-primary)",
  size = 56,
  shape = "2xl",
  float = true,
  delay = 0,
  className = "",
}: IconOrbProps) {
  const radius = shape === "full" ? "9999px" : shape === "3xl" ? "1.5rem" : "1rem";

  return (
    <motion.div
      className={`relative flex items-center justify-center flex-shrink-0 ${className}`}
      style={{
        width: size,
        height: size,
        borderRadius: radius,
        background: `linear-gradient(155deg, color-mix(in srgb, ${color} 65%, white) 0%, ${color} 45%, color-mix(in srgb, ${color} 75%, black) 100%)`,
        boxShadow: `0 ${size * 0.22}px ${size * 0.5}px -${size * 0.18}px color-mix(in srgb, ${color} 60%, transparent), inset 0 1.5px 1px rgba(255,255,255,0.65), inset 0 -${size * 0.12}px ${size * 0.18}px rgba(0,0,0,0.22)`,
      }}
      animate={float ? { y: [0, -5, 0] } : undefined}
      transition={float ? { duration: 4.5, repeat: Infinity, ease: "easeInOut", delay } : undefined}
    >
      {/* glossy top highlight */}
      <span
        aria-hidden
        className="pointer-events-none absolute left-[10%] right-[10%] top-[6%] h-1/2 opacity-50"
        style={{
          borderRadius: radius,
          background: "linear-gradient(180deg, rgba(255,255,255,0.85), transparent 80%)",
        }}
      />
      <span
        className="relative z-10 flex items-center justify-center text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.25)]"
        style={{ fontSize: size * 0.42 }}
      >
        {children}
      </span>
    </motion.div>
  );
}
