"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface CountdownTimerProps {
  targetDate: string; // ISO 8601 string, timezone-aware
  className?: string;
  /** Compact mode for sticky bars — smaller boxes, no labels below numbers. */
  compact?: boolean;
  onExpire?: () => void;
}

function getTimeLeft(targetDate: string) {
  const diff = new Date(targetDate).getTime() - Date.now();
  if (diff <= 0) return null;
  return {
    days: Math.floor(diff / 86400000),
    hours: Math.floor((diff % 86400000) / 3600000),
    minutes: Math.floor((diff % 3600000) / 60000),
    seconds: Math.floor((diff % 60000) / 1000),
  };
}

const units: { key: "days" | "hours" | "minutes" | "seconds"; label: string; short: string }[] = [
  { key: "days", label: "Days", short: "D" },
  { key: "hours", label: "Hours", short: "H" },
  { key: "minutes", label: "Min", short: "M" },
  { key: "seconds", label: "Sec", short: "S" },
];

export default function CountdownTimer({ targetDate, className = "", compact = false, onExpire }: CountdownTimerProps) {
  // Start null so server and first client render match (no target-computed
  // value from Date.now() at build/SSR time) — real numbers fill in on mount.
  const [timeLeft, setTimeLeft] = useState<ReturnType<typeof getTimeLeft>>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Standard "mounted" flag pattern to avoid a server/client hydration
    // mismatch — the server can never know Date.now(), so it must render a
    // static skeleton first and swap to the real countdown after mount.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
    setTimeLeft(getTimeLeft(targetDate));
    const interval = setInterval(() => {
      const next = getTimeLeft(targetDate);
      setTimeLeft(next);
      if (!next) {
        clearInterval(interval);
        onExpire?.();
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [targetDate, onExpire]);

  if (!mounted) {
    // Static skeleton for SSR — avoids a flash of "00:00:00:00" before mount.
    return (
      <div className={`flex gap-2 md:gap-3 ${className}`}>
        {units.map((u) => (
          <div key={u.key} className={`glass-strong rounded-2xl ${compact ? "w-12 py-1.5" : "w-16 md:w-20 py-3"} flex flex-col items-center`}>
            <span className={`font-display font-bold gradient-text-champagne ${compact ? "text-lg" : "text-2xl md:text-3xl"}`}>--</span>
            {!compact && <span className="text-[9px] uppercase tracking-wider text-[var(--text-tertiary)] mt-0.5">{u.label}</span>}
          </div>
        ))}
      </div>
    );
  }

  if (!timeLeft) {
    return (
      <div className={`glass-strong rounded-2xl px-6 py-3 inline-flex items-center gap-2 ${className}`}>
        <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
        <span className="font-display font-semibold text-[var(--text-primary)]">We&apos;re live right now — join in!</span>
      </div>
    );
  }

  return (
    <div className={`flex gap-2 md:gap-3 ${className}`}>
      {units.map((u) => (
        <div
          key={u.key}
          className={`glass-strong rounded-2xl ${compact ? "w-12 py-1.5" : "w-16 md:w-20 py-3"} flex flex-col items-center overflow-hidden`}
        >
          <AnimatePresence mode="popLayout">
            <motion.span
              key={timeLeft[u.key]}
              initial={{ y: -14, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 14, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className={`font-display font-bold gradient-text-champagne tabular-nums ${compact ? "text-lg" : "text-2xl md:text-3xl"}`}
            >
              {String(timeLeft[u.key]).padStart(2, "0")}
            </motion.span>
          </AnimatePresence>
          {!compact && (
            <span className="text-[9px] uppercase tracking-wider text-[var(--text-tertiary)] mt-0.5">{u.label}</span>
          )}
        </div>
      ))}
    </div>
  );
}
