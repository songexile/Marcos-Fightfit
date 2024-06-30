/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        cmyk: {
          ...require("daisyui/src/theming/themes")["forest"],
          primary: "#E31B1E",
          secondary: "#ECBD44",
        },
      },
    ],
  },
  plugins: [require("tailwindcss-fluid-type"), require("daisyui")],
};
