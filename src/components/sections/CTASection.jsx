import Reveal from "../ui/Reveal";
import Button from "../ui/Button";
import Icon from "../ui/Icon";
import { WaveformLine } from "../ui/AnimatedWaveform";

export default function CTASection({
  eyebrow = "Ready when you are",
  title = "Let's put a voice on your feedback loop.",
  body = "Book a 20-minute walkthrough and hear Kural AI handle a real Tamil call, end to end.",
  primaryLabel = "Book a demo",
  primaryTo = "/contact",
}) {
  return (
    <section className="relative overflow-hidden py-24">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-signal/20 bg-gradient-to-br from-surface via-surface to-surface2 p-10 sm:p-14 text-center">
            <div className="pointer-events-none absolute inset-x-0 bottom-0 opacity-30">
              <WaveformLine className="h-16 px-8" color="#2DE8CB" />
            </div>
            <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-signal/30 bg-signal/5 px-4 py-1.5 text-xs font-display uppercase tracking-[0.18em] text-signal">
              {eyebrow}
            </span>
            <h2 className="mx-auto max-w-2xl text-3xl sm:text-4xl font-semibold text-paper">
              {title}
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-mist">{body}</p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button to={primaryTo} variant="primary">
                {primaryLabel}
                <Icon name="arrow-right" className="w-4 h-4" />
              </Button>
              <Button to="/products" variant="secondary">
                See how it works
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
