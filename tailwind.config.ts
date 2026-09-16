import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "rgb(var(--color-primary-navy) / <alpha-value>)",
          900: "rgb(var(--color-secondary-navy) / <alpha-value>)",
          800: "rgb(var(--color-navy-surface) / <alpha-value>)",
          700: "rgb(var(--color-navy-border) / <alpha-value>)",
        },
        kryptonix: {
          blue: "rgb(var(--color-secondary-navy) / <alpha-value>)",
          violet: "rgb(var(--color-primary-navy) / <alpha-value>)",
          purple: "rgb(var(--color-light-gold) / <alpha-value>)",
          cyan: "rgb(var(--color-gold-accent) / <alpha-value>)",
          green: "rgb(var(--color-bright-gold) / <alpha-value>)",
          gold: "rgb(var(--color-gold-accent) / <alpha-value>)",
          navy: "rgb(var(--color-primary-navy) / <alpha-value>)",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 80px rgb(var(--color-gold-accent) / 0.24)",
        "glow-blue": "0 0 80px rgb(var(--color-secondary-navy) / 0.26)",
      },
      backgroundImage: {
        "radial-violet": "radial-gradient(circle at center, rgb(var(--color-gold-accent) / 0.24), transparent 58%)",
        "radial-blue": "radial-gradient(circle at center, rgb(var(--color-secondary-navy) / 0.3), transparent 62%)",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        marquee: "marquee 25s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;