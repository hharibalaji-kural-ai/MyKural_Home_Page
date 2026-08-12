import { motion } from "framer-motion";
import Layout from "../components/layout/Layout";
import Reveal, { RevealGroup, fadeUpItem } from "../components/ui/Reveal";
import Icon from "../components/ui/Icon";
import Button from "../components/ui/Button";
import SectionHeading from "../components/ui/SectionHeading";
import GlowCard from "../components/ui/GlowCard";
import CTASection from "../components/sections/CTASection";
import { WaveformLine } from "../components/ui/AnimatedWaveform";
import { products } from "../data/content";

const CAPABILITY_ICONS = ["clock", "layers", "chart", "phone", "users", "waveform"];

const transcript = [
  { from: "caller", text: "என் ஆர்டர் இன்னும் வரல, என்ன ஆச்சு?" },
  { from: "kural", text: "கவலைப்படாதீங்க, உங்க ஆர்டர் நம்பரை சொல்றீங்களா?" },
  { from: "caller", text: "KR-48213" },
  { from: "kural", text: "நன்றி. உங்க ஆர்டர் நாளைக்கு காலைக்குள்ள வரும்னு காட்டுது." },
];

export default function Kural2Way() {
  const p = products.kural2;

  return (
    <Layout>
      <section className="relative isolate overflow-hidden bg-grid-glow pb-16 pt-16 sm:pt-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
            <div>
              <Reveal>
                <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-pulse/30 bg-pulse/5 px-4 py-1.5 text-xs font-display uppercase tracking-[0.18em] text-pulse">
                  <Icon name="phone" className="w-3.5 h-3.5" />
                  {p.eyebrow}
                </span>
              </Reveal>
              <Reveal delay={0.06}>
                <h1 className="text-4xl sm:text-5xl font-semibold leading-tight text-paper">
                  {p.headline}
                </h1>
              </Reveal>
              <Reveal delay={0.12}>
                <p className="mt-6 text-lg leading-relaxed text-mist">{p.summary}</p>
              </Reveal>
              <Reveal delay={0.18}>
                <div className="mt-9 flex flex-col sm:flex-row gap-4">
                  <Button to="/contact" variant="pulse">
                    Book a demo
                    <Icon name="arrow-right" className="w-4 h-4" />
                  </Button>
                  <Button to="/products/kural-1-way" variant="secondary">
                    See Kural 1-Way
                  </Button>
                </div>
              </Reveal>
            </div>

            {/* Live conversation demo panel */}
            <Reveal direction="left" delay={0.2}>
              <div className="relative rounded-3xl border border-white/10 bg-surface/80 p-8 backdrop-blur-sm shadow-2xl">
                <div className="flex items-center justify-between text-xs text-mist">
                  <span className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-pulse animate-pulse" />
                    Inbound support call
                  </span>
                  <span className="font-tamil text-pulse/80">தமிழ்</span>
                </div>

                <div className="mt-6 space-y-3">
                  {transcript.map((line, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.25, duration: 0.4 }}
                      className={`max-w-[85%] rounded-xl p-3.5 text-sm ${
                        line.from === "kural"
                          ? "ml-auto bg-pulse/10 text-paper"
                          : "bg-surface2/80 text-mist"
                      }`}
                    >
                      {line.text}
                    </motion.div>
                  ))}
                </div>

                <div className="mt-6 flex items-center justify-between rounded-xl bg-surface2/80 px-4 py-3 text-xs">
                  <span className="text-mist">Resolution</span>
                  <span className="flex items-center gap-1 font-display text-pulse">
                    <Icon name="check" className="w-3.5 h-3.5" /> Resolved · no handoff
                  </span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <WaveformLine className="h-10" color="#FF6A4D" />
      </div>

      <section className="py-20">
        <div className="mx-auto max-w-4xl px-5 sm:px-8 text-center">
          <Reveal>
            <p className="text-lg leading-relaxed text-mist">{p.description}</p>
          </Reveal>
        </div>
      </section>

      {/* Capabilities grid */}
      <section className="py-20 bg-surface/30">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="What it can do"
            title="Support that holds context, not just a script"
            body="Kural 2-Way is built for the messy, multi-turn reality of a real support call."
          />
          <RevealGroup className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {p.capabilities.map((c, i) => (
              <motion.div key={c.title} variants={fadeUpItem}>
                <GlowCard glow="pulse" className="h-full">
                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl border border-pulse/30 bg-pulse/5 text-pulse">
                    <Icon name={CAPABILITY_ICONS[i % CAPABILITY_ICONS.length]} className="w-5 h-5" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-paper">{c.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-mist">{c.body}</p>
                </GlowCard>
              </motion.div>
            ))}
          </RevealGroup>
        </div>
      </section>

      <CTASection
        eyebrow="Kural 2-Way"
        title="Give your support line a Tamil-speaking voice agent."
        body="Deploy Kural 2-Way on overflow, after-hours, or a single high-volume query type — and expand from there."
        primaryLabel="Book a demo"
      />
    </Layout>
  );
}
