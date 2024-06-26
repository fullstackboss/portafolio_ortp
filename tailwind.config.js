/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      maxWidth: {
        custom: "1280px",
      },
      colors: {
        "neo-fondo": {
          light: "#bd1714",
          dark: "#2c2c2b",
        },
      },
      fontFamily: {
        custom: ["helvetica"], // Añade tu fuente aquí
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          primary: "#e0e0e0",
          secondary: "#9333ea",
          accent: "#eab308",
          neutral: "#3d4451",
          "base-100": "#e0e0e0",
          info: "#3b82f6",
          success: "#16a34a",
          warning: "#f59e0b",
          error: "#ef4444",
        },
      },
      {
        dark: {
          primary: "#2c2c2b",
          secondary: "#7c3aed",
          accent: "#ca8a04",
          neutral: "#1f2937",
          "base-100": "#151517",
          info: "#60a5fa",
          success: "#22c55e",
          warning: "#fbbf24",
          error: "#f87171",
        },
      },
    ], // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"]
    darkTheme: "light", // name of one of the included themes for dark mode
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
    themeRoot: ":root", // The element that receives theme color CSS variables
  },
};
