import { motion } from "framer-motion";

/**
 * GlowCard — base surface card with a soft ripple-glow hover treatment,
 * echoing the "sound ripple" motif used throughout the site.
 */
export default function GlowCard({ children, className = "", glow = "signal", as: Tag = "div" }) {
  const glowColor = glow === "pulse" ? "rgba(255,106,77,0.35)" : "rgba(45,232,203,0.32)";

  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      className={`group relative rounded-2xl border border-white/10 bg-surface/80 p-6 sm:p-8 backdrop-blur-sm transition-colors duration-300 hover:border-white/20 ${className}`}
      style={{ "--glow": glowColor }}
    >
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: `radial-gradient(220px circle at var(--x,50%) var(--y,0%), var(--glow), transparent 70%)`,
        }}
        onMouseMove={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          e.currentTarget.style.setProperty("--x", `${e.clientX - rect.left}px`);
          e.currentTarget.style.setProperty("--y", `${e.clientY - rect.top}px`);
        }}
      />
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}
