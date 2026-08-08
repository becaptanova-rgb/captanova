"use client";

import {
  motion,
  useMotionValue,
  useMotionTemplate,
  useSpring,
  useTransform,
} from "framer-motion";
import { useRef, type ReactNode } from "react";

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  /** Max tilt rotation in degrees. */
  intensity?: number;
  /** Show a soft cursor-tracking glare sweep. */
  glare?: boolean;
  /** Scale applied on hover. */
  scaleOnHover?: number;
  /** Perspective depth (px) — lower = more dramatic. */
  perspective?: number;
}

/**
 * Desktop-only mouse-parallax 3D tilt wrapper. Touch devices never fire
 * mousemove, so this degrades gracefully to a static card on mobile.
 * Children can use `translate-z-*`-style inline transforms (via style
 * `transform: translateZ(Npx)`) to "float" above the card surface, since
 * the wrapper sets `transform-style: preserve-3d`.
 */
export default function TiltCard({
  children,
  className = "",
  intensity = 10,
  glare = true,
  scaleOnHover = 1.02,
  perspective = 1000,
}: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [intensity, -intensity]), {
    stiffness: 180,
    damping: 20,
  });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-intensity, intensity]), {
    stiffness: 180,
    damping: 20,
  });
  const scale = useSpring(1, { stiffness: 180, damping: 20 });
  const glareOpacity = useSpring(0, { stiffness: 180, damping: 24 });

  const glareX = useTransform(x, [-0.5, 0.5], ["0%", "100%"]);
  const glareY = useTransform(y, [-0.5, 0.5], ["0%", "100%"]);
  const glareBackground = useMotionTemplate`radial-gradient(circle at ${glareX} ${glareY}, rgba(255,255,255,0.5), transparent 60%)`;

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  }
  function handleEnter() {
    scale.set(scaleOnHover);
    glareOpacity.set(1);
  }
  function handleLeave() {
    x.set(0);
    y.set(0);
    scale.set(1);
    glareOpacity.set(0);
  }

  return (
    <div style={{ perspective }} className="h-full">
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
        style={{ rotateX, rotateY, scale, transformStyle: "preserve-3d" }}
        className={`relative h-full ${className}`}
      >
        {children}
        {glare && (
          <motion.div
            aria-hidden
            className="pointer-events-none absolute inset-0 rounded-[inherit] overflow-hidden"
            style={{ opacity: glareOpacity, background: glareBackground }}
          />
        )}
      </motion.div>
    </div>
  );
}
