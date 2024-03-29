/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#f6eb14",

          "secondary": "#00a9bd",

          "accent": "#00b8ff",

          "neutral": "#000e0f",

          "base-100": "#fffff8",

          "info": "#00daff",

          "success": "#62e164",

          "warning": "#e09900",

          "error": "#ff8184",
        },
      },
    ],
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}

