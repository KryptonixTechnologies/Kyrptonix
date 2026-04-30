import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#010409",
          900: "#0d1117",
          800: "#161b22",
          700: "#21262d",
        },
        kyptonix: {
          blue: "#2f81f7",
          violet: "#8957e5",
          purple: "#bf7af0",
          cyan: "#39c5cf",
          green: "#3fb950",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 80px rgba(137, 87, 229, 0.35)",
        "glow-blue": "0 0 80px rgba(47, 129, 247, 0.28)",
      },
      backgroundImage: {
        "radial-violet": "radial-gradient(circle at center, rgba(137, 87, 229, 0.34), transparent 58%)",
        "radial-blue": "radial-gradient(circle at center, rgba(47, 129, 247, 0.28), transparent 62%)",
      },
    },
  },
  plugins: [],
};

export default config;
