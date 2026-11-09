import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        papier: "#F6F2EA",
        encre: "#1B1B18",
        sapin: "#0F3D2E",
        ocre: "#D9A441",
        trait: "#DDD6C6",
        doux: "#5C5A52",
      },
      fontFamily: {
        titre: ["var(--font-titre)", "Georgia", "serif"],
        texte: ["var(--font-texte)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
