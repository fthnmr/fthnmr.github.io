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
    'bg-red-600',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}