import { motion } from "framer-motion";
import Button from "../ui/Button";
import Icon from "../ui/Icon";
import AnimatedWaveform from "../ui/AnimatedWaveform";
import Reveal from "../ui/Reveal";

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-grid-glow pb-24 pt-16 sm:pt-24">
      {/* ambient drifting waveform backdrop */}
      <div className="pointer-events-none absolute inset-x-0 top-24 -z-10 opacity-[0.15]">
        <div className="flex w-[200%] animate-drift gap-1">
          {Array.from({ length: 160 }).map((_, i) => (
            <span
              key={i}
              className="w-[3px] shrink-0 rounded-full bg-signal"
              style={{ height: `${20 + ((i * 37) % 90)}px` }}
            />
          ))}
        </div>
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-5 sm:px-8 lg:grid-cols-2">
        <div>
          <Reveal>
            <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-signal/30 bg-signal/5 px-4 py-1.5 text-xs font-display uppercase tracking-[0.18em] text-signal">
              <span className="h-1.5 w-1.5 rounded-full bg-signal animate-pulse" />
Voice AI for regional India

            </span>
          </Reveal>

          <Reveal delay={0.08}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.08] text-paper">
<br className="hidden sm:block" />{" "}
              <span className="text-gradient">              உங்கள் நிறுவனத்திற்கான குரல்.
</span>
            </h1>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-mist">
              We offer voice based  platforms for the small and medium businesses, deal with customer's feedback in a more meaningful way
            </p>
          </Reveal>

          <Reveal delay={0.24}>
            <div className="mt-9 flex flex-col sm:flex-row gap-4">
              <Button to="/contact" variant="primary">
                Book a demo
                <Icon name="arrow-right" className="w-4 h-4" />
              </Button>
              {/* <Button to="/products" variant="secondary">
                Explore products
              </Button> */}
            </div>
          </Reveal>

          <Reveal delay={0.32}>
            <div className="mt-10 flex items-center gap-6 text-xs text-mist">
              <div className="flex items-center gap-2">
                <Icon name="shield" className="w-4 h-4 text-signal" />
                Enterprise-grade encryption
              </div>
              <div className="flex items-center gap-2">
                <Icon name="globe" className="w-4 h-4 text-signal" />
                Tamil-first, more languages coming
              </div>
            </div>
          </Reveal>
        </div>

        {/* Signature visual: live "call" waveform panel */}
        <Reveal direction="left" delay={0.2}>
          <div className="relative mx-auto w-full max-w-md">
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative rounded-3xl border border-white/10 bg-surface/80 p-8 backdrop-blur-sm shadow-2xl"
            >
              <div className="flex items-center justify-between">
                {/* <div className="flex items-center gap-2 text-xs text-mist">
                  <span className="h-2 w-2 rounded-full bg-pulse animate-pulse" />
                  Live call · 00:42
                </div> */}
                <span className="font-tamil text-signal/80 text-sm">குரல்</span>
              </div>

              <div className="mt-8 flex justify-center">
                <div className="relative">
                  <span className="absolute inset-0 rounded-full bg-signal/20 animate-pulseRing" />
                  <span
                    className="absolute inset-0 rounded-full bg-signal/20 animate-pulseRing"
                    style={{ animationDelay: "0.6s" }}
                  />
                  <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-signal text-ink">
                    <Icon name="mic" className="w-8 h-8" />
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <AnimatedWaveform bars={36} height={70} color="#5B8DEF" />
              </div>

              {/* <div className="mt-8 space-y-3 rounded-2xl bg-surface2/80 p-4">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-mist">Sentiment</span>
                  <span className="font-display text-signal">Positive · 0.86</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-mist">Language detected</span>
                  <span className="font-display text-paper">Tamil</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-mist">Status</span>
                  <span className="font-display text-paper">Routed to CX dashboard</span>
                </div>
              </div> */}
            </motion.div>

            {/* floating accent chip */}
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute -left-8 -bottom-6 hidden sm:flex items-center gap-2 rounded-2xl border border-white/10 bg-surface/90 px-4 py-3 shadow-xl backdrop-blur-sm"
            >
              <Icon name="check" className="w-4 h-4 text-signal" />
              <span className="text-xs text-paper">Feedback logged</span>
            </motion.div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
