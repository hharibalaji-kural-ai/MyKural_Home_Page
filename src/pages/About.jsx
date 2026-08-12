import Layout from "../components/layout/Layout";
import Reveal, { RevealGroup, fadeUpItem } from "../components/ui/Reveal";
import { motion } from "framer-motion";
import SectionHeading from "../components/ui/SectionHeading";
import GlowCard from "../components/ui/GlowCard";
import CTASection from "../components/sections/CTASection";
import AnimatedWaveform from "../components/ui/AnimatedWaveform";
import { about, brand } from "../data/content";

export default function About() {
  return (
    <Layout>
      <section className="relative overflow-hidden bg-grid-glow py-20 sm:py-28">
        <div className="mx-auto max-w-4xl px-5 sm:px-8 text-center">
          <Reveal>
            <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-signal/30 bg-signal/5 px-4 py-1.5 text-xs font-display uppercase tracking-[0.18em] text-signal">
              About {brand.name}
            </span>
          </Reveal>
          <Reveal delay={0.06}>
            <h1 className="text-4xl sm:text-5xl font-semibold leading-tight text-paper">
              {about.headline}
            </h1>
          </Reveal>
          <Reveal delay={0.12}>
            <div className="mt-10">
              <AnimatedWaveform bars={48} height={64} />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-8 sm:py-12">
        <div className="mx-auto max-w-3xl px-5 sm:px-8 space-y-6">
          {about.body.map((p, i) => (
            <Reveal key={i} delay={i * 0.05}>
              <p className="text-lg leading-relaxed text-mist">{p}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading eyebrow="What we hold to" title="Principles that shape the product" />
          <RevealGroup className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
            {about.values.map((v) => (
              <motion.div key={v.title} variants={fadeUpItem}>
                <GlowCard className="h-full">
                  <h3 className="font-display text-lg font-semibold text-paper">{v.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-mist">{v.body}</p>
                </GlowCard>
              </motion.div>
            ))}
          </RevealGroup>
        </div>
      </section>

      <CTASection
        eyebrow="Come talk to us"
        title="Curious how Kural AI would sound on your calls?"
        body="We'll walk you through a real Tamil call, start to finish, using your own use case."
      />
    </Layout>
  );
}
