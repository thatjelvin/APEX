/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#E63946",
        dark: "#0D1117",
        navy: "#1A1A2E",
        gold: "#F5A623",
        success: "#2ECC71",
        cardDark: "#1C1C2E",
        textSecondary: "#888888",
        borderDark: "#2A2A3E"
      }
    }
  },
  plugins: []
};
