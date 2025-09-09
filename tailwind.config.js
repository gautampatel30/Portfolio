/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "320px",
        sm: "375px",
        md: "667px",
        lg: "960px",
        xl: "1280px",
      },
      fontFamily: {
        bodyfont: ["Poppins", "sans-serif"],
        titleFont: ["Montserrat", "sans-serif"],
      },
      colors: {
        bodyColor: "#FFFFFF", // Light background color
        textColor: "#1F2937", // Dark text color
        designColor: "#FFA500", // Orange color for accents
        primary: "#374151", // Darker color for text
        secondary: "#F3F4F6", // Light secondary color for containers
        accent: "#FFA500", // Accent color (orange)
      },
      animation: {
        "spin-slow": "spin 15s linear infinite",
        "reverse-spin": "reverse-spin 15s linear infinite",
        pulse: "pulse 2s infinite",
      },
      keyframes: {
        "reverse-spin": {
          from: {
            transform: "rotate(360deg)",
          },
        },
        pulse: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.05)" },
        },
      },
      boxShadow: {
        greenShadow: "0px 0px 188px -14px rgba(255,165,0,1)", // Update shadow color to match orange
        testShadow: "11px 0px 13px -15px rgba(0,0,0,1)",
      },
    },
  },
  plugins: [],
};
