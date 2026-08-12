import { motion } from "framer-motion";

/**
 * AnimatedWaveform — the site's signature visual: an equalizer-style bar
 * cluster that breathes like a live audio signal. Bars use randomized
 * heights + durations so the motion never feels mechanically looped.
 */
export default function AnimatedWaveform({
  bars = 40,
  className = "",
  color = "#2DE8CB",
  height = 120,
}) {
  const seeds = Array.from({ length: bars }, (_, i) => {
    // deterministic pseudo-random so SSR/CSR (and re-renders) stay stable
    const n = Math.sin(i * 12.9898) * 43758.5453;
    return n - Math.floor(n);
  });

  return (
    <div
      className={`flex items-end justify-center gap-[3px] ${className}`}
      style={{ height }}
      aria-hidden="true"
    >
      {seeds.map((seed, i) => {
        const minH = 12 + seed * 18;
        const maxH = 40 + seed * 60;
        const duration = 0.9 + seed * 1.1;
        return (
          <motion.span
            key={i}
            className="w-[3px] rounded-full"
            style={{ background: color, opacity: 0.55 + seed * 0.45 }}
            animate={{ height: [minH, maxH, minH] }}
            transition={{
              duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: seed * 0.6,
            }}
          />
        );
      })}
    </div>
  );
}

/** A thin, wide waveform strip — used as a section divider / ambient line. */
export function WaveformLine({ className = "", color = "#2DE8CB", bars = 90 }) {
  const seeds = Array.from({ length: bars }, (_, i) => {
    const n = Math.sin(i * 78.233) * 12543.123;
    return n - Math.floor(n);
  });
  return (
    <div className={`flex items-center gap-[2px] ${className}`} aria-hidden="true">
      {seeds.map((seed, i) => (
        <motion.span
          key={i}
          className="w-[2px] rounded-full"
          style={{ background: color, opacity: 0.25 + seed * 0.5 }}
          animate={{ height: [4 + seed * 6, 6 + seed * 26, 4 + seed * 6] }}
          transition={{
            duration: 1.4 + seed,
            repeat: Infinity,
            ease: "easeInOut",
            delay: seed * 1.2,
          }}
        />
      ))}
    </div>
  );
}
