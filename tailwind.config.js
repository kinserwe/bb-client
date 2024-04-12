import plugin from "tailwindcss/plugin.js";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        onest: ["Onest", "sans-serif"],
      },
      colors: {
        "soft-primary": "#84D187",
        primary: "#007207",
        "hard-primary": "#245e26",
        gray: {
          500: "#808080",
          800: "#333333",
          900: "#1A1A1A",
        },
      },
      container: {
        center: true,
      },
      borderWidth: {
        1: "1px",
      },
      height: {
        25: "100px",
      },
      width: {
        25: "100px",
      },
    },
    container: {
      center: true,
      padding: "1rem",
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1440px",
      },
    },
  },
  plugins: [
    plugin(function ({ addVariant }) {
      addVariant("not-last", "&:not(:last-child)");
    }),
  ],
};
