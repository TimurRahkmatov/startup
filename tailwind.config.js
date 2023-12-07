/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        mid: {
          950: "#172554"
        }
      },
    },
  },
  plugins: [],
};
