/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Smoke / charcoal base
        smoke: {
          950: "#140d0a",
          900: "#1a1310",
          800: "#241a15",
          700: "#33251d",
          600: "#473428",
        },
        // Ember red — the appetizing primary
        ember: {
          DEFAULT: "#DC2626",
          light: "#F87171",
          dark: "#991B1B",
        },
        // Warm gold — CTAs & accents
        gold: {
          DEFAULT: "#CA8A04",
          light: "#EAB308",
          dark: "#A16207",
        },
        cream: "#FBF3E8",
        bark: "#7c5031",
      },
      fontFamily: {
        display: ['"Playfair Display"', "serif"],
        heading: ['"Oswald"', "sans-serif"],
        body: ['"Karla"', "sans-serif"],
      },
      // Enables numeric weight utilities like font-500 / font-700 / font-800
      fontWeight: {
        300: "300",
        400: "400",
        500: "500",
        600: "600",
        700: "700",
        800: "800",
        900: "900",
      },
      backgroundImage: {
        "smoke-gradient":
          "radial-gradient(ellipse at top, #33251d 0%, #1a1310 45%, #140d0a 100%)",
        "ember-gradient": "linear-gradient(135deg, #DC2626 0%, #CA8A04 100%)",
      },
      keyframes: {
        flicker: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.85" },
        },
        "smoke-rise": {
          "0%": { transform: "translateY(0) scale(1)", opacity: "0" },
          "20%": { opacity: "0.35" },
          "100%": { transform: "translateY(-120px) scale(1.6)", opacity: "0" },
        },
      },
      animation: {
        flicker: "flicker 3s ease-in-out infinite",
        "smoke-rise": "smoke-rise 8s linear infinite",
      },
    },
  },
  plugins: [],
};
