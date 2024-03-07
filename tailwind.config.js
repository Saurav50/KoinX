/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        lightGray: "#f0f4f4",
        navBlue: "#2469ea",
        navBlue1: "#0051ff",
        textGray: "#3E5765",
        paraGray: "#3E424A",
        grenGradient: "#79F1A4",
      },
      fontFamily: {
        custom: ["Inter"],
      },
    },
  },
  plugins: [],
};
