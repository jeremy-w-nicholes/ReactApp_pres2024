/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary1: '#000000',    // black
        primary: '#1a1a1a',     // Dark background
        secondary: '#333333',   // Slightly lighter background
        accent: '#4d4d4d',      // Accent for text and borders
        highlight: '#666666',   // Highlight for hover effects
        muted: '#999999',       // Muted text
        white: '#ffffff',       // White for contrast
      },
    },
  },
  plugins: [],
};


