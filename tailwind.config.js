/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    screens: {
      ...defaultTheme.screens,
      mlg: "1300px",
    },
    extend: {
      backgroundColor: {
        primary: "var(--bg-primary)",
        secondary: "var(--bg-secondary)",
        button: "var(--bg-button)",
      },
      textColor: {
        accent: "var(--accent)",
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        btnText: "var(--bg-secondary)",
      },
      borderColor: {
        primary: "var(--bg-primary)",
        secondary: "var(--bg-secondary)",
        input: "var(--bg-input)",
        accent: "var(--accent)",
      },
    },
  },
  plugins: [],
};
