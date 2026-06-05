/** @type {import('tailwindcss').Config} */

const { heroui } = require("@heroui/react");

module.exports = {
  content: [
    "./pages/**/*.{js,jsx,mdx}",
    "./components/**/*.{js,jsx,mdx}",
    "./app/**/*.{js,jsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,jsx}",
  ],

  theme: {
    extend: {
      fontFamily: {
        display: ["Syne", "sans-serif"],
        body: ["DM Sans", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },

      colors: {
        brand: {
          orange: "#FF6B1A",
          "orange-light": "#FF8C42",
          "orange-dark": "#CC4E00",

          cyan: "#00D4FF",
          "cyan-dim": "#00A8CC",
          "cyan-glow": "#0FF",
        },

        dark: {
          base: "#030303",
          900: "#080808",
          800: "#0D0D0D",
          700: "#111111",
          600: "#161616",
          500: "#1E1E1E",
          400: "#242424",
        },
      },

      backgroundImage: {
        "gradient-radial":
          "radial-gradient(var(--tw-gradient-stops))",

        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",

        "orange-glow":
          "radial-gradient(ellipse at center, rgba(255,107,26,0.15) 0%, transparent 70%)",

        "cyan-glow":
          "radial-gradient(ellipse at center, rgba(0,212,255,0.12) 0%, transparent 70%)",
      },

      animation: {
        float: "float 6s ease-in-out infinite",

        "float-delayed":
          "float 6s ease-in-out 2s infinite",

        "spin-slow":
          "spin 20s linear infinite",

        "pulse-slow":
          "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",

        "gradient-x":
          "gradient-x 8s ease infinite",

        "border-glow":
          "border-glow 2s ease-in-out infinite",
      },

      keyframes: {
        float: {
          "0%, 100%": {
            transform: "translateY(0px)",
          },

          "50%": {
            transform: "translateY(-20px)",
          },
        },

        "gradient-x": {
          "0%, 100%": {
            backgroundSize: "200% 200%",
            backgroundPosition: "left center",
          },

          "50%": {
            backgroundSize: "200% 200%",
            backgroundPosition: "right center",
          },
        },

        "border-glow": {
          "0%, 100%": {
            opacity: "1",
          },

          "50%": {
            opacity: "0.5",
          },
        },
      },

      boxShadow: {
        "orange-glow":
          "0 0 30px rgba(255,107,26,0.3)",

        "orange-glow-lg":
          "0 0 60px rgba(255,107,26,0.4)",

        "cyan-glow":
          "0 0 30px rgba(0,212,255,0.3)",

        "cyan-glow-lg":
          "0 0 60px rgba(0,212,255,0.4)",

        glass:
          "0 8px 32px 0 rgba(0,0,0,0.5)",

        "glass-lg":
          "0 25px 50px rgba(0,0,0,0.6)",
      },
    },
  },

  darkMode: "class",

  plugins: [heroui()],
};