import { motion } from "framer-motion";
import Reveal from "../ui/Reveal";
import Icon from "../ui/Icon";
import Button from "../ui/Button";
import SectionHeading from "../ui/SectionHeading";
import { products } from "../../data/content";

export default function ProductsOverview() {
  const cards = [
    { ...products.kural1, to: "/products/kural-1-way", accent: "signal" },
    { ...products.kural2, to: "/products/kural-2-way", accent: "pulse" },
  ];

  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Two products, one voice"
          title="Choose how you want to listen"
          body="Kural AI ships as two focused products — one that collects feedback, one that has the conversation."
        />

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2">
          {cards.map((p) => (
            <Reveal key={p.id}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 240, damping: 20 }}
                className={`relative flex h-full flex-col overflow-hidden rounded-3xl border p-8 sm:p-10 ${
                  p.accent === "pulse"
                    ? "border-pulse/25 bg-gradient-to-br from-surface to-surface2"
                    : "border-signal/25 bg-gradient-to-br from-surface to-surface2"
                }`}
              >
                <div
                  className={`mb-6 flex h-12 w-12 items-center justify-center rounded-xl ${
                    p.accent === "pulse" ? "bg-pulse/10 text-pulse" : "bg-signal/10 text-signal"
                  }`}
                >
                  <Icon name={p.accent === "pulse" ? "phone" : "waveform"} className="w-6 h-6" />
                </div>
                <span
                  className={`text-xs font-display uppercase tracking-[0.18em] ${
                    p.accent === "pulse" ? "text-pulse" : "text-signal"
                  }`}
                >
                  {p.eyebrow}
                </span>
                <h3 className="mt-3 font-display text-2xl sm:text-3xl font-semibold text-paper">
                  {p.name}
                </h3>
                <p className="mt-4 text-sm sm:text-base leading-relaxed text-mist flex-1">
                  {p.summary}
                </p>
                <Button
                  to={p.to}
                  variant={p.accent === "pulse" ? "pulse" : "primary"}
                  className="mt-8 self-start"
                >
                  Explore {p.name}
                  <Icon name="arrow-right" className="w-4 h-4" />
                </Button>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
