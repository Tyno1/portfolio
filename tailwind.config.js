/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dawn: "rgb(158, 158, 158)",
      },
    },
  },
  plugins: [],
};
