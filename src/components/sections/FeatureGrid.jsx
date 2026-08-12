import { motion } from "framer-motion";
import Icon from "../ui/Icon";
import Reveal, { RevealGroup, fadeUpItem } from "../ui/Reveal";
import GlowCard from "../ui/GlowCard";
import SectionHeading from "../ui/SectionHeading";
import { homeFeatures } from "../../data/content";

export default function FeatureGrid() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Why voice"
          title="The interface people already trust"
          body="Kural AI is designed around a single idea: the fastest way to understand a customer is to let them talk."
        />

        <RevealGroup className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {homeFeatures.map((f) => (
            <motion.div key={f.title} variants={fadeUpItem}>
              <GlowCard>
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-signal/30 bg-signal/5 text-signal">
                  <Icon name={f.icon} className="w-5 h-5" />
                </div>
                <h3 className="font-display text-xl font-semibold text-paper">{f.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-mist">{f.body}</p>
              </GlowCard>
            </motion.div>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
