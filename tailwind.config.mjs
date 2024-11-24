import { fontFamily } from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      sans: ["JetBrains Mono", "sans-serif", ...fontFamily.sans],
    },
    colors: {
      inherit: "inherit",
      transparent: "transparent",
      current: "currentColor",
      black: "rgb(0 0 0)",
      white: "rgb(255 255 255)",
    },
  },
};
