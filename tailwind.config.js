/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["*.{html,js}", "node_modules/preline/dist/*.js"],
  theme: {
    extend: {
      fontFamily: {
        brand: ["Figtree", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      animation: {
        text: "text 5s ease infinite",
        rotate: "rotate 3s linear infinite",
        float1: "float1 10s ease-in-out infinite",
        float2: "float2 12s ease-in-out infinite",
        marquee: "marquee 30s linear infinite",
        "pulse-ring": "pulse-ring 2s ease-out infinite",
        shimmer: "shimmer 2.5s linear infinite",
      },
      keyframes: {
        text: {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },
        rotate: {
          "0%": { transform: "rotate(0deg) scale(10)" },
          "100%": { transform: "rotate(-360deg) scale(10)" },
        },
        float1: {
          "0%, 100%": { transform: "translate(0, 0)" },
          "50%": { transform: "translate(30px, -30px)" },
        },
        float2: {
          "0%, 100%": { transform: "translate(0, 0)" },
          "50%": { transform: "translate(-20px, -20px)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "pulse-ring": {
          "0%": { transform: "scale(0.8)", opacity: "1" },
          "100%": { transform: "scale(2.2)", opacity: "0" },
        },
        shimmer: {
          "0%": { "background-position": "-200% center" },
          "100%": { "background-position": "200% center" },
        },
      },
      colors: {
        accent: {
          violet: "#8b5cf6",
          cyan: "#22d3ee",
          amber: "#f59e0b",
          green: "#10b981",
        },
      },
    },
  },
  plugins: [require("preline/plugin")],
};
