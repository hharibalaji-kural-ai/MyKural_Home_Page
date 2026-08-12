import Layout from "../components/layout/Layout";
import Reveal, { RevealGroup, fadeUpItem } from "../components/ui/Reveal";
import { motion } from "framer-motion";
import SectionHeading from "../components/ui/SectionHeading";
import GlowCard from "../components/ui/GlowCard";
import CTASection from "../components/sections/CTASection";
import AnimatedWaveform from "../components/ui/AnimatedWaveform";
import { about, brand } from "../data/content";

export default function About() {
  const enterprisePoints = [
    "Voice for your enterprise’s growth",
    "Direct from heart feedback from your clients",
    "Brings out the blind spots which are obvious in existing feedback mechanisms",
    "No default feedback forced on clients",
    "No number-based system where clients go for an average or full score by default",
    "Easy to get complex situation-based feedback when compared to other modes",
    "Greatly saves time and effort for your clients, especially elderly users wanting less tool dependency, women multitasking at home, and men giving feedback on the move",
    "Increases user interest, thereby making it a habit to give feedback",
  ];

  const peoplePoints = [
    "Get your heartfelt feedback heard loud and clear",
    "Be a trigger for the change that would benefit a wider community",
    "No boundaries to your feedback with star counts, default values, or limited choices",
    "Be a constructive mentor for the organization that you love to see growing",
    "Become a proud analyst and commentator on your ecosystem",
  ];

  return (
    <Layout>
      <section className="relative overflow-hidden bg-grid-glow py-20 sm:py-28">
        <div className="mx-auto max-w-4xl px-5 sm:px-8 text-center">
          <Reveal>
            <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-signal/30 bg-signal/5 px-4 py-1.5 text-xs font-display uppercase tracking-[0.18em] text-signal">
              Value {brand.name}
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
          <SectionHeading
            eyebrow="Why Kural AI"
            title="Empower your business with actionable, nuanced feedback."
            body="Voice-first feedback makes it easy for people to share what really matters — without friction, defaults, or survey fatigue."
            align="left"
            className="mb-14"
          />

          <RevealGroup className="grid gap-6 lg:grid-cols-2">
            <motion.div variants={fadeUpItem}>
              <GlowCard className="h-full border-signal/20 bg-surface/90">
                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-signal/30 bg-signal/10 px-3 py-1 text-[10px] font-display uppercase tracking-[0.2em] text-signal">
                  For Enterprises
                </div>
                <h3 className="font-display text-2xl font-semibold text-paper">
                  Voice for your enterprise’s growth
                </h3>
                <ul className="mt-6 space-y-3 text-sm leading-relaxed text-mist">
                  {enterprisePoints.map((point) => (
                    <li key={point} className="flex gap-3">
                      <span className="mt-1 text-signal">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </GlowCard>
            </motion.div>

            <motion.div variants={fadeUpItem}>
              <GlowCard className="h-full border-signal/20 bg-surface/90">
                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-signal/30 bg-signal/10 px-3 py-1 text-[10px] font-display uppercase tracking-[0.2em] text-signal">
                  For People
                </div>
                <h3 className="font-display text-2xl font-semibold text-paper">
                  Share your voice without constraints or friction.
                </h3>
                <ul className="mt-6 space-y-3 text-sm leading-relaxed text-mist">
                  {peoplePoints.map((point) => (
                    <li key={point} className="flex gap-3">
                      <span className="mt-1 text-signal">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </GlowCard>
            </motion.div>
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
