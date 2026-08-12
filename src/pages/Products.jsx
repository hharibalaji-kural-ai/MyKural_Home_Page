import Layout from "../components/layout/Layout";
import Reveal from "../components/ui/Reveal";
import ProductsOverview from "../components/sections/ProductsOverview";
import CTASection from "../components/sections/CTASection";
import AnimatedWaveform from "../components/ui/AnimatedWaveform";

export default function Products() {
  return (
    <Layout>
      <section className="relative overflow-hidden bg-grid-glow py-20 sm:py-28">
        <div className="mx-auto max-w-3xl px-5 sm:px-8 text-center">
          <Reveal>
            <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-signal/30 bg-signal/5 px-4 py-1.5 text-xs font-display uppercase tracking-[0.18em] text-signal">
              Products
            </span>
          </Reveal>
          <Reveal delay={0.06}>
            <h1 className="text-4xl sm:text-5xl font-semibold leading-tight text-paper">
              One voice engine. <span className="text-gradient">Two ways to use it.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-5 text-lg text-mist">
              Whether you need to collect feedback at scale or hold a real conversation, Kural AI
              runs on the same Tamil-first voice engine underneath.
            </p>
          </Reveal>
          <Reveal delay={0.18}>
            <div className="mt-10">
              <AnimatedWaveform bars={44} height={60} />
            </div>
          </Reveal>
        </div>
      </section>

      <ProductsOverview />
      <CTASection />
    </Layout>
  );
}
