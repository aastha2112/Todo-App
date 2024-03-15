/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      colors: {
        "regal-blue": "#243c5a",
        "login-border": "#111111",
        "input-border": "rgba(102, 102, 102, 0.35)",
        disabled: "rgba(102, 102, 102, 0.25)",
      },
      screens: {
        mobile: {
          max: "480px",
          min: "0px",
        },
      },
    },
  },
  plugins: [],
};
