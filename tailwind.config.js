/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        manrope: ['Manrope', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],

      },
       Colors :{
        primary: "#007D6E", // Main brand color (Teal)
        secondary: "#EC744A", // Accent color (Orange)
        background: "#FCF8F4", // Light cream background
        heading: "#000000", // Black for headings
        paragraph: "#000000", // Dark gray for paragraphs
        white: "#FFFFFF", // White color
        gradient: "linear-gradient(90deg, #007D6E, #2F4B4E)", // Green gradient used in sections
    },
    },
  },
  plugins: [],
};
