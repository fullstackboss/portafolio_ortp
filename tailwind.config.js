/** @type {import('tailwindcss').Config} */
export default {
  //activamos el modo dark para las etiquetas
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      //fuente personalizada
      fontFamily: {
        custom: ["helvetica"], // Añade tu fuente aquí
      },
      maxWidth: {
        custom: "1320px",
      },
      colors: {
        primario_bn: {
          light: "#ffffff",
          dark: "#009900",
        },
        primario: {
          light: "#bd1714",
          dark: "#000099",
        },
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    darkTheme: "dark", // name of one of the included themes for dark mode
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
    themeRoot: ":root",
    // The element that receives theme color CSS variables
    themes: [
      {
        light: {
          primary: "#bd1714",
          secondary: "#9333ea",
          accent: "#eab308",
          neutral: "#3d4451",
          "base-100": "#ffffff",
          "base-200": "#002200",
          "base-300": "#344565",
          info: "#3b82f6",
          success: "#16a34a",
          warning: "#f59e0b",
          error: "#ef4444",
        },
      },
      {
        dark: {
          primary: "#990099",
          secondary: "#909909",
          accent: "#09ff00",
          neutral: "#1f2937",
          "base-100": "#000000",
          "base-200": "#009900",
          "base-300": "#990000",
          info: "#60a5fa",
          success: "#22c55e",
          warning: "#fbbf24",
          error: "#f87171",
        },
      },
    ],
  },
};
