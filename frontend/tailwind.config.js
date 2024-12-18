import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],

  theme: {
    extend: {}
  },

  plugins: [
    require('daisyui'),
    typography
  ],

  daisyui: {
    themes: ["light", "dark", "cupcake", "synthwave"],
  }

};
