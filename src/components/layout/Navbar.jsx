import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { nav, brand } from "../../data/content";
import Icon from "../ui/Icon";
import Button from "../ui/Button";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setProductsOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-ink/85 backdrop-blur-md border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.3)]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-8 py-4">
        <Link to="/" className="flex items-center gap-2.5 group">
          <span className="relative flex h-9 w-9 items-center justify-center rounded-full bg-signal/10 text-signal ring-1 ring-signal/30">
            <Icon name="mic" className="w-4.5 h-4.5" />
            <span className="absolute inset-0 rounded-full ring-1 ring-signal/40 animate-pulseRing" />
          </span>
          <span className="font-display text-lg font-semibold tracking-tight text-paper">
            {brand.name}
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {nav.map((item) =>
            item.children ? (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setProductsOpen(true)}
                onMouseLeave={() => setProductsOpen(false)}
              >
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    `flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                      isActive ? "text-signal" : "text-mist hover:text-paper"
                    }`
                  }
                >
                  {item.label}
                  <svg
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${
                      productsOpen ? "rotate-180" : ""
                    }`}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="m6 9 6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </NavLink>
                <AnimatePresence>
                  {productsOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.18 }}
                      className="absolute left-0 top-full pt-3 w-72"
                    >
                      <div className="rounded-2xl border border-white/10 bg-surface/95 backdrop-blur-md p-2 shadow-2xl">
                        {item.children.map((child) => (
                          <Link
                            key={child.to}
                            to={child.to}
                            className="flex flex-col gap-0.5 rounded-xl px-4 py-3 hover:bg-white/5 transition-colors"
                          >
                            <span className="text-sm font-display font-medium text-paper">
                              {child.label}
                            </span>
                            <span className="text-xs text-mist">{child.desc}</span>
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <NavLink
                key={item.label}
                to={item.to}
                className={({ isActive }) =>
                  `px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                    isActive ? "text-signal" : "text-mist hover:text-paper"
                  }`
                }
              >
                {item.label}
              </NavLink>
            )
          )}
        </div>

        <div className="hidden md:block">
          <Button to="/contact" variant="primary" className="text-sm !px-5 !py-2.5">
            Book a demo
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-paper p-2"
          aria-label="Toggle menu"
          onClick={() => setMobileOpen((o) => !o)}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
            {mobileOpen ? (
              <path d="M18 6 6 18M6 6l12 12" strokeLinecap="round" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden overflow-hidden border-t border-white/10 bg-ink/95 backdrop-blur-md"
          >
            <div className="flex flex-col px-5 py-4 gap-1">
              {nav.map((item) => (
                <div key={item.label}>
                  <NavLink
                    to={item.to}
                    className={({ isActive }) =>
                      `block px-2 py-3 text-base font-medium ${
                        isActive ? "text-signal" : "text-paper"
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                  {item.children && (
                    <div className="ml-4 mb-2 flex flex-col gap-1 border-l border-white/10 pl-4">
                      {item.children.map((child) => (
                        <Link
                          key={child.to}
                          to={child.to}
                          className="py-2 text-sm text-mist hover:text-signal"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Button to="/contact" variant="primary" className="mt-3 w-full justify-center">
                Book a demo
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
