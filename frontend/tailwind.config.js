/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2E7D32",
        secondary: "#1565C0",
        lightBg: "#F5F7FA",
        cardBg: "#FFFFFF",
        borderColor: "#E5E7EB",
      },
    },
  },
  plugins: [],
}