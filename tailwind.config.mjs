import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
	extend: {
	fontFamily: {
		parkinsans: ['parkinsans', ...defaultTheme.fontFamily.sans],
	  },
    fontWeight: {
      light: 300,
      regular: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
    },
	},
  },
  plugins: [
    require("daisyui"),
  ],
};
