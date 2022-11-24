/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        "dark-theme-background": "#232424",
        "dark-theme-surface": "#2A2B2A",
        "dark-theme-on-surface": "#373737",
        "dark-theme-primary": "#D5BD1E",
        "dark-theme-secondary": "#3468B5",
        "dark-theme-text-background": "#CCD0CD",
        "dark-theme-text-surface": "#D7DBD8",
      }
    },
  },
  plugins: [],
}
