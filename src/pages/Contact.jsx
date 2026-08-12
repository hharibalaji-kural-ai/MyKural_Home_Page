import { useState } from "react";
import { motion } from "framer-motion";
import Layout from "../components/layout/Layout";
import Reveal from "../components/ui/Reveal";
import Icon from "../components/ui/Icon";
import Button from "../components/ui/Button";
import AnimatedWaveform from "../components/ui/AnimatedWaveform";

const inputClasses =
  "w-full rounded-xl border border-white/10 bg-surface2/80 px-4 py-3 text-sm text-paper placeholder:text-mist/60 outline-none transition-colors focus:border-signal/60 focus:ring-1 focus:ring-signal/40";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <Layout>
      <section className="relative overflow-hidden bg-grid-glow py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
            <div>
              <Reveal>
                <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-signal/30 bg-signal/5 px-4 py-1.5 text-xs font-display uppercase tracking-[0.18em] text-signal">
                  <Icon name="mail" className="w-3.5 h-3.5" />
                  Contact
                </span>
              </Reveal>
              <Reveal delay={0.06}>
                <h1 className="text-4xl sm:text-5xl font-semibold leading-tight text-paper">
                  Let's get your first call listening.
                </h1>
              </Reveal>
              <Reveal delay={0.12}>
                <p className="mt-6 max-w-md text-lg leading-relaxed text-mist">
                  Tell us a bit about what you're trying to hear from customers, and we'll get
                  back within one business day.
                </p>
              </Reveal>

              <Reveal delay={0.2}>
                <div className="mt-10 space-y-5">
                  <div className="flex items-center gap-3 text-sm text-mist">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-signal/10 text-signal">
                      <Icon name="mail" className="w-4 h-4" />
                    </span>
                    hello@kuralai.in
                  </div>
                  <div className="flex items-center gap-3 text-sm text-mist">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-signal/10 text-signal">
                      <Icon name="map-pin" className="w-4 h-4" />
                    </span>
                    Coimbatore, Tamil Nadu, India
                  </div>
                  <div className="flex items-center gap-3 text-sm text-mist">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-signal/10 text-signal">
                      <Icon name="phone" className="w-4 h-4" />
                    </span>
                    +91 98765 43210
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.26}>
                <div className="mt-12">
                  <AnimatedWaveform bars={28} height={44} />
                </div>
              </Reveal>
            </div>

            <Reveal direction="left" delay={0.15}>
              <div className="rounded-3xl border border-white/10 bg-surface/80 p-8 backdrop-blur-sm shadow-2xl">
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center py-16 text-center"
                  >
                    <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-signal/10 text-signal">
                      <Icon name="check" className="w-7 h-7" />
                    </div>
                    <h3 className="font-display text-xl font-semibold text-paper">
                      Message sent
                    </h3>
                    <p className="mt-2 max-w-xs text-sm text-mist">
                      Thanks for reaching out — our team will follow up shortly.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                      <div>
                        <label className="mb-2 block text-xs font-display uppercase tracking-wider text-mist">
                          Full name
                        </label>
                        <input required className={inputClasses} type="text" placeholder="Your name" />
                      </div>
                      <div>
                        <label className="mb-2 block text-xs font-display uppercase tracking-wider text-mist">
                          Work email
                        </label>
                        <input required className={inputClasses} type="email" placeholder="you@company.com" />
                      </div>
                    </div>
                    <div>
                      <label className="mb-2 block text-xs font-display uppercase tracking-wider text-mist">
                        Company
                      </label>
                      <input className={inputClasses} type="text" placeholder="Company name" />
                    </div>
                    <div>
                      <label className="mb-2 block text-xs font-display uppercase tracking-wider text-mist">
                        Interested in
                      </label>
                      <select className={inputClasses} defaultValue="kural-1-way">
                        <option value="kural-1-way">Kural 1-Way — Feedback</option>
                        <option value="kural-2-way">Kural 2-Way — Support</option>
                        <option value="both">Both products</option>
                      </select>
                    </div>
                    <div>
                      <label className="mb-2 block text-xs font-display uppercase tracking-wider text-mist">
                        Message
                      </label>
                      <textarea
                        className={`${inputClasses} min-h-[120px] resize-none`}
                        placeholder="What would you like Kural AI to help with?"
                      />
                    </div>
                    <Button type="submit" variant="primary" className="w-full justify-center">
                      Send message
                      <Icon name="arrow-right" className="w-4 h-4" />
                    </Button>
                  </form>
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </Layout>
  );
}
