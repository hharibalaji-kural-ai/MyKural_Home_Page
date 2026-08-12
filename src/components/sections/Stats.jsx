import Reveal, { RevealGroup, fadeUpItem } from "../ui/Reveal";
import { motion } from "framer-motion";
import { stats } from "../../data/content";

export default function Stats() {
  return (
    <section className="relative border-y border-white/10 bg-surface/40 py-14">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <RevealGroup className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          {stats.map((s) => (
            <motion.div key={s.label} variants={fadeUpItem} className="text-center sm:text-left">
              <div className="font-display text-3xl sm:text-4xl font-semibold text-gradient">
                {s.value}
              </div>
              <div className="mt-2 text-xs sm:text-sm text-mist">{s.label}</div>
            </motion.div>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
