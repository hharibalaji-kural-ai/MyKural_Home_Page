import { Link } from "react-router-dom";
import { nav, brand } from "../../data/content";
import Icon from "../ui/Icon";
import { WaveformLine } from "../ui/AnimatedWaveform";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-surface/60">
      {/* <WaveformLine className="absolute -top-6 left-0 right-0 h-6 px-6 opacity-40" /> */}
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-14">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-signal/10 text-signal ring-1 ring-signal/30">
                <Icon name="mic" className="w-4.5 h-4.5" />
              </span>
              <span className="font-display text-lg font-semibold text-paper">{brand.name}</span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-mist">{brand.mission}</p>
            <p className="mt-4 font-tamil text-signal/80 text-sm">குரல் — "voice"</p>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-paper">
              Navigate
            </h4>
            <ul className="mt-4 space-y-3">
              {nav.map((item) => (
                <li key={item.label}>
                  <Link to={item.to} className="text-sm text-mist hover:text-signal transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-paper">
              Products
            </h4>
            <ul className="mt-4 space-y-3">
              <li>
                <Link to="/products/kural-1-way" className="text-sm text-mist hover:text-signal transition-colors">
                  Kural 1-Way
                </Link>
              </li>
              <li>
                <Link to="/products/kural-2-way" className="text-sm text-mist hover:text-signal transition-colors">
                  Kural 2-Way
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-mist hover:text-signal transition-colors">
                  Talk to sales
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col-reverse items-center justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row">
          <p className="text-xs text-mist">
            © {new Date().getFullYear()} Kural AI. All rights reserved.
          </p>
          <p className="text-xs text-mist">Voice-first AI, built in Tamil Nadu.</p>
        </div>
      </div>
    </footer>
  );
}
