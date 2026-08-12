import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children }) {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" in window ? "instant" : "auto" });
  }, [pathname]);

  return (
    <div className="relative min-h-screen bg-ink noise-overlay overflow-x-hidden">
      <Navbar />
      <main className="pt-20">{children}</main>
      <Footer />
    </div>
  );
}
