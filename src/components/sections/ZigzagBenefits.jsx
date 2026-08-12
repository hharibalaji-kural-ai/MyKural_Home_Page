import { motion } from "framer-motion";
import Icon from "../ui/Icon";
import Reveal from "../ui/Reveal";

const ICONS = ["waveform", "chart", "layers", "shield", "clock", "globe", "users", "check"];

/**
 * ZigzagBenefits — renders a list of { title, body } items in an alternating
 * left/right staggered layout on desktop (a literal zigzag, echoing a
 * waveform trace), collapsing to a single clean column on mobile.
 */
export default function ZigzagBenefits({ items, accent = "signal" }) {
  const accentColor = "#2F5D50";
  const accentClasses = "text-signal border-signal/30 bg-signal/5";

  return (
    <div className="relative">
      {/* connecting waveform spine, desktop only */}
      <svg
        className="pointer-events-none absolute left-1/2 top-0 hidden h-full w-4 -translate-x-1/2 md:block"
        viewBox="0 0 16 100"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d={`M8 0 ${items
            .map((_, i) => `Q ${i % 2 === 0 ? 16 : 0} ${(100 / items.length) * (i + 0.5)} 8 ${(100 / items.length) * (i + 1)}`)
            .join(" ")}`}
          fill="none"
          stroke={accentColor}
          strokeOpacity="0.25"
          strokeWidth="1.5"
          strokeDasharray="4 5"
        />
      </svg>

      <div className="relative flex flex-col gap-10 md:gap-4">
        {items.map((item, i) => {
          const isEven = i % 2 === 0;
          return (
            <div
              key={item.title}
              className={`md:flex md:items-center ${
                isEven ? "md:justify-start" : "md:justify-end"
              }`}
            >
              <Reveal
                direction={isEven ? "right" : "left"}
                delay={0.05}
                className={`w-full md:w-[46%] ${isEven ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"} ${
                  i % 3 === 1 ? "md:translate-y-6" : i % 3 === 2 ? "md:-translate-y-4" : ""
                }`}
              >
                <motion.div
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 260, damping: 20 }}
                  className="relative rounded-2xl border border-white/10 bg-surface/80 p-6 backdrop-blur-sm hover:border-white/20 transition-colors"
                >
                  <div
                    className={`mb-4 flex h-11 w-11 items-center justify-center rounded-xl border ${accentClasses}`}
                  >
                    <Icon name={ICONS[i % ICONS.length]} className="w-5 h-5" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-paper">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-mist">{item.body}</p>
                </motion.div>
              </Reveal>
            </div>
          );
        })}
      </div>
    </div>
  );
}
