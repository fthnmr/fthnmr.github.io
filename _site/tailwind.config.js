/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./_includes/**/*.html",
    "./_layouts/**/*.html",
    "./_posts/**/*.md",
    "./*.html",
    "./*.md"
  ],
  safelist: [
    'bg-green-600',
    'bg-red-600', // ensures your “Open Now / Closed Now” highlight is always included
  ],
  theme: {
    extend: {
      colors: {
        'neutral-950': '#09090b', // matches your custom dark background
        'neutral-100': '#f4f4f5', // matches your custom light text
      },
    },
  },
  darkMode: 'class', // enables your html:not(.dark) rules
  plugins: [],
}