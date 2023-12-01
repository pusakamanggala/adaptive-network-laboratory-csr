/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1192px",
      },
    },
    extend: {
      keyframes: {
        pulse: {
          // pulse left to right
          "0%, 100%": {
            transform: "translateX(0)",
          },
        },
      },
      animation: {
        pulse: "pulse 1.2s ease-in-out infinite",
      },
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
