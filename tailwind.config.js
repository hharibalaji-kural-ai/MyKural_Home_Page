/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0A0E1B",
        surface: "#121729",
        surface2: "#1A2036",
        surface3: "#232B47",
        signal: "#2DE8CB",
        "signal-dark": "#17B89E",
        pulse: "#FF6A4D",
        "pulse-dark": "#E24E33",
        mist: "#A6ADC4",
        paper: "#F6F7FB",
      },
      fontFamily: {
        display: ["'Space Grotesk'", "sans-serif"],
        body: ["'Inter'", "sans-serif"],
        tamil: ["'Noto Sans Tamil'", "sans-serif"],
      },
      backgroundImage: {
        "grid-glow":
          "radial-gradient(circle at 20% 20%, rgba(45,232,203,0.14), transparent 40%), radial-gradient(circle at 80% 0%, rgba(255,106,77,0.10), transparent 35%)",
      },
      keyframes: {
        wave: {
          "0%, 100%": { transform: "scaleY(0.3)" },
          "50%": { transform: "scaleY(1)" },
        },
        drift: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        pulseRing: {
          "0%": { transform: "scale(0.9)", opacity: "0.7" },
          "100%": { transform: "scale(1.8)", opacity: "0" },
        },
      },
      animation: {
        wave: "wave 1.2s ease-in-out infinite",
        drift: "drift 22s linear infinite",
        pulseRing: "pulseRing 2.2s cubic-bezier(0.4,0,0.6,1) infinite",
      },
    },
  },
  plugins: [],
};
