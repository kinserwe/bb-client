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
        primary: "#00B207",
        "hard-primary": "#2C742F",
        gray: {
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
  },
  plugins: [],
};
