
/** @type {import('tailwindcss').Config} */

import daisyui from "daisyui";
('tailwindcss-animated')
import tailwindcss_animated from "tailwindcss-animated";


export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "black-custom": "#333333",
        "white-custom": "#fcfcfc",
      },
      fontFamily: {
        'sans': ['Open Sans', 'sans-serif'],
        'agrandir': ['Agrandir_WideBlack_Italic', 'sans-serif'],
        'code_pro': ['Code_Pro'],
        'opens_sans_bold': ['Opens_Sans_Bold'],
      }
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#358eef",

          "secondary": "#faba0b",

          "accent": "#a9c7f8",

          "neutral": "#2a1716",

          "base-100": "#22291f",

          "info": "#0098ee",

          "success": "#4d8900",

          "warning": "#c48800",

          "error": "#ff5d78",
        },
      }
    ],
  },
  plugins: [
    daisyui,
    tailwindcss_animated
  ],
}


