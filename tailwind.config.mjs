/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#162f16',
          200: '#0c6980',
          300: '#00a8a8',
          400: '#b1e0e4',
        }
      }
    },
  },
  plugins: [],
};
