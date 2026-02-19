import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        nocturnal: {
          bg: "#0f0f0f",
          surface: "#1a1a1a",
          stone: "#2d2d2d",
          text: "#e8e8e8",
          secondary: "#b8b8b8",
        },
        brand: {
          orange: "#FF6B35",
          orangeHover: "#E55A2B",
        },
      },
      boxShadow: {
        "bf-card": "0 25px 50px -12px rgba(0,0,0,0.25)",
      },
      backgroundImage: {
        "hero-overlay":
          "radial-gradient(0deg, rgba(15,15,15,0.9), rgba(15,15,15,0.1) 55%, rgba(15,15,15,0.0) 85%)",
        "stone-sheen":
          "linear-gradient(135deg, rgba(45,45,45,0.85), rgba(26,26,26,0.85))",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;




















