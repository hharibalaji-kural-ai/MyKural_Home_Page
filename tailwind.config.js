/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#F5F7FB",
        surface: "#FFFFFF",
        surface2: "#EDF3F9",
        surface3: "#DDEAF7",
        signal: "#5B8DEF",
        "signal-dark": "#3C73D8",
        pulse: "#5B8DEF",
        "pulse-dark": "#3C73D8",
        mist: "#5F6F82",
        paper: "#1A2433",
      },
      fontFamily: {
        display: ["'Space Grotesk'", "sans-serif"],
        body: ["'Inter'", "sans-serif"],
        tamil: ["'Noto Sans Tamil'", "sans-serif"],
      },
      backgroundImage: {
        "grid-glow":
          "radial-gradient(circle at 20% 20%, rgba(91,141,239,0.18), transparent 40%), radial-gradient(circle at 80% 0%, rgba(91,141,239,0.12), transparent 35%)",
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
