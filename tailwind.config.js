/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Manrope", "sans-serif"],
      },
      colors: {
        blue: {
          main: "#13293D",
          1: "#006493",
          2: "#247B9F",
          3: "#1B97DF",
          4: "#EAF4F4",
        },
      },
    },
  },
  plugins: [],
};
