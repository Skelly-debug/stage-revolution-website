/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      keyframes: {
        "dropdown-enter": {
          "0%": {
            opacity: "0",
            transform: "scaleY(0.8)",
          },
          "100%": {
            opacity: "1",
            transform: "scaleY(1)",
          },
        },
        "dropdown-exit": {
          "0%": {
            opacity: "1",
            transform: "scaleY(1)",
          },
          "100%": {
            opacity: "0",
            transform: "scaleY(1)",
          },
        },
        "menu-item-enter": {
          "0%": {
            opacity: "0",
            transform: "translateX(-20px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
        "rotate-in": {
          "0%": {
            transform: "rotate(-180deg)",
            opacity: "0",
          },
          "100%": {
            transform: "rotate(0deg)",
            opacity: "1",
          },
        },
      },
      animation: {
        "dropdown-enter": "dropdown-enter 0.3s ease-out forwards",
        "dropdown-exit": "dropdown-exit 0.3s ease-out forwards",
        "menu-item-enter": "menu-item-enter 0.3s ease-out forwards",
        "rotate-in": "rotate-in 0.3s ease-out",
      },
    },
  },
  variants: {},
  plugins: [],
};
