import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#E2F663",
        secondary: {
          100: "#15181E",
          200: "#0F1116",
          300: "#242B3A",
        },
        neutral: {
          100: "#FFFFFF",
          200: "#D9D9D9",
          300: "#B3B9C9",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
