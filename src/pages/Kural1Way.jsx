import { motion } from "framer-motion";
import Layout from "../components/layout/Layout";
import Reveal from "../components/ui/Reveal";
import Icon from "../components/ui/Icon";
import Button from "../components/ui/Button";
import SectionHeading from "../components/ui/SectionHeading";
import ZigzagBenefits from "../components/sections/ZigzagBenefits";
import CTASection from "../components/sections/CTASection";
import AnimatedWaveform, { WaveformLine } from "../components/ui/AnimatedWaveform";
import { products } from "../data/content";

export default function Kural1Way() {
  const p = products.kural1;

  return (
    <Layout>
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-grid-glow pb-16 pt-16 sm:pt-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
            <div>
              <Reveal>
                <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-signal/30 bg-signal/5 px-4 py-1.5 text-xs font-display uppercase tracking-[0.18em] text-signal">
                  <Icon name="waveform" className="w-3.5 h-3.5" />
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
                  <Button to="/contact" variant="primary">
                    Book a demo
                    <Icon name="arrow-right" className="w-4 h-4" />
                  </Button>
                  <Button to="/products/kural-2-way" variant="secondary">
                    See Kural 2-Way
                  </Button>
                </div>
              </Reveal>
            </div>

            <Reveal direction="left" delay={0.2}>
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="relative rounded-3xl border border-white/10 bg-surface/80 p-8 backdrop-blur-sm shadow-2xl"
              >
                <div className="flex items-center justify-between text-xs text-mist">
                  {/* <span>Outbound feedback call</span> */}
                  <span className="font-tamil text-signal/80">kural</span>
                </div>
                <div className="mt-6 space-y-3">
                  {/* <div className="rounded-xl bg-surface2/80 p-4 text-sm text-mist">
                    "வணக்கம்! உங்கள் கடந்த வாரம் டெலிவரி எப்படி இருந்தது?"
                  </div> */}
                  {/* <div className="ml-6 rounded-xl bg-signal/10 p-4 text-sm text-paper">
                    "நல்லா இருந்துச்சு, ஆனா கொஞ்சம் தாமதமா வந்துச்சு."
                  </div> */}
                </div>
                <div className="mt-6">
                  <AnimatedWaveform bars={30} height={50} />
                </div>
                <div className="mt-6 flex items-center justify-between rounded-xl bg-surface2/80 px-4 py-3 text-xs">
                  {/* <span className="text-mist">Feedback captured</span> */}
                  {/* <span className="flex items-center gap-1 font-display text-signal">
                    <Icon name="check" className="w-3.5 h-3.5" /> Logged to CRM
                  </span> */}
                </div>
              </motion.div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <WaveformLine className="h-10" />
      </div> */}

      {/* How it works */}
      {/* <section className="py-20">
        <div className="mx-auto max-w-4xl px-5 sm:px-8 text-center">
          <Reveal>
            <p className="text-lg leading-relaxed text-mist">{p.description}</p>
          </Reveal>
        </div>
      </section> */}

      {/* Enterprise Benefits — zigzag */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="For your organization"
            title="Client Benefits"
            body="What Kural 1-Way does for the team running the feedback program.

"
          />
          <div className="mt-16">
            <ZigzagBenefits items={p.enterpriseBenefits} accent="signal" />
          </div>
        </div>
      </section>

      {/* End-User Benefits — zigzag, reversed accent */}
      <section className="py-20 bg-surface/30">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="For your customer"
            title="End-User Benefits"
            body="What the experience feels like for the person receiving the call."
          />
          <div className="mt-16">
            <ZigzagBenefits items={p.endUserBenefits} accent="pulse" />
          </div>
        </div>
      </section>
{/* 
      <CTASection
        eyebrow="Kural 1-Way"
        title="Start hearing from customers who never fill out a form."
        body="Pilot Kural 1-Way on a single flow — post-purchase, post-delivery, or post-visit — and see results within a week."
      /> */}
    </Layout>
  );
}
