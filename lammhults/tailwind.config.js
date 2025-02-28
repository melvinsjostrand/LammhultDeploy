/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        cormorant: ["Cormorant Upright", "serif"], // or "sans-serif"
      },
      colors: {
        gold: "#dcca87",
        darkGreen: "#0D3B36",
      },
    },
  },
  plugins: [],
};
