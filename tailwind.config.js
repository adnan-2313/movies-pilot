/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        kalam: ["Kalam", "cursive"],
        montserrat: ["Montserrat", "sans-serif"],
        spaceGrotesk: ["Space Grotesk", "sans-serif"],
        playwrite: ["Playwrite AR", " cursive"],
        DMSANS: ["DM Sans", "sans-serif"],
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".no-scrollbar": {
          /* Hides scrollbar for Chrome, Safari, and Edge */
          "-webkit-overflow-scrolling": "touch", // Enables smooth scrolling for touch devices
          "scrollbar-width": "none", // Firefox
          "&::-webkit-scrollbar": {
            display: "none", // Chrome, Safari, Edge
          },
        },
      });
    },
  ],
};
