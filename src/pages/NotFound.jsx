import Layout from "../components/layout/Layout";
import Reveal from "../components/ui/Reveal";
import Button from "../components/ui/Button";
import AnimatedWaveform from "../components/ui/AnimatedWaveform";

export default function NotFound() {
  return (
    <Layout>
      <section className="flex min-h-[70vh] flex-col items-center justify-center px-5 text-center">
        <Reveal>
          <span className="font-display text-sm uppercase tracking-[0.3em] text-mist">
            404 · Signal lost
          </span>
        </Reveal>
        <Reveal delay={0.06}>
          <h1 className="mt-4 text-4xl sm:text-5xl font-semibold text-paper">
            We couldn't pick up this page.
          </h1>
        </Reveal>
        <Reveal delay={0.12}>
          <div className="mt-10">
            <AnimatedWaveform bars={30} height={50} />
          </div>
        </Reveal>
        <Reveal delay={0.18}>
          <Button to="/" variant="primary" className="mt-10">
            Back to home
          </Button>
        </Reveal>
      </section>
    </Layout>
  );
}
